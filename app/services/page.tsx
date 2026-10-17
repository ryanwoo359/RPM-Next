import ServiceCard from "@/components/card/ServiceCard";
import { serviceCategories } from "@/lib/services";

export default function Services() {
  return (
    <div className="bg-[#080808] text-white">
      {/* ── HERO BANNER ── */}
      <div className="relative flex flex-col items-center justify-center pt-48 pb-24 px-6 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A3FF]/10 blur-[120px] rounded-full" />

        <p className="text-[#00A3FF] text-xs uppercase text-center md:text-left tracking-[0.25em] mb-4 font-mono">
          RPM NYC — Full Service Auto Shop
        </p>

        <h1 className="text-5xl md:text-7xl font-black uppercase text-center leading-none tracking-tighter">
          What We <span className="text-[#00A3FF]">Do</span>
        </h1>

        <p className="mt-5 text-gray-400 text-sm md:text-base text-center max-w-xl font-light tracking-wide">
          Five categories. Every service your vehicle needs — from a routine oil
          change to a full custom build.
        </p>
      </div>

      {/* ── SERVICE CATEGORIES ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-12 md:pt-0 pb-32 space-y-28">
        {serviceCategories.map((category) => (
          <div key={category.id}>
            {/* Category header */}
            <div className="flex items-end gap-5 mb-8 border-b border-white/[0.1] pb-5">
              <span className="text-[80px] font-black leading-none text-white/[0.20] select-none">
                {category.label}
              </span>
              <div className="mb-2">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none">
                  {category.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1 tracking-wide">
                  {category.tagline}
                </p>
              </div>
              {/* <div className="ml-auto mb-3 hidden md:block h-px w-16 bg-[#00f0ff]" /> */}
            </div>

            {/* Cards grid */}
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={`/services/${service.slug}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
