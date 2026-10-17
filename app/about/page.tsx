import Link from "next/link";
import Image from "next/image";
import EmployeeCard from "@/components/card/EmployeeCard";

import tommie from "@/public/tommie.webp";
import storeFront from "@/public/rpm-storefront.webp";

const values = [
  {
    title: "Honest Work",
    body: "No upsells, no fluff. We tell you what your car needs and why — nothing more.",
    commitments: ["Every repair explained", "No unnecessary upsells"],
    icon: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Built to Last",
    body: "We treat every repair like it's going on our own car. Quality parts, quality labour.",
    commitments: ["Quality parts only", "Done like it's our own car"],
    icon: (
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z" />
    ),
  },
  {
    title: "Driver First",
    body: "From weekend warriors to daily commuters — we respect every build and every budget.",
    commitments: ["Every build welcome", "Options for every budget"],
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="2" />
        <path d="M3.5 10.5H10M14 10.5h6.5M12 14v7" />
      </>
    ),
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

            <dl className="mx-auto grid w-full max-w-md grid-cols-3 divide-x divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#0f0f0f] md:mx-0">
              {[
                { value: "1,000", suffix: "+", label: "Cars Serviced" },
                { value: "50", suffix: "+", label: "Marques" },
                { value: "4.5", suffix: "★", label: "Avg Rating" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col-reverse items-center px-3 py-4 text-center"
                >
                  <dt className="mt-1.5 text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                    {s.label}
                  </dt>
                  <dd className="text-2xl font-black leading-none text-white">
                    {s.value}
                    <span className="text-[#00A3FF]">{s.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section
        aria-labelledby="values-heading"
        className="border-y border-white/[0.06] bg-[#0c0c0c]"
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-20 md:py-28">
          <div className="mb-2 flex flex-wrap items-end justify-between gap-6 border-b border-white/[0.07] pb-6">
            <div>
              <p className="text-[#00A3FF] text-[10px] uppercase tracking-[0.22em] font-mono mb-3">
                What drives us
              </p>
              <h2
                id="values-heading"
                className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none"
              >
                Our Core Values
              </h2>
            </div>
            <p className="max-w-sm text-sm text-gray-400 leading-relaxed">
              The principles behind every job that comes through our doors.
            </p>
          </div>

          <ul className="divide-y divide-white/[0.08]">
            {values.map((item) => (
              <li
                key={item.title}
                className="group grid grid-cols-1 gap-6 py-10 md:py-12 lg:grid-cols-12 lg:gap-10"
              >
                <div className="flex items-center gap-5 lg:col-span-4">
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
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none transition-colors duration-300 group-hover:text-[#00A3FF]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed lg:col-span-5 lg:self-center">
                  {item.body}
                </p>

                <ul className="space-y-2 lg:col-span-3 lg:self-center">
                  {item.commitments.map((commitment) => (
                    <li
                      key={commitment}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <svg
                        className="h-3.5 w-3.5 shrink-0 text-[#00A3FF]"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 7l3.5 3.5L12 3.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {commitment}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
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
