"use client";

import Link from "next/link";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Info } from "lucide-react";

const INDUSTRIES = [
  {
    title: "Vitrified & Ceramic Tiles",
    use: "Tile Grade Clay & Calcined Kaolin",
    desc: "Speeds up compaction and vitrification, boosting the final tile green MOR strength and ensuring straight firing coordinates."
  },
  {
    title: "Sanitaryware",
    use: "Kaolin & Washed Clay",
    desc: "Ensures casting slip fluidity, high green strength, and controlled deflocculant consumption for modern sanitaryware pressure lines."
  },
  {
    title: "Tableware & Bone China",
    use: "Hydrated China Clay",
    desc: "Premium low-iron white clays that fire into brilliant translucent china bodies, resisting deformation under high kiln heat."
  },
  {
    title: "Paints & Coatings",
    use: "Calcined Clay & Hydrous Kaolin",
    desc: "Serves as a high-opacity Titanium Dioxide (TiO2) extender and color spacing aid, improving dispersion profiles."
  },
  {
    title: "Plastics, Rubber & Cables",
    use: "Calcined Kaolin & Wash Clay",
    desc: "Increases electrical volume resistivity in high-voltage cables and reinforces mechanical properties in rubber formulations."
  },
  {
    title: "Refractories & Glass",
    use: "Premium Calcined Minerals",
    desc: "Supplies high thermal stability and fireproof properties to brick bodies, furnace shapes, and specialty glass fibers."
  }
];

export default function Industries() {
  return (
    <div className="relative text-white overflow-hidden bg-[#070707] pt-32 pb-24 font-sans">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Market Applications</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide mt-2">
            Industries We Serve <br />
            <span className="text-reveal-gold font-bold">With Mineral Solutions</span>
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed mt-4">
            Sarathi Clay engineered minerals are used by global manufacturing lines. We customize parameters to align with specific firing curves, casting techniques, and chemistry limits.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {INDUSTRIES.map((ind, idx) => (
            <Card key={ind.title}>
              <div className="flex flex-col justify-between h-full gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Sector 0{idx + 1}</span>
                  <h3 className="font-serif text-2xl font-light text-white">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-mutedText leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
                
                <div className="border-t border-white/5 pt-4 flex flex-col gap-1 text-[10px] uppercase font-mono tracking-wider">
                  <span className="text-mutedText">Core Mineral Grade:</span>
                  <span className="text-gold font-semibold">{ind.use}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Custom Application Banner */}
        <div className="bg-[#111111]/60 border border-gold/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center border border-gold/15 shrink-0">
              <Info className="text-gold h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Developing a Special formulation?</h4>
              <p className="text-xs text-mutedText mt-1 max-w-xl">
                We regularly partner with industrial research groups to trial new mineral mixtures and testing procedures. Reach our Technical Desk.
              </p>
            </div>
          </div>
          <Link href="/contact">
            <Button variant="primary">Inquire Custom Project</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
