import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// ── Clientes ─────────────────────────────────────────────────────────────────

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ── Configuración ─────────────────────────────────────────────────────────────

const MATCH_THRESHOLD = 0.65;
const MATCH_COUNT = 3;
const GEMINI_GENERATE_MODEL = 'gemini-3.1-flash-lite';

const SYSTEM_PROMPT = `Sos el asistente virtual de LAR Materiales de Construcción. Tu nombre es "Asistente LAR".

Tu objetivo es ayudar a los clientes con información sobre productos, sucursales, horarios, marcas y asesoramiento para la construcción.

Instrucciones:

- Respondé siempre en español argentino.
- Tono amable, directo y cercano. Sin formalismos innecesarios.
- Respondé únicamente lo que se te pregunta. No agregues información que no fue solicitada.
- No repitas datos de la empresa (historia, trayectoria, valores) salvo que te los pregunten.
- No des listas de contacto al final de cada respuesta. Solo incluí los datos de contacto cuando el cliente los necesite o no puedas resolver su consulta.
- Priorizá siempre la información del contexto provisto. Si no hay contexto suficiente, podés usar conocimientos generales de construcción, pero nunca inventes datos específicos de LAR.
- Nunca inventes precios, stock ni disponibilidad. Si preguntan por eso, indicá que varía y que consulten en la sucursal.
- Si necesitás más información para dar una buena respuesta, preguntá antes de recomendar.
- Cuando sea útil, sugerí productos complementarios de forma breve.
- Usá listas solo cuando haya tres o más ítems que realmente lo justifiquen.

Datos de contacto (usar solo cuando sea necesario):
• Capital (Dorrego): 3804 477691
• Chilecito: 3825 533887

No respondas consultas ajenas a LAR, la construcción o los productos comercializados.

Antes de recomendar un producto técnico, verificá que tengas la información necesaria. Si faltan datos, preguntá primero.`;

// ── Embedding ─────────────────────────────────────────────────────────────────

async function generateEmbedding(text: string): Promise<number[]> {
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-embedding-2:embedContent?key=${process.env.GEMINI_API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'models/gemini-embedding-2',
      content: { parts: [{ text }] },
      outputDimensionality: 768,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini embedding error ${res.status}: ${err}`);
  }
  const data = await res.json() as { embedding: { values: number[] } };
  return data.embedding.values;
}

// ── Generación ────────────────────────────────────────────────────────────────

type HistoryMessage = { role: 'user' | 'assistant'; content: string };

async function generateAnswer(userMessage: string, history: HistoryMessage[]): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_GENERATE_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`;

  // Gemini usa 'model' en lugar de 'assistant' para el rol del bot
  const contents = [
    ...history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    })),
    { role: 'user', parts: [{ text: userMessage }] },
  ];

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini generate error ${res.status}: ${err}`);
  }
  const data = await res.json() as {
    candidates: { content: { parts: { text: string }[] } }[];
  };
  return data.candidates[0].content.parts[0].text;
}

// ── Tipos ─────────────────────────────────────────────────────────────────────

type Chunk = {
  id: number;
  content: string;
  source: string;
  metadata: { category: string };
  similarity: number;
};

// ── Handler ───────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const body = await req.json() as { message?: string; history?: HistoryMessage[] };
  const message = body.message?.trim();
  const history = body.history ?? [];

  if (!message) {
    return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 });
  }

  console.log('[chat] query:', message);

  // 1. Generar embedding de la pregunta
  let queryEmbedding: number[];
  try {
    queryEmbedding = await generateEmbedding(message);
  } catch (err) {
    console.error('[chat] Error generando embedding:', err);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }

  // 2. Buscar chunks similares en Supabase
  const { data: chunks, error: rpcError } = await supabase.rpc('match_lar_chunks', {
    query_embedding: queryEmbedding,
    match_threshold: MATCH_THRESHOLD,
    match_count: MATCH_COUNT,
  });

  if (rpcError) {
    console.error('[chat] Error en match_lar_chunks:', rpcError.message);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }

  // 3. Armar el mensaje con contexto (si hay chunks) o sin contexto
  const typedChunks = (chunks ?? []) as Chunk[];
  console.log('[chat] chunks recuperados:', typedChunks.map(c => `${c.source} (${(c.similarity * 100).toFixed(0)}%)`));

  const userMessage = typedChunks.length > 0
    ? `Contexto disponible sobre LAR:\n\n${typedChunks.map(c => c.content).join('\n\n')}\n\nPregunta del cliente: ${message}`
    : `Pregunta del cliente: ${message}`;

  // 4. Llamar a Gemini para generar la respuesta
  let answer: string;
  try {
    answer = await generateAnswer(userMessage, history);
  } catch (err) {
    console.error('[chat] Error en Gemini generateContent:', err);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }

  // 5. Responder con la respuesta y las fuentes usadas
  return NextResponse.json({
    answer,
    sources: typedChunks.map(c => ({
      content: c.content,
      source: c.source,
      similarity: c.similarity,
    })),
  });
}
