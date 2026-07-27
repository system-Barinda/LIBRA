import React from "react";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Soft Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-white/50 blur-3xl" />
      </div>

      {/* Left Line */}
      <div className="absolute left-[28%] top-0 h-full w-px rotate-12 bg-slate-300/40" />

      {/* Right Line */}
      <div className="absolute right-[22%] top-0 h-full w-px -rotate-12 bg-blue-300/40" />

      {/* Center Dotted Line */}
      <div className="absolute left-1/2 top-0 h-full border-l-2 border-dashed border-blue-300/60" />

      {/* Left Circles */}
      <div className="absolute left-6 bottom-10 flex flex-col gap-8">
        <div className="h-7 w-7 rounded-full bg-blue-500/70" />
        <div className="h-9 w-9 rounded-full bg-slate-300" />
        <div className="h-6 w-6 rounded-full bg-blue-400" />
      </div>

      {/* Right Circles */}
      <div className="absolute right-8 bottom-12 flex flex-col gap-10">
        <div className="h-5 w-5 rounded-full bg-blue-300" />
        <div className="h-8 w-8 rounded-full bg-blue-500/70" />
        <div className="h-6 w-6 rounded-full bg-slate-400" />
      </div>
    </>
  );
};

export default HeroBackground;
