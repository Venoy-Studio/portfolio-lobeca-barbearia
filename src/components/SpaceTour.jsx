import React, { useState } from 'react';
import { Camera, Play, Sparkles, MapPin } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function SpaceTour() {
  const [activeTab, setActiveTab] = useState(0);
  const currentItem = BARBERSHOP_DATA.spaceTour[activeTab];

  return (
    <section id="espaco" className="py-24 bg-[#0d0e12] border-t border-[#1e232d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-500 font-semibold">
              Tour Virtual Pela Casa
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#f3f0e8] tracking-tight mt-2">
              Conheça Nosso Espaço
            </h2>
          </div>
          <p className="text-sm text-[#8e95a2] max-w-md mt-4 md:mt-0 flex items-center gap-2">
            <MapPin size={16} className="text-amber-500 shrink-0" />
            <span>Rua Osório Ribas de Paula, 1717 • Centro de Apucarana - PR</span>
          </p>
        </div>

        {/* Chapter Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {BARBERSHOP_DATA.spaceTour.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`p-3.5 rounded-2xl text-left border transition-all ${
                  isActive
                    ? 'bg-[#1a1d26] border-amber-500 text-white shadow-lg shadow-amber-500/10'
                    : 'bg-[#121418] border-[#222731] text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-amber-400' : 'text-zinc-500'}`}>
                    CAPÍTULO {item.step}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />}
                </div>
                <h4 className="text-xs sm:text-sm font-bold truncate">
                  {item.title.split('&')[0]}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Main Display Stage */}
        <div className="relative rounded-3xl overflow-hidden border border-[#2b303b] bg-[#121418] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Visual Media (8 Cols) */}
            <div className="lg:col-span-8 relative bg-black flex items-center justify-center overflow-hidden">
              {currentItem.video ? (
                <video
                  key={currentItem.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={currentItem.image}
                  className="w-full h-full object-cover max-h-[520px]"
                >
                  <source src={currentItem.video} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover max-h-[520px]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content & Details (4 Cols) */}
            <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-[#14171d]">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                  0{activeTab + 1} • {currentItem.step} / 05
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 leading-tight">
                  {currentItem.title}
                </h3>
                <p className="text-sm sm:text-base text-[#959dae] leading-relaxed">
                  {currentItem.description}
                </p>
              </div>

              <div className="pt-8 border-t border-[#232733] mt-8 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  Ambiente Climatizado • Wi-Fi 500MB
                </span>
                <a
                  href={`https://wa.me/${BARBERSHOP_DATA.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20se%20tem%20hor%C3%A1rio%20livre%20para%20hoje.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 underline"
                >
                  Visitar hoje →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
