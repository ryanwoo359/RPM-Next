import Image, { type StaticImageData } from "next/image";

type EmployeeCardProps = {
  title: string;
  role?: string;
  description?: string;
  image: StaticImageData | string;
};

export default function EmployeeCard({
  title,
  role,
  description,
  image,
}: EmployeeCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f0f0f] shadow-lg shadow-black/40 transition-colors duration-300 hover:border-white/20">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#151515]">
        <Image
          src={image}
          alt={`Portrait of ${title}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          placeholder={typeof image === "string" ? "empty" : "blur"}
          draggable={false}
          className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0f0f0f] to-transparent"
        />
      </div>

      <div className="px-6 pb-6 pt-2">
        {role && (
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00A3FF]">
            {role}
          </p>
        )}
        <h3 className="mt-2 text-2xl font-black uppercase leading-none tracking-tight text-white">
          {title}
        </h3>
        {description && (
          <p className="mt-4 border-t border-white/[0.08] pt-4 text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
