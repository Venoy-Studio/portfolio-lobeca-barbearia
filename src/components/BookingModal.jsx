import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, Clock, User, Scissors, Phone, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function BookingModal({ isOpen, onClose, initialData }) {
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState(BARBERSHOP_DATA.barbers[0].id);
  const [selectedServices, setSelectedServices] = useState([BARBERSHOP_DATA.services[0].id]);
  const [selectedDate, setSelectedDate] = useState('Hoje');
  const [selectedTime, setSelectedTime] = useState('14:30');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialData?.barber) {
      setSelectedBarber(initialData.barber.id);
    }
    if (initialData?.service) {
      setSelectedServices([initialData.service.id]);
    } else if (initialData?.services && initialData.services.length > 0) {
      setSelectedServices(initialData.services.map(s => s.id));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const currentBarber = BARBERSHOP_DATA.barbers.find(b => b.id === selectedBarber) || BARBERSHOP_DATA.barbers[0];
  const chosenServices = BARBERSHOP_DATA.services.filter(s => selectedServices.includes(s.id));
  const totalPrice = chosenServices.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = chosenServices.reduce((sum, s) => sum + s.duration, 0);

  const dates = [
    { label: 'Hoje', sub: 'Quinta-feira' },
    { label: 'Amanhã', sub: 'Sexta-feira' },
    { label: 'Sábado', sub: 'Horários disputados' },
    { label: 'Segunda', sub: 'Semana que vem' },
  ];

  const timeSlots = [
    '09:00', '09:45', '10:30', '11:15', '14:00', '14:45', '15:30', '16:15', '17:00', '17:45', '18:30', '19:15'
  ];

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleFinish = (e) => {
    e.preventDefault();

    // Trigger confetti celebration!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsSuccess(true);

    const servicesListText = chosenServices.map(s => `• ${s.name} (R$ ${s.price.toFixed(2)})`).join('\n');
    const msg = `💈 *NOVO AGENDAMENTO - LOBECA BARBERSHOP* 💈\n\n` +
      `👤 *Cliente:* ${customerName || 'Cliente Online'}\n` +
      `📱 *Telefone:* ${customerPhone || 'Informado no WhatsApp'}\n` +
      `✂️ *Barbeiro:* ${currentBarber.name}\n` +
      `🗓️ *Data:* ${selectedDate}\n` +
      `⏰ *Horário desejado:* ${selectedTime}\n\n` +
      `📋 *Serviços Selecionados:*\n${servicesListText}\n\n` +
      `💰 *Total Estimado:* R$ ${totalPrice.toFixed(2).replace('.', ',')}\n` +
      `⏱️ *Duração Estimada:* ~${totalDuration} min\n\n` +
      `_Por favor, confirmar a disponibilidade deste horário!_`;

    const whatsappUrl = `https://wa.me/${BARBERSHOP_DATA.phoneRaw}?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        setIsSuccess(false);
        setStep(1);
        onClose();
      }, 1200);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#121419] border border-[#2b303c] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="p-6 bg-[#161820] border-b border-[#232733] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center font-bold">
              <Scissors size={20} className="-rotate-45" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Agendamento Online Lobeca
              </h3>
              <p className="text-xs text-zinc-400">
                Passo {step} de 3 • Confirmação instantânea no WhatsApp
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#20242e] text-zinc-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Step 1: Barbeiro & Serviços */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3">
                  1. Escolha o Profissional
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {BARBERSHOP_DATA.barbers.map((b) => {
                    const isSelected = selectedBarber === b.id;
                    return (
                      <div
                        key={b.id}
                        onClick={() => setSelectedBarber(b.id)}
                        className={`cursor-pointer p-3 rounded-2xl border transition-all text-center flex flex-col items-center ${
                          isSelected
                            ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                            : 'bg-[#15171e] border-[#252a36] text-zinc-400 hover:border-zinc-600'
                        }`}
                      >
                        <img
                          src={b.avatar}
                          alt={b.name}
                          className="w-14 h-14 rounded-full object-cover mb-2 border border-zinc-700"
                        />
                        <h4 className="font-bold text-sm text-white">{b.name}</h4>
                        <span className="text-[11px] text-amber-400 mt-0.5">{b.experience}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3">
                  2. Escolha os Serviços Desejados
                </label>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {BARBERSHOP_DATA.services.map((s) => {
                    const isChecked = selectedServices.includes(s.id);
                    return (
                      <div
                        key={s.id}
                        onClick={() => toggleService(s.id)}
                        className={`cursor-pointer p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                          isChecked
                            ? 'bg-[#1a1e27] border-amber-500 text-white'
                            : 'bg-[#15171d] border-[#222733] text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                            isChecked ? 'bg-amber-500 border-amber-500 text-black' : 'border-zinc-600'
                          }`}>
                            {isChecked && <Check size={14} strokeWidth={3} />}
                          </div>
                          <div>
                            <span className="font-semibold text-sm block">{s.name}</span>
                            <span className="text-[11px] text-zinc-400">{s.duration} min</span>
                          </div>
                        </div>

                        <span className="font-mono font-bold text-sm text-amber-400">
                          R$ {s.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Data & Horário */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3">
                  1. Selecione o Dia
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {dates.map((d, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedDate(d.label)}
                      className={`p-3.5 rounded-2xl border text-center transition-all ${
                        selectedDate === d.label
                          ? 'bg-amber-500 border-amber-500 text-black font-bold'
                          : 'bg-[#161820] border-[#262b37] text-zinc-300 hover:border-zinc-600'
                      }`}
                    >
                      <span className="block text-sm">{d.label}</span>
                      <span className={`text-[10px] block mt-0.5 ${selectedDate === d.label ? 'text-black/80' : 'text-zinc-500'}`}>
                        {d.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3">
                  2. Horários Livres com {currentBarber.name}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`py-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                        selectedTime === t
                          ? 'bg-amber-500 border-amber-500 text-black'
                          : 'bg-[#161820] border-[#262b37] text-zinc-300 hover:border-zinc-600'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Dados & Confirmação */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-[#161820] border border-[#262b37] space-y-2 text-xs">
                <span className="font-mono text-amber-400 uppercase tracking-wider font-bold block mb-1">
                  Resumo do Agendamento
                </span>
                <div className="flex justify-between text-zinc-300">
                  <span>Barbeiro:</span>
                  <strong className="text-white">{currentBarber.name}</strong>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Data & Horário:</span>
                  <strong className="text-white">{selectedDate} às {selectedTime}</strong>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Tempo Estimado:</span>
                  <strong className="text-white">~{totalDuration} minutos</strong>
                </div>
                <div className="flex justify-between text-amber-400 pt-2 border-t border-[#2a2f3d] text-sm font-bold">
                  <span>Valor Total:</span>
                  <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-zinc-300 mb-1 font-medium">Seu Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Paulo Silva"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#161820] border border-[#2b303c] text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-300 mb-1 font-medium">WhatsApp para Notificação</label>
                  <input
                    type="tel"
                    placeholder="Ex: (43) 99999-9999"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#161820] border border-[#2b303c] text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-6 bg-[#161820] border-t border-[#232733] flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="text-xs font-semibold text-zinc-400 hover:text-white px-3 py-2 rounded-lg"
            >
              ← Voltar
            </button>
          ) : (
            <div className="text-xs text-zinc-400">
              Total: <strong className="text-amber-400 font-bold">R$ {totalPrice.toFixed(2).replace('.', ',')}</strong>
            </div>
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase font-mono tracking-wider transition-all"
            >
              Avançar →
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all"
            >
              <Phone size={16} />
              <span>{isSuccess ? 'Enviando...' : 'Confirmar no WhatsApp'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
