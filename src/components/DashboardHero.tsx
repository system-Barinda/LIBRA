import React from "react";

const DashboardHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50 to-blue-200 p-8 md:p-14 shadow-xl">
      {/* Decorative background */}
      <div className="absolute inset-0">
        {/* Diagonal Lines */}
        <div className="absolute left-1/3 top-0 h-full w-px rotate-12 bg-slate-300/50"></div>
        <div className="absolute right-1/4 top-0 h-full w-px -rotate-12 bg-blue-300/40"></div>

        {/* Dotted Line */}
        <div className="absolute left-1/2 top-0 h-full border-l-2 border-dashed border-blue-300/60"></div>

        {/* Floating circles */}
        <div className="absolute left-8 bottom-12 flex flex-col gap-8">
          <div className="h-6 w-6 rounded-full bg-blue-500/70"></div>
          <div className="h-8 w-8 rounded-full bg-slate-300"></div>
          <div className="h-5 w-5 rounded-full bg-blue-400"></div>
        </div>

        <div className="absolute right-16 bottom-16 flex flex-col gap-10">
          <div className="h-4 w-4 rounded-full bg-blue-300"></div>
          <div className="h-7 w-7 rounded-full bg-blue-500/60"></div>
          <div className="h-5 w-5 rounded-full bg-slate-400"></div>
        </div>

        {/* Soft glow */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.6em] text-slate-600 md:text-sm">
          Dashboard • Analytics • Reporting
        </p>

        <p className="mb-2 text-xl font-semibold tracking-[0.5em] text-blue-900">
          THE
        </p>

        <h1 className="text-5xl font-extrabold uppercase tracking-wider text-blue-900 md:text-7xl">
          Dashboard
        </h1>

        <h2 className="mt-2 text-4xl font-extrabold uppercase tracking-wider text-blue-700 md:text-6xl">
          Studio
        </h2>

        <div className="mt-12 max-w-2xl">
          <p className="text-2xl font-semibold text-slate-700">
            Visualize Your Data
          </p>

          <p className="mt-2 text-3xl font-bold text-amber-500">
            Using Real-World
          </p>

          <p className="mt-2 text-2xl font-semibold text-slate-700">
            Business Insights & Analytics
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardHero;
