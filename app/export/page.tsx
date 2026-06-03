"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import WorldMap from "@/components/WorldMap";
import { PRODUCTS } from "@/lib/productsData";
import { 
  Ship, 
  ShieldCheck, 
  FileSpreadsheet, 
  TrendingUp, 
  Anchor, 
  FileCheck, 
  Container, 
  ChevronRight,
  Info,
  Check,
  Scale,
  Award,
  Loader2,
  Send
} from "lucide-react";

// Packaging Options Data
const PACKAGING_OPTIONS = [
  {
    id: "jumbo",
    title: "1.0 - 1.25 MT Jumbo Sacks",
    subtitle: "Bulk Overhead Logistics",
    desc: "Heavy-duty woven polypropylene big bags equipped with water-tight inner polyethylene liners. Crafted with premium cross-corner lifting loops for safe overhead crane handling and a dust-free bottom discharge spout.",
    features: [
      "Moisture-proof inner PE liner (80-120 micron thickness)",
      "SWL (Safe Working Load) rating of 5:1 certification",
      "UV-stabilized fabric for outdoor yard storage resilience",
      "Optimized for automated silo discharge and crane lifts"
    ],
    dimensions: "90 x 90 x 120 cm standard sizing",
    weightRange: "1,000 kg - 1,250 kg per bag",
    image: "/jumbo_bag.png" // Abstract luxury vector mockup will represent this, or CSS gradient
  },
  {
    id: "laminated",
    title: "25kg / 50kg Laminated Sacks",
    subtitle: "Precision Batch Feeding",
    desc: "Double-walled laminated bags featuring a heat-sealed moisture barrier. Perfect for manual batch-mixing systems where precise compounding is required at the factory slip-house.",
    features: [
      "Laminated PP woven construction with external anti-slip coating",
      "Micro-perforated air release valve for compact block-palletizing",
      "Ultra-low moisture ingress during long sea-freight transit",
      "Highly legible chemical grade markings and batch codes"
    ],
    dimensions: "55 x 85 cm standard sizing (50kg)",
    weightRange: "25.0 kg or 50.0 kg net weight per bag",
    image: "/paper_bag.png"
  },
  {
    id: "palletized",
    title: "ISPM-15 Heat-Treated Pallets",
    subtitle: "Maximum Maritime Protection",
    desc: "Rigid multi-layer unitized loading system. Bags are precisely stacked and wrapped using high-tensile stretch hood film, complete with edge guards and silica gel moisture-absorbers.",
    features: [
      "100% compliant with ISPM-15 international phytosanitary standards",
      "Four-way entry robust wooden pallets for standard forklift handling",
      "High-tension orbital stretch wrapping (5 layers) for anti-tilt stability",
      "Integrated heavy-duty corner boards to prevent compression damage"
    ],
    dimensions: "110 x 110 cm fumigated wooden layout",
    weightRange: "1,000 kg - 1,500 kg net weight per pallet",
    image: "/palletized_load.png"
  }
];

// Logistics Advantage
const LOGISTICS_FACTS = [
  {
    title: "Mundra Port (~50 KM)",
    desc: "Deep-draft berths capable of handling super-post-Panamax container vessels. Direct customs clearing and high container turnaround rates."
  },
  {
    title: "Star Export House",
    desc: "Government of India certified export capability, granting priority customs processing, simplified document clearance, and zero-tax bonding."
  },
  {
    title: "Humid Control Dispatch",
    desc: "Pre-shipment oven drying tests and container lining with desiccants prevent hydration and keep clay minerals at optimal consistency."
  }
];

// Shipping Transit times
const TRANSIT_TIMES = [
  { region: "Middle East", port: "Jebel Ali, UAE", days: "4 - 6 Days", frequency: "Weekly (3 sailings)" },
  { region: "Europe Hub", port: "Rotterdam, Netherlands", days: "20 - 22 Days", frequency: "Weekly (2 sailings)" },
  { region: "Southeast Asia", port: "Singapore Terminal", days: "10 - 12 Days", frequency: "Weekly (4 sailings)" },
  { region: "East Africa", port: "Mombasa, Kenya", days: "14 - 16 Days", frequency: "Bi-Weekly" },
  { region: "South America", port: "Santos, Brazil", days: "26 - 28 Days", frequency: "Weekly (1 sailing)" },
];

export default function ExportPage() {
  const [activePackTab, setActivePackTab] = useState("jumbo");
  const [selectedGrade, setSelectedGrade] = useState("china-clay");
  const [volumeMT, setVolumeMT] = useState(100);
  const [packagingType, setPackagingType] = useState("jumbo");
  const [destinationPort, setDestinationPort] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Form State
  const [buyerName, setBuyerName] = useState("");
  const [buyerCompany, setBuyerCompany] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerMessage, setBuyerMessage] = useState("");

  const calculatorRef = useRef<HTMLDivElement>(null);

  // Calculations
  const activeProduct = PRODUCTS.find(p => p.id === selectedGrade) || PRODUCTS[0];
  
  // 1 FCL holds ~20 MT of palletized, ~25 MT of loose bulk ball clay
  const fclCapacity = packagingType === "bulk" ? 25 : 20;
  const estimatedContainers = Math.ceil(volumeMT / fclCapacity);
  
  // Pallet calculation
  const estimatedPallets = packagingType === "laminated" 
    ? Math.ceil(volumeMT / 2) // 2 MT per pallet
    : packagingType === "jumbo"
      ? Math.ceil(volumeMT / 1) // 1 MT jumbo bag on 1 pallet
      : 0; // bulk has no pallets

  // Desiccant bags recommended (2 per container for hydrous clay, 4 for calcined or washed under high humidity)
  const desiccantBags = estimatedContainers * (selectedGrade === "calcined-clay" ? 4 : 2);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    // Construct a structured message containing all shipping metrics
    const structuredMessage = `
[Global Export Configuration]
- Material Grade: ${activeProduct.name}
- Required Volume: ${volumeMT} MT
- Packaging: ${packagingType === "jumbo" ? "Jumbo Sacks" : packagingType === "laminated" ? "Laminated Sacks" : "Loose Bulk"}
- Target Discharge Port: ${destinationPort || "Not Specified"}
- Estimated Containers: ${estimatedContainers} FCL (20ft)
- Estimated Pallets: ${packagingType === "bulk" ? "None" : estimatedPallets}
- Moisture Desiccant Bags: ${desiccantBags}

[Buyer Special Requests]:
${buyerMessage || "None"}
    `.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: buyerName,
          company: buyerCompany,
          email: buyerEmail,
          phone: buyerPhone,
          industry: "Global Exports",
          product: activeProduct.name,
          message: structuredMessage,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit export configuration.");
      }

      setFormSubmitted(true);
      setBuyerName("");
      setBuyerCompany("");
      setBuyerEmail("");
      setBuyerPhone("");
      setBuyerMessage("");
    } catch (err) {
      console.error("Export RFQ submit error:", err);
      setErrorMsg(err instanceof Error ? err.message : "Failed to transmit RFQ. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative text-white overflow-hidden bg-[#070707] pt-32 pb-24 font-sans">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gold/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-1/4 w-[500px] h-[500px] bg-bronze/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-[600px] h-[600px] bg-gold/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Abstract Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,169,107,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,107,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. HERO SECTION */}
        <div className="max-w-4xl mb-24 relative">
          <motion.div
            className="flex items-center gap-2 border border-gold/30 px-4 py-1.5 rounded-full bg-gold/5 w-fit mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Award size={14} className="text-gold" />
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold font-bold">
              Star Export House Certified • Govt of India
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-4xl sm:text-6xl md:text-8xl font-light tracking-tight leading-none text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Global Supply & <br />
            <span className="text-reveal-gold font-bold">Logistics Desk</span>
          </motion.h1>

          <motion.p
            className="text-xs sm:text-sm md:text-base text-mutedText leading-relaxed mt-6 max-w-2xl tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Serving high-performance industries across 15+ countries. Strategically situated only 50 kilometers from Mundra Port (India&apos;s maritime gateway), Sarathi Clay guarantees rapid ocean freight container dispatch, custom-sealed weather barriers, and complete regulatory compliance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="primary" onClick={handleScrollToCalculator}>
              Configure Cargo Shipment
            </Button>
            <Link href="/contact">
              <Button variant="outline">Contact Shipping Officer</Button>
            </Link>
          </motion.div>
        </div>

        {/* 2. STATS & ADVANTAGE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {LOGISTICS_FACTS.map((fact, idx) => (
            <Card key={fact.title} className="flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center border border-gold/15 shrink-0">
                  {idx === 0 ? <Anchor className="text-gold h-5 w-5" /> : idx === 1 ? <ShieldCheck className="text-gold h-5 w-5" /> : <Container className="text-gold h-5 w-5" />}
                </div>
                <h3 className="font-serif text-lg font-light text-white uppercase mt-2">
                  {fact.title}
                </h3>
                <p className="text-xs text-mutedText leading-relaxed font-sans">
                  {fact.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* 3. MAP & SHIPPING MATRIX (SPLIT ROW) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          
          {/* Map Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="mb-2">
              <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Global Proximity</span>
              <h2 className="font-serif text-2xl md:text-4xl font-light text-white mt-1">
                Strategic Sea Gateways
              </h2>
              <p className="text-xs text-mutedText leading-relaxed mt-2 max-w-xl">
                Our plant&apos;s proximity to Mundra Port enables container dispatch to reach primary shipping vessel feeder lines within 24 hours of mineral classification and packing.
              </p>
            </div>
            <WorldMap />
          </div>

          {/* Transit Time Matrix Column */}
          <div className="lg:col-span-5 bg-[#0a0a0a] border border-gold/15 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[50px] pointer-events-none rounded-full" />
            
            <div className="flex items-center gap-3 mb-6">
              <Ship className="text-gold h-5 w-5" />
              <h3 className="font-serif text-xl font-light text-white">Transit Time Matrix</h3>
            </div>

            <div className="flex flex-col gap-4 font-sans text-xs">
              {TRANSIT_TIMES.map((tt) => (
                <div key={tt.region} className="flex justify-between items-center border-b border-white/5 pb-3">
                  <div>
                    <span className="text-white font-medium block">{tt.region}</span>
                    <span className="text-[10px] text-mutedText font-mono block mt-0.5">{tt.port}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gold font-bold font-serif block">{tt.days}</span>
                    <span className="text-[9px] text-mutedText/80 block mt-0.5">{tt.frequency}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gold/5 border border-gold/10 text-[10px] text-mutedText leading-relaxed flex gap-3">
              <Info size={16} className="text-gold shrink-0 mt-0.5" />
              <p>
                Transit durations indicated represent direct port-to-port ocean travel times. Real-time bills of lading (BL) and marine tracking links are supplied for all shipments.
              </p>
            </div>
          </div>

        </div>

        {/* 4. PACKAGING INTEGRITY STANDARDS */}
        <div className="mb-28">
          <div className="max-w-3xl mb-12">
            <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Maritime Protection</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-white mt-1">
              Packaging Integrity Systems
            </h2>
            <p className="text-xs md:text-sm text-mutedText leading-relaxed mt-3">
              Industrial clays are extremely sensitive to humidity and air impurities. High sea humidity can alter chemical properties and induce lump formation. Sarathi Clay implements premium, double-sealed containment protocols for all trans-oceanic voyages.
            </p>
          </div>

          {/* Interactive Tabbed Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Tab Selectors */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {PACKAGING_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActivePackTab(opt.id)}
                  className={`text-left p-5 rounded-xl border transition-all duration-350 flex justify-between items-center group relative overflow-hidden ${
                    activePackTab === opt.id
                      ? "bg-[#111111] border-gold text-white"
                      : "bg-transparent border-white/5 text-mutedText hover:border-gold/30 hover:text-white"
                  }`}
                >
                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="text-[8px] font-mono tracking-widest text-gold uppercase">{opt.subtitle}</span>
                    <span className="text-xs font-bold uppercase tracking-wider">{opt.title}</span>
                  </div>
                  <ChevronRight size={16} className={`transition-transform duration-350 ${
                    activePackTab === opt.id ? "text-gold translate-x-1" : "text-white/20 group-hover:text-gold group-hover:translate-x-1"
                  }`} />
                  {activePackTab === opt.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-transparent pointer-events-none" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="lg:col-span-8 bg-[#0a0a0a] border border-gold/15 rounded-2xl p-6 md:p-10 relative min-h-[380px] flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 bottom-0 right-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(200,169,107,0.05)_0%,transparent_60%)] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {PACKAGING_OPTIONS.map((opt) => opt.id === activePackTab && (
                  <motion.div
                    key={opt.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-6 h-full justify-between"
                  >
                    <div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-gold tracking-widest uppercase">{opt.subtitle}</span>
                        <h3 className="font-serif text-2xl md:text-3xl font-light text-white">{opt.title}</h3>
                      </div>
                      
                      <p className="text-xs text-mutedText leading-relaxed mt-4 max-w-2xl font-sans">
                        {opt.desc}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {opt.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-3.5 text-xs text-white/80">
                            <span className="w-5 h-5 rounded-full bg-gold/5 flex items-center justify-center border border-gold/20 shrink-0 mt-0.5">
                              <Check size={11} className="text-gold" />
                            </span>
                            <span className="font-sans leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-6 mt-8 grid grid-cols-2 gap-6 text-[10px] font-mono tracking-widest text-gold uppercase">
                      <div>
                        <span>Cargo Sizing</span>
                        <span className="text-white block mt-1.5 font-bold">{opt.dimensions}</span>
                      </div>
                      <div>
                        <span>Weight Allocation</span>
                        <span className="text-white block mt-1.5 font-bold">{opt.weightRange}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* 5. INTERACTIVE VESSEL CONFIGURATOR (CALCULATOR & DIRECT INQUIRY DECK) */}
        <div ref={calculatorRef} className="scroll-mt-24 mb-28">
          <div className="max-w-3xl mb-12">
            <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Cargo Configuration</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-white mt-1">
              FCL Vessel Configurator
            </h2>
            <p className="text-xs md:text-sm text-mutedText leading-relaxed mt-3">
              Input your required mineral formulation volume and logistics choices to estimate container loads, custom protection settings, and directly transmit chemical details to the shipping desk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left side: Configurator Inputs */}
            <div className="lg:col-span-5 bg-[#0a0a0a] border border-gold/15 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 relative">
              <div className="absolute inset-0 bg-luxury-gradient z-0 pointer-events-none rounded-2xl" />
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <Scale className="text-gold h-5 w-5" />
                  <h3 className="font-serif text-lg font-light text-white">Cargo Metrics</h3>
                </div>

                {/* Grade Selection */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-[9px] uppercase tracking-widest text-gold font-bold">Select Mineral Grade</label>
                  <select
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className="w-full bg-[#111111] border border-gold/25 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold transition-colors font-sans"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.id}>{prod.name}</option>
                    ))}
                  </select>
                </div>

                {/* Packaging Selection */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-[9px] uppercase tracking-widest text-gold font-bold">Maritime Packaging</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "jumbo", name: "Jumbo Sacks" },
                      { id: "laminated", name: "Laminated" },
                      { id: "bulk", name: "Loose Bulk" }
                    ].map((pack) => (
                      <button
                        key={pack.id}
                        type="button"
                        onClick={() => setPackagingType(pack.id)}
                        className={`py-3 px-1.5 rounded-xl border text-[10px] uppercase font-bold tracking-wider transition-all duration-350 ${
                          packagingType === pack.id
                            ? "bg-gold text-black border-transparent"
                            : "bg-[#111111] border-white/5 text-mutedText hover:border-gold/30 hover:text-white"
                        }`}
                      >
                        {pack.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Volume Slider */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-gold font-bold">
                    <span>Target Volume</span>
                    <span className="text-white font-mono text-xs">{volumeMT} MT</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="1000"
                    step="10"
                    value={volumeMT}
                    onChange={(e) => setVolumeMT(Number(e.target.value))}
                    className="w-full accent-gold h-1.5 bg-white/5 rounded-full cursor-pointer border-none outline-none"
                  />
                  <div className="flex justify-between text-[8px] text-mutedText font-mono mt-0.5">
                    <span>20 MT (1 FCL)</span>
                    <span>500 MT</span>
                    <span>1,000 MT</span>
                  </div>
                </div>

                {/* Discharge Port */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-[9px] uppercase tracking-widest text-gold font-bold">Destination Port of Discharge</label>
                  <input
                    type="text"
                    value={destinationPort}
                    onChange={(e) => setDestinationPort(e.target.value)}
                    placeholder="e.g. Rotterdam, Jebel Ali, Singapore"
                    className="w-full bg-[#111111] border border-gold/25 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors font-sans"
                  />
                </div>
              </div>

              {/* Brief specs match indicator */}
              <div className="relative z-10 bg-white/5 border border-white/5 p-4 rounded-xl text-[10px] font-sans text-mutedText leading-relaxed flex items-start gap-3 mt-4">
                <FileCheck size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">TDS Analysis Autopilot</span>
                  <p className="mt-0.5">
                    We match {activeProduct.name} batches for standard chemical values. Typical whiteness is {activeProduct.specs["Whiteness (ISO)"] || activeProduct.specs["Fired Whiteness (1220°C)"] || "premium grade"}.
                  </p>
                </div>
              </div>
            </div>

            {/* Center/Right side: Results & Inquiry Deck */}
            <div className="lg:col-span-7 bg-[#111111] border border-gold/15 rounded-2xl p-6 md:p-10 flex flex-col justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.06)_0%,transparent_60%)] pointer-events-none rounded-full" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/5 pb-8 relative z-10">
                
                {/* Result Card 1: FCL Containers */}
                <div className="bg-black/45 border border-gold/10 p-5 rounded-xl text-center">
                  <span className="text-[8px] font-mono text-gold tracking-widest uppercase">Required Load</span>
                  <div className="text-3xl md:text-4xl font-serif text-white font-light mt-1 text-reveal-gold">
                    {estimatedContainers}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-mutedText block mt-1.5 font-mono">
                    20FT FCL Containers
                  </span>
                </div>

                {/* Result Card 2: Packaging Units */}
                <div className="bg-black/45 border border-gold/10 p-5 rounded-xl text-center">
                  <span className="text-[8px] font-mono text-gold tracking-widest uppercase">Packaging Units</span>
                  <div className="text-3xl md:text-4xl font-serif text-white font-light mt-1 text-reveal-gold">
                    {packagingType === "bulk" ? "Loose" : estimatedPallets}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-mutedText block mt-1.5 font-mono">
                    {packagingType === "bulk" ? "Bulk Cargo" : packagingType === "laminated" ? "Industrial Pallets" : "Jumbo Sacks"}
                  </span>
                </div>

                {/* Result Card 3: Moisture Protection */}
                <div className="bg-black/45 border border-gold/10 p-5 rounded-xl text-center">
                  <span className="text-[8px] font-mono text-gold tracking-widest uppercase">Humidity Control</span>
                  <div className="text-3xl md:text-4xl font-serif text-white font-light mt-1 text-reveal-gold">
                    {desiccantBags}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-mutedText block mt-1.5 font-mono">
                    Desiccant Bags
                  </span>
                </div>

              </div>

              {/* Direct Inquiry Entry */}
              <div className="relative z-10">
                <h4 className="font-serif text-xl font-light text-white mb-6">Direct Shipping Inquiry Deck</h4>
                
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="inquiry-form"
                      onSubmit={handleInquirySubmit}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {errorMsg && (
                        <div className="bg-red-950/40 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg text-xs leading-relaxed md:col-span-2">
                          <strong>Transmission Error:</strong> {errorMsg}
                        </div>
                      )}

                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[9px] uppercase tracking-widest text-mutedText">Your Name</label>
                        <input
                          type="text"
                          required
                          disabled={isSubmitting}
                          value={buyerName}
                          onChange={(e) => setBuyerName(e.target.value)}
                          placeholder="FullName"
                          className="bg-black/55 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                        />
                      </div>

                      {/* Company input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[9px] uppercase tracking-widest text-mutedText">Corporate Name</label>
                        <input
                          type="text"
                          required
                          disabled={isSubmitting}
                          value={buyerCompany}
                          onChange={(e) => setBuyerCompany(e.target.value)}
                          placeholder="Company, LLC"
                          className="bg-black/55 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[9px] uppercase tracking-widest text-mutedText">Business Email Address</label>
                        <input
                          type="email"
                          required
                          disabled={isSubmitting}
                          value={buyerEmail}
                          onChange={(e) => setBuyerEmail(e.target.value)}
                          placeholder="purchasing@company.com"
                          className="bg-black/55 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[9px] uppercase tracking-widest text-mutedText">Contact Phone Number</label>
                        <input
                          type="tel"
                          required
                          disabled={isSubmitting}
                          value={buyerPhone}
                          onChange={(e) => setBuyerPhone(e.target.value)}
                          placeholder="e.g. +1 234 567 8900"
                          className="bg-black/55 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                        />
                      </div>

                      {/* Custom note */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-[9px] uppercase tracking-widest text-mutedText">Specific Packaging or Chemical Requests</label>
                        <textarea
                          rows={3}
                          disabled={isSubmitting}
                          value={buyerMessage}
                          onChange={(e) => setBuyerMessage(e.target.value)}
                          placeholder="Please note any strict oxide tolerance limits or customized bag branding requirements..."
                          className="bg-black/55 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none font-sans disabled:opacity-50"
                        />
                      </div>

                      {/* Submit */}
                      <div className="md:col-span-2 mt-4 flex justify-between items-center">
                        <span className="text-[10px] text-mutedText/70 tracking-wide font-sans flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                          Secure XRF Analysis dispatched with quotation
                        </span>
                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <span>Transmitting</span>
                              <Loader2 size={12} className="animate-spin" />
                            </>
                          ) : (
                            <>
                              <span>Transmit RFQ</span>
                              <Send size={12} />
                            </>
                          )}
                        </Button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="form-success"
                      className="flex flex-col items-center justify-center py-10 text-center gap-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold flex items-center justify-center">
                        <Check size={28} className="text-gold animate-bounce" />
                      </div>
                      <div className="flex flex-col gap-1.5 mt-2">
                        <h4 className="font-serif text-2xl font-light text-white">Inquiry Transmitted Successfully</h4>
                        <span className="text-[10px] uppercase font-mono text-gold tracking-widest mt-1">Cargo RFQ Ref: SC-{Math.floor(Math.random() * 90000) + 10000}</span>
                      </div>
                      <p className="text-xs text-mutedText max-w-md leading-relaxed mt-2 font-sans">
                        Your technical configuration has been logged. Our logistics clearance officer and chief mineralogist will review the {activeProduct.name} chemical composition matching and email your comprehensive shipping quotation within 4 business hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>

        {/* 6. MARITIME DOCUMENTATION & REGULATORY COMPLIANCE */}
        <div className="bg-[#111111]/45 border border-gold/15 rounded-2xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.03)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Sovereign Compliance</span>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-white mt-1">Export Documentation</h3>
              <p className="text-xs text-mutedText leading-relaxed mt-3">
                As a designated Star Export House, Sarathi Clay maintains immediate processing channels with customs, chambers of commerce, and international inspection agencies like SGS and Intertek.
              </p>
              
              <div className="flex flex-col gap-3 mt-6 text-xs text-white/80">
                {[
                  "Certificate of Analysis (COA) detailing physical & oxide parameters",
                  "Phytosanitary Certificates (ISPM-15) for wood pallet items",
                  "Consularized Certificate of Origin (COO) for preferential tariff benefits",
                  "Pre-shipment inspection clearance certifications on request"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-[9px] tracking-wider uppercase text-center">
              
              <div className="border border-white/5 bg-black/30 p-5 rounded-xl flex flex-col gap-3 justify-center items-center">
                <FileSpreadsheet className="text-gold h-6 w-6" />
                <span>COA Reports</span>
              </div>

              <div className="border border-white/5 bg-black/30 p-5 rounded-xl flex flex-col gap-3 justify-center items-center">
                <ShieldCheck className="text-gold h-6 w-6" />
                <span>Customs Bonded</span>
              </div>

              <div className="border border-white/5 bg-black/30 p-5 rounded-xl flex flex-col gap-3 justify-center items-center">
                <FileCheck className="text-gold h-6 w-6" />
                <span>ISPM-15 Pallets</span>
              </div>

              <div className="border border-white/5 bg-black/30 p-5 rounded-xl flex flex-col gap-3 justify-center items-center">
                <TrendingUp className="text-gold h-6 w-6" />
                <span>Priority Sea lanes</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
