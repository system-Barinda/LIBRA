import React from "react";

/**
 * LibraryHero
 * A hero section replicating a "Library Full Of Books" landing page illustration.
 * Built with React + TypeScript + Tailwind CSS. No navigation/menu included.
 */
const LibraryHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-50 via-sky-50 to-sky-100">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 pb-0 pt-12 sm:px-10 lg:flex-row lg:gap-8 lg:px-16 lg:pt-16">
        {/* ---------------- Illustration ---------------- */}
        <div className="relative flex w-full flex-1 items-end justify-center lg:w-1/2">
          <IllustrationSVG className="h-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px]" />
        </div>

        {/* ---------------- Text content ---------------- */}
        <div className="flex w-full flex-1 flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          <h1 className="text-4xl font-bold leading-tight text-[#0b2545] sm:text-5xl lg:text-[3.25rem]">
            Library Full
            <br />
            Of Books
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            mattis velit.
          </p>
          <button
            type="button"
            className="mt-8 rounded-md bg-[#ff8a4c] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-200 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ff7a30] active:translate-y-0"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Bottom floor band */}
      <div className="mt-10 h-16 w-full bg-[#bfe3fb] sm:h-20 lg:h-24" />
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Illustration                                                      */
/* ------------------------------------------------------------------ */

const IllustrationSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 620 520"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* soft background blob */}
      <ellipse cx="300" cy="260" rx="270" ry="230" fill="#e3f0fb" />
      <ellipse
        cx="230"
        cy="180"
        rx="150"
        ry="120"
        fill="#d7ebfa"
        opacity="0.7"
      />

      {/* ground shadow */}
      <ellipse cx="300" cy="470" rx="230" ry="22" fill="#cfe7fb" />

      {/* -------- floating decorations -------- */}
      {/* lightbulb */}
      <g transform="translate(55,70)">
        <circle cx="30" cy="30" r="30" fill="#0e6fb0" opacity="0.12" />
        <path
          d="M30 8a20 20 0 0 0-11 36.7V52a5 5 0 0 0 5 5h12a5 5 0 0 0 5-5v-7.3A20 20 0 0 0 30 8Z"
          fill="#1a8fd1"
        />
        <rect x="23" y="57" width="14" height="5" rx="2" fill="#0b2545" />
        <rect x="25" y="63" width="10" height="4" rx="2" fill="#0b2545" />
      </g>

      {/* small squiggle near bulb */}
      <path
        d="M148 62c4-6 12-6 16 0s12 6 16 0"
        stroke="#ff8a4c"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* heart */}
      <path
        d="M300 70c-6-12-24-12-28 2-3 11 8 22 28 36 20-14 31-25 28-36-4-14-22-14-28-2Z"
        fill="#ff8a4c"
      />

      {/* notebook icon */}
      <g transform="translate(215,55) rotate(-12)">
        <rect x="0" y="0" width="46" height="58" rx="6" fill="#1a8fd1" />
        <rect x="8" y="10" width="30" height="6" rx="3" fill="#bfe3fb" />
        <rect x="8" y="22" width="30" height="6" rx="3" fill="#bfe3fb" />
      </g>

      {/* magnifying glass */}
      <g transform="translate(430,70)">
        <circle
          cx="35"
          cy="35"
          r="26"
          fill="none"
          stroke="#1a8fd1"
          strokeWidth="10"
        />
        <rect
          x="55"
          y="55"
          width="16"
          height="34"
          rx="8"
          transform="rotate(45 55 55)"
          fill="#0b2545"
        />
      </g>

      {/* small squiggle near magnifier */}
      <path
        d="M498 130c4-6 12-6 16 0s12 6 16 0"
        stroke="#1a8fd1"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* stars */}
      <Star x={70} y={230} size={22} fill="#15803d" />
      <Star x={470} y={300} size={20} fill="#1a8fd1" />

      {/* -------- book stack -------- */}
      {/* far-left tall dark blue book, tilted */}
      <g transform="translate(95,215) rotate(-14)">
        <rect x="0" y="0" width="70" height="230" rx="10" fill="#0e5fa8" />
        <rect x="10" y="20" width="50" height="14" rx="4" fill="#62b6ea" />
        <rect x="10" y="150" width="50" height="14" rx="4" fill="#62b6ea" />
      </g>

      {/* cyan book */}
      <g transform="translate(178,200)">
        <rect x="0" y="0" width="70" height="245" rx="10" fill="#2ba8e0" />
        <rect x="14" y="24" width="16" height="16" rx="4" fill="#0b2545" />
        <rect x="14" y="150" width="42" height="14" rx="4" fill="#bfe3fb" />
      </g>

      {/* orange short book */}
      <g transform="translate(252,240)">
        <rect x="0" y="0" width="66" height="205" rx="10" fill="#ff9d63" />
      </g>

      {/* navy tall book with cyan stripes */}
      <g transform="translate(312,175)">
        <rect x="0" y="0" width="66" height="270" rx="10" fill="#0b2545" />
        <rect x="14" y="24" width="10" height="200" rx="5" fill="#2ba8e0" />
        <rect x="40" y="24" width="10" height="200" rx="5" fill="#2ba8e0" />
      </g>

      {/* front large orange book with bookmark */}
      <g transform="translate(372,190)">
        <rect x="0" y="0" width="150" height="255" rx="14" fill="#ff8a4c" />
        <rect x="105" y="0" width="30" height="70" fill="#0b2545" />
        <path d="M105 70l15-14 15 14Z" fill="#0b2545" />
        <rect x="24" y="185" width="60" height="26" rx="6" fill="#0e6fb0" />
      </g>
    </svg>
  );
};

const Star: React.FC<{ x: number; y: number; size: number; fill: string }> = ({
  x,
  y,
  size,
  fill,
}) => (
  <g transform={`translate(${x},${y})`}>
    <path
      d={`M${size / 2} 0 L${size * 0.62} ${size * 0.38} L${size} ${
        size * 0.38
      } L${size * 0.68} ${size * 0.6} L${size * 0.8} ${size} L${
        size / 2
      } ${size * 0.75} L${size * 0.2} ${size} L${size * 0.32} ${
        size * 0.6
      } L0 ${size * 0.38} L${size * 0.38} ${size * 0.38} Z`}
      fill={fill}
    />
  </g>
);

export default LibraryHero;
