"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const destinations = [
  "Ilha de Moçambique",
  "Praia de Nacala",
  "Monte Namuli",
  "Reserva de Gilé",
  "Praia das Chocas",
  "Baia de Nacala",
  "Mossuril",
];

export default function SearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(2);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filtered = destinations.filter((d) =>
    d.toLowerCase().includes(destination.toLowerCase())
  );

  const handleSearch = () => {
    router.push(
      `/accommodations?destination=${destination}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`
    );
  };

  return (
    <div className="relative z-30 -mt-8 mx-auto max-w-6xl px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">

        {/* Título discreto */}
        <p className="text-xs text-[#2d6a4f] font-medium tracking-widest uppercase mb-4 px-1">
          Encontre a sua experiência
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 items-end">

          {/* Destino */}
          <div className="relative md:col-span-1">
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5 px-1">
              Destino
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a84c]"
                width="16" height="16" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
              </svg>
              <input
                type="text"
                placeholder="Para onde vai?"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-xl text-sm text-[#1a3a2a] placeholder-gray-400 focus:outline-none focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f] transition-colors"
              />
              {/* Sugestões */}
              {showSuggestions && destination.length > 0 && filtered.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden">
                  {filtered.map((d) => (
                    <button
                      key={d}
                      className="w-full text-left px-4 py-2.5 text-sm text-[#1a3a2a] hover:bg-[#d8f3dc] transition-colors"
                      onClick={() => {
                        setDestination(d);
                        setShowSuggestions(false);
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Check-in */}
          <div>
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5 px-1">
              Check-in
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a84c] pointer-events-none"
                width="16" height="16" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <input
                type="date"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-xl text-sm text-[#1a3a2a] focus:outline-none focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f] transition-colors"
              />
            </div>
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5 px-1">
              Check-out
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a84c] pointer-events-none"
                width="16" height="16" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <input
                type="date"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                min={checkin || new Date().toISOString().split("T")[0]}
                className="w-full pl-9 pr-3 py-3 border border-gray-200 rounded-xl text-sm text-[#1a3a2a] focus:outline-none focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f] transition-colors"
              />
            </div>
          </div>

          {/* Hóspedes + Botão */}
          <div className="flex gap-3 items-end">
            {/* Hóspedes */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5 px-1">
                Hóspedes
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="px-3 py-3 text-[#2d6a4f] hover:bg-[#d8f3dc] transition-colors font-medium text-lg leading-none"
                >
                  −
                </button>
                <span className="flex-1 text-center text-sm font-medium text-[#1a3a2a]">
                  {guests}
                </span>
                <button
                  onClick={() => setGuests(Math.min(20, guests + 1))}
                  className="px-3 py-3 text-[#2d6a4f] hover:bg-[#d8f3dc] transition-colors font-medium text-lg leading-none"
                >
                  +
                </button>
              </div>
            </div>

            {/* Botão pesquisar */}
            <button
              onClick={handleSearch}
              className="bg-[#1a3a2a] hover:bg-[#2d6a4f] text-white font-semibold px-6 py-3 rounded-xl text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-2"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
              </svg>
              Pesquisar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}