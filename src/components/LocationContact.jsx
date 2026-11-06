import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Copy, Check, Navigation } from 'lucide-react';
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

export function LocationContact({ onOpenBooking }) {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(`${BARBERSHOP_DATA.address}, ${BARBERSHOP_DATA.city}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=Rua+Osório+Ribas+de+Paula,+1717+-+Centro,+Apucarana+-+PR`;

  return (
    <section id="contato" className="py-24 bg-[#090a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: 5 Cols - Info & Contact Card */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-500 font-semibold">
              Localização & Contato
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#f3f0e8] tracking-tight mt-2 mb-6">
              Onde Estamos
            </h2>
            <p className="text-sm sm:text-base text-[#8e95a2] leading-relaxed mb-8">
              Localizada no centro de Apucarana com fácil acesso e estacionamento nas proximidades.
              Venha tomar um café ou uma cerveja artesanal conosco.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="p-5 rounded-2xl bg-[#121419] border border-[#222631] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Endereço</h4>
                  <p className="font-display font-bold text-white text-base mt-0.5">
                    {BARBERSHOP_DATA.address}
                  </p>
                  <p className="text-xs text-zinc-400">
                    {BARBERSHOP_DATA.city} • CEP {BARBERSHOP_DATA.cep}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={copyAddress}
                      className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                    >
                      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      <span>{copied ? 'Endereço copiado!' : 'Copiar endereço'}</span>
                    </button>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
                    >
                      <Navigation size={13} />
                      <span>Como chegar</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-5 rounded-2xl bg-[#121419] border border-[#222631] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">WhatsApp & Telefone</h4>
                  <p className="font-display font-bold text-white text-base mt-0.5">
                    {BARBERSHOP_DATA.phone}
                  </p>
                  <p className="text-xs text-zinc-400">
                    Fixo comercial: {BARBERSHOP_DATA.phoneLandline}
                  </p>
                  <a
                    href={`https://wa.me/${BARBERSHOP_DATA.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20da%20Lobeca.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-emerald-400 hover:text-emerald-300 font-bold"
                  >
                    Iniciar conversa no WhatsApp →
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-[#121419] border border-[#222631] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Horários de Atendimento</h4>
                  <ul className="mt-1 space-y-1 text-xs text-zinc-300">
                    {BARBERSHOP_DATA.hours.map((h, i) => (
                      <li key={i} className="flex justify-between">
                        <span className="font-medium text-white">{h.days}:</span>
                        <span className="text-zinc-400 font-mono">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 7 Cols - Interactive Google Maps Embed Frame */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-[#252b36] shadow-2xl bg-[#121418] relative">
              <div className="aspect-[16/11] w-full relative">
                <iframe
                  title="Mapa Lobeca Barbershop"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.974955146561!2d-51.464619!3d-23.551389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ececc0e6e78ec3%3A0x6b7cb077c570b55!2sR.%20Os%C3%B3rio%20Ribas%20de%20Paula%2C%201717%20-%20Centro%2C%20Apucarana%20-%20PR%2C%2086802-710!5e0!3m2!1spt-BR!2sbr!4v1714000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="p-6 bg-[#14171d] border-t border-[#232833] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-zinc-300 font-mono">
                    Apucarana • Aberto para agendamentos
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none text-center px-4 py-2.5 rounded-xl bg-[#202530] hover:bg-[#2b3140] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Abrir no Google Maps</span>
                  </a>

                  <button
                    onClick={() => onOpenBooking()}
                    className="flex-1 sm:flex-none text-center px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all"
                  >
                    Agendar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
