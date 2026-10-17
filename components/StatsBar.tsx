"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  caption: string;
  icon: React.ReactNode;
  rating?: boolean;
};

const ICON_PROPS = {
  className: "h-5 w-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const STAR_PATH =
  "M12 3.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L12 16.9l-5.25 2.7 1-5.8L3.5 9.7l5.9-.9z";

const STATS: Stat[] = [
  {
    value: 25,
    suffix: "+",
    label: "Years in NYC",
    caption: "Keeping Queens drivers on the road.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    value: 1000,
    suffix: "+",
    label: "Cars Serviced",
    caption: "Daily drivers to full track builds.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4.5 17a8.5 8.5 0 1 1 15 0" />
        <path d="M12 13l4-4" />
        <circle cx="12" cy="13" r="1" />
      </svg>
    ),
  },
  {
    value: 50,
    suffix: "+",
    label: "Services",
    caption: "Maintenance, repair, and performance under one roof.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="4" y="4" width="7" height="7" rx="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    value: 4.5,
    decimals: 1,
    label: "Average Rating",
    caption: "From customer reviews.",
    rating: true,
    icon: (
      <svg {...ICON_PROPS}>
        <path d={STAR_PATH} />
      </svg>
    ),
  },
];

const DURATION_MS = 1600;

function format(value: number, decimals = 0) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// Renders the final value on the server so the real number is always in the
// HTML; once mounted, resets to 0 and counts up the first time it scrolls into view.
function CountUp({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(value * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    setDisplay(0);
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{format(display, decimals)}</span>;
}

function StarRating({ value, max = 5 }: { value: number; max?: number }) {
  const stars = Array.from({ length: max }, (_, i) => (
    <svg key={i} className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path d={STAR_PATH} fill="currentColor" />
    </svg>
  ));

  return (
    <div className="relative mt-4 inline-flex" role="img" aria-label={`${value} out of ${max} stars`}>
      <div className="flex gap-1 text-white/15">{stars}</div>
      <div
        className="absolute inset-0 flex gap-1 overflow-hidden text-[#00A3FF]"
        style={{ width: `${(value / max) * 100}%` }}
      >
        {stars}
      </div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#0c0c0c] py-20 md:py-24"
    >
      <div className="relative max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[#00A3FF] text-[10px] uppercase tracking-[0.22em] font-mono mb-3">
              By the numbers
            </p>
            <h2
              id="stats-heading"
              className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none"
            >
              Trusted by NYC Drivers
            </h2>
          </div>
          <p className="max-w-sm text-sm text-gray-400 leading-relaxed">
            Decades of experience and a track record our customers keep coming
            back for.
          </p>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition-colors duration-500 hover:border-[#00A3FF]/40"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF]/70 to-transparent"
              />

              <div className="flex items-center justify-between">
                <dt className="font-mono text-xs uppercase tracking-widest text-gray-400">
                  {stat.label}
                </dt>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00A3FF]/30 bg-[#00A3FF]/10 text-[#00A3FF] transition-colors duration-300 group-hover:bg-[#00A3FF]/20">
                  {stat.icon}
                </span>
              </div>

              <dd className="mt-6">
                <p className="text-5xl md:text-6xl font-black leading-none tracking-tight text-white tabular-nums">
                  <CountUp value={stat.value} decimals={stat.decimals} />
                  {stat.suffix && (
                    <span className="text-[#00A3FF]">{stat.suffix}</span>
                  )}
                  {stat.rating && (
                    <span className="ml-1 text-2xl text-gray-500">/ 5</span>
                  )}
                </p>
                {stat.rating && <StarRating value={stat.value} />}
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  {stat.caption}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
