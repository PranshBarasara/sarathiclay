"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { PRODUCTS } from "@/lib/productsData";
import { ArrowRight, Info, CheckSquare } from "lucide-react";

export default function ProductsCatalog() {
  return (
    <div className="relative text-white overflow-hidden bg-[#070707] pt-32 pb-24 font-sans">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Industrial Materials</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide mt-2">
            Clay & Mineral <br />
            <span className="text-reveal-gold font-bold">Specifications Catalog</span>
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed mt-4">
            Browse our catalog of premium-grade industrial clays. Engineered under rigorous QA protocols, each mineral solution is optimized for chemical purity, consistency, and particle size distribution.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <Card className="h-full flex flex-col justify-between group">
                <div className="flex flex-col gap-4">
                  <span className="text-[9px] font-mono text-gold tracking-widest uppercase">
                    Grade {product.id.replace("-", " ")}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-white group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-mutedText leading-relaxed">
                    {product.shortDesc}
                  </p>
                  
                  {/* Applications Bullet Preview */}
                  <div className="mt-4 flex flex-col gap-2 border-t border-white/5 pt-4">
                    <span className="text-[9px] text-gold tracking-wider uppercase font-mono">Applications</span>
                    <ul className="flex flex-col gap-1.5 text-xs text-mutedText">
                      {product.applications.slice(0, 3).map((app) => (
                        <li key={app} className="flex items-start gap-2">
                          <CheckSquare size={12} className="text-gold mt-0.5 shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] text-mutedText uppercase tracking-wider font-mono">
                    Whiteness: {product.specs["Whiteness (ISO)"] || product.specs["Fired Whiteness (1220°C)"] || "Premium"}
                  </span>
                  <Link href={`/products/${product.id}`} className="text-[10px] text-gold font-bold tracking-widest uppercase flex items-center gap-1.5 group-hover:text-white transition-colors">
                    <span>View Blueprint</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Global QA Note */}
        <div className="bg-[#111111]/60 border border-gold/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center border border-gold/15 shrink-0">
              <Info className="text-gold h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Looking for Custom Slurry or Sizing?</h4>
              <p className="text-xs text-mutedText mt-1 max-w-xl">
                We design custom particle size distribution (PSD) and viscosity properties in our physical research laboratory. Contact the Mineral Desk to co-develop a target profile.
              </p>
            </div>
          </div>
          <Link href="/contact">
            <Button variant="primary">Co-Engineer Formulation</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
