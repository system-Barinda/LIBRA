import React, { useEffect, useRef } from "react";
import { Sparkles, BookOpen, Users, TrendingUp } from "lucide-react";
import gsap from "gsap";

export const HeroBanner: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const borderBoxRef = useRef<HTMLDivElement>(null);
  const glowBoxRef = useRef<HTMLDivElement>(null);
  const floatCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Rotate the 4-Color Gradient Border & Glow
      if (borderBoxRef.current && glowBoxRef.current) {
        gsap.to([borderBoxRef.current, glowBoxRef.current], {
          rotate: 360,
          duration: 5,
          repeat: -1,
          ease: "none",
        });
      }

      // 2. Gentle Floating Motion for the Accent Box
      if (floatCardRef.current) {
        gsap.to(floatCardRef.current, {
          y: -10,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 p-6 md:p-8 text-white shadow-lg shadow-orange-500/10 flex flex-col lg:flex-row items-center justify-between gap-8"
    >
      {/* Left Content Area */}
      <div className="relative z-10 max-w-xl space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md">
          <Sparkles size={14} /> Featured Collection
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Discover & Manage Your Literary World
        </h1>
        <p className="text-orange-100 text-sm md:text-base">
          Track dynamic user checkouts, review active library stats, and quickly
          manage incoming books in real-time.
        </p>

        {/* Quick Stats Badges */}
        <div className="pt-2 flex flex-wrap gap-4 text-xs md:text-sm font-medium">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
            <BookOpen size={16} /> 1,240 Total Titles
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
            <Users size={16} /> 312 Active Readers
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
            <TrendingUp size={16} /> +18% Monthly Growth
          </div>
        </div>
      </div>

      {/* Right Side: High-Visibility 4-Color Edge Box with Book Image */}
      <div
        ref={floatCardRef}
        className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center p-[4px] rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Outer Glow (Enhances color visibility) */}
        <div
          ref={glowBoxRef}
          className="absolute -inset-[100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,#ff0055,#00e5ff,#2563eb,#10b981,#ff0055)] blur-md opacity-80"
        />

        {/* Main 4-Color Conic Gradient Border */}
        <div
          ref={borderBoxRef}
          className="absolute -inset-[100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,#ff0055,#00e5ff,#2563eb,#10b981,#ff0055)]"
        />

        {/* Inner Card Container holding ONLY the Book Image */}
        <div className="relative w-full h-full bg-slate-950 rounded-[12px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
            alt="Library Books Collection"
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Decorative Background Accent */}
      <div className="absolute -right-8 -bottom-12 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default HeroBanner;
