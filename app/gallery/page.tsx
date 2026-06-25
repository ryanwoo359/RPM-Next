"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

import picture from "@/public/picture.webp";
import unclecar from "@/public/unclecar.webp";
import blackcar from "@/public/blackcar.webp";
import suspension from "@/public/suspension.webp";
import fabrication from "@/public/fabrication.webp";
import picture2 from "@/public/picture2.webp";
import whitegtr from "@/public/whitegtr.webp";
import purpleCar from "@/public/purple_car.webp";
import work from "@/public/work.webp";

type GalleryItem = {
  src: StaticImageData;
  alt: string;
  tag: string;
  span?: "wide" | "tall" | "large";
};

const items: GalleryItem[] = [
  { src: picture, alt: "Featured build", tag: "Full Build", span: "wide" },
  { src: unclecar, alt: "Uncle's car", tag: "Custom" },
  { src: blackcar, alt: "Black Car", tag: "Aesthetic", span: "tall" },
  { src: suspension, alt: "Suspension work", tag: "Suspension" },
  {
    src: fabrication,
    alt: "Fabrication work",
    tag: "Fabrication",
    span: "large",
  },
  { src: picture2, alt: "Project car", tag: "Performance" },
  { src: whitegtr, alt: "White GTR", tag: "Aesthetic", span: "tall" },
  { src: purpleCar, alt: "Purple car", tag: "Aesthetic" },
  { src: work, alt: "Shop work", tag: "Aesthetic" },
];

const spanClass: Record<string, string> = {
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  large: "md:col-span-2 md:row-span-2",
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="text-white overflow-x-hidden">
      {/* ── HERO ── */}
      <div className="relative flex flex-col items-center justify-center pt-48 pb-24 px-6 overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f0ff]/10 blur-[120px] rounded-full" />

        <p className="text-[#00f0ff] text-xs uppercase tracking-[0.25em] mb-4 font-mono">
          Our Work
        </p>

        <h1
          className="text-5xl md:text-7xl font-black uppercase text-center leading-none tracking-tighter"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Featured <span className="text-[#00f0ff]">Builds</span>
        </h1>

        <p className="mt-5 text-gray-400 text-sm md:text-base text-center max-w-xl font-light tracking-wide">
          A selection of builds, restorations, and upgrades that left our shop
          ready to perform.
        </p>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-[90vw] mx-auto md:px-16 pb-32">
        <ul className="grid grid-cols-1 md:grid-cols-4 auto-rows md:auto-rows-[220px] gap-3 md:grid-flow-dense">
          {items.map((item, i) => (
            <li
              key={`${item.alt}-${i}`}
              onClick={() => setLightbox(item)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer bg-[#111] h-[180px] md:h-auto
                ${item.span ? spanClass[item.span] : ""}
              `}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                decoding="async"
                loading="lazy"
                draggable={false}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* tag + label */}
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block bg-[#00f0ff] text-black text-[9px] uppercase tracking-widest font-bold font-mono px-2 py-0.5 mb-1">
                  {item.tag}
                </span>
                <p className="text-white text-sm font-semibold">{item.alt}</p>
              </div>

              {/* zoom icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-1.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[80vh] aspect-video">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                decoding="async"
                draggable={false}
                className="object-contain rounded-xl"
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <span className="inline-block bg-[#00f0ff] text-black text-[9px] uppercase tracking-widest font-bold font-mono px-2 py-0.5 mr-2">
                  {lightbox.tag}
                </span>
                <span className="text-white text-sm">{lightbox.alt}</span>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-mono cursor-pointer"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── BOTTOM CTA ── */}
      <div className="relative border-t border-white/[0.06] py-28 px-8 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#00f0ff]/5 to-transparent" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#00f0ff]/8 blur-[100px] rounded-full" />
        <div className="relative">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-4">
            Want results like these?
          </p>
          <h2
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Your Build Could Be <span className="text-[#00f0ff]">Next.</span>
          </h2>
          <Link
            href="/support"
            className="inline-flex items-center gap-3 bg-[#00f0ff] hover:bg-[#00c8d4] transition-colors duration-300 px-12 py-4 text-black text-xs font-bold uppercase tracking-widest group"
          >
            Book a Service
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
