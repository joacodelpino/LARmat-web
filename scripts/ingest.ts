import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(process.cwd(), '.env.local') });

// ── Clientes ────────────────────────────────────────────────────────────────

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ── Chunks hardcodeados para demo ───────────────────────────────────────────

type Chunk = {
  content: string;
  source: string;
  metadata: { category: string };
};

const CHUNKS: Chunk[] = [
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

// ── Ingestion ────────────────────────────────────────────────────────────────

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

async function ingest() {
  console.log('Borrando chunks existentes...');
  const { error: deleteError } = await supabase.from('lar_chunks').delete().neq('id', 0);
  if (deleteError) {
    console.error('Error al borrar:', deleteError.message);
    process.exit(1);
  }
  console.log('Tabla limpia\n');

  console.log(`Ingiriendo ${CHUNKS.length} chunks...\n`);

  for (let i = 0; i < CHUNKS.length; i++) {
    const chunk = CHUNKS[i];
    const label = `[${i + 1}/${CHUNKS.length}] ${chunk.source} — ${chunk.content.slice(0, 60).replace(/\n/g, ' ')}...`;

    try {
      const embedding = await generateEmbedding(chunk.content);

      const { error: insertError } = await supabase.from('lar_chunks').insert({
        content: chunk.content,
        embedding,
        source: chunk.source,
        metadata: chunk.metadata,
      });

      if (insertError) throw new Error(insertError.message);

      console.log(`OK ${label}`);
    } catch (err) {
      console.error(`ERROR ${label}`);
      console.error(err);
      process.exit(1);
    }
  }

  console.log(`\nIngestion completa. ${CHUNKS.length} chunks insertados.`);
}

ingest();
