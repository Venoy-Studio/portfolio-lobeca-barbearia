import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-24 bg-[#0c0d11] border-t border-[#1d222b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle size={13} />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#f3f0e8] tracking-tight mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-[#8e95a2] text-sm sm:text-base">
            Tudo o que você precisa saber sobre agendamentos, planos de assinatura e o funcionamento da barbearia.
          </p>
        </div>

        <div className="space-y-4">
          {BARBERSHOP_DATA.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#232834] bg-[#121419] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-amber-400 transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform shrink-0 ${isOpen ? 'rotate-180 text-amber-400' : 'text-zinc-500'}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#9da5b5] leading-relaxed border-t border-[#1c202a] pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
