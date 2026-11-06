import React from 'react';
import { Scissors, MapPin, Phone, Heart, ArrowUp } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] text-[#8e95a2] border-t border-[#1b1f27] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#181b22]">
          {/* Brand Col: 2 Cols */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-black font-bold">
                <Scissors size={18} className="-rotate-45" />
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                LOBECA BARBERSHOP
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
              Barbearia em Apucarana há 11 anos. Cortes clássicos e modernos, barba terapia com toalha quente, 
              clube de assinaturas exclusivo e a melhor experiência para o Dia do Noivo.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BARBERSHOP_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#14161c] hover:bg-amber-500 hover:text-black text-zinc-300 flex items-center justify-center border border-[#232833] transition-colors"
                aria-label="Instagram da Lobeca"
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href={`https://wa.me/${BARBERSHOP_DATA.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#14161c] hover:bg-emerald-500 hover:text-white text-zinc-300 flex items-center justify-center border border-[#232833] transition-colors"
                aria-label="WhatsApp da Lobeca"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Links: Navegação */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider font-mono">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#servicos" className="hover:text-amber-400 transition-colors">Serviços da Carta</a></li>
              <li><a href="#assinaturas" className="hover:text-amber-400 transition-colors">Clube de Assinaturas</a></li>
              <li><a href="#dia-do-noivo" className="hover:text-amber-400 transition-colors">Dia do Noivo VIP</a></li>
              <li><a href="#espaco" className="hover:text-amber-400 transition-colors">Nosso Espaço</a></li>
              <li><a href="#avaliacoes" className="hover:text-amber-400 transition-colors">Avaliações no Google</a></li>
              <li><a href="#contato" className="hover:text-amber-400 transition-colors">Onde Estamos</a></li>
            </ul>
          </div>

          {/* Links: Especialidades */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider font-mono">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><span className="text-zinc-400">Degradê Navalhado</span></li>
              <li><span className="text-zinc-400">Barba com Toalha Quente</span></li>
              <li><span className="text-zinc-400">Camuflagem de Barba</span></li>
              <li><span className="text-zinc-400">Alinhamento de Fios</span></li>
              <li><span className="text-zinc-400">Corte Tesoura Clássico</span></li>
              <li><span className="text-zinc-400">Produção de Noivos</span></li>
            </ul>
          </div>

          {/* Unidade & Atendimento */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider font-mono">
              Unidade Apucarana
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Rua Osório Ribas de Paula, 1717 • Centro <br />
              Apucarana - PR • CEP 86802-710
            </p>
            <p className="text-xs font-mono text-amber-400/90 mb-4">
              (43) 99876-5432
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowUp size={14} />
              <span>Voltar ao topo</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Lobeca Barbershop. Todos os direitos reservados.
          </p>

          <p className="flex items-center gap-1">
            <span>Desenvolvido com excelência por</span>
            <strong className="text-amber-400/90 font-medium">Venoy Studio</strong>
            <span>• Código autoral & anti-slop</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
