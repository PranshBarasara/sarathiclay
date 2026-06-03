"use client";

import Link from "next/link";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

const FACILITIES = [
  {
    title: "Hydrocyclone Processing Plant",
    desc: "Computerized washing and classifying lines that remove free silica and heavy grit from hydrous clays, classification to sub-micron particle sizing.",
    stat: "5,000 MT/Month",
    param: "PLC automated"
  },
  {
    title: "Batch & Continuous Ball Mills",
    desc: "Lined with high-density alumina tiles and using silica grinding media, our mills grind raw kaolin without introducing iron contamination.",
    stat: "D50 < 0.8 Micron",
    param: "Alumina Lined"
  },
  {
    title: "Thermal Calcining Rotary Kiln",
    desc: "High-temperature kilns operating at controlled heating curves up to 1050°C to alter the crystalline structure of kaolin into highly opaque calcined clay.",
    stat: "94% Whiteness",
    param: "Calcinated"
  },
  {
    title: "Advanced Silo Warehousing",
    desc: "Clean dry warehousing facilities containing moisture-sealed vertical storage silos, keeping materials dry and preventing environmental mixing.",
    stat: "15,000 MT Capacity",
    param: "Dust-sealed"
  }
];

export default function Infrastructure() {
  return (
    <div className="relative text-white overflow-hidden bg-[#070707] pt-32 pb-24 font-sans">
      {/* Soft background glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Industrial Capability</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide mt-2">
            The Infrastructure of <br />
            <span className="text-reveal-gold font-bold">Sarathi Clay Plant</span>
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed mt-4">
            Located close to Mundra Port, our production site utilizes advanced washing systems, micro-fine grinding equipment, and computerized quality-checking systems.
          </p>
        </div>

        {/* Bento Grid Visual Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          
          <div className="md:col-span-2 bg-[#111111]/70 border border-gold/15 rounded-2xl p-6 md:p-8 flex flex-col justify-between aspect-[1.8/1] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent pointer-events-none" />
            <div>
              <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Mining Operations</span>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-white mt-2">Raw Material Reserves</h3>
              <p className="text-xs text-mutedText mt-3 max-w-md leading-relaxed">
                We control extensive premium raw clay mining concessions in the Kutch region, guaranteeing chemical profile stability and continuity of supply for long-term manufacturing contracts.
              </p>
            </div>
            <div className="flex gap-8 text-[10px] uppercase font-mono tracking-wider text-gold border-t border-white/5 pt-4">
              <div>Mining Area: <span className="text-white">120+ Hectares</span></div>
              <div>Reserves: <span className="text-white">20+ Years Supply</span></div>
            </div>
          </div>

          <div className="bg-[#111111]/70 border border-gold/15 rounded-2xl p-6 flex flex-col justify-between aspect-square md:aspect-auto group">
            <div>
              <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Energy Systems</span>
              <h3 className="font-serif text-xl font-light text-white mt-1">Solar Micro-Grid</h3>
              <p className="text-xs text-mutedText mt-2 leading-relaxed">
                Supporting our refining machinery with clean, renewable energy to lower carbon footprints.
              </p>
            </div>
            <span className="text-[9px] font-mono text-gold tracking-widest uppercase">
              1.2 MW Solar Support
            </span>
          </div>

        </div>

        {/* Plant Facilities Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {FACILITIES.map((fac, idx) => (
            <Card key={fac.title}>
              <div className="flex flex-col justify-between h-full gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Facility 0{idx + 1}</span>
                  <h3 className="font-serif text-2xl font-light text-white">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-mutedText leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
                
                <div className="flex justify-between items-center border-t border-white/5 pt-4 text-[10px] uppercase font-mono tracking-wider">
                  <div>Capacity: <span className="text-white">{fac.stat}</span></div>
                  <div className="text-gold">{fac.param}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-[#111111]/60 border border-gold/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Want to tour our facility?</h4>
            <p className="text-xs text-mutedText mt-1 max-w-xl">
              We arrange plant visits for industrial buyers, procurement managers, and laboratory technical teams. Get in touch with the logistics desk to coordinate.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="primary">Schedule Factory Tour</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
