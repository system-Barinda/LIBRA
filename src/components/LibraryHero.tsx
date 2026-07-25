import React from "react";

/**
 * LibraryHero
 * Landing page hero section matching the reference illustration.
 * Navigation menu removed as requested.
 */
const LibraryHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#e0f2fe] flex flex-col justify-between">
      {/* Top spacing placeholder where the menu used to be */}
      <div className="h-12 sm:h-16 w-full" />

      {/* Main Content Area */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col-reverse items-center justify-center gap-8 px-6 pb-12 lg:flex-row lg:gap-12 lg:px-12">
        {/* Left Side: Illustration */}
        <div className="relative flex w-full flex-1 items-center justify-center lg:w-1/2">
          <IllustrationSVG className="h-auto w-full max-w-[480px] sm:max-w-[580px] lg:max-w-[640px]" />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex w-full flex-1 flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left lg:pl-8">
          <h1 className="text-4xl font-extrabold leading-tight text-[#1e293b] sm:text-5xl lg:text-[3.5rem] tracking-tight">
            Library Full
            <br />
            Of Books
          </h1>
          <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br className="hidden sm:inline" /> Etiam vel mattis velit.
          </p>
          <button
            type="button"
            className="mt-8 rounded-full bg-[#ff8543] px-9 py-3.5 text-xs font-bold tracking-widest text-white uppercase shadow-md shadow-orange-500/20 transition-all duration-200 hover:bg-[#f97316] hover:shadow-lg active:scale-95"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Bottom Floor Band */}
      <div className="h-16 w-full bg-[#bde0fe] sm:h-20 lg:h-24" />
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Illustration SVG Component                                        */
/* ------------------------------------------------------------------ */

const IllustrationSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 700 520"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Background Soft Cloud Blobs */}
      <path
        d="M 120,280 C 80,220 120,120 220,100 C 300,80 380,120 420,100 C 480,80 580,110 600,200 C 630,280 580,380 480,410 C 380,440 220,440 150,380 C 90,330 120,280 120,280 Z"
        fill="#f0f9ff"
        opacity="0.95"
      />
      <circle cx="500" cy="180" r="110" fill="#ffffff" opacity="0.6" />
      <circle cx="160" cy="340" r="120" fill="#ffffff" opacity="0.5" />

      {/* Oval Ground Base Shadow */}
      <ellipse cx="340" cy="455" rx="280" ry="24" fill="#bae6fd" />

      {/* ---------------- FLOATING ICONS ---------------- */}

      {/* 1. Lightbulb (Left Top) */}
      <g transform="translate(115, 80)">
        <path
          d="M25 0C11.19 0 0 11.19 0 25c0 8.84 4.58 16.57 11.5 21l2 11h23l2-11C45.42 41.57 50 33.84 50 25 50 11.19 38.81 0 25 0z"
          fill="#00aeef"
        />
        {/* Filament / inner detail */}
        <path
          d="M 18,22 L 23,14 L 27,14 L 32,22 M 22,27 L 28,27"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="16" y="59" width="18" height="6" rx="3" fill="#00aeef" />
      </g>

      {/* Orange Squiggle (near bulb) */}
      <path
        d="M 195,85 Q 202,75 208,85 T 220,85"
        stroke="#ff8543"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* 2. Floating Cyan Book (Center Top) */}
      <g transform="translate(260, 65) rotate(-12)">
        <rect x="0" y="0" width="54" height="72" rx="8" fill="#00aeef" />
        <rect x="10" y="14" width="34" height="6" rx="3" fill="#e0f2fe" />
        <path d="M 38,48 L 46,48 L 42,54 Z" fill="#e0f2fe" />
      </g>

      {/* 3. Orange Heart */}
      <path
        d="M 375,80 C 375,70 360,60 348,72 C 336,60 321,70 321,80 C 321,98 348,112 348,112 C 348,112 375,98 375,80 Z"
        fill="#ff8543"
      />

      {/* 4. Magnifying Glass (Right Top) */}
      <g transform="translate(470, 90) rotate(15)">
        <circle
          cx="28"
          cy="28"
          r="22"
          stroke="#00aeef"
          strokeWidth="10"
          fill="none"
        />
        <rect
          x="23"
          y="48"
          width="10"
          height="32"
          rx="5"
          fill="#2563eb"
          transform="rotate(-45 23 48)"
        />
        <path
          d="M 20,20 A 12,12 0 0,1 32,16"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Blue Squiggle (near glass) */}
      <path
        d="M 585,200 Q 592,190 600,200 T 612,200"
        stroke="#2563eb"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Decorative Stars */}
      {/* Left blue star */}
      <polygon
        points="105,235 108,243 117,243 110,248 112,256 105,251 98,256 100,248 93,243 102,243"
        fill="#2563eb"
      />
      {/* Right light blue star */}
      <polygon
        points="630,305 634,315 645,315 636,321 639,331 630,325 621,331 624,321 615,315 626,315"
        fill="#00aeef"
      />

      {/* ---------------- BOOK STACK ---------------- */}

      {/* Book 1: Dark Blue Tilted Book (Far Left) */}
      <g transform="translate(130, 215) rotate(-14)">
        <rect x="0" y="0" width="76" height="240" rx="18" fill="#2563eb" />
        <rect x="12" y="22" width="52" height="14" rx="7" fill="#00aeef" />
        <rect x="16" y="55" width="10" height="130" rx="5" fill="#00aeef" />
        <rect x="12" y="200" width="52" height="14" rx="7" fill="#00aeef" />
      </g>

      {/* Book 2: Bright Cyan Book */}
      <g transform="translate(240, 210)">
        <rect x="0" y="0" width="68" height="245" rx="16" fill="#00aeef" />
        <rect x="14" y="22" width="18" height="16" rx="5" fill="#0284c7" />
        <rect x="14" y="195" width="40" height="12" rx="6" fill="#1e40af" />
      </g>

      {/* Book 3: Short Light Orange Book */}
      <g transform="translate(308, 250)">
        <rect x="0" y="0" width="60" height="205" rx="14" fill="#ffb07c" />
      </g>

      {/* Book 4: Royal Blue Tall Book */}
      <g transform="translate(368, 195)">
        <rect x="0" y="0" width="64" height="260" rx="16" fill="#2563eb" />
        <rect x="14" y="22" width="10" height="210" rx="5" fill="#00aeef" />
        <rect x="40" y="22" width="10" height="210" rx="5" fill="#00aeef" />
      </g>

      {/* Book 5: Main Orange Front Book with Bookmark */}
      <g transform="translate(414, 220)">
        <rect x="0" y="0" width="180" height="235" rx="16" fill="#ff8543" />
        {/* Dark Navy Bookmark hanging from top */}
        <path d="M 100,0 L 140,0 L 140,42 L 120,30 L 100,42 Z" fill="#1e293b" />
        {/* Cyan accent box near bottom */}
        <rect x="52" y="180" width="65" height="26" rx="4" fill="#00aeef" />
      </g>
    </svg>
  );
};

export default LibraryHero;
