import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070707] border-t border-gold/15 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top section with grand brand slogan and contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-white/5">
          <div className="flex flex-col gap-6">
            <img 
              src="/logo.png" 
              alt="Sarathi Clay" 
              className="h-12 md:h-16 w-auto object-contain self-start invert"
            />
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide leading-tight">
              Transforming Natural <br />
              <span className="text-reveal-gold font-bold">Resources</span> Into Industrial <br />
              Excellence.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-12 justify-end">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-sans text-gold tracking-[0.2em] uppercase">HQ & Factory Desk</span>
              <a 
                href="https://maps.app.goo.gl/cNDF6xQuGvCxzzdS6?g_st=am"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-mutedText leading-relaxed font-sans hover:text-gold transition-colors underline"
              >
                Sarathi Clay processing plant,<br />
                Industrial Area, Bhuj-Kutch,<br />
                Gujarat, India.
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-sans text-gold tracking-[0.2em] uppercase">Inquiries Desk</span>
              <p className="text-xs text-mutedText leading-relaxed font-sans">
                sarathimicron@gmail.com<br />
                Phone: +91 99043 73330
              </p>
            </div>
          </div>
        </div>

        {/* Middle section with Links and Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-xs font-sans">
          
          {/* Column 1 - Products */}
          <div className="flex flex-col gap-5">
            <span className="text-[10px] text-gold tracking-[0.2em] uppercase">Products</span>
            <ul className="flex flex-col gap-3 text-mutedText">
              <li><Link href="/products" className="hover:text-white transition-colors">China Clay</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Kaolin Clay</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Calcined Clay</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Washed Clay</Link></li>
            </ul>
          </div>

          {/* Column 2 - Industries */}
          <div className="flex flex-col gap-5">
            <span className="text-[10px] text-gold tracking-[0.2em] uppercase">Industries</span>
            <ul className="flex flex-col gap-3 text-mutedText">
              <li><Link href="/industries" className="hover:text-white transition-colors">Ceramics</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Vitrified Tiles</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Sanitaryware</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Glass & Refractories</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Paints & Polymers</Link></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="flex flex-col gap-5">
            <span className="text-[10px] text-gold tracking-[0.2em] uppercase">Corporate</span>
            <ul className="flex flex-col gap-3 text-mutedText">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link href="/quality" className="hover:text-white transition-colors">Quality Control</Link></li>
              <li><Link href="/export" className="hover:text-white transition-colors">Global Exports</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Media Gallery</Link></li>
            </ul>
          </div>

          {/* Column 4 - Certifications */}
          <div className="flex flex-col gap-5">
            <span className="text-[10px] text-gold tracking-[0.2em] uppercase">Standards & Trust</span>
            <div className="flex flex-col gap-3 text-mutedText font-light leading-relaxed">
              <p>ISO 9001:2015 Certified Manufacturing Facility</p>
              <p>Star Export House Certified (Govt. of India)</p>
              <p>ROHS & REACH Compliant Mineral Quality</p>
            </div>
          </div>
        </div>

        {/* Bottom bar with legal & credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-[10px] tracking-[0.2em] text-mutedText uppercase">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} Sarathi Clay. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
