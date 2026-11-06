import React, { useRef, useState } from 'react';
import { Calendar, Star, CheckCircle2, Play, Pause, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function Hero({ onOpenBooking }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-[#090a0c]">
      {/* Background ambient lighting (warm whiskey & graphite, no generic purple slop) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 7 Cols - Copy & Conversion */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tag / Microbadge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#181a20] border border-[#2b303b] text-xs font-mono uppercase tracking-wider text-amber-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
              <span>Tradição & Estilo em Apucarana</span>
            </div>

            {/* Main Headline with authentic typography */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f3f0e8] leading-[1.05] mb-6">
              O corte exato. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                A presença que impõe respeito.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#9ea6b5] leading-relaxed max-w-2xl mb-8">
              Há 11 anos moldando a identidade visual dos homens de Apucarana. 
              Mais de 450 membros assinantes com atendimento personalizado, toalha quente, 
              cerveja artesanal gelada e horário marcado sem espera.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar size={18} />
                <span>Agendar Horário Online</span>
              </button>

              <a
                href="#assinaturas"
                className="flex items-center justify-center gap-2 bg-[#15171c] hover:bg-[#1d2027] text-[#f3f0e8] hover:text-amber-300 font-semibold text-base px-6 py-4 rounded-xl border border-[#2c313c] transition-all"
              >
                <span>Conhecer Planos Mensais</span>
                <ArrowUpRight size={18} className="text-amber-400" />
              </a>
            </div>

            {/* Social Proof: Google Reviews Verified Badge */}
            <div className="inline-flex flex-wrap items-center gap-4 p-3.5 rounded-2xl bg-[#121418]/90 border border-[#22262f] shadow-lg backdrop-blur-md">
              {/* Google G icon */}
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-white font-extrabold text-base">{BARBERSHOP_DATA.googleRating}</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <span className="text-[#8e95a2] text-xs font-medium">({BARBERSHOP_DATA.googleReviewsCount} avaliações reais)</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#9da5b4] mt-0.5">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                  <span>Barbearia mais bem avaliada de Apucarana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Cols - Immersive Video / Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#2b303b] bg-[#121418] shadow-2xl group">
              {/* Video Player */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/hero-poster.webp"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="/videos/hero-vertical.mp4" type="video/mp4" />
                </video>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Video Play/Pause floating control */}
                <button
                  onClick={toggleVideo}
                  aria-label={isPlaying ? "Pausar vídeo" : "Tocar vídeo"}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </button>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-md bg-amber-500/90 text-black text-[11px] font-mono font-bold uppercase tracking-wider">
                    <Sparkles size={12} />
                    Experiência Exclusiva
                  </span>
                  <h3 className="text-white font-display font-bold text-xl leading-tight drop-shadow-md">
                    Profissionalismo, qualidade e estilo em cada detalhe.
                  </h3>
                  <p className="text-zinc-300 text-xs">
                    Rua Osório Ribas de Paula, 1717 • Centro de Apucarana
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Floating Metric Pill */}
            <div className="absolute -bottom-6 -left-6 bg-[#16181e]/95 backdrop-blur-md border border-[#2d333f] px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3.5 hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShieldCheck size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-mono tracking-wider text-[#8e95a2]">Membros Ativos</span>
                <span className="text-white font-display font-bold text-lg leading-tight">450+ Assinantes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
