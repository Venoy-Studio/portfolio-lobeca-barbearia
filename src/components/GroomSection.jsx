import React from 'react';
import { Heart, Sparkles, Check, Phone, Wine, Camera, Clock, Shield } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function GroomSection() {
  return (
    <section id="dia-do-noivo" className="py-24 bg-[#090a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Asymmetrical Hero Split: 7 Cols copy & packages / 5 cols video & photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: 7 Cols */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono uppercase tracking-widest mb-4">
              <Heart size={12} className="fill-current" />
              <span>Experiência Inesquecível</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#f3f0e8] tracking-tight leading-tight mb-6">
              O Dia do Noivo na Lobeca. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 italic">
                Sua melhor versão no grande dia.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#9da5b4] leading-relaxed mb-8">
              O dia do seu casamento merece um ritual à altura. Preparamos nossa sala VIP 
              para você e seus padrinhos brindarem, relaxarem com massagem e toalha quente, 
              jogarem no fliperama e saírem impecáveis direto para o altar.
            </p>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-3.5 rounded-xl bg-[#121418] border border-[#20252e]">
                <Wine size={18} className="text-amber-400 mb-1" />
                <h4 className="text-xs font-bold text-white">Brinde & Open Bar</h4>
                <p className="text-[11px] text-zinc-400">Espumante e chopp artesanal</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121418] border border-[#20252e]">
                <Camera size={18} className="text-amber-400 mb-1" />
                <h4 className="text-xs font-bold text-white">Making Of VIP</h4>
                <p className="text-[11px] text-zinc-400">Cenário para seus fotógrafos</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121418] border border-[#20252e]">
                <Clock size={18} className="text-amber-400 mb-1" />
                <h4 className="text-xs font-bold text-white">Pontualidade Total</h4>
                <p className="text-[11px] text-zinc-400">Sem estresse ou atrasos</p>
              </div>
            </div>

            <a
              href={`https://wa.me/${BARBERSHOP_DATA.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20de%20data%20e%20valores%20para%20o%20Dia%20do%20Noivo.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 text-sm transition-all"
            >
              <Phone size={16} />
              <span>Consultar Datas & Orçamento no WhatsApp</span>
            </a>
          </div>

          {/* Right: 5 Cols Video Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#282d38] shadow-2xl bg-[#121418]">
              <div className="aspect-[9/14] w-full relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/noivo-poster.webp"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/noivo-reel.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[11px] uppercase font-mono tracking-wider text-amber-400 font-bold block mb-1">
                    Sala Exclusiva dos Noivos
                  </span>
                  <p className="text-white font-display font-bold text-lg leading-tight">
                    Um ambiente calmo e sofisticado para você respirar e comemorar antes do 'sim'.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Groom Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {BARBERSHOP_DATA.groomPackages.map((pkg) => {
            const isHighlight = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`p-7 rounded-3xl border flex flex-col justify-between transition-all ${
                  isHighlight
                    ? 'bg-gradient-to-b from-[#1b1e27] to-[#12141a] border-amber-500 shadow-xl shadow-amber-500/10'
                    : 'bg-[#121418] border-[#222731]'
                }`}
              >
                <div>
                  {pkg.badge && (
                    <span className="inline-block bg-amber-500 text-black text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full mb-3">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-amber-400 font-display font-extrabold text-xl mb-4">
                    {pkg.price}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${BARBERSHOP_DATA.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20${encodeURIComponent(pkg.name)}%20para%20o%20Dia%20do%20Noivo.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase font-mono tracking-wider text-center transition-colors ${
                    isHighlight
                      ? 'bg-amber-500 hover:bg-amber-400 text-black'
                      : 'bg-[#1c1f27] hover:bg-[#252934] text-white border border-[#2c3240]'
                  }`}
                >
                  Personalizar Pacote
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
