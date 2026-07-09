import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

type ServiceCardProps = {
  title: string;
  description?: string;
  image: StaticImageData | string;
  link?: string;
};

export default function ServiceCard({
  title,
  description,
  image,
  link,
}: ServiceCardProps) {
  return (
    <div className="group relative grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-xl bg-[#0a0a0a] shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          decoding="async"
          loading="lazy"
          draggable={false}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
      </div>

      <div className="grid h-full grid-rows-[auto_1fr_auto] px-5 pb-6 pt-4">
        <h3
          className="font-bold uppercase tracking-widest text-white"
          style={{ fontSize: "clamp(0.65rem, 3.5vw, 1.25rem)" }}
        >
          {title}
        </h3>

        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        ) : (
          <div />
        )}

        {link && (
          <Link
            href={link}
            className="group/link mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00f0ff] transition-opacity hover:opacity-75"
          >
            Learn More
            <span className="transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
