import Link from "next/link";

export default function CTAFinalSection() {
  return (
    <section className="bg-[#faf8f2] py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#c9a84c" }}
        >
          A sua aventura começa aqui
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a3a2a] leading-tight mb-4">
          Pronto para Descobrir{" "}
          <span className="italic text-[#2d6a4f]">Nampula?</span>
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Planeia a tua viagem connosco. Estamos aqui para tornar cada detalhe inesquecível.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/accommodations"
            className="bg-[#1a3a2a] hover:bg-[#2d6a4f] text-white font-semibold px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300"
          >
            Reservar Agora
          </Link>
          
           <a href="https://wa.me/258842800063"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#1a3a2a] text-[#1a3a2a] hover:bg-[#1a3a2a] hover:text-white font-medium px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300" >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}