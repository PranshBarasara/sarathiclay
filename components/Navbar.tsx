"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Quality", href: "/quality" },
  { name: "Exports", href: "/export" },
  { name: "Industries", href: "/industries" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "py-4 px-6 md:px-12" 
            : "py-6 px-6 md:px-16"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className={`mx-auto max-w-7xl w-full flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3.5 ${
          isScrolled 
            ? "glassmorphic shadow-lg bg-black/85 border-gold/25" 
            : "bg-transparent border-transparent"
        } border`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Sarathi Clay" 
              className="h-12 md:h-18 w-auto object-contain invert transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[9px] xl:text-[10px] 2xl:text-xs tracking-[0.12em] xl:tracking-[0.2em] uppercase text-mutedText hover:text-white transition-colors py-1 font-medium"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA / Quick Contact (Desktop) */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-1.5 px-4 py-2 overflow-hidden rounded-full border border-gold/30 hover:border-gold bg-transparent text-white text-[9px] xl:text-[10px] tracking-[0.15em] xl:tracking-[0.2em] uppercase transition-all duration-300 group hover:shadow-[0_0_15px_rgba(200,169,107,0.25)]"
            >
              <span className="relative z-10">Contact Desk</span>
              <ArrowRight size={10} className="relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gold/10 transition-transform duration-500" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gold transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer (Fullscreen overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-[#070707] flex flex-col justify-between p-8 pt-28 font-serif"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.05)_0%,transparent_50%)]" />

            <div className="flex flex-col gap-6 relative z-10 pl-4 md:pl-12">
              <span className="text-[10px] font-sans text-gold tracking-[0.3em] uppercase">Navigation</span>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-xl md:text-3xl tracking-wider uppercase flex items-center gap-3 ${
                          isActive ? "text-gold font-semibold" : "text-white/60 hover:text-white"
                        }`}
                      >
                        {link.name}
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="flex flex-col gap-6 relative z-10 border-t border-white/10 pt-8 pl-4 md:pl-12">
              <Link
                href="/contact"
                className="w-fit flex items-center justify-between gap-3 text-base text-gold font-sans uppercase tracking-[0.2em] group"
              >
                <span>Direct Export Desk</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </Link>
              <div className="flex justify-between items-center text-[9px] font-sans text-mutedText tracking-[0.2em] uppercase">
                <span>sarathi clay / global solutions</span>
                <span>est. 1999</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
