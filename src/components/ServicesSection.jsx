import React, { useState } from 'react';
import { Scissors, Clock, Check, Plus, Calendar, ArrowRight, UserCheck } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function ServicesSection({ onSelectServiceAndBook }) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedBarber, setSelectedBarber] = useState(BARBERSHOP_DATA.barbers[0].id);
  const [selectedServices, setSelectedServices] = useState([]);

  const categories = [
    { id: 'todos', name: 'Todos os Serviços' },
    { id: 'combos', name: 'Combos Especiais' },
    { id: 'cabelo', name: 'Cabelo' },
    { id: 'barba', name: 'Barba' },
    { id: 'rosto', name: 'Rosto & Acabamento' },
  ];

  const filteredServices = activeCategory === 'todos'
    ? BARBERSHOP_DATA.services
    : BARBERSHOP_DATA.services.filter(s => s.category === activeCategory);

  const toggleService = (service) => {
    if (selectedServices.some(s => s.id === service.id)) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const totalPrice = selectedServices.reduce((acc, curr) => acc + curr.price, 0);
  const totalDuration = selectedServices.reduce((acc, curr) => acc + curr.duration, 0);

  const currentBarberObj = BARBERSHOP_DATA.barbers.find(b => b.id === selectedBarber) || BARBERSHOP_DATA.barbers[0];

  return (
    <section id="servicos" className="py-24 bg-[#090a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1f242d]">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-500 font-semibold">
              Carta Completa de Serviços
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#f3f0e8] tracking-tight mt-2">
              Escolha seu Barbeiro <br />
              <span className="text-zinc-400">& os Serviços Desejados</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#8e95a2] max-w-md mt-4 md:mt-0">
            Cada profissional da Lobeca tem sua especialidade e assinatura. 
            Selecione o profissional, monte seu pacote e reserve com hora marcada.
          </p>
        </div>

        {/* Step-by-Step Flow Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {[
            { step: '01', title: 'Escolha o Barbeiro', desc: 'Profissional especialista' },
            { step: '02', title: 'Marque os Serviços', desc: 'Corte, barba ou tratamentos' },
            { step: '03', title: 'Escolha o Dia', desc: 'Conforme sua conveniência' },
            { step: '04', title: 'Escolha o Horário', desc: 'Grade em tempo real' },
            { step: '05', title: 'Confirmação Rápida', desc: 'Direto no seu WhatsApp' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#111317] border border-[#20252e] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-amber-400">{item.step}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-200">{item.title}</h4>
                <p className="text-[11px] text-zinc-500 leading-tight mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 1. Barbers Selection Row */}
        <div className="mb-12">
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
            Passo 1: Selecione o Barbeiro
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BARBERSHOP_DATA.barbers.map((barber) => {
              const isSelected = selectedBarber === barber.id;
              return (
                <div
                  key={barber.id}
                  onClick={() => setSelectedBarber(barber.id)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center gap-4 ${
                    isSelected
                      ? 'bg-[#181b22] border-amber-500 shadow-lg shadow-amber-500/10'
                      : 'bg-[#121418] border-[#222731] hover:border-zinc-700'
                  }`}
                >
                  <img
                    src={barber.avatar}
                    alt={barber.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-zinc-700"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-base text-white truncate">
                        {barber.name}
                      </h4>
                      {isSelected && (
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-black flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-amber-400/90 font-medium truncate">{barber.role}</p>
                    <p className="text-[11px] text-zinc-400 truncate mt-0.5">{barber.specialty}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-[#14161c] text-zinc-400 hover:text-white border border-[#232731]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 3. Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => {
            const isSelected = selectedServices.some(s => s.id === service.id);
            return (
              <div
                key={service.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#171a21] border-amber-500/80 shadow-md shadow-amber-500/10'
                    : 'bg-[#111317] border-[#20252e] hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-bold text-lg text-white leading-snug">
                      {service.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-amber-400 font-display font-extrabold text-xl">
                        {service.isFromPrice && <span className="text-xs text-zinc-400 font-normal mr-1">a partir de</span>}
                        R$ {service.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8e95a2] leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1e222b] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                    <Clock size={13} className="text-amber-400" />
                    <span>~{service.duration} min</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleService(service)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
                        isSelected
                          ? 'bg-amber-500 text-black'
                          : 'bg-[#1c2028] text-zinc-300 hover:text-white border border-[#2d333f]'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check size={13} />
                          <span>Selecionado</span>
                        </>
                      ) : (
                        <>
                          <Plus size={13} />
                          <span>Adicionar</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onSelectServiceAndBook({ barber: currentBarberObj, service })}
                      className="text-xs text-amber-400 hover:text-amber-300 font-semibold px-2 py-1.5 underline decoration-amber-500/40 hover:decoration-amber-400"
                    >
                      Agendar direto
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Services Floating Summary Cart */}
        {selectedServices.length > 0 && (
          <div className="mt-8 p-6 rounded-2xl bg-[#14171e] border-2 border-amber-500/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-black flex items-center justify-center font-bold text-lg">
                {selectedServices.length}
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white">
                  {selectedServices.length === 1 ? '1 Serviço Selecionado' : `${selectedServices.length} Serviços Selecionados`}
                </h4>
                <p className="text-xs text-zinc-400">
                  Com o barbeiro <strong className="text-amber-400">{currentBarberObj.name}</strong> • Tempo estimado: {totalDuration} min
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
              <div className="text-right">
                <span className="text-xs uppercase font-mono text-zinc-400 block">Total Estimado</span>
                <span className="font-display font-black text-2xl text-amber-400">
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button
                onClick={() => onSelectServiceAndBook({ barber: currentBarberObj, services: selectedServices })}
                className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 text-sm whitespace-nowrap"
              >
                <Calendar size={16} />
                <span>Confirmar e Escolher Horário</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
