import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Clock, MapPin, Scissors } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Assinaturas', href: '#assinaturas' },
    { name: 'Dia do Noivo', href: '#dia-do-noivo' },
    { name: 'Nosso Espaço', href: '#espaco' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Onde Estamos', href: '#contato' },
  ];

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-[#121418] text-[#8e95a2] text-xs py-2 px-4 border-b border-[#1c2027] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-400/90 font-medium">
              <Scissors size={13} className="rotate-90" />
              11 Anos de tradição em Apucarana
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-zinc-400" />
              Rua Osório Ribas de Paula, 1717 • Centro
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-zinc-400" />
              Seg a Sex 09h às 20h | Sáb 08h30 às 19h
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${BARBERSHOP_DATA.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20hor%C3%A1rios.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f3f0e8] hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Phone size={13} className="text-emerald-400" />
              {BARBERSHOP_DATA.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0c]/92 backdrop-blur-md shadow-2xl border-b border-[#20242b] py-3.5'
            : 'bg-[#090a0c]/70 backdrop-blur-sm border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-amber-600/20 group-hover:scale-105 transition-transform">
              <Scissors size={20} className="text-black transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-[#f3f0e8] group-hover:text-amber-400 transition-colors">
                LOBECA
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#8e95a2] -mt-1">
                Barbershop • Desde 2015
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 text-[0.93rem] font-medium text-[#c0c6d2]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BARBERSHOP_DATA.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20as%20assinaturas%20mensais.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase font-mono tracking-wider text-amber-400 hover:text-amber-300 px-3.5 py-2.5 rounded-lg border border-amber-500/30 hover:border-amber-500/60 transition-colors hidden md:inline-block"
            >
              Clube de Assinaturas
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar size={16} />
              <span>Agendar Horário</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#16181d] border border-[#272c35] text-[#f3f0e8] hover:text-amber-400 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex flex-col p-6 animate-fade-in">
          <div className="flex items-center justify-between pb-6 border-b border-[#20242b]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-black font-bold">
                <Scissors size={18} className="-rotate-45" />
              </div>
              <span className="font-display font-extrabold text-lg text-white">LOBECA</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-[#1a1d24] text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-4 py-8 text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-amber-400 py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 rounded-xl shadow-lg shadow-amber-500/30 text-base"
            >
              <Calendar size={18} />
              <span>Agendar Agora</span>
            </button>

            <a
              href={`https://wa.me/${BARBERSHOP_DATA.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#1b1e24] text-white font-medium py-3 rounded-xl border border-[#2b303b]"
            >
              <Phone size={16} className="text-emerald-400" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
