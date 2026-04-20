import Image from "next/image";

const stats = [
  { valor: "460km", label: "Linha de Costa" },
  { valor: "51", label: "Praias" },
  { valor: "16", label: "Ilhas" },
  { valor: "23", label: "Distritos" },
];

export default function TurismoTransformaSection() {
  return (
    <section style={{ background: "#1a3a2a" }} className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Imagem esquerda */}
        <div className="relative h-[480px] rounded-2xl overflow-hidden">
          <Image
            src="/images/hero/hero-4.jpg"
            alt="Comunidade local de Nampula"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className="absolute bottom-6 left-6 rounded-xl px-5 py-4 max-w-[200px]"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <p className="font-serif text-2xl font-bold text-white">81.606</p>
            <p className="text-xs uppercase tracking-wider mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
              km² de território
            </p>
          </div>
        </div>

        {/* Conteúdo direita */}
        <div>
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#c9a84c" }}>
            Compromisso Ético
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 text-white">
            Turismo que{" "}
            <span className="italic" style={{ color: "#52b788" }}>Transforma</span>
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.72)" }}>
            Nampula possui 23 distritos, 10 costeiros, com 460km de costa que se estende
            do Distrito de Moma ao Distrito de Memba. Um território de biodiversidade
            marinha e flora única, onde cada visita apoia directamente as comunidades locais.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
            Património cultural tangível e intangível — sítios históricos, pinturas rupestres
            e a Ilha de Moçambique,{" "}
            <span className="font-medium text-white">
              Património Mundial da Humanidade pela UNESCO
            </span>.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-xl py-4 px-2"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p className="font-serif text-2xl font-bold" style={{ color: "#c9a84c" }}>
                  {stat.valor}
                </p>
                <p className="text-xs uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Emakhwa & Português", "Diversidade Marinha", "Flora Única", "Pinturas Rupestres", "Praia & Paisagem"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.08)", color: "#d8f3dc" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}