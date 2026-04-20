"use client";

import Image from "next/image";

const experiencias = [
  {
    id: "praias",
    name: "Praias",
    description: "Águas cristalinas e areias brancas que parecem não ter fim.",
    image: "/images/experiences/prais.png",
    colSpan: "md:col-span-2 md:row-span-2",
    titleSize: "text-3xl",
    showDesc: true,
    overlay: "bg-black/30",
    padding: "p-8",
  },
  {
    id: "montanhas",
    name: "Montanhas",
    description: "Aventura e espiritualidade nos picos sagrados.",
    image: "/images/experiences/montanhas.png",
    colSpan: "md:col-span-2",
    titleSize: "text-2xl",
    showDesc: true,
    overlay: "bg-black/30",
    padding: "p-6",
  },
  {
    id: "cultura",
    name: "Cultura",
    description: "",
    image: "/images/experiences/cultura.png",
    colSpan: "",
    titleSize: "text-xl",
    showDesc: false,
    overlay: "bg-black/40",
    padding: "p-6",
  },
  {
    id: "gastronomia",
    name: "Gastronomia",
    description: "",
    image: "/images/experiences/gastronomia.png",
    colSpan: "",
    titleSize: "text-xl",
    showDesc: false,
    overlay: "bg-black/40",
    padding: "p-6",
  },
];

export default function ExperienciasSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#fbf9f3]">
      <div className="max-w-7xl mx-auto">

        {/* Título centrado */}
        <h2
          className="text-3xl md:text-4xl text-[#1b1c19] font-bold mb-12 text-center"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Experiências Imersivas
        </h2>

        {/* Bento grid — 4 colunas, 2 linhas */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4"
          style={{ height: undefined }}
        >
          {experiencias.map((exp) => (
            <div
              key={exp.id}
              className={`relative group overflow-hidden ${exp.colSpan}`}
              style={{
                minHeight:
                  exp.id === "praias"
                    ? "400px"
                    : exp.id === "montanhas"
                    ? "290px"
                    : "200px",
              }}
            >
              <Image
                src={exp.image}
                alt={exp.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes={
                  exp.id === "praias"
                    ? "(max-width: 768px) 100vw, 50vw"
                    : exp.id === "montanhas"
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 100vw, 25vw"
                }
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${exp.overlay} flex flex-col justify-end ${exp.padding}`}
              >
                <h3
                  className={`${exp.titleSize} text-white mb-2`}
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {exp.name}
                </h3>
                {exp.showDesc && exp.description && (
                  <p
                    className="text-white/80 text-sm max-w-xs"
                    style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}
                  >
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}