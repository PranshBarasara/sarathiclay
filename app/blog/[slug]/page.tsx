"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blogData";
import { ArrowLeft, Clock, Calendar, BookOpen } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostDetail({ params }: PageProps) {
  const resolvedParams = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative text-white overflow-hidden bg-[#070707] pt-32 pb-24 font-sans">
      {/* Background radial soft light */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-mutedText hover:text-gold transition-colors mb-12">
          <ArrowLeft size={14} />
          <span>Back to Insights</span>
        </Link>

        {/* Article Metadata Header */}
        <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-gold tracking-widest uppercase mb-6">
          <span>{post.category}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight mb-8">
          {post.title}
        </h1>

        {/* Separator line */}
        <div className="h-[1px] w-full bg-white/10 my-8" />

        {/* Article Body Content */}
        <div className="text-xs md:text-sm text-mutedText leading-relaxed tracking-wide space-y-6">
          {post.content.split("\n\n").map((para, idx) => {
            if (para.startsWith("###")) {
              return (
                <h3 key={idx} className="font-serif text-lg md:text-xl font-light text-white pt-4">
                  {para.replace("###", "").trim()}
                </h3>
              );
            }
            if (para.startsWith("-")) {
              return (
                <ul key={idx} className="list-disc list-inside pl-4 space-y-2">
                  {para.split("\n").map((li, liIdx) => (
                    <li key={liIdx}>{li.replace("-", "").trim()}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx}>{para.trim()}</p>;
          })}
        </div>

        {/* Separator line */}
        <div className="h-[1px] w-full bg-white/10 my-12" />

        {/* Footer info box */}
        <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4 text-xs">
          <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center border border-gold/15 shrink-0">
            <BookOpen className="text-gold h-5 w-5" />
          </div>
          <div>
            <h4 className="text-white font-bold">About the Sarathi R&D Desk</h4>
            <p className="text-mutedText mt-1">
              This research is published by our in-house laboratories in Morbi, Gujarat, where we engineer customized mineral compounds for global manufacturers.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
