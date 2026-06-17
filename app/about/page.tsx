"use client";

import Image from "next/image";
import Card from "@/components/ui/card";
import { Leaf, Zap, UserCheck } from "lucide-react";

const TIMELINE = [
  { year: "1999", title: "Foundation Established", desc: "Sarathi Clay was founded with a single processing mill in Bhuj-Kutch, Gujarat, supplying local tile units." },
  { year: "2007", title: "First Export Cargo", desc: "Shipped premium washed clay to Middle East ceramic markets via Mundra Port." },
  { year: "2013", title: "Advanced Lab Launch", desc: "Setup in-house atomic absorption spectrometer facilities and particle sizing checkers." },
  { year: "2018", title: "Star Export Status", desc: "Certified as a Star Export House by the Ministry of Commerce & Industry, Government of India." },
  { year: "2024", title: "ESG Alignment & Scaling", desc: "Replaced heavy fuel ovens with energy-efficient kilns and aligned mining with ESG landscape protocols." }
];

const LEADERSHIP = [
  { name: "Mitul Patel", role: "Founder & Chairman", desc: "10+ years in mineral extraction and corporate management." },
  { name: "Meet Patel", role: "Managing Director", desc: "Overseeing logistics, sea shipping, and international distributors." }
];

export default function About() {
  return (
    <div className="relative text-white overflow-hidden bg-[#070707] pt-32 pb-24">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-bronze/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Title */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Corporate Profile</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide mt-2">
            Twenty-Five Years of <br />
            <span className="text-reveal-gold font-bold">Mineral Precision</span>
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed mt-4">
            Sarathi Clay combines traditional mining resources with high-precision engineering technologies. We extract and refine premium clays to match exact physical and chemical client specifications.
          </p>
        </div>

        {/* Brand Philosophy Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
          <div>
            <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Our Purpose</span>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-white mt-2 leading-relaxed">
              We don&apos;t just sell clay. <br />
              We engineer consistency.
            </h2>
            <p className="text-xs text-mutedText leading-relaxed mt-4">
              Our operations are based on a singular principle: complete composition reliability. Ceramic bodies and industrial extenders require absolute mineral purity to withstand massive kiln firing temperatures. We classify our materials grain-by-grain, removing grit and iron so your production runs smoothly.
            </p>
          </div>
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 group">
            <Image
              src="/premium_clay_texture.png"
              alt="High precision mining plant"
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Chronology</span>
            <h3 className="font-serif text-2xl md:text-4xl font-light text-white mt-1">Heritage Timeline</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-white/10 pt-12 relative">
            {TIMELINE.map((item) => (
              <div key={item.year} className="flex flex-col gap-3 relative">
                {/* Visual marker dot */}
                <div className="absolute top-[-54px] left-0 w-2.5 h-2.5 rounded-full bg-gold" />
                <span className="font-serif text-3xl font-light text-gold text-reveal-gold">
                  {item.year}
                </span>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-mutedText leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Directors */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Governance</span>
            <h3 className="font-serif text-2xl md:text-4xl font-light text-white mt-1">Leadership Team</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP.map((leader) => (
              <Card key={leader.name}>
                <div className="flex flex-col gap-3 font-sans">
                  <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center border border-gold/15">
                    <UserCheck className="text-gold h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-wide mt-2">
                    {leader.name}
                  </h4>
                  <span className="text-[9px] font-mono text-gold tracking-widest uppercase">
                    {leader.role}
                  </span>
                  <p className="text-xs text-mutedText leading-relaxed mt-2">
                    {leader.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ESG Sustainability Commitment Section */}
        <div className="bg-[#111111]/60 border border-gold/15 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="text-[9px] font-mono text-gold tracking-widest uppercase">ESG Alignment</span>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-white">
                Eco-Conscious Mineral Sourcing
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Sarathi Clay is committed to reducing the environmental impact of raw mineral extraction. We actively reclaim mined-out pits, replacing soil layers and planting native flora. Our washing systems reuse 85% of industrial water through closed-loop clarification tanks, avoiding natural stream discharge.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-gold text-lg font-serif">85%</span>
                  <span className="text-[8px] text-mutedText uppercase tracking-wider">Water Recycled</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gold text-lg font-serif">40%</span>
                  <span className="text-[8px] text-mutedText uppercase tracking-wider">Solar Support</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gold text-lg font-serif">100%</span>
                  <span className="text-[8px] text-mutedText uppercase tracking-wider">Land Reclamation</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-2">
                <Leaf className="text-gold h-5 w-5" />
                <span className="text-[10px] font-bold text-white uppercase">Green Mines</span>
                <span className="text-[9px] text-mutedText leading-relaxed">Active pit restoration and reforestation.</span>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-2">
                <Zap className="text-gold h-5 w-5" />
                <span className="text-[10px] font-bold text-white uppercase">Kiln Efficiency</span>
                <span className="text-[9px] text-mutedText leading-relaxed">High thermal recovery heat cycles.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
