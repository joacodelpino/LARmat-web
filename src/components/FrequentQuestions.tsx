import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    question: '¿Hacen envíos a domicilio?',
    answer:
      'Sí, realizamos envíos sin cargo a toda la provincia de La Rioja. Podés coordinar la entrega directamente con cualquiera de nuestras sucursales.',
  },
  {
    question: '¿Qué productos venden?',
    answer:
      'Contamos con un amplio stock permanente de ladrillos, cemento, cerámicos, hierros, revestimientos, pinturas, yeso y materiales en general para la construcción. Si buscás algo específico, consultanos y lo conseguimos.',
  },
  {
    question: '¿Dónde están ubicados?',
    answer:
      'Tenemos tres sucursales: dos en la capital de La Rioja (Dorrego 199 esq. Vélez Sarsfield y Av. Matienzo frente a Club Andino) y una en Chilecito (La Plata 403). Podés ver todas las ubicaciones en la sección Sucursales.',
  },
  {
    question: '¿Cómo pido un presupuesto?',
    answer:
      'Podés escribirnos por WhatsApp o llamarnos directamente. Te respondemos en menos de una hora con un presupuesto sin compromiso adaptado a tu proyecto.',
  },
  {
    question: '¿Ofrecen asesoramiento?',
    answer:
      'Sí, contamos con personal capacitado para orientarte en la elección de materiales según tu obra, presupuesto y necesidades. El asesoramiento es completamente gratuito.',
  },
  {
    question: '¿Cuántos años lleva la empresa en el rubro?',
    answer:
      'Somos una empresa familiar con más de 40 años de trayectoria en La Rioja. Hemos acompañado a constructores, arquitectos y familias en miles de proyectos a lo largo de las décadas.',
  },
];

export default function FrequentQuestions() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section id="preguntas-frecuentes" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Dudas comunes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mt-2">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Respondemos las consultas que más nos hacen. Si tu duda no está acá, escribinos sin problema.
          </p>
        </Reveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-secondary font-bold text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary transition-colors duration-200">
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-500 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
