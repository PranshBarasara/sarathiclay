"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Mined Raw Kaolin Extraction",
    category: "Mining",
    desc: "Extraction of raw hydrous aluminum silicate clay at our Kutch reserves.",
    image: "/premium_clay_texture.png"
  },
  {
    id: 2,
    title: "Hydrocyclone Refining Lines",
    category: "Processing",
    desc: "Computerized washing classifiers that separate grit from clay slurries.",
    image: "/premium_clay_texture.png"
  },
  {
    id: 3,
    title: "Laser Particle Analysis",
    category: "Laboratory",
    desc: "Checking particle size distribution curve profiles to ensure slip fluidity.",
    image: "/premium_clay_texture.png"
  },
  {
    id: 4,
    title: "Automated Silos Packing",
    category: "Packaging",
    desc: "Packaging premium calcined kaolin into moisture-barrier jumbo bags.",
    image: "/premium_clay_texture.png"
  },
  {
    id: 5,
    title: "Container Stuffing at Port",
    category: "Logistics",
    desc: "Loading pallets inside containers at Mundra Port for overseas sea freight.",
    image: "/premium_clay_texture.png"
  },
  {
    id: 6,
    title: "Continuous Ball Mills",
    category: "Processing",
    desc: "Batch alumina-lined ball mills grinding clays without iron contamination.",
    image: "/premium_clay_texture.png"
  }
];

const CATEGORIES = ["All", "Mining", "Processing", "Laboratory", "Packaging", "Logistics"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="relative text-white overflow-hidden bg-[#070707] pt-32 pb-24 font-sans">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Industrial Visuals</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide mt-2">
            The Sarathi Clay <br />
            <span className="text-reveal-gold font-bold">Media Gallery</span>
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed mt-4">
            A visual overview of our mining operations, advanced refining plants, research laboratories, and global port dispatch procedures.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6 text-xs uppercase font-mono tracking-wider">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold border-gold text-black font-semibold"
                  : "bg-transparent border-white/15 text-mutedText hover:border-white hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <span className="text-[9px] font-mono text-gold tracking-widest uppercase self-start border border-gold/30 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-serif text-lg text-white font-light">{item.title}</h4>
                    <p className="text-[10px] text-mutedText mt-1 leading-snug">{item.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center border border-gold/25 text-black">
                    <Eye size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-white hover:text-gold transition-colors focus:outline-none z-50 p-2"
                aria-label="Close modal"
              >
                <X size={28} />
              </button>

              <motion.div
                className="max-w-4xl w-full flex flex-col gap-4 relative cursor-default"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-gold/25">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between items-start gap-6 font-sans">
                  <div>
                    <span className="text-[9px] font-mono text-gold tracking-widest uppercase">
                      {selectedItem.category} Unit
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-light text-white mt-1">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs text-mutedText leading-relaxed mt-1">
                      {selectedItem.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
