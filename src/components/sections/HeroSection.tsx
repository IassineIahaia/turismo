"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/images/hero/hero-1.jpg",
    alt: "Ilha de Moçambique",
    label: "Ilha de Moçambique",
  },
  {
    src: "/images/hero/hero-2.jpg",
    alt: "Praia de Nacala",
    label: "Praia de Nacala",
  },
  {
    src: "/images/hero/hero-3.jpg",
    alt: "Monte Namuli",
    label: "Monte Namuli",
  },
  {
    src: "/images/hero/hero-4.jpg",
    alt: "Cultura Local",
    label: "Cultura Local",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-[#1a3a2a]">

      {/* Slides de fundo */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 z-10" />

      {/* Conteúdo */}
      <div
        className={`relative z-20 h-full flex flex-col items-center justify-center text-center px-6 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#c9a84c]/50 bg-[#c9a84c]/10 text-[#f0d080] text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] inline-block" />
          Descubra o Inexplorado
        </div>

        {/* Título */}
        <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mb-6">
          Nampula —{" "}
          <span className="italic text-[#f0d080]">
            Onde a África Encontra
          </span>{" "}
          o Oceano Índico
        </h1>

        {/* Subtítulo */}
        <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mb-10 leading-relaxed">
          Praias intocadas, cultura milenar, montanhas sagradas.
          Uma experiência que ficará para sempre na sua memória.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/destinations"
            className="bg-[#c9a84c] hover:bg-[#f0d080] text-[#1a3a2a] font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
          >
            Explorar Destinos
          </Link>
          <Link
            href="/accommodations"
            className="border border-white/60 hover:border-white text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300"
          >
            Reservar Hotel
          </Link>
        </div>

        {/* Indicador do slide actual */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-1.5 bg-[#c9a84c]"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Label do slide actual */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase">
          {slides[current].label}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}