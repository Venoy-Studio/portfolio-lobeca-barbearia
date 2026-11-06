import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, HelpCircle, Phone } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function SubscriptionClub() {
  const [filter, setFilter] = useState('todos');
  const [expandedPlan, setExpandedPlan] = useState(null);

  const filters = [
    { id: 'todos', label: 'Todos os 12 Planos' },
    { id: 'populares', label: '★ Mais Procurados' },
    { id: 'combos', label: 'Corte + Barba' },
    { id: 'corte', label: 'Apenas Corte' },
    { id: 'barba', label: 'Apenas Barba' },
    { id: 'empresarial', label: 'Corporativo / CNPJ' },
  ];

  const filteredPlans = BARBERSHOP_DATA.plans.filter((p) => {
    if (filter === 'todos') return true;
    if (filter === 'populares') return p.isPopular || p.id === 'corte-e-barba-vip' || p.id === 'corte-vip';
    if (filter === 'combos') return p.category === 'combos';
    if (filter === 'corte') return p.category === 'corte';
    if (filter === 'barba') return p.category === 'barba';
    if (filter === 'empresarial') return p.category === 'empresarial';
    return true;
  });

  return (
    <section id="assinaturas" className="py-24 bg-[#0c0d11] border-t border-[#1d222b] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles size={13} />
            <span>Clube de Assinantes Lobeca</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#f3f0e8] tracking-tight mb-4">
            Corte na Régua o Mês Inteiro. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Economia Real e Sem Burocracia.
            </span>
          </h2>

          <p className="text-[#8e95a2] text-sm sm:text-base leading-relaxed">
            Mais de 450 homens em Apucarana já fazem parte do nosso clube. 
            Todos os planos têm vigência indeterminada, sem fidelidade abusiva e com atendimento prioritário.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === f.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-[#15171e] text-zinc-400 hover:text-white border border-[#242935]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan) => {
            const isHighlight = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 flex flex-col justify-between border transition-all duration-300 relative ${
                  isHighlight
                    ? 'bg-gradient-to-b from-[#1a1d26] to-[#12141a] border-amber-500 shadow-2xl shadow-amber-500/15 scale-[1.02]'
                    : 'bg-[#121419] border-[#222733] hover:border-zinc-700'
                }`}
              >
                {/* Badge if Popular */}
                {plan.badge && (
                  <span className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[11px] font-mono font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                      {plan.days || 'Sem restrição de dias'}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-white mb-3">
                    {plan.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8e95a2] leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1.5 pb-6 border-b border-[#202532] mb-6">
                    <span className="text-xs text-zinc-400 font-mono">R$</span>
                    <span className="font-display font-black text-4xl text-white tracking-tight">
                      {plan.price.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">/ mês</span>
                  </div>

                  {/* Feature checklist */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${BARBERSHOP_DATA.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20assinar%20o%20plano%20${encodeURIComponent(plan.name)}%20(R$%20${plan.price.toFixed(2)}/m%C3%AAs).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      isHighlight
                        ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/30'
                        : 'bg-[#1b1e26] hover:bg-[#252934] text-white border border-[#2e3442]'
                    }`}
                  >
                    <Phone size={15} />
                    <span>Assinar pelo WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Guarantee */}
        <div className="mt-14 p-6 rounded-2xl bg-[#14161c] border border-[#242934] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">
                Fidelidade Zero & Transparência Total
              </h4>
              <p className="text-xs text-zinc-400">
                Cancele ou troque de plano a qualquer momento pelo WhatsApp, sem multas ou pegadinhas.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${BARBERSHOP_DATA.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20as%20assinaturas%20da%20Lobeca.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase font-mono tracking-wider text-amber-400 hover:text-amber-300 font-bold underline shrink-0"
          >
            Falar com consultor de planos →
          </a>
        </div>
      </div>
    </section>
  );
}
