"use client";

import Link from "next/link";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { ShieldCheck, Award, Info, FileText } from "lucide-react";

const LAB_TESTS = [
  {
    title: "Chemical Testing (XRF & AAS)",
    desc: "We analyze chemical oxide compositions (Al2O3, SiO2, Fe2O3, TiO2) for every production run to ensure absolute consistency and prevent firing coloration deviations.",
    param: "Oxides Tolerance: < 0.05%"
  },
  {
    title: "Laser Particle Sizing",
    desc: "Using laser diffraction, we map the exact particle size distribution (PSD) curve to guarantee slip properties and casting rate properties.",
    param: "d50 range: 0.6 - 1.2µ"
  },
  {
    title: "Bending Strength (MOR)",
    desc: "Measuring green, dry, and fired Modulus of Rupture on hydraulic press machines to ensure ceramics handle shaping and handling without breaking.",
    param: "Press MOR: up to 4.5 MPa"
  },
  {
    title: "Whiteness & Color Values",
    desc: "ISO brightness checkers verify firing whiteness index values, ensuring sanitaryware and porcelain achieve clean colors under kiln atmospheres.",
    param: "Brightness: up to 94%"
  }
];

export default function QualityAssurance() {
  return (
    <div className="relative text-white overflow-hidden bg-[#070707] pt-32 pb-24 font-sans">
      {/* Background soft glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Zero Tolerance Quality</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide mt-2">
            Quality Assurance & <br />
            <span className="text-reveal-gold font-bold">Compliance Systems</span>
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed mt-4">
            Sarathi Clay implements strict ISO 9001:2015 controls across our entire process: mining, refining, packing, and dispatch. We test every single batch.
          </p>
        </div>

        {/* Dynamic Lab Tests Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {LAB_TESTS.map((test, idx) => (
            <Card key={test.title}>
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Lab Protocol 0{idx + 1}</span>
                  <h3 className="font-serif text-2xl font-light text-white">
                    {test.title}
                  </h3>
                  <p className="text-xs text-mutedText leading-relaxed">
                    {test.desc}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[10px] uppercase font-mono tracking-wider text-gold">
                  <span>Parameter Control</span>
                  <span className="text-white">{test.param}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications and Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
          <Card>
            <div className="flex flex-col gap-4">
              <Award className="text-gold h-8 w-8" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">ISO 9001:2015</h4>
              <p className="text-xs text-mutedText leading-relaxed">
                Certified quality systems for mining, processing, testing, and shipping industrial clays globally.
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col gap-4">
              <ShieldCheck className="text-gold h-8 w-8" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">REACH & ROHS</h4>
              <p className="text-xs text-mutedText leading-relaxed">
                Completely free of hazardous chemicals, guaranteeing environmental safety and plant worker safety.
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col gap-4">
              <FileText className="text-gold h-8 w-8" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">COA Certifications</h4>
              <p className="text-xs text-mutedText leading-relaxed">
                Certificate of Analysis (COA) supplied with every container load, tracking specifications.
              </p>
            </div>
          </Card>

        </div>

        {/* Global Standards Banner */}
        <div className="bg-[#111111]/60 border border-gold/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center border border-gold/15 shrink-0">
              <Info className="text-gold h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Need Batch Audit Reports?</h4>
              <p className="text-xs text-mutedText mt-1 max-w-xl">
                We maintain chemical and physical archive samples for all shipments for 12 months. Request specific archive data through the QA Desk.
              </p>
            </div>
          </div>
          <Link href="/contact">
            <Button variant="primary">Contact QA Desk</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
