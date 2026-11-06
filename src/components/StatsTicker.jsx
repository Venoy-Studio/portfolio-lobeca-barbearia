import React from 'react';
import { Scissors, Award, Users, Sparkles, Check, Coffee } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function StatsTicker() {
  const stats = [
    {
      value: `${BARBERSHOP_DATA.yearsActive} Anos`,
      label: 'De história em Apucarana',
      icon: Award,
    },
    {
      value: `${BARBERSHOP_DATA.subscribersCount}+`,
      label: 'Membros assinantes ativos',
      icon: Users,
    },
    {
      value: '12',
      label: 'Planos mensais flexíveis',
      icon: Sparkles,
    },
    {
      value: '14',
      label: 'Serviços especializados',
      icon: Scissors,
    },
  ];

  const tickerItems = [
    'Profissionalismo',
    'Qualidade',
    'Estilo',
    'Toalha Quente',
    'Cerveja Artesanal Gelada',
    'Café Gourmet Moído na Hora',
    'Pontualidade Britânica',
    'Dia do Noivo VIP',
    'Clube de Assinaturas',
  ];

  return (
    <div className="bg-[#0f1115] border-y border-[#20252e]">
      {/* 4 Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start p-5 rounded-2xl bg-[#14161c] border border-[#232833] hover:border-amber-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                  {s.value}
                </span>
                <span className="text-xs sm:text-sm text-[#8e95a2] mt-1 font-medium">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="overflow-hidden py-4 bg-[#14171d] border-t border-[#20252e] relative select-none">
        <div className="flex w-max animate-marquee space-x-12">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center space-x-4 text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-400">
              <span className="text-amber-500">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
