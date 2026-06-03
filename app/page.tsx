"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Marquee from "@/components/ui/marquee";
import WorldMap from "@/components/WorldMap";
import { PRODUCTS } from "@/lib/productsData";
import { 
  ArrowRight, 
  CheckCircle2, 
  Settings, 
  Award, 
  Globe, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Truck, 
  Clock
} from "lucide-react";

// Statistics list for Hero
const HERO_STATS = [
  { value: "25+", label: "Years Experience" },
  { value: "5000+ MT", label: "Monthly Capacity" },
  { value: "100+", label: "Global Clients" },
  { value: "15+", label: "Export Countries" }
];

// Why Sarathi Clay features
const WHY_US_FEATURES = [
  {
    icon: <Cpu className="text-gold h-6 w-6" />,
    title: "Advanced Processing",
    desc: "Computerized micro-refinement and hydrocyclone classification units for uniform mineral sizing."
  },
  {
    icon: <Award className="text-gold h-6 w-6" />,
    title: "In-House QA Lab",
    desc: "Equipped with atomic absorption spectroscopy and laser particle size analyzers for absolute consistency."
  },
  {
    icon: <Layers className="text-gold h-6 w-6" />,
    title: "Consistent Composition",
    desc: "Daily mineralogical audits ensure batch-to-batch chemical stability over decades."
  },
  {
    icon: <Globe className="text-gold h-6 w-6" />,
    title: "Global Export Standards",
    desc: "Custom moisture control, anti-humidity packing, and complete documentation compliance for sea freight."
  },
  {
    icon: <Settings className="text-gold h-6 w-6" />,
    title: "Custom Formulations",
    desc: "Co-engineering clay properties to match specific thermal properties and kiln firing profiles."
  },
  {
    icon: <Truck className="text-gold h-6 w-6" />,
    title: "Timely Delivery Network",
    desc: "Strategically located close to Mundra Port, enabling fast vessel loading and global transit."
  },
  {
    icon: <Clock className="text-gold h-6 w-6" />,
    title: "24/7 Technical Support",
    desc: "Dedicated mineral engineers assisting in casting slip viscosity adjustments and body compounding."
  },
  {
    icon: <TrendingUp className="text-gold h-6 w-6" />,
    title: "Sustainable Sourcing",
    desc: "Responsible land restoration, eco-friendly washing systems, and solar-supported processing."
  }
];

// Manufacturing process steps
const PROCESS_STEPS = [
  { step: "01", title: "Raw Material Sourcing", desc: "Selectively mined premium raw clay deposits." },
  { step: "02", title: "Crushing & Blending", desc: "Mechanical crushing and primary batch homogenization." },
  { step: "03", title: "Washing & Classification", desc: "Hydro-washing and multi-stage cyclone classification." },
  { step: "04", title: "Grinding & Refining", desc: "Ball mills grind to micro-fine particle specifications." },
  { step: "05", title: "Laboratory Validation", desc: "Spectroscopic chemical and physical parameter clearance." },
  { step: "06", title: "Luxury Packaging", desc: "Laminated moisture-barrier HDPE or customized jumbo bag packaging." },
  { step: "07", title: "Global Shipping", desc: "Secure container loading and dispatch from Mundra Port." }
];

export default function Home() {
  return (
    <div className="relative text-white overflow-hidden bg-[#070707]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-16 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[160px] rounded-full pointer-events-none" />

        {/* Abstract Architectural Grid Overlay (Rolls Royce/Bentley craftsmanship feel) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,169,107,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,107,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        {/* Cinematic dark luxury overlay gradient */}
        <div className="absolute inset-0 bg-luxury-gradient z-0 pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <motion.span
            className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-gold font-sans font-bold border border-gold/25 px-4 py-1.5 rounded-full bg-gold/5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            India&apos;s Premier Mineral Engineering House
          </motion.span>

          <motion.h1
            className="font-serif text-4xl sm:text-6xl md:text-8xl font-light tracking-tight leading-none text-white max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transforming Minerals <br />
            Into <span className="text-reveal-gold font-bold">Industrial Excellence</span>
          </motion.h1>

          <motion.p
            className="text-xs sm:text-sm md:text-base text-mutedText max-w-2xl font-sans tracking-wide leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Sleek raw materials, micro-fine particle engineering, and certified chemical consistencies. We serve the world&apos;s leading ceramic, tile, and sanitaryware brands.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/products">
              <Button variant="primary">Explore Clay Grades</Button>
            </Link>
            <Link href="/infrastructure">
              <Button variant="outline">Our Infrastructure</Button>
            </Link>
          </motion.div>
        </div>

        {/* Hero Statistics */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 md:mt-28 border-t border-white/10 pt-10 relative z-10 font-sans">
          {HERO_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="text-2xl md:text-4xl font-light text-white font-serif tabular-nums text-reveal-gold">
                {stat.value}
              </div>
              <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-mutedText mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. COMPANY SPLIT INTRODUCTION */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 relative bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Macro Image */}
          <div className="lg:col-span-5 relative w-full aspect-square rounded-2xl overflow-hidden border border-gold/20 shadow-2xl group">
            <Image
              src="/premium_clay_texture.png"
              alt="Premium Clay Texture macro photograph"
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            {/* Ambient luxury gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/50 tracking-wider">
              XRF SPECTROMETER BATCH SCAN #998-A
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 font-sans">
            <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold font-bold">
              Engineering Heritage
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white leading-snug">
              Bespoke Mineral Craftsmanship <br />
              <span className="text-reveal-gold font-bold">Engineered for Global Industries</span>
            </h2>
            
            <p className="text-xs md:text-sm text-mutedText leading-relaxed tracking-wide">
              Sarathi Clay is India&apos;s leading manufacturer and exporter of premium industrial clay and mineral solutions. With advanced processing facilities, in-house laboratories, and stringent batch-to-batch quality management systems, we deliver high-performance materials tailored for vitrified tile, ceramic tableware, sanitaryware, paint, and high-voltage electrical insulators.
            </p>
            
            <p className="text-xs md:text-sm text-mutedText leading-relaxed tracking-wide">
              Every shipment undergoes rigorous chemical composition audits, whiteness parameter checks, and particle size distribution scans using laser diffraction instruments. We ensure our materials flow perfectly into your production line.
            </p>

            <div className="flex gap-8 mt-4 border-t border-white/5 pt-6 text-[10px] tracking-wider uppercase font-mono text-gold">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold" />
                <span>ISO 9001:2015 Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold" />
                <span>Custom Slurry Controls</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY SARATHI CLAY */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Performance Matrix</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-wide mt-2">
            Why Leading Factories <span className="text-reveal-gold font-bold">Approve Sarathi</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_FEATURES.map((feat) => (
            <Card key={feat.title}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center border border-gold/15 group-hover:bg-gold/10 transition-colors">
                  {feat.icon}
                </div>
                <h4 className="text-xs font-bold tracking-wider text-white uppercase mt-2">
                  {feat.title}
                </h4>
                <p className="text-xs text-mutedText leading-relaxed font-sans">
                  {feat.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. PRODUCTS SHOWCASE */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Industrial Portfolio</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-wide mt-2">
              Our Core <span className="text-reveal-gold font-bold">Clay Grades</span>
            </h2>
          </div>
          <Link href="/products" className="text-xs text-gold tracking-widest uppercase hover:underline flex items-center gap-2">
            <span>View All Specifications</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
          {PRODUCTS.slice(0, 4).map((product) => (
            <Card key={product.id} className="h-full flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <span className="text-[9px] font-mono text-gold tracking-widest uppercase">
                  {product.id.replace("-", " ")}
                </span>
                <h3 className="font-serif text-xl font-light text-white">
                  {product.name}
                </h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  {product.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {product.industries.slice(0, 2).map((ind) => (
                    <span key={ind} className="text-[8px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/60">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] text-mutedText uppercase tracking-wider font-mono">
                  Whiteness: {product.specs["Whiteness (ISO)"] || product.specs["Fired Whiteness (1220°C)"] || "Premium"}
                </span>
                <Link href={`/products/${product.id}`} className="text-[10px] text-gold hover:text-white transition-colors flex items-center gap-1">
                  <span>TDS Details</span>
                  <ArrowRight size={10} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. MANUFACTURING EXCELLENCE TIMELINE */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Process Architecture</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-wide mt-2">
            Our Precision <span className="text-reveal-gold font-bold">Manufacturing Flow</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative font-sans">
          {/* Vertical central path line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-gold/50 via-gold/10 to-transparent -translate-x-1/2" />
          
          <div className="flex flex-col gap-16">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.step} 
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle dot marker */}
                  <div className="absolute left-[20px] md:left-1/2 w-6 h-6 rounded-full bg-[#070707] border border-gold flex items-center justify-center -translate-x-1/2 z-10 text-[9px] text-gold font-mono font-bold">
                    {step.step}
                  </div>

                  {/* Empty placeholder column to balance grid on desktop */}
                  <div className="hidden md:block w-1/2 px-12" />

                  {/* Active content column */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-12 flex flex-col gap-2">
                    <span className="text-[9px] font-mono text-gold tracking-widest uppercase">
                      Stage {step.step}
                    </span>
                    <h4 className="font-serif text-lg font-light text-white">
                      {step.title}
                    </h4>
                    <p className="text-xs text-mutedText leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. INFRASTRUCTURE BENTO GRID */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Asset Overview</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-wide mt-2">
            The Infrastructure <span className="text-reveal-gold font-bold">of Sarathi Clay</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 font-sans">
          
          {/* Card 1 - Giant Processing Plant */}
          <div className="md:col-span-4 bg-[#111111] rounded-2xl border border-gold/15 p-6 md:p-8 flex flex-col justify-between aspect-[1.8/1] relative overflow-hidden group">
            <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,rgba(200,169,107,0.1)_0%,transparent_60%)] pointer-events-none" />
            <div>
              <span className="text-[9px] font-mono text-gold tracking-[0.2em] uppercase">Core Facility</span>
              <h3 className="font-serif text-2xl font-light text-white mt-1">Processing Plant</h3>
              <p className="text-xs text-mutedText max-w-sm mt-3 leading-relaxed">
                Our main processing plant features computerized hydrocyclone systems and rotary drying drums to classified minerals to sub-micron levels.
              </p>
            </div>
            <div className="flex gap-8 text-[10px] uppercase font-mono tracking-widest text-gold border-t border-white/5 pt-4">
              <div>Capacity: <span className="text-white">5,000 MT/m</span></div>
              <div>Automation: <span className="text-white">SCADA Controls</span></div>
            </div>
          </div>

          {/* Card 2 - Laboratory */}
          <div className="md:col-span-2 bg-[#111111] rounded-2xl border border-gold/15 p-6 flex flex-col justify-between aspect-square md:aspect-auto group">
            <div>
              <span className="text-[9px] font-mono text-gold tracking-[0.2em] uppercase">Research & QA</span>
              <h3 className="font-serif text-xl font-light text-white mt-1">In-House Lab</h3>
              <p className="text-xs text-mutedText mt-2 leading-relaxed">
                Equipped with Atomic Absorption Spectrometers and laser size checkers.
              </p>
            </div>
            <Link href="/quality" className="text-[10px] text-gold tracking-widest uppercase hover:underline flex items-center gap-1">
              <span>View Testing Standards</span>
              <ArrowRight size={10} />
            </Link>
          </div>

          {/* Card 3 - Storage */}
          <div className="md:col-span-2 bg-[#111111] rounded-2xl border border-gold/15 p-6 flex flex-col justify-between aspect-square md:aspect-auto group">
            <div>
              <span className="text-[9px] font-mono text-gold tracking-[0.2em] uppercase">Logistics Unit</span>
              <h3 className="font-serif text-xl font-light text-white mt-1">Silo Warehousing</h3>
              <p className="text-xs text-mutedText mt-2 leading-relaxed">
                Large dry storage zones matching clean mineral containment protocols.
              </p>
            </div>
            <span className="text-[9px] font-mono text-mutedText tracking-wider uppercase">
              15,000 MT Storage Capacity
            </span>
          </div>

          {/* Card 4 - Grinding Unit */}
          <div className="md:col-span-4 bg-[#111111] rounded-2xl border border-gold/15 p-6 md:p-8 flex flex-col justify-between aspect-[1.8/1] relative overflow-hidden group">
            <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,rgba(200,169,107,0.1)_0%,transparent_60%)] pointer-events-none" />
            <div>
              <span className="text-[9px] font-mono text-gold tracking-[0.2em] uppercase">Grinding Unit</span>
              <h3 className="font-serif text-2xl font-light text-white mt-1">Ball Mills & Pulverizers</h3>
              <p className="text-xs text-mutedText max-w-sm mt-3 leading-relaxed">
                Continuous and batch wet ball grinding systems lined with alumina tiles to keep materials iron-free.
              </p>
            </div>
            <div className="flex gap-8 text-[10px] uppercase font-mono tracking-widest text-gold border-t border-white/5 pt-4">
              <div>Lining: <span className="text-white">Alumina Tile</span></div>
              <div>Particle D50: <span className="text-white">&lt;0.8 Micron</span></div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. GLOBAL PRESENCE WITH SVG MAP */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Global Coverage</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-wide mt-2">
            Mines to Mundra, <span className="text-reveal-gold font-bold">Mundra to the World</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <WorldMap />
        </div>
      </section>

      {/* 8. CLIENT INFITE MARQUEE */}
      <section className="py-16 border-t border-b border-white/5 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <span className="text-[9px] tracking-[0.3em] uppercase text-gold/60 font-bold">Approved in Firing Bodies Globally</span>
        </div>
        <Marquee direction="left">
          {[
            "SOMANY CERAMICS",
            "KAJARIA CERAMICS",
            "CERA SANITARYWARE",
            "HINDWARE",
            "RAK CERAMICS",
            "SIMPOLO VITRIFIED",
            "ASIAN GRANITO",
            "ORIENT BELL"
          ].map((client) => (
            <span 
              key={client} 
              className="text-base md:text-xl font-serif font-light tracking-[0.25em] text-white/40 hover:text-white transition-colors"
            >
              {client}
            </span>
          ))}
        </Marquee>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Endorsements</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-wide mt-2">
            Verified by <span className="text-reveal-gold font-bold">Procurement Leaders</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          
          <Card>
            <div className="flex flex-col gap-6">
              <p className="text-xs md:text-sm text-mutedText leading-relaxed italic">
                &ldquo;We have relied on Sarathi Clay for China Clay and custom ceramic clay slips for over seven years. Their chemical compositions remain steady between batches, which has cut our tile cracking rate in half. Truly premium mineral supply.&rdquo;
              </p>
              <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[10px] uppercase font-mono tracking-wider">
                <div>
                  <div className="text-white font-bold">VP Production</div>
                  <div className="text-gold">Vitrified Tile Manufacturer</div>
                </div>
                <span className="text-white/30">Verified Review</span>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col gap-6">
              <p className="text-xs md:text-sm text-mutedText leading-relaxed italic">
                &ldquo;Sarathi&apos;s Star Export credentials ensure that logistics run flawlessly. The packaging is moisture-sealed, and particle configurations are checked before they leave port. We highly recommend their Calcined Kaolin for paint extension.&rdquo;
              </p>
              <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[10px] uppercase font-mono tracking-wider">
                <div>
                  <div className="text-white font-bold">Global Sourcing Manager</div>
                  <div className="text-gold">Paint & Coatings Group, UAE</div>
                </div>
                <span className="text-white/30">Verified Review</span>
              </div>
            </div>
          </Card>

        </div>
      </section>

      {/* 10. CONTACT CALL TO ACTION */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-sans font-bold">Direct Export Desk</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Ready to Optimize Your <span className="text-reveal-gold font-bold">Raw Material Quality?</span>
          </h2>
          <p className="text-xs md:text-sm text-mutedText max-w-xl font-sans tracking-wide leading-relaxed">
            Get in touch with our engineering team for customized mineral compositions, packaging options, and direct door-to-port export quotes.
          </p>
          <Link href="/contact">
            <Button variant="primary">Inquire Direct Desk</Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
