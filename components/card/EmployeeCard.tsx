import Image, { type StaticImageData } from "next/image";

type EmployeeCardProps = {
  title: string;
  role?: string;
  image: StaticImageData | string;
};

export default function EmployeeCard({
  title,
  role,
  image,
}: EmployeeCardProps) {
  return (
    <div className="group relative w-full overflow-hidden bg-[#0f0f0f] rounded-xl">
      <div className="relative aspect-[2/3]">
        <Image
          src={image}
          alt={title}
          fill
          decoding="async"
          draggable={false}
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 left-0 flex h-[45%] w-full flex-col justify-end bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-6">
        <h3 className="text-lg font-bold uppercase text-white sm:text-xl">
          {title}
        </h3>

        {role && (
          <p className="mt-1 text-sm uppercase text-gray-400 transition-colors duration-300 group-hover:text-[#00A3FF]">
            {role}
          </p>
        )}
      </div>
    </div>
  );
}
