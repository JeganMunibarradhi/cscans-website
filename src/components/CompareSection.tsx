
import React, { useState } from 'react';
import { Scan } from 'lucide-react';

export const CompareSection: React.FC = () => {
  const [position, setPosition] = useState(50);

  // Show each badge only when its image has enough visible space
  const isBadgeVisible = (side: 'left' | 'right') => {
    if (side === 'left') return position > 12;
    return position < 88;
  };

  const updatePosition = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const next = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, next)));
  };

  return (
    <section
      id="compare"
      className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-400">
            <Scan size={14} />
            Imaging Guide
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See the Difference
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Drag the centre line to compare both panoramic X-ray illustrations.
          </p>
        </div>

        {/* Comparison slider */}
        <div
          className="relative mx-auto aspect-[3/2] w-full max-w-5xl touch-pan-y select-none overflow-hidden rounded-2xl border border-slate-700 bg-black shadow-2xl"
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            updatePosition(e);
          }}
          onPointerMove={(e) => {
            if (e.buttons === 1) updatePosition(e);
          }}
          role="group"
          aria-label="Interactive dental X-ray comparison"
        >
          {/* Base image: Without DCS */}
          <img
            src="/gallery/bdcs.png"
            alt="Illustrative panoramic X-ray without DCS"
            draggable={false}
            className="pointer-events-none absolute inset-0 h-full w-full object-contain"
          />

          {/* Left badge */}
          {isBadgeVisible('left') && (
            <span
              className="pointer-events-none absolute left-3 top-3 z-[1] rounded-full bg-blue-600 px-3 py-2 text-xs font-bold text-white shadow-lg transition-opacity duration-150 sm:left-5 sm:top-5 sm:text-sm"
            >
              Without DCS
            </span>
          )}

          {/* Top image: With DCS */}
          <div
            className="absolute inset-0 z-[2] overflow-hidden"
            style={{
              clipPath: `inset(0 0 0 ${position}%)`,
            }}
          >
            <img
              src="/gallery/adcs2.png"
              alt="Illustrative panoramic X-ray with DCS"
              draggable={false}
              className="pointer-events-none absolute inset-0 h-full w-full object-contain"
            />

            {/* Right badge is clipped with its image */}
            {isBadgeVisible('right') && (
              <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-orange-600 px-3 py-2 text-xs font-bold text-white shadow-lg sm:right-5 sm:top-5 sm:text-sm">
                With DCS
              </span>
            )}
          </div>

          {/* Centre divider and handle */}
          <div
            className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]"
            style={{ left: `${position}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-orange-600 text-white shadow-xl sm:h-12 sm:w-12">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 5 3 12l5 7" />
                <path d="m16 5 5 7-5 7" />
              </svg>
            </div>
          </div>

          {/* Accessible drag control */}
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Move comparison divider"
            className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Drag the handle left or right to reveal each image.
        </p>

        {/* Supporting information */}
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/50 p-5">
            <h3 className="mb-2 text-sm font-bold text-blue-400">
              Without DCS
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Illustrative image showing reduced clarity and contrast.
            </p>
          </div>

          <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
            <h3 className="mb-2 text-sm font-bold text-orange-400">
              With DCS
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Illustrative image showing enhanced visual clarity.
            </p>
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-slate-500">
          AI-generated illustrative images only. Not for clinical diagnosis
          or as evidence of actual diagnostic performance.
        </p>
      </div>
    </section>
  );
};
