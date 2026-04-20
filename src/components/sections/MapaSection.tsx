"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

// ─── Mapbox Static Image — gratuito, sem token, centrado em Nampula ──────────
// Usa o serviço público do staticmap.openstreetmap.de
// Resolução 900×500, zoom 6, centrado nas coordenadas de Nampula
const MAP_URL =
  "https://staticmap.openstreetmap.de/staticmap.php?center=-13.8,38.8&zoom=6&size=900x500&maptype=osmarender";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Destination {
  id: string;
  name: string;
  subtitle: string;
  label: string;
  description: string;
  tags: string[];
  href: string;
  pinTop: string;
  pinLeft: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const DESTINATIONS: Destination[] = [
  {
    id: "ilha-mocambique",
    name: "Ilha de Moçambique",
    subtitle: "Património Mundial da UNESCO",
    label: "Património Mundial da UNESCO",
    description:
      "Uma ilha de coral onde séculos de história árabe, swahili e portuguesa se fundem numa arquitectura única. Ruas de pedra e cal, fortalezas coloniais e a quietude do Índico.",
    tags: ["Cultural", "História", "Oceano"],
    href: "/destinations/ilha-mocambique",
    pinTop: "25%",
    pinLeft: "33%",
  },
  {
    id: "reserva-niassa",
    name: "Reserva do Niassa",
    subtitle: "A maior área protegida do país",
    label: "Maior Reserva de África",
    description:
      "A maior reserva natural de Moçambique — e uma das maiores do continente. Elefantes, leões e leopardos num wilderness quase intocado, atravessado pelo Rio Rovuma.",
    tags: ["Safari", "Natureza", "Ecoturismo"],
    href: "/destinations/reserva-niassa",
    pinTop: "66%",
    pinLeft: "75%",
  },
];

// ─── Popup Card ──────────────────────────────────────────────────────────────
function PopupCard({
  destination,
  onClose,
}: {
  destination: Destination;
  onClose: () => void;
}) {
  return (
    <motion.div
      key={destination.id}
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute bottom-5 left-5 z-20"
      style={{ width: 296 }}
    >
      <div
        style={{
          background: "#faf8f2",
          boxShadow: "0px 20px 40px rgba(27, 28, 25, 0.2)",
        }}
      >
        {/* Gold top bar */}
        <div style={{ height: 3, background: "#c9a84c" }} />

        <div style={{ padding: "14px 16px 16px" }}>
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#c9a84c",
                  fontFamily: "DM Sans, system-ui, sans-serif",
                  marginBottom: 3,
                }}
              >
                {destination.label}
              </p>
              <h3
                style={{
                  fontSize: "17px",
                  lineHeight: 1.25,
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#1a3a2a",
                }}
              >
                {destination.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              style={{
                flexShrink: 0,
                width: 22,
                height: 22,
                background: "#f0eee8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 2,
                cursor: "pointer",
                border: "none",
              }}
            >
              <X size={10} color="#1a3a2a" />
            </button>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "12px",
              lineHeight: 1.6,
              color: "#424843",
              fontFamily: "DM Sans, system-ui, sans-serif",
              marginBottom: 10,
            }}
          >
            {destination.description}
          </p>

          {/* Tags */}
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}
          >
            {destination.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  padding: "2px 8px",
                  background: "#d8f3dc",
                  color: "#1a3a2a",
                  fontFamily: "DM Sans, system-ui, sans-serif",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={destination.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: "12px",
              fontWeight: 600,
              color: "#1a3a2a",
              fontFamily: "DM Sans, system-ui, sans-serif",
              textDecoration: "none",
              opacity: 1,
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Explorar destino
            <ArrowRight size={11} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function MapaSection() {
  const [activeId, setActiveId] = useState<string>("ilha-mocambique");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [mapError, setMapError] = useState<boolean>(false);

  const activeDestination = DESTINATIONS.find((d) => d.id === activeId) ?? null;

  function handleSelect(id: string) {
    if (activeId === id && showPopup) {
      setShowPopup(false);
    } else {
      setActiveId(id);
      setShowPopup(true);
    }
  }

  return (
    <section
      className="py-24 px-6 md:px-12"
      style={{ background: "#f0eee8" }}
    >
      <div
        className="flex flex-col lg:flex-row gap-16 items-center"
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >

        {/* ── LEFT — texto + lista ─────────────────────────────────────────── */}
        <motion.div
          className="w-full lg:w-1/3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Label — cor #755b00 (tertiary do HTML), 11px, tracking-widest */}
          <span
            style={{
              display: "block",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#755b00",
              fontFamily: "DM Sans, system-ui, sans-serif",
              marginBottom: 16,
            }}
          >
            Geografia da Emoção
          </span>

          {/* Title — text-4xl bold serif */}
          <h2
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.25rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#1b1c19",
              marginBottom: 20,
            }}
          >
            Mapa Interativo — Descoberta Visual
          </h2>

          {/* Body */}
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
              color: "#424843",
              fontFamily: "DM Sans, system-ui, sans-serif",
              marginBottom: 28,
            }}
          >
            Navegue pelos segredos de Nampula. Das ilhas históricas às
            montanhas do interior, cada ponto guarda uma história esperando
            para ser vivida por si.
          </p>

          {/* Destination list */}
          <div>
            {DESTINATIONS.map((dest, i) => {
              const isActive = activeId === dest.id;
              return (
                <motion.button
                  key={dest.id}
                  onClick={() => handleSelect(dest.id)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "14px 16px",
                    background: isActive ? "#e4e2dd" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                    marginBottom: i < DESTINATIONS.length - 1 ? 4 : 0,
                  }}
                >
                  {/* Material pin icon */}
                  <span
                    className="material-symbols-outlined"
                    style={{
                      color: isActive ? "#c9a84c" : "rgba(66,72,67,0.35)",
                      fontVariationSettings: isActive
                        ? "'FILL' 1, 'wght' 400"
                        : "'FILL' 0, 'wght' 400",
                      fontSize: "22px",
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    location_on
                  </span>

                  <div>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#1b1c19",
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        marginBottom: 2,
                      }}
                    >
                      {dest.name}
                    </p>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#424843",
                        fontFamily: "DM Sans, system-ui, sans-serif",
                      }}
                    >
                      {dest.subtitle}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ── RIGHT — mapa ─────────────────────────────────────────────────── */}
        <motion.div
          className="w-full lg:flex-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Map container — border 8px #e4e2dd, sem border-radius, como no HTML */}
          <div
            style={{
              width: "100%",
              height: 500,
              position: "relative",
              overflow: "hidden",
              border: "8px solid #e4e2dd",
              background: "#dcdad4",
            }}
          >
            {/* ── Background map image ────────────────────────────────────── */}
            {!mapError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={MAP_URL}
                alt="Mapa de Nampula, Moçambique"
                onError={() => setMapError(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  opacity: 0.5,
                }}
              />
            ) : (
              /* Fallback elegante se OSM não carregar */
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, #dcdad4 0%, #c8c6c0 50%, #d4d2cc 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {/* Decorative grid pattern like the map feel */}
                <svg
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.15,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="map-grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#1a3a2a"
                        strokeWidth="0.5"
                      />
                    </pattern>
                    <pattern
                      id="map-grid-lg"
                      width="120"
                      height="120"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 120 0 L 0 0 0 120"
                        fill="none"
                        stroke="#1a3a2a"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                  <rect width="100%" height="100%" fill="url(#map-grid-lg)" />
                </svg>

                {/* Moçambique silhouette hint */}
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 48,
                    color: "#2d6a4f",
                    opacity: 0.4,
                    fontVariationSettings: "'FILL' 0, 'wght' 200",
                  }}
                >
                  map
                </span>
                <p
                  style={{
                    fontSize: 12,
                    color: "#424843",
                    fontFamily: "DM Sans, system-ui, sans-serif",
                    opacity: 0.7,
                  }}
                >
                  Província de Nampula, Moçambique
                </p>
              </div>
            )}

            {/* ── Pins ────────────────────────────────────────────────────── */}
            {DESTINATIONS.map((dest) => {
              const isActive = activeId === dest.id;
              return (
                <div
                  key={dest.id}
                  onClick={() => handleSelect(dest.id)}
                  style={{
                    position: "absolute",
                    top: dest.pinTop,
                    left: dest.pinLeft,
                    transform: "translate(-50%, -100%)",
                    zIndex: isActive ? 10 : 5,
                    cursor: "pointer",
                  }}
                >
                  {/* Tooltip */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      marginBottom: 4,
                      background: "#032416",
                      color: "white",
                      fontSize: 10,
                      padding: "2px 8px",
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.15s ease",
                    }}
                  >
                    {dest.name}
                  </div>

                  {/* Pin icon */}
                  <span
                    className="material-symbols-outlined"
                    style={{
                      color: isActive ? "#c9a84c" : "#727973",
                      fontVariationSettings: "'FILL' 1, 'wght' 400",
                      fontSize: isActive ? "40px" : "26px",
                      display: "block",
                      lineHeight: 1,
                      transition: "font-size 0.2s ease, color 0.2s ease",
                      animation: isActive
                        ? "mapa-bounce 1s ease-in-out infinite"
                        : "none",
                      filter: isActive
                        ? "drop-shadow(0 3px 6px rgba(201,168,76,0.55))"
                        : "none",
                    }}
                  >
                    location_on
                  </span>
                </div>
              );
            })}

            {/* ── Popup Card ──────────────────────────────────────────────── */}
            <AnimatePresence>
              {showPopup && activeDestination && (
                <PopupCard
                  destination={activeDestination}
                  onClose={() => setShowPopup(false)}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Caption */}
          <p
            style={{
              textAlign: "center",
              marginTop: 10,
              fontSize: 11,
              color: "#424843",
              opacity: 0.55,
              fontFamily: "DM Sans, system-ui, sans-serif",
            }}
          >
            Clica nos pins ou na lista para explorar cada destino
          </p>
        </motion.div>
      </div>

      {/* Material Symbols + bounce keyframe */}
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
        @keyframes mapa-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
}