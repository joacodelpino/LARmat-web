import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { readdir, readFile } from 'fs/promises';
import pdfParse from 'pdf-parse';

dotenv.config({ path: resolve(process.cwd(), '.env.local') });

// ── Clientes ────────────────────────────────────────────────────────────────

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ── Configuración de chunking ────────────────────────────────────────────────

const CHUNK_SIZE = 500;    // caracteres por chunk
const CHUNK_OVERLAP = 100; // solapamiento entre chunks
const PDF_DIR = resolve(process.cwd(), 'data/pdfs');

// ── Tipos ────────────────────────────────────────────────────────────────────

type Chunk = {
  content: string;
  source: string;
  metadata: { category: string };
};

// ── Chunks hardcodeados ──────────────────────────────────────────────────────

const HARDCODED_CHUNKS: Chunk[] = [
  {
    content: `LAR Materiales de Construcción es una empresa riojana con más de 40 años de trayectoria
dedicada a la comercialización de materiales para la construcción. Su objetivo es brindar
soluciones tanto para profesionales como para particulares, ofreciendo productos de calidad,
asesoramiento personalizado y stock permanente. Trabajan con primeras marcas y acompañan
cada proyecto desde sus cimientos hasta su terminación. Valores: confianza, calidad,
experiencia, compromiso, atención personalizada.`,
    source: '01_Empresa.md',
    metadata: { category: 'empresa' },
  },
  {
    content: `Sucursal LAR Capital - Dorrego. Dirección: Dorrego 199, La Rioja Capital.
Teléfono: 3804 477691. Horarios: Lunes a Viernes de 8:30 a 20hs y Sabados de 8:30 a 13hs`,
    source: '02_Sucursales.md',
    metadata: { category: 'sucursal' },
  },
  {
    content: `Sucursal LAR Capital - Parque Industrial. Dirección: Av. Matienzo S/N, La Rioja Capital. Horarios: Lunes a Viernes de 8:30 a 17hs y Sabados de 8:30 a 12:30hs`,
    source: '02_Sucursales.md',
    metadata: { category: 'sucursal' },
  },
  {
    content: `Sucursal LAR Chilecito. Dirección: La Plata 403, Chilecito, La Rioja.
Teléfono: 3825 533887. Horarios: Lunes a Viernes de 8:30 a 20:30hs y Sabados de 8:30 a 12:30hs`,
    source: '02_Sucursales.md',
    metadata: { category: 'sucursal' },
  },
  {
    content: `LAR comercializa una amplia variedad de materiales para la construcción, entre ellas:
cementos, cales, pegamentos, adhesivos, hierros, mallas, alambres, chapas,
construcción en seco, bolsones de arena, placas de yeso, perfiles, membranas, impermeabilizantes, pinturas (interiores, exteriores, esmaltes, con marcas como Colorin, Resol, Emapi, Petrilac),
revestimientos, cerámicos, porcelanatos, sanitarios, griferías, herramientas manuales,
herramientas eléctricas, aislaciones, techos, caños y accesorios.`,
    source: '03_Productos.md',
    metadata: { category: 'producto' },
  },
  {
    content: `LAR trabaja con numerosas marcas reconocidas, entre ellas: Colorín, Avellaneda, Klaukol, Emapi, Resol, Petrilac,
Misiones Deco, Durlock, PlacoSD, Sinteplast, Weber y Plavicon.`,
    source: '04_Marcas.md',
    metadata: { category: 'producto' },
  },
  {
    content: `Sobre envíos: consultar con la sucursal correspondiente. Sobre presupuestos: sí se pueden
solicitar comunicándose con cualquier sucursal. Sobre formas de pago con tarjeta: consultar
con la sucursal. Se puede comprar por WhatsApp comunicándose con la sucursal correspondiente.`,
    source: '05_Preguntas-frecuentes.md',
    metadata: { category: 'faq' },
  },
  {
    content: `LAR vende al por mayor, consultando condiciones con la sucursal. El stock cambia
constantemente, siempre hay que consultar disponibilidad antes de comprar. El personal
de LAR realiza asesoramiento para ayudar a elegir los materiales adecuados para cada proyecto.`,
    source: '05_Preguntas-frecuentes.md',
    metadata: { category: 'faq' },
  },
  {
    content: `Contacto LAR Materiales: sucursal Capital, teléfono 3804 477691. Sucursal Chilecito,
teléfono 3825 533887. Instagram: @larmateriales. Facebook: LAR Materiales de Construcción.`,
    source: '07_Contacto.md',
    metadata: { category: 'contacto' },
  },
  {
    content: `Cemento: se utiliza para elaborar hormigón y morteros.`,
    source: '09_Conocimiento_tecnico.md',
    metadata: { category: 'producto' },
  },
  {
    content: `Perfil C: se utiliza en construcción en seco como montante.`,
    source: '09_Conocimiento_tecnico.md',
    metadata: { category: 'producto' },
  },
  {
    content: `Perfil F: se utiliza como solera.`,
    source: '09_Conocimiento_tecnico.md',
    metadata: { category: 'producto' },
  },
  {
    content: `Membrana líquida: impermeabiliza techos y terrazas.`,
    source: '09_Conocimiento_tecnico.md',
    metadata: { category: 'producto' },
  },
  {
    content: `Membrana asfáltica: ideal para cubiertas con mayores exigencias.`,
    source: '09_Conocimiento_tecnico.md',
    metadata: { category: 'producto' },
  },
  {
    content: `Placas de yeso: se utilizan para tabiques y cielorrasos.`,
    source: '09_Conocimiento_tecnico.md',
    metadata: { category: 'producto' },
  },
  {
    content: `Lana de vidrio: se utiliza como aislación térmica y acústica.`,
    source: '09_Conocimiento_tecnico.md',
    metadata: { category: 'producto' },
  },
  {
    content: `Pegamento Klaukol: adhesivo cementicio para cerámicos y porcelanatos.`,
    source: '09_Conocimiento_tecnico.md',
    metadata: { category: 'producto' },
  },
];

// ── Chunking con overlap ─────────────────────────────────────────────────────

function splitWithOverlap(text: string, chunkSize: number, overlap: number): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    const end = start + chunkSize;
    chunks.push(text.slice(start, end).trim());
    start += chunkSize - overlap;
  }

  return chunks.filter((c) => c.length > 50); // descartar fragmentos demasiado cortos
}

// ── Extracción de PDFs ───────────────────────────────────────────────────────

async function extractChunksFromPdf(filePath: string, fileName: string): Promise<Chunk[]> {
  const buffer = await readFile(filePath);
  const { text } = await pdfParse(buffer);

  // Normalizar espacios y saltos de línea excesivos
  const cleanText = text.replace(/\n{3,}/g, '\n\n').replace(/ {2,}/g, ' ').trim();

  const fragments = splitWithOverlap(cleanText, CHUNK_SIZE, CHUNK_OVERLAP);

  return fragments.map((content) => ({
    content,
    source: fileName,
    metadata: { category: 'pdf_import' },
  }));
}

// ── Embedding ────────────────────────────────────────────────────────────────

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
    throw new Error(`Gemini API error ${res.status}: ${err}`);
  }
  const data = await res.json() as { embedding: { values: number[] } };
  return data.embedding.values;
}

// ── Ingesta de un conjunto de chunks ─────────────────────────────────────────

async function ingestChunks(chunks: Chunk[], label: string): Promise<void> {
  // Borrar solo los chunks cuyo source coincida con los del conjunto actual
  const sources = [...new Set(chunks.map((c) => c.source))];
  for (const source of sources) {
    const { error } = await supabase.from('lar_chunks').delete().eq('source', source);
    if (error) throw new Error(`Error borrando chunks de "${source}": ${error.message}`);
  }

  console.log(`\n[${label}] Insertando ${chunks.length} chunks...`);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const preview = chunk.content.slice(0, 60).replace(/\n/g, ' ');
    const embedding = await generateEmbedding(chunk.content);

    const { error } = await supabase.from('lar_chunks').insert({
      content: chunk.content,
      embedding,
      source: chunk.source,
      metadata: chunk.metadata,
    });

    if (error) throw new Error(`Error insertando chunk: ${error.message}`);
    console.log(`  [${i + 1}/${chunks.length}] ${chunk.source} — ${preview}...`);
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function ingest() {
  console.log('=== Inicio de ingesta ===\n');

  // 1. Chunks hardcodeados
  await ingestChunks(HARDCODED_CHUNKS, 'hardcoded');
  console.log(`OK ${HARDCODED_CHUNKS.length} chunks hardcodeados insertados.`);

  // 2. PDFs
  let pdfFiles: string[] = [];
  try {
    const entries = await readdir(PDF_DIR);
    pdfFiles = entries.filter((f) => f.toLowerCase().endsWith('.pdf'));
  } catch {
    console.log('\nCarpeta data/pdfs no encontrada o vacía — se omite ingesta de PDFs.');
  }

  let totalPdfChunks = 0;

  for (const fileName of pdfFiles) {
    const filePath = resolve(PDF_DIR, fileName);
    console.log(`\nProcesando PDF: ${fileName}`);

    const chunks = await extractChunksFromPdf(filePath, fileName);
    console.log(`  → ${chunks.length} chunks generados`);

    await ingestChunks(chunks, fileName);
    totalPdfChunks += chunks.length;

    console.log(`OK ${fileName} — ${chunks.length} chunks insertados.`);
  }

  // 3. Resumen final
  const { count } = await supabase
    .from('lar_chunks')
    .select('*', { count: 'exact', head: true });

  console.log('\n=== Resumen ===');
  console.log(`PDFs procesados:       ${pdfFiles.length}`);
  console.log(`Chunks de PDFs:        ${totalPdfChunks}`);
  console.log(`Chunks hardcodeados:   ${HARDCODED_CHUNKS.length}`);
  console.log(`Total en lar_chunks:   ${count}`);
}

ingest().catch((err) => {
  console.error('Error fatal en ingesta:', err);
  process.exit(1);
});
