import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Verdant Archive | Visit Nampula",
  description: "Descubra Nampula – O Tesouro do Norte de Moçambique.",
  keywords: "Nampula, turismo, Moçambique, Ilha de Moçambique, Nacala, Monte Namuli",
  openGraph: {
    title: "The Verdant Archive | Visit Nampula",
    description: "Descubra Nampula – O Tesouro do Norte de Moçambique.",
    type: "website",
    locale: "pt_MZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}