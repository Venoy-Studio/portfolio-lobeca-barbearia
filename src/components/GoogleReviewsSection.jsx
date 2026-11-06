import React from 'react';
import { Star, CheckCircle2, MessageSquare, ThumbsUp } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function GoogleReviewsSection() {
  return (
    <section id="avaliacoes" className="py-24 bg-[#090a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1f242d]">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-500 font-semibold">
              Prova Social Verificável
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#f3f0e8] tracking-tight mt-2">
              4.9 Estrelas no Google <br />
              <span className="text-zinc-400">O que nossos clientes dizem</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-4 bg-[#14161c] border border-[#242934] p-4 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl text-white">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-zinc-400 font-mono">
                Baseado em {BARBERSHOP_DATA.googleReviewsCount} avaliações reais
              </span>
            </div>
          </div>
        </div>

        {/* 4 Reviews Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BARBERSHOP_DATA.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#121419] border border-[#212631] hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-12 h-12 rounded-full object-cover border border-zinc-700"
                    />
                    <div>
                      <h4 className="font-display font-bold text-base text-white flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        <CheckCircle2 size={14} className="text-emerald-400" />
                      </h4>
                      <span className="text-xs text-zinc-500 font-mono">{rev.date} • Google Review</span>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-[#9ca3af] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1c202a] mt-6 flex items-center justify-between text-xs text-zinc-500">
                <span className="flex items-center gap-1 text-emerald-400/90 font-medium">
                  <CheckCircle2 size={12} />
                  Cliente Frequente Verificado
                </span>
                <span className="font-mono">Apucarana - PR</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
