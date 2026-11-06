import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = "Olá! Estava no site da Lobeca Barbershop e gostaria de agendar um horário ou tirar dúvidas.";
  const whatsappUrl = `https://wa.me/${BARBERSHOP_DATA.phoneRaw}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 font-sans pointer-events-auto">
      {/* Micro-Tooltip de Quebra de Objeção */}
      {showTooltip && (
        <div className="relative flex items-center gap-3 bg-[#121419]/95 text-neutral-100 text-xs py-2.5 px-4 rounded-2xl shadow-2xl border border-[#2b303b] backdrop-blur-md animate-fade-in max-w-[270px]">
          <div className="flex flex-col">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              Recepção Online Agora
            </span>
            <span className="text-neutral-300 text-[11px] leading-tight mt-0.5">
              Dúvidas ou agendamento rápido? Fale direto com a equipe.
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white transition-colors p-1"
            aria-label="Fechar aviso"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp da Lobeca Barbershop"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
      >
        <MessageCircle size={28} className="transition-transform group-hover:rotate-6" />
        
        {/* Pulsing indicator ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#090a0c]" />
        </span>
      </a>
    </div>
  );
}
