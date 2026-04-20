"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const destinos = [
  {
    id: "ilha-mocambique",
    label: "Património UNESCO",
    labelStyle: "bg-[#c9a84c] text-[#4f3d00]",
    name: "Ilha de Moçambique",
    rating: 4.9,
    image: "/images/destinations/ilha-mocambique.jpg",
    href: "/destinations/ilha-mocambique",
    offset: false,
  },
  {
    id: "nacala",
    label: "Paraíso Tropical",
    labelStyle: "bg-[#aeeecb] text-[#0e5138]",
    name: "Praia de Nacala",
    rating: 4.8,
    image: "/images/destinations/nacala.jpg",
    href: "/destinations/nacala",
    offset: true,
  },
  {
    id: "namuli",
    label: "Aventura Sagrada",
    labelStyle: "bg-[#c7ebd4] text-[#002113]",
    name: "Monte Namuli",
    rating: 4.7,
    image: "/images/destinations/namuli.jpg",
    href: "/destinations/namuli",
    offset: false,
  },
];

export default function DestacosSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#fbf9f3]">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span
              className="text-xs text-[#755b00] font-bold tracking-[0.2em] uppercase mb-2 block"
              style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}
            >
              Curadoria Editorial
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#1b1c19] font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Destinos em Destaque
            </h2>
          </div>
          <a
            href="/destinations"
            className="text-[#1b1c19] font-semibold border-b-2 border-[#c9a84c] pb-1 hover:text-[#755b00] transition-colors text-sm hidden md:block"
            style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}
          >
            Ver todos os arquivos
          </a>
        </div>

        {/* Grid — card central com mt-16 para offset */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinos.map((d) => (
            <div
              key={d.id}
              className={`group relative overflow-hidden aspect-[3/4] ${
                d.offset ? "md:mt-16" : ""
              }`}
            >
              <Image
                src={d.image}
                alt={d.name}
                fill
                priority={d.id === "ilha-mocambique"}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Overlay verde escuro igual ao original */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#032416]/80 via-transparent to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${d.labelStyle}`}
                  style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}
                >
                  {d.label}
                </span>
              </div>

              {/* Conteúdo fundo */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={14} className="fill-[#e6c364] text-[#e6c364]" />
                  <span
                    className="text-white text-xs font-bold"
                    style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}
                  >
                    {d.rating}
                  </span>
                </div>
                <h3
                  className="text-2xl text-white mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {d.name}
                </h3>
                <Link
                  href={d.href}
                  className="inline-block bg-[#fbf9f3] text-[#032416] px-6 py-2 text-xs font-bold uppercase tracking-tighter hover:bg-[#c9a84c] hover:text-white transition-colors"
                  style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}
                >
                  Explorar
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/destinations"
            className="text-sm text-[#2c694e] underline underline-offset-4"
            style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}
          >
            Ver todos os arquivos
          </Link>
        </div>

      </div>
    </section>
  );
}