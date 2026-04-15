import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/faq';
import Reveal from './Reveal';

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
          {FAQS.map((faq, i) => (
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
