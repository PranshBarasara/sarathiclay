"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/blogData";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogListing() {
  return (
    <div className="relative text-white overflow-hidden bg-[#070707] pt-32 pb-24 font-sans">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Scientific Journal</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide mt-2">
            Sarathi Mineral <br />
            <span className="text-reveal-gold font-bold">Insights & Research</span>
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed mt-4">
            Exploring the science of mineralogy, advanced ceramics compounding, deflocculation mechanics, and coatings opacity optimizations. Written by our R&D engineers.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between group">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center text-[9px] font-mono text-gold tracking-widest uppercase">
                    <span>{post.category}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-light text-white group-hover:text-gold transition-colors mt-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-mutedText leading-relaxed mt-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] text-mutedText uppercase tracking-wider font-mono flex items-center gap-1">
                    <Calendar size={10} /> {post.date}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="text-[10px] text-gold font-bold tracking-widest uppercase flex items-center gap-1.5 group-hover:text-white transition-colors">
                    <span>Read Article</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
