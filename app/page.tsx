import Link from "next/link";
import Image from "next/image";
import FeaturedServiceCard from "@/components/card/FeaturedServiceCard";
import StatsBar from "@/components/StatsBar";

import coolingSystem from "@/public/cooling-system.png";
import dynoTuning from "@/public/dyno-tuning.png";
import ecuTuning from "@/public/ecu-tuning.png";

import blueGtr from "@/public/blueGTR.webp";
import gr86 from "@/public/BlueGr86.webp";
import pinkWrx from "@/public/pinkWRX.webp";
import featuredBuild from "@/public/picture.webp";

// Bento layout on desktop: one 2x2 hero tile, two 1x1 tiles, one 2x1 tile.
const FEATURED_BUILDS = [
  {
    src: blueGtr,
    alt: "Sky blue Nissan GTR",
    tag: "Car Wrap",
    layout: "md:col-span-2 md:row-span-2",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  {
    src: gr86,
    alt: "Blue GR86",
    tag: "Aesthetic",
    layout: "",
    sizes: "(min-width: 768px) 25vw, 100vw",
  },
  {
    src: pinkWrx,
    alt: "Pink WRX STI Sports Wagon",
    tag: "Car Wrap",
    layout: "",
    sizes: "(min-width: 768px) 25vw, 100vw",
  },
  {
    src: featuredBuild,
    alt: "Featured full build",
    tag: "Full Build",
    layout: "md:col-span-2",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
];

const EXPERTISE = [
  {
    tag: "Maintenance",
    title: "General Maintenance",
    description: "Factory-spec service with the care your car deserves.",
    highlights: ["Oil & Filters", "Fluids", "Multi-Point Inspection"],
    image: coolingSystem,
    href: "/services/general-maintenance",
  },
  {
    tag: "Performance",
    title: "Performance Upgrades",
    description: "More power, better handling — built for the street or track.",
    highlights: ["Dyno Tuning", "Coilovers", "Big Brakes"],
    image: dynoTuning,
    href: "/services/dyno-tuning",
  },
  {
    tag: "Diagnostics",
    title: "Diagnostics & Repair",
    description: "Pinpoint any fault fast with our full OBD-II suite.",
    highlights: ["OBD-II Scan", "Electrical", "Engine Repair"],
    image: ecuTuning,
    href: "/services/ecu-diagnostics",
  },
];

const ADVANTAGES = [
  {
    title: "NYC Specialists",
    body: "We know the roads, the climate, and the demands of driving in the five boroughs.",
    icon: (
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
  },
  {
    title: "No BS Pricing",
    body: "Transparent quotes up front. No hidden labour fees, no surprise line items.",
    icon: (
      <>
        <path d="M3 12V4h8l9.5 9.5-8 8L3 12z" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </>
    ),
  },
  {
    title: "Dealer-Level Tech",
    body: "Factory scan tools and trained technicians across European, Asian, and domestic marques.",
    icon: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
      </>
    ),
  },
  {
    title: "Fast Turnaround",
    body: "Most jobs same-day or next-day. We respect your time as much as your car.",
    icon: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  },
];

function CTAButton({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "primary" | "ghost";
  children: React.ReactNode;
}) {
  const base =
    "group/button relative inline-flex items-center justify-center overflow-hidden rounded-md px-8 py-3.5 transition-all duration-300 ease-in-out hover:scale-110 border border-white/20 cursor-pointer";
  const styles =
    variant === "primary"
      ? `${base} bg-[#00A3FF] text-black hover:shadow-xl hover:shadow-[#00A3FF]/50`
      : `${base} bg-gray-800/30 backdrop-blur-lg text-white hover:shadow-xl hover:shadow-gray-600/50`;

  return (
    <Link href={href} className={styles}>
      <span className="text-xs font-bold uppercase tracking-widest">
        {children}
      </span>
      <div
        aria-hidden="true"
        className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
      >
        <div className="relative h-full w-10 bg-white/30" />
      </div>
    </Link>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      aria-hidden="true"
      className="text-[#00A3FF] text-[10px] uppercase tracking-[0.22em] font-mono mb-3"
    >
      {children}
    </p>
  );
}

function BottomCTA() {
  return (
    <div className="relative py-20 md:py-28 px-8 text-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#00A3FF]/5 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#00A3FF]/8 blur-[100px] rounded-full"
      />
      <div className="relative">
        <p
          aria-hidden="true"
          className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-4"
        >
          Let&apos;s get started
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
          Your Car Deserves <span className="text-(--textcolor)">Better.</span>
        </h2>
        <CTAButton href="/support" variant="primary">
          Book Now
        </CTAButton>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="text-white overflow-x-hidden">
      {/* HERO */}
      <section
        aria-label="Hero"
        className="relative min-h-[100dvh] flex items-center"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/GTR drive.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          title="Decorative background video of a car driving"
          // poster="/blueGTR.webp"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#080808] to-transparent"
        />

        <div className="relative z-10 px-8 md:px-20 max-w-5xl">
          <p className="text-[#00A3FF] text-[10px] uppercase tracking-[0.22em] font-mono mb-5">
            New York City — Full Service Auto Shop
          </p>

          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter">
            Built for <span className="text-[#00A3FF]">Drivers.</span>
            <br />
            Not Just Cars.
          </h1>

          <p className="mt-6 text-gray-300 text-base md:text-lg max-w-lg leading-relaxed font-light">
            Precision repairs, honest pricing, and performance upgrades, serving
            NYC drivers who actually care about their machines.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <CTAButton href="/support" variant="primary">
              Contact us
            </CTAButton>
            <CTAButton href="/services" variant="ghost">
              Explore Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section
        aria-labelledby="expertise-heading"
        className="max-w-[1400px] mx-auto px-8 md:px-16 py-20 md:py-28 lg:py-32"
      >
        <div className="mb-10 md:mb-14">
          <SectionLabel>What we&apos;re good at</SectionLabel>
          <div className="flex items-end justify-between border-b border-white/[0.07] pb-6">
            <h2
              id="expertise-heading"
              className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none"
            >
              Our Expertise
            </h2>
            <Link
              href="/services"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              All Services
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERTISE.map((item, i) => (
            <div
              key={item.title}
              className={i === 1 ? "md:scale-[1.03] md:z-10 relative" : ""}
            >
              <FeaturedServiceCard {...item} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex md:hidden justify-center">
          <CTAButton href="/services" variant="ghost">
            All Services
          </CTAButton>
        </div>
      </section>

      {/* FEATURED BUILDS */}
      <section
        aria-labelledby="builds-heading"
        className="max-w-[1400px] mx-auto px-8 md:px-16 pb-20 md:pb-28 lg:pb-32"
      >
        <div className="mb-10 md:mb-14">
          <SectionLabel>Our work</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/[0.07] pb-6">
            <h2
              id="builds-heading"
              className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none"
            >
              Featured Builds
            </h2>
            <p className="max-w-sm text-sm text-gray-400 leading-relaxed">
              Wraps, full builds, and upgrades that left our shop ready to turn
              heads.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[240px] lg:auto-rows-[280px]">
          {FEATURED_BUILDS.map((build) => (
            <li
              key={build.alt}
              className={`group relative h-[260px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111] md:h-auto ${build.layout}`}
            >
              <Image
                src={build.src}
                alt={build.alt}
                fill
                sizes={build.sizes}
                placeholder="blur"
                draggable={false}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
              />
              <div className="absolute bottom-0 left-0 p-5 md:p-6">
                <span className="inline-block rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  {build.tag}
                </span>
                <p className="mt-2 text-lg font-bold uppercase tracking-tight text-white">
                  {build.alt}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 md:mt-12 flex justify-center">
          <CTAButton href="/gallery" variant="primary">
            View Full Gallery
          </CTAButton>
        </div>
      </section>

      <StatsBar />

      {/* RPM ADVANTAGE */}
      <section
        aria-labelledby="advantage-heading"
        className="max-w-[1400px] mx-auto px-8 md:px-16 py-20 md:py-28 lg:flex lg:min-h-[100dvh] lg:flex-col lg:justify-center lg:py-28"
      >
        <div className="mb-10 md:mb-14">
          <SectionLabel>Why choose us</SectionLabel>
          <h2
            id="advantage-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none border-b border-white/[0.07] pb-6"
          >
            The RPM Advantage
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {ADVANTAGES.map((item) => (
            <li
              key={item.title}
              className="group rounded-2xl border border-white/[0.08] bg-[#0f0f0f] p-7 md:p-8 lg:p-10 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#00A3FF]/25 bg-[#00A3FF]/10 text-[#00A3FF] transition-colors duration-300 group-hover:bg-[#00A3FF]/15">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <BottomCTA />
    </div>
  );
}
