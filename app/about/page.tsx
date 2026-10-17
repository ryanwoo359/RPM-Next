import Link from "next/link";
import Image from "next/image";
import EmployeeCard from "@/components/card/EmployeeCard";

import tommie from "@/public/tommie.webp";
import storeFront from "@/public/rpm-storefront.webp";

const values = [
  {
    number: "01",
    title: "Honest Work",
    body: "No upsells, no fluff. We tell you what your car needs and why — nothing more.",
  },
  {
    number: "02",
    title: "Built to Last",
    body: "We treat every repair like it's going on our own car. Quality parts, quality labour.",
  },
  {
    number: "03",
    title: "Driver First",
    body: "From weekend warriors to daily commuters — we respect every build and every budget.",
  },
];

const team = [
  {
    title: "Tommie Puck",
    role: "Boss",
    description: "Supervises RPM",
    image: tommie,
  },
];

export default function About() {
  return (
    <div className="text-white overflow-x-hidden">
      {/* ── PAGE HEADER ── */}
      <div className="relative flex flex-col items-center justify-center pt-48 pb-24 px-6 overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A3FF]/10 blur-[120px] rounded-full" />

        <p className="text-[#00A3FF] text-xs uppercase tracking-[0.25em] mb-4 font-mono">
          Who we are
        </p>

        <h1 className="animate-fade-up text-5xl md:text-7xl font-black uppercase text-center leading-none tracking-tighter">
          About <span className="text-[#00A3FF]">RPM</span>
          <span className="font-rocksalt text-[#9d9d9b] text-4xl md:text-5xl ml-3">
            nyc
          </span>
        </h1>

        <p className="mt-5 text-gray-400 text-sm md:text-base text-center max-w-xl font-light tracking-wide">
          A team built on precision, passion, and performance.
        </p>
      </div>

      {/* ── OUR STORY ── */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-16 pb-32">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#00A3FF]/20 to-transparent" />
            <Image
              src={storeFront}
              alt="RPM NYC store front"
              sizes="(min-width: 768px) 50vw, 100vw"
              placeholder="blur"
              className="relative rounded-2xl w-full h-auto object-cover"
              draggable={false}
            />
            <div className="absolute -bottom-5 -right-5 bg-[#111] border border-white/10 rounded-xl px-5 py-4 hidden md:block">
              <p className="text-3xl font-black text-[#00A3FF] leading-none">
                25+
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mt-1">
                Years in NYC
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <p className="text-[#00A3FF] text-[10px] uppercase tracking-[0.22em] font-mono mb-3">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none border-b border-white/[0.4] pb-6 mb-6">
                Born in the Boroughs.
                <br />
                <span className="text-[#00A3FF]">Built for the Road.</span>
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed">
              We're a full-service automotive facility built to support every
              aspect of your vehicle — whether it's routine maintenance,
              advanced diagnostics, or serious performance upgrades.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We believe great performance starts with a properly maintained
              foundation. That's why we treat maintenance as seriously as
              modification. Every car that rolls into our bay gets the same
              attention, regardless of make, model, or mileage.
            </p>

            <div className="flex gap-8 pt-2">
              {[
                { stat: "1,000+", label: "Cars Serviced" },
                { stat: "50+", label: "Marques" },
                { stat: "4.5★", label: "Avg Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-white leading-none">
                    {s.stat}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="border-t border-b border-white/[0.06] bg-[#0c0c0c]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-28">
          <div className="mb-14">
            <p className="text-[#00A3FF] text-[10px] uppercase tracking-[0.22em] font-mono mb-3">
              What drives us
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none border-b border-white/[0.07] pb-6">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
            {values.map((item) => (
              <div
                key={item.number}
                className="bg-[#0c0c0c] p-10 group hover:bg-[#111] transition-colors duration-300"
              >
                <span className="text-6xl font-black text-white/[0.12] leading-none select-none">
                  {item.number}
                </span>
                <div className="mt-2 h-px w-8 bg-[#00A3FF] transition-all duration-500 group-hover:w-16" />
                <h3 className="mt-4 text-xl font-bold uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 py-28">
        <div className="mb-14">
          <p className="text-[#00A3FF] text-[10px] uppercase tracking-[0.22em] font-mono mb-3">
            The people behind the work
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none border-b border-white/[0.07] pb-6">
            Meet the Team
          </h2>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <EmployeeCard
              key={`${member.title}-${i}`}
              title={member.title}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
