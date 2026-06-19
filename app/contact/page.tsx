"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "Vitrified Tiles",
    product: "China Clay",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong during form submission.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        industry: "Vitrified Tiles",
        product: "China Clay",
        message: ""
      });
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMsg(err instanceof Error ? err.message : "Failed to submit inquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative text-white overflow-hidden bg-[#070707] pt-32 pb-24 font-sans">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Inquiry Desk</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide mt-2">
            Connect With the <br />
            <span className="text-reveal-gold font-bold">Mineral Sales Desk</span>
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed mt-4">
            Connect directly with our export logistics, sales desks, or laboratory technical engineers for pricing details, custom packaging options, or dynamic formulation design.
          </p>
        </div>

        {/* Split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[9px] font-mono text-gold tracking-widest uppercase">Global Offices</span>
              <h3 className="font-serif text-2xl font-light text-white">Direct Communication Channels</h3>
            </div>

            {/* Contacts list */}
            <div className="flex flex-col gap-6 text-xs">
              <div className="flex items-start gap-4 p-5 bg-[#111111]/40 border border-white/5 rounded-xl">
                <Mail className="text-gold h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">Email Communications</h4>
                  <p className="text-mutedText mt-1">General & Exports: sarathimicron@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#111111]/40 border border-white/5 rounded-xl">
                <Phone className="text-gold h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">Direct Phone Desk</h4>
                  <p className="text-mutedText mt-1">Sales & Support: +91 99043 73330</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#111111]/40 border border-white/5 rounded-xl">
                <MessageSquare className="text-gold h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">WhatsApp Support Desk</h4>
                  <a 
                    href="https://wa.me/919904373330"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-mutedText mt-1 hover:text-gold transition-colors inline-block underline"
                  >
                    Chat Live: +91 99043 73330
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#111111]/40 border border-white/5 rounded-xl">
                <MapPin className="text-gold h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">Factory & HQ Location</h4>
                  <a 
                    href="https://maps.app.goo.gl/cNDF6xQuGvCxzzdS6?g_st=am"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-mutedText mt-1 hover:text-gold transition-colors inline-block underline"
                  >
                    Sarathi Micron LLP, Near Khakhrechi Chowkdi, Halvad–Maliya Highway, Village Aniyari, Morbi – 363630, Gujarat, India.
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Inquiry Form */}
          <div className="lg:col-span-7">
            <Card>
              <div className="relative">
                {submitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-20 text-center gap-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle2 className="text-gold h-16 w-16" />
                    <h3 className="font-serif text-2xl font-light text-white">Inquiry Submitted Successfully</h3>
                    <p className="text-xs text-mutedText max-w-sm leading-relaxed">
                      Our exports division has received your inquiry. A mineral engineer will review the parameters and get back to you within 12 business hours.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>Submit Another Inquiry</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-xs text-mutedText font-sans">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-mono text-gold tracking-wider uppercase">Online Form</span>
                      <h3 className="font-serif text-xl md:text-2xl font-light text-white">Send Specification Request</h3>
                    </div>

                    {errorMsg && (
                      <div className="bg-red-950/40 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg text-xs leading-relaxed animate-pulse">
                        <strong>Submission Error:</strong> {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-white uppercase tracking-wider">Your Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          disabled={isSubmitting}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-black/50 border border-white/10 focus:border-gold rounded px-4 py-3 outline-none text-white transition-colors disabled:opacity-50"
                          placeholder="e.g. Robert Vance"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-white uppercase tracking-wider">Company Name</label>
                        <input
                          id="company"
                          type="text"
                          required
                          disabled={isSubmitting}
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-black/50 border border-white/10 focus:border-gold rounded px-4 py-3 outline-none text-white transition-colors disabled:opacity-50"
                          placeholder="e.g. Vance Porcelain Ltd"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-white uppercase tracking-wider">Corporate Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          disabled={isSubmitting}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-black/50 border border-white/10 focus:border-gold rounded px-4 py-3 outline-none text-white transition-colors disabled:opacity-50"
                          placeholder="e.g. vance@company.com"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-white uppercase tracking-wider">Contact Number</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          disabled={isSubmitting}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-black/50 border border-white/10 focus:border-gold rounded px-4 py-3 outline-none text-white transition-colors disabled:opacity-50"
                          placeholder="e.g. +1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="industry" className="text-white uppercase tracking-wider">Your Industry Sector</label>
                        <select
                          id="industry"
                          disabled={isSubmitting}
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="bg-black border border-white/10 focus:border-gold rounded px-4 py-3 outline-none text-white transition-colors disabled:opacity-50"
                        >
                          <option>Vitrified Tiles</option>
                          <option>Sanitaryware</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="product" className="text-white uppercase tracking-wider">Product of Interest</label>
                        <select
                          id="product"
                          disabled={isSubmitting}
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="bg-black border border-white/10 focus:border-gold rounded px-4 py-3 outline-none text-white transition-colors disabled:opacity-50"
                        >
                          <option>China Clay</option>
                          <option>Kaolin Clay</option>
                          <option>Calcined Clay</option>
                          <option>Washed Clay</option>
                          <option>Ceramic Grade Clay</option>
                          <option>Tile Grade Clay</option>
                          <option>Custom Mineral Solutions</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-white uppercase tracking-wider">Message or Target Parameters</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        disabled={isSubmitting}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-black/50 border border-white/10 focus:border-gold rounded px-4 py-3 outline-none text-white transition-colors resize-none disabled:opacity-50"
                        placeholder="Please detail your required oxide tolerances, whiteness targets, or packaging specs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gold-gradient text-black rounded-full py-4 text-xs font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(200,169,107,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span>Submitting Request</span>
                          <Loader2 size={12} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          <span>Submit Technical Inquiry</span>
                          <Send size={12} />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}
