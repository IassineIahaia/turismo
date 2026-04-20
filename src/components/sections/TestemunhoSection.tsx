"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────
const TESTEMUNHOS = [
  {
    id: 0,
    quote:
      "Nampula superou todas as minhas expectativas. A mistura entre a história viva na Ilha e a serenidade das praias de Nacala criou memórias que guardarei para sempre. É o segredo mais bem guardado de África.",
    name: "Elena Rodriguez",
    role: "Travel Photographer, Espanha",
    // URL pública do design original
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtvx8nV7WQHO1hNwsce2b0B2MxnVnBYJqlWozRX96OfluH5HdbVqHtmNxPjGyQDRxxneArygWomfQaME3FyDWa28hBGGdNFlTGF3aRhkiVKv4ZjqoiBpLZ8zB-EFpwuRTsc6FArRkORE1Ys55SGAniSp-TlLJ0McnIIk6-YgJqPZovhRXMNtuN6tfYKbnXhzyJBJnMUPQJfBvnFbO-ME2mfHim1LXK-D4lXTViP13X7NLzTI29XohO7qo2z9P127osBFRcYrqF8DDE",
    initials: "ER",
  },
  {
    id: 1,
    quote:
      "A Reserva do Niassa foi uma revelação absoluta. Nunca imaginei encontrar uma wilderness tão pura em Moçambique. Os guias locais tornaram a experiência verdadeiramente inesquecível.",
    name: "James Whitfield",
    role: "Wildlife Journalist, Reino Unido",
    avatar: "",
    initials: "JW",
  },
  {
    id: 2,
    quote:
      "A curadoria do The Verdant Archive é impecável. Cada alojamento, cada experiência foi escolhida com uma atenção ao detalhe que raramente encontro. Nampula ficará no meu coração para sempre.",
    name: "Isabelle Fontaine",
    role: "Luxury Travel Editor, França",
    avatar: "",
    initials: "IF",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function TestemunhoSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  function goNext() {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTEMUNHOS.length);
  }

  function goPrev() {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTEMUNHOS.length) % TESTEMUNHOS.length);
  }

  const t = TESTEMUNHOS[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -50 : 50 }),
  };

  return (
    <section
      className="py-24 px-6 md:px-12"
      style={{ background: "#fbf9f3" }} /* bg-surface */
    >
      <div
        className="mx-auto text-center"
        style={{ maxWidth: 896 }} /* max-w-4xl */
      >

        {/* ── Aspas — format_quote filled, text-5xl (48px), cor #c9a84c ── */}
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: 48,
            color: "#c9a84c",
            display: "block",
            marginBottom: 32,
            fontVariationSettings: "'FILL' 1, 'wght' 400",
            lineHeight: 1,
          }}
        >
          format_quote
        </span>

        {/* ── Conteúdo animado ─────────────────────────────────────────── */}
        <div style={{ marginBottom: 48 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Citação — text-2xl md:text-3xl italic serif */}
              <p
                className="italic leading-relaxed"
                style={{
                  // text-2xl = 24px mobile, text-3xl = 30px desktop
                  fontSize: "clamp(1.35rem, 2.8vw, 1.875rem)",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#1b1c19",
                  marginBottom: 32,
                  lineHeight: 1.65,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Avatar + nome */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                }}
              >
                {/* Avatar circular — w-16 h-16 border-2 border-[#c9a84c] */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    border: "2px solid #c9a84c",
                    overflow: "hidden",
                    flexShrink: 0,
                    background: "#d8f3dc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {t.avatar ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={t.avatar}
                      alt={t.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#2d6a4f",
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {t.initials}
                    </span>
                  )}
                </div>

                {/* Nome + cargo */}
                <div style={{ textAlign: "left" }}>
                  <h5
                    style={{
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#1b1c19",
                      fontFamily: "DM Sans, system-ui, sans-serif",
                      marginBottom: 3,
                    }}
                  >
                    {t.name}
                  </h5>
                  <p
                    style={{
                      fontSize: "10px",
                      color: "#424843",
                      fontFamily: "DM Sans, system-ui, sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Botões de navegação — w-10 h-10 rounded-full border ──────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          {/* Prev */}
          <button
            onClick={goPrev}
            aria-label="Testemunho anterior"
            className="nav-btn"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid #c1c8c2",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#1b1c19",
              transition: "background 0.2s, border-color 0.2s, color 0.2s",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20, lineHeight: 1 }}
            >
              chevron_left
            </span>
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {TESTEMUNHOS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                aria-label={`Testemunho ${i + 1}`}
                style={{
                  width: i === current ? 22 : 7,
                  height: 7,
                  borderRadius: 4,
                  background: i === current ? "#c9a84c" : "#c1c8c2",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            aria-label="Próximo testemunho"
            className="nav-btn"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid #c1c8c2",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#1b1c19",
              transition: "background 0.2s, border-color 0.2s, color 0.2s",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20, lineHeight: 1 }}
            >
              chevron_right
            </span>
          </button>
        </div>
      </div>

      {/* Material Symbols + hover dos botões */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          display: inline-block;
          line-height: 1;
          text-transform: none;
          letter-spacing: normal;
          word-wrap: normal;
          white-space: nowrap;
          direction: ltr;
        }
        .nav-btn:hover {
          background: #755b00 !important;
          border-color: #755b00 !important;
          color: white !important;
        }
      `}</style>
    </section>
  );
}