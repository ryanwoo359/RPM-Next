import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allServices, getService } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.title} | RPM NYC`,
    description: service.description,
  };
}

function SectionHeading({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <p className="text-[#00A3FF] text-xs uppercase tracking-[0.25em] mb-3 font-mono">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none border-b border-white/[0.1] pb-5">
        {children}
      </h2>
    </div>
  );
}

export default async function ServiceDetail(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <div className="bg-[#080808] text-white">
      {/* ── HERO ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 pt-36 pb-20">
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 mb-10"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            ←
          </span>
          All Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[#00A3FF] text-xs uppercase tracking-[0.25em] mb-4 font-mono">
              {service.category.title}
            </p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
              {service.title}
            </h1>
            <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
              {service.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <Link
                href="/support"
                className="inline-flex items-center justify-center rounded-md bg-[#00A3FF] hover:bg-[#0088D4] transition-colors duration-300 px-3 py-3.5 sm:px-8 sm:py-4 text-center text-black text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest"
              >
                Request Service
              </Link>
              <a
                href="tel:7187403277"
                className="inline-flex items-center justify-center rounded-md border border-white/20 hover:border-white/50 hover:bg-white/5 transition-colors duration-300 px-3 py-3.5 sm:px-8 sm:py-4 text-center text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pb-32 space-y-24">
        {/* ── OVERVIEW ── */}
        <section aria-labelledby="overview-heading">
          <SectionHeading label="Overview">
            <span id="overview-heading">About this service</span>
          </SectionHeading>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
            {service.overview}
          </p>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section aria-labelledby="included-heading">
          <SectionHeading label="What you get">
            <span id="included-heading">What&apos;s Included</span>
          </SectionHeading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-5"
              >
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00A3FF]"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10.5l3.5 3.5L16 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-gray-300 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── PROCESS ── */}
        <section aria-labelledby="process-heading">
          <SectionHeading label="How it works">
            <span id="process-heading">Our Process</span>
          </SectionHeading>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-6"
              >
                <span
                  aria-hidden="true"
                  className="block text-4xl font-black leading-none text-[#00A3FF]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-bold uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading">
          <SectionHeading label="Questions">
            <span id="faq-heading">FAQ</span>
          </SectionHeading>
          <div className="max-w-3xl divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base md:text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-2xl leading-none text-[#00A3FF] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
