"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/button";
import Chart from "@/components/ui/chart";
import { PRODUCTS } from "@/lib/productsData";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetail({ params }: PageProps) {
  const resolvedParams = use(params);
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="relative text-white overflow-hidden bg-[#070707] pt-32 pb-24 font-sans">
      {/* Background soft glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Back Link */}
        <Link href="/products" className="inline-flex items-center gap-2 text-xs text-mutedText hover:text-gold transition-colors mb-12">
          <ArrowLeft size={14} />
          <span>Back to Clay Grades</span>
        </Link>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
          
          {/* Left: General Info & Specifications */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Technical Data Sheet (TDS)</span>
            <h1 className="font-serif text-3xl md:text-5xl font-light text-white leading-tight">
              {product.name}
            </h1>
            <p className="text-xs md:text-sm text-mutedText leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Blueprint Table */}
            <div className="border border-gold/20 rounded-2xl overflow-hidden mt-6 bg-[#111111]/40">
              <div className="bg-gold/10 px-6 py-4 border-b border-gold/20 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-white">Physical Properties & Testing</span>
                <span className="text-[9px] font-mono text-gold uppercase">Standard ISO/ASTM</span>
              </div>
              <div className="divide-y divide-white/5">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="px-6 py-3.5 flex justify-between items-center text-xs">
                    <span className="text-mutedText">{key}</span>
                    <span className="text-white font-mono font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Chemical Chart */}
          <div className="lg:col-span-5">
            <Chart 
              data={product.chemicalComposition} 
              title={`${product.name} Chemical Analysis (%)`}
            />

            {/* Quality Compliance Checklist */}
            <div className="mt-8 flex flex-col gap-4 p-6 bg-white/5 rounded-2xl border border-white/5 text-xs">
              <span className="text-[10px] font-bold text-gold tracking-wider uppercase">Quality Assurance Controls</span>
              <ul className="flex flex-col gap-3 text-mutedText">
                {product.qualityParams.map((param, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <ShieldCheck size={14} className="text-gold shrink-0 mt-0.5" />
                    <span>{param}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Applications & Packaging */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
          
          {/* Applications list */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-mono text-gold tracking-widest uppercase">Target Applications</span>
            <h3 className="font-serif text-2xl font-light text-white">Key Uses</h3>
            <ul className="flex flex-col gap-3.5 text-xs text-mutedText">
              {product.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Packaging details */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-mono text-gold tracking-widest uppercase">Logistics & Packaging</span>
            <h3 className="font-serif text-2xl font-light text-white">Packaging Solutions</h3>
            <ul className="flex flex-col gap-3.5 text-xs text-mutedText">
              {product.packaging.map((pack, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                  <span>{pack}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-lg font-serif text-white font-light">Need a Custom Technical Data Sheet?</h4>
            <p className="text-xs text-mutedText mt-1">Get the complete technical specification booklet with analysis certificates.</p>
          </div>
          <Link href="/contact">
            <Button variant="primary">Request TDS Booklet</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
