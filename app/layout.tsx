import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MineralParticles from "@/components/MineralParticles";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarathi Clay | Premium Industrial Clay & Minerals Export",
  description: "Sarathi Clay is India's leading manufacturer and exporter of premium industrial clay, kaolin, china clay, and customized mineral solutions for ceramic, sanitaryware, and tiles.",
  keywords: ["China Clay", "Kaolin Clay", "Calcined Clay", "Washed Clay", "Ceramic Grade Clay", "Sarathi Clay", "Industrial Minerals India", "Tile Grade Clay"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased selection:bg-gold selection:text-black">
        <Loader />
        <CursorGlow />
        <MineralParticles />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
