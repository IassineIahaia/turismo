"use client";

import Image from "next/image";
import Link from "next/link";
import { Waves, Utensils, Palmtree, Sparkles } from "lucide-react";

const hoteis = [
  {
    id: "hotel-milenio",
    name: "Hotel Milénio",
    tags: [
      { icon: <Waves size={14} />, label: "Piscina" },
      { icon: <Sparkles size={14} />, label: "Spa" },
    ],
    description:
      "Localizado no coração vibrante de Nampula, oferecendo o equilíbrio perfeito entre o luxo moderno e o charme local.",
    price: 120,
    image: "/images/hotels/hotelmilenio.jpg",
    href: "/accommodations/hotel-milenio",
  },
  {
    id: "nacala-beach-lodge",
    name: "Nacala Beach Lodge",
    tags: [
      { icon: <Palmtree size={14} />, label: "Praia" },
      { icon: <Utensils size={14} />, label: "Gourmet" },
    ],
    description:
      "Um refúgio de paz à beira-mar, onde o luxo se funde com a natureza selvagem e águas cristalinas.",
    price: 185,
    image: "/images/hotels/nacalabeach.png",
    href: "/accommodations/nacala-beach-lodge",
  },
];

export default function HoteisSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <h2
          className="text-3xl md:text-4xl text-[#1a3a2a] font-bold mb-12"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Alojamentos de Prestígio
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {hoteis.map((hotel) => (
            <div
              key={hotel.id}
              className="flex-1 bg-white flex flex-col md:flex-row items-stretch overflow-hidden group"
              style={{ boxShadow: "0px 20px 40px rgba(27, 28, 25, 0.06)" }}
            >
              {/* Foto quadrada */}
              <div className="w-full md:w-1/2 aspect-square relative overflow-hidden flex-shrink-0">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                {/* Nome */}
                <h3
                  className="text-2xl text-[#1a3a2a] font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {hotel.name}
                </h3>

                {/* Tags */}
                <div
                  className="flex items-center gap-4 text-[#424843] text-sm mb-6"
                  style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}
                >
                  {hotel.tags.map((tag) => (
                    <span key={tag.label} className="flex items-center gap-1">
                      {tag.icon}
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Descrição */}
                <p
                  className="text-[#424843] text-sm leading-relaxed mb-8"
                  style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}
                >
                  {hotel.description}
                </p>

                {/* Preço + Botão */}
                <div className="flex justify-between items-center">
                  <span
                    className="text-xl font-bold text-[#1a3a2a]"
                    style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}
                  >
                    €{hotel.price}{" "}
                    <span className="text-xs text-[#727973] font-normal">
                      /noite
                    </span>
                  </span>
                  <Link
                    href={hotel.href}
                    className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest hover:underline underline-offset-4 transition-all"
                    style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}
                  >
                    Reservar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}