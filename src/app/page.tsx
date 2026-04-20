import HeroSection from "@/components/sections/HeroSection";
import SearchBar from "@/components/sections/SearchBar";
import DestacosSection from "@/components/sections/DestacosSection";
import HoteisSection from "@/components/sections/HoteisSection";
import ExperienciasSection from "@/components/sections/ExperienciasSection";
import MapaSection from "@/components/sections/MapaSection";
import TestemunhoSection from "@/components/sections/TestemunhoSection";
import TurismoTransformaSection from "@/components/sections/TurismoTransformaSection";
import CTAFinalSection from "@/components/sections/CTAFinalSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchBar />
      <DestacosSection />
      <HoteisSection />
      <ExperienciasSection />
      <MapaSection />
      <TestemunhoSection />
      <TurismoTransformaSection />
      <CTAFinalSection />
    </main>
  );
}
