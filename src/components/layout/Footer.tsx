import Link from "next/link";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Destinos", href: "/destinations" },
  { label: "Hotéis", href: "/accommodations" },
  { label: "Experiências", href: "#" },
  { label: "Stories", href: "#" },
];

const explorarLinks = [
  "Ilha de Moçambique",
  "Praia de Nacala",
  "Monte Namuli",
  "Reserva de Gilé",
  "Sustentabilidade",
];

const rodapeLinks = ["Política de Privacidade", "Termos de Uso", "Contacto"];

export default function Footer() {
  return (
    <footer style={{ background: "#0f2318" }} className="text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-1">
            <h3
              className="font-serif text-xl font-semibold mb-3"
              style={{ color: "#c9a84c" }}
            >
              The Verdant Archive
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              O jornal editorial de viagens de Moçambique. Curadoria exclusiva
              dos destinos mais extraordinários do norte.
            </p>
            <div className="flex gap-3">
              
               <a href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.08)", color: "white" }}
              >
                f
              </a>
              
               <a href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.08)", color: "white" }}
              >
                ig
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.08)", color: "white" }}
              >
                yt
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explorar */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Explorar
            </h4>
            <ul className="space-y-3">
              {explorarLinks.map((item) => (
                <li key={item}>
                  
                   <a href="#"
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Newsletter
            </h4>
            <p
              className="text-sm mb-4"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Receba ofertas exclusivas e histórias do arquivo directamente no seu email.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="O seu email"
                className="flex-1 px-4 py-2.5 rounded-lg text-sm text-[#1a3a2a] placeholder-gray-400 focus:outline-none bg-white"
              />
              <button
                className="px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90"
                style={{ background: "#c9a84c", color: "#1a3a2a" }}
              >
                →
              </button>
            </div>
          </div>

        </div>

        {/* Linha final */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © 2024 The Verdant Archive · Mozambique's Editorial Travel Journal
          </p>
          <div className="flex gap-6">
            
            {rodapeLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}