"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ship, Anchor, Clock, ShieldCheck } from "lucide-react";

interface Route {
  name: string;
  port: string;
  endX: number;
  endY: number;
  days: string;
  freq: string;
  status: string;
}

const ROUTES: Route[] = [
  { 
    name: "Europe", 
    port: "Rotterdam, Netherlands", 
    endX: 380, 
    endY: 120, 
    days: "20 - 22 Days", 
    freq: "Weekly (2 sailings)",
    status: "Clear / Active Transit"
  },
  { 
    name: "Middle East", 
    port: "Jebel Ali, UAE", 
    endX: 460, 
    endY: 180, 
    days: "4 - 6 Days", 
    freq: "Weekly (3 sailings)",
    status: "Clear / Active Transit"
  },
  { 
    name: "Southeast Asia", 
    port: "Singapore Terminal", 
    endX: 580, 
    endY: 240, 
    days: "10 - 12 Days", 
    freq: "Weekly (4 sailings)",
    status: "Optimal / Customs Cleared"
  },
  { 
    name: "East Africa", 
    port: "Mombasa, Kenya", 
    endX: 450, 
    endY: 260, 
    days: "14 - 16 Days", 
    freq: "Bi-Weekly dispatch",
    status: "Clear / Priority Berth"
  },
  { 
    name: "South America", 
    port: "Santos, Brazil", 
    endX: 250, 
    endY: 300, 
    days: "26 - 28 Days", 
    freq: "Weekly (1 sailing)",
    status: "Clear / Secondary Terminal"
  },
];

export default function WorldMap() {
  const [hoveredRoute, setHoveredRoute] = useState<Route | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);

  const activeDetail = hoveredRoute || selectedRoute;

  // Mundra Port coordinates (Origin)
  const originX = 520;
  const originY = 210;

  return (
    <div className="w-full relative bg-gradient-to-b from-[#111111]/70 to-[#090909]/90 border border-gold/20 rounded-2xl p-6 md:p-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
      {/* Background ambient radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.06)_0%,transparent_75%)] pointer-events-none" />
      
      {/* Top Controls Header */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-[ping_1.5s_infinite]" />
            <span className="text-[9px] font-sans text-gold tracking-[0.3em] uppercase font-bold">Logistics Real-Time Hub</span>
          </div>
          <h4 className="font-serif text-xl md:text-2xl font-light text-white mt-1">Global Trade Channels</h4>
        </div>
        
        {/* Quick actions/metrics */}
        <div className="flex flex-wrap gap-4 text-[10px] tracking-wider uppercase text-mutedText font-mono">
          <div className="flex items-center gap-2 bg-black/40 border border-gold/15 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Mundra Port (Origin)</span>
          </div>
          <button 
            onClick={() => setSelectedRoute(null)}
            className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-gold/30 px-3 py-1.5 rounded-full text-white transition-colors"
          >
            <span>Reset Highlight</span>
          </button>
        </div>
      </div>

      {/* Main SVG Container */}
      <div className="w-full aspect-[2.1/1] relative select-none">
        <svg viewBox="0 0 800 380" className="w-full h-full opacity-90 transition-all duration-500">
          <defs>
            {/* Fine grid background pattern */}
            <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(200, 169, 107, 0.03)" strokeWidth="0.5" />
            </pattern>

            {/* Dotted fill pattern for continents */}
            <pattern id="continentDotPattern" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(250, 235, 215, 0.09)" />
            </pattern>

            {/* Active route gradient glow */}
            <linearGradient id="activeRouteGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E8C88D" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#C8A96B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A77A3C" stopOpacity="0.9" />
            </linearGradient>

            {/* Standard route gradient */}
            <linearGradient id="standardRouteGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C8A96B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A77A3C" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Grid Background */}
          <rect width="800" height="380" fill="url(#mapGrid)" />

          {/* Radar waves from Mundra Port */}
          <circle cx={originX} cy={originY} r="35" fill="none" stroke="rgba(200,169,107,0.06)" strokeWidth="1" className="animate-[ping_3.5s_infinite_ease-out]" />
          <circle cx={originX} cy={originY} r="70" fill="none" stroke="rgba(200,169,107,0.03)" strokeWidth="0.5" className="animate-[ping_5s_infinite_ease-out_1s]" />

          {/* === STYLIZED GEOMETRIC CONTINENT PATHS === */}
          <g className="transition-all duration-500">
            {/* Greenland */}
            <path 
              d="M 300,50 L 340,40 L 370,60 L 330,90 L 300,50 Z" 
              fill="rgba(255,255,255,0.015)" 
              stroke="rgba(255,255,255,0.03)" 
              strokeWidth="1"
            />
            <path d="M 300,50 L 340,40 L 370,60 L 330,90 L 300,50 Z" fill="url(#continentDotPattern)" />

            {/* North America */}
            <path 
              d="M 70,70 L 130,55 L 195,65 L 210,95 L 200,135 L 180,155 L 150,155 L 130,185 L 150,205 L 140,210 L 110,170 L 90,140 L 75,100 Z" 
              fill="rgba(255,255,255,0.015)" 
              stroke="rgba(255,255,255,0.03)" 
              strokeWidth="1"
            />
            <path d="M 70,70 L 130,55 L 195,65 L 210,95 L 200,135 L 180,155 L 150,155 L 130,185 L 150,205 L 140,210 L 110,170 L 90,140 L 75,100 Z" fill="url(#continentDotPattern)" />

            {/* South America */}
            <path 
              d="M 170,215 L 200,225 L 230,240 L 255,270 L 245,310 L 220,360 L 210,370 L 200,340 L 195,290 L 180,250 Z" 
              fill="rgba(255,255,255,0.015)" 
              stroke="rgba(255,255,255,0.03)" 
              strokeWidth="1"
            />
            <path d="M 170,215 L 200,225 L 230,240 L 255,270 L 245,310 L 220,360 L 210,370 L 200,340 L 195,290 L 180,250 Z" fill="url(#continentDotPattern)" />

            {/* Africa */}
            <path 
              d="M 330,170 L 380,170 L 410,185 L 430,205 L 470,230 L 460,260 L 440,300 L 430,335 L 415,335 L 400,290 L 375,250 L 345,245 L 325,210 Z" 
              fill="rgba(255,255,255,0.015)" 
              stroke="rgba(255,255,255,0.03)" 
              strokeWidth="1"
            />
            <path d="M 330,170 L 380,170 L 410,185 L 430,205 L 470,230 L 460,260 L 440,300 L 430,335 L 415,335 L 400,290 L 375,250 L 345,245 L 325,210 Z" fill="url(#continentDotPattern)" />

            {/* Europe & Asia (Eurasia) */}
            <path 
              d="M 330,160 L 340,120 L 370,100 L 390,70 L 430,80 L 490,70 L 580,60 L 670,60 L 730,70 L 755,110 L 710,130 L 730,170 L 700,200 L 660,235 L 610,240 L 590,260 L 565,240 L 530,225 L 515,225 L 475,200 L 445,185 L 370,185 Z" 
              fill="rgba(255,255,255,0.015)" 
              stroke="rgba(255,255,255,0.03)" 
              strokeWidth="1"
            />
            <path d="M 330,160 L 340,120 L 370,100 L 390,70 L 430,80 L 490,70 L 580,60 L 670,60 L 730,70 L 755,110 L 710,130 L 730,170 L 700,200 L 660,235 L 610,240 L 590,260 L 565,240 L 530,225 L 515,225 L 475,200 L 445,185 L 370,185 Z" fill="url(#continentDotPattern)" />

            {/* Australia */}
            <path 
              d="M 630,290 L 670,285 L 700,310 L 710,340 L 675,355 L 635,330 Z" 
              fill="rgba(255,255,255,0.015)" 
              stroke="rgba(255,255,255,0.03)" 
              strokeWidth="1"
            />
            <path d="M 630,290 L 670,285 L 700,310 L 710,340 L 675,355 L 635,330 Z" fill="url(#continentDotPattern)" />
          </g>

          {/* ================= ROUTES & CONNECTIVITY ================= */}
          {ROUTES.map((route) => {
            const isHovered = hoveredRoute?.port === route.port;
            const isSelected = selectedRoute?.port === route.port;
            const isActive = isHovered || isSelected;

            // Curve formula with a higher arc to emphasize distance and route shape
            const midX = (originX + route.endX) / 2 - 40;
            const midY = (originY + route.endY) / 2 - 65;

            return (
              <g key={route.port} className="cursor-pointer" onClick={() => setSelectedRoute(route)}>
                {/* Visual Route Path Line */}
                <motion.path
                  d={`M ${originX} ${originY} Q ${midX} ${midY} ${route.endX} ${route.endY}`}
                  fill="none"
                  stroke={isActive ? "url(#activeRouteGrad)" : "url(#standardRouteGrad)"}
                  strokeWidth={isActive ? 3.5 : 1.75}
                  className="transition-all duration-350"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* Glow shadow line beneath active routes */}
                {isActive && (
                  <motion.path
                    d={`M ${originX} ${originY} Q ${midX} ${midY} ${route.endX} ${route.endY}`}
                    fill="none"
                    stroke="#C8A96B"
                    strokeWidth={8}
                    strokeOpacity={0.2}
                    className="blur-[4px]"
                  />
                )}

                {/* Moving dot / cargo shipping tracker node */}
                <motion.circle
                  r={isActive ? 4.5 : 2.5}
                  fill={isActive ? "#E8C88D" : "#C8A96B"}
                  className="transition-all duration-300"
                  animate={{
                    cx: [originX, midX, route.endX],
                    cy: [originY, midY, route.endY],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: isActive ? 3 : 5.5,
                    ease: "easeInOut",
                  }}
                />

                {/* Destination Point Node */}
                <g 
                  onMouseEnter={() => setHoveredRoute(route)} 
                  onMouseLeave={() => setHoveredRoute(null)}
                >
                  {/* Invisible larger hover trigger area */}
                  <circle cx={route.endX} cy={route.endY} r="22" fill="transparent" />

                  {/* Pulsing indicator when active */}
                  {isActive && (
                    <circle cx={route.endX} cy={route.endY} r="18" fill="none" stroke="#C8A96B" strokeWidth="1.25" strokeDasharray="3 3" className="animate-[spin_12s_linear_infinite]" />
                  )}
                  <circle 
                    cx={route.endX} 
                    cy={route.endY} 
                    r={isActive ? 9 : 6} 
                    fill={isActive ? "#E8C88D" : "#A77A3C"} 
                    className="transition-all duration-300"
                  />
                  <circle cx={route.endX} cy={route.endY} r={isActive ? 15 : 10} stroke={isActive ? "#E8C88D" : "#A77A3C"} strokeWidth="0.75" strokeOpacity={isActive ? 0.9 : 0.4} fill="none" />
                </g>
              </g>
            );
          })}

          {/* Mundra Port Main Origin Node */}
          <g>
            <circle cx={originX} cy={originY} r="22" stroke="#C8A96B" strokeWidth="0.5" strokeDasharray="4 2" className="animate-[spin_20s_linear_infinite]" />
            <circle cx={originX} cy={originY} r="10" fill="#C8A96B" className="animate-pulse" />
            <circle cx={originX} cy={originY} r="4" fill="#ffffff" />
          </g>
        </svg>

        {/* Labels Overlay */}
        <div className="absolute inset-0 pointer-events-none font-mono text-[9px] md:text-[10px] text-mutedText/85">
          <div className="absolute top-[48%] left-[64%] -translate-y-1/2 -translate-x-1/2 bg-black/90 border border-gold/45 px-3 py-1.5 rounded shadow-lg pointer-events-auto">
            <span className="text-gold font-bold block text-[11px] tracking-widest uppercase">MUNDRA PORT</span>
            <span className="text-[9px] text-white/50 block font-mono">Origin Gateway</span>
          </div>

          {/* Fixed labels on map destinations */}
          {ROUTES.map((route) => {
            const isActive = activeDetail?.port === route.port;
            return (
              <div 
                key={route.port} 
                className={`absolute transition-all duration-300 tracking-wider uppercase font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] ${
                  isActive ? "text-gold text-[12px] md:text-[13px] font-bold" : "text-white/80 text-[10px] md:text-[11px]"
                }`}
                style={{ 
                  left: `${(route.endX / 800) * 100}%`, 
                  top: `${(route.endY / 380) * 100}%`,
                  transform: 'translate(-50%, -30px)'
                }}
              >
                {route.name}
              </div>
            );
          })}
        </div>

        {/* Floating Details Glassmorphic Info Card */}
        <AnimatePresence>
          {activeDetail && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80 glassmorphic p-5 rounded-xl shadow-2xl border border-gold/30 z-20"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-gold/10 border border-gold/20 rounded-lg text-gold">
                    <Ship size={14} />
                  </div>
                  <div>
                    <span className="text-[8px] uppercase tracking-widest text-gold font-mono font-bold">Ocean Route Details</span>
                    <h5 className="font-serif text-sm font-bold text-white mt-0.5">{activeDetail.port}</h5>
                  </div>
                </div>
                
                <span className="text-[8px] font-mono tracking-widest bg-gold/10 border border-gold/20 px-2 py-0.5 rounded text-gold">
                  Active Channel
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/5 font-mono text-[9px] uppercase tracking-wider text-mutedText">
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1"><Clock size={10} className="text-gold" /> Transit Duration</span>
                  <span className="text-white font-bold font-serif text-[11px] normal-case">{activeDetail.days}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1"><Anchor size={10} className="text-gold" /> Dispatch Cycle</span>
                  <span className="text-white font-bold font-serif text-[11px] normal-case">{activeDetail.freq}</span>
                </div>
              </div>

              <div className="mt-4 p-2.5 rounded-lg bg-white/5 border border-white/5 text-[9px] text-mutedText flex items-center gap-2 justify-between">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={11} className="text-gold" />
                  <span>{activeDetail.status}</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRoute(null);
                    setHoveredRoute(null);
                  }}
                  className="hover:text-white transition-colors uppercase font-bold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Map Footer Information */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-4 border-t border-white/5 font-mono text-[9px] uppercase tracking-widest text-mutedText/80">
        <div>
          <span>Load Terminal</span>
          <span className="text-white block mt-1">Mundra Port Terminal II</span>
        </div>
        <div>
          <span>Export Authority</span>
          <span className="text-white block mt-1">Star House Certified</span>
        </div>
        <div>
          <span>Custom Clearance</span>
          <span className="text-gold block mt-1">Bonded priority channel</span>
        </div>
        <div>
          <span>Tracking Protocols</span>
          <span className="text-white block mt-1">Ocean-bill live telemetry</span>
        </div>
      </div>
    </div>
  );
}
