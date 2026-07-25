import React, { useEffect, useRef } from "react";
import { Sparkles, BookOpen, Users, TrendingUp } from "lucide-react";
import gsap from "gsap";

export const HeroBanner: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const borderBoxRef = useRef<HTMLDivElement>(null);
  const floatCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Continuous Rotation Animation for the 4-Color Edge Border Box
      if (borderBoxRef.current) {
        gsap.to(borderBoxRef.current, {
          rotate: 360,
          duration: 6,
          repeat: -1,
          ease: "none",
        });
      }

      // 2. Smooth Floating / Hover Effect for the Hero Accent Box
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
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 p-6 md:p-8 text-white shadow-lg shadow-orange-500/10 flex flex-col lg:flex-row items-center justify-between gap-8"
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

      {/* Right Side: GSAP 4-Color Animated Glowing Edge Box */}
      <div
        ref={floatCardRef}
        className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center p-[3px] rounded-2xl overflow-hidden shadow-2xl shadow-black/20"
      >
        {/* 4-Color Gradient Rotating Element (creates the moving edge border effect) */}
        <div
          ref={borderBoxRef}
          className="absolute -inset-[100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,#ff8543,#00aeef,#2563eb,#10b981,#ff8543)]"
        />

        {/* Inner Card Backdrop */}
        <div className="relative w-full h-full bg-slate-900/90 backdrop-blur-xl rounded-[13px] p-5 flex flex-col justify-between text-white border border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider uppercase text-amber-400 flex items-center gap-1">
              <Sparkles size={14} /> Dynamic Engine
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="space-y-2 my-auto text-center py-2">
            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-sky-400">
              Live Analytics
            </div>
            <p className="text-xs text-slate-300 font-medium">
              Real-time catalog sync & automated user tracking active.
            </p>
          </div>

          <div className="w-full bg-white/10 rounded-lg p-2.5 flex items-center justify-between text-xs font-semibold border border-white/10">
            <span className="text-slate-300">Sync Status</span>
            <span className="text-emerald-400 font-mono">100% Operational</span>
          </div>
        </div>
      </div>

      {/* Decorative Blur Ambient Background */}
      <div className="absolute -right-8 -bottom-12 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default HeroBanner;
