import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

type FeaturedServiceCardProps = {
  tag: string;
  title: string;
  description: string;
  highlights: string[];
  image: StaticImageData;
  href: string;
  sizes?: string;
};

export default function FeaturedServiceCard({
  tag,
  title,
  description,
  highlights,
  image,
  href,
  sizes = "(min-width: 768px) 33vw, 100vw",
}: FeaturedServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex w-full min-h-[460px] md:min-h-[520px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-7 transition-colors duration-500 hover:border-[#00A3FF]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A3FF]"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes={sizes}
        placeholder="blur"
        draggable={false}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Keep text legible over the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#00A3FF]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Top: category tag */}
      <div className="relative flex justify-end">
        <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
          {tag}
        </span>
      </div>

      {/* Bottom: service details */}
      <div className="relative">
        <h3 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-3 max-w-sm text-sm md:text-base leading-relaxed text-gray-300">
          {description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-gray-200 backdrop-blur-sm"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            View Service
          </span>
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-[#00A3FF] group-hover:bg-[#00A3FF] group-hover:text-black"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
