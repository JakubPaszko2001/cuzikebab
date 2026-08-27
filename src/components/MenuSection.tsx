
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* Pomocnicze dane kart */
const cards = [
  {
    title: "CHICKEN GEMÜSE KEBAB",
    titleClass: "text-black",
    badge: "BUŁKA",
    badgeClass: "bg-blue-600 text-white",
    img: "/warzywa2.png",
    imgAlt: "Chicken gemüse kebab",
    variants: [
      { name: "SMALL", size: "140 G", price: "34 zł" },
      { name: "REGULAR", size: "180 G", price: "40 zł" },
      { name: "BIG", size: "220 G", price: "46 zł" },
      { name: "MIĘSO MIESZANE", size: "", price: "+2 zł" },
    ],
    center: false,
  },
  {
    title: "STEAK / BEEF GEMÜSE KEBAB",
    titleClass: "text-black",
    badge: "BUŁKA",
    badgeClass: "bg-blue-600 text-white",
    img: "/warzywa5.png",
    imgAlt: "Steak beef gemüse kebab",
    variants: [
      { name: "SMALL", size: "140 G", price: "37 zł" },
      { name: "REGULAR", size: "180 G", price: "45 zł" },
      { name: "BIG", size: "220 G", price: "53 zł" },
    ],
    center: true,
  },
  {
    title: "FALAFEL (VEGE)",
    titleClass: "text-black",
    badge: "BUŁKA",
    badgeClass: "bg-emerald-600 text-white",
    img: "/warzywa6.png",
    imgAlt: "Falafel vege kebab",
    variants: [
      { name: "SMALL", size: "4 SZT.", price: "32 zł" },
      { name: "REGULAR", size: "5 SZT.", price: "37 zł" },
    ],
    center: false,
  },
];

export default function MenuSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c = canvas;
    const k = ctx;

    function pseudoRandom(seed: number) {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }

    function drawComicBackground() {
      const width = (c.width = window.innerWidth);
      const height = (c.height = window.innerHeight);
      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.hypot(centerX, centerY);

      // 1. TŁO PODSTAWOWE
      k.fillStyle = "#2d3030";
      k.fillRect(0, 0, width, height);

      // 2. KROPKI (HALFTONE)
      const spacing = 18;
      const maxDotRadius = 8;
      k.fillStyle = "#000000";
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dist = Math.hypot(x - centerX, y - centerY);
          const factor = dist / maxRadius;
          if (factor < 0.32) continue;
          const radiusFactor = (factor - 0.32) / 0.68;
          const radius = Math.pow(radiusFactor, 1.8) * maxDotRadius;
          if (radius > 0.5) {
            k.beginPath();
            k.arc(x, y, radius, 0, Math.PI * 2);
            k.fill();
          }
        }
      }

      // 3. LINIE PROMIENISTE (SPEED LINES)
      const numberOfLines = 160;
      let seed = 42;
      for (let i = 0; i < numberOfLines; i++) {
        const angle = (i / numberOfLines) * Math.PI * 2;
        const rand1 = pseudoRandom(seed++);
        const rand2 = pseudoRandom(seed++);
        const rand3 = pseudoRandom(seed++);
        void rand3;
        const innerRadius = maxRadius * (0.28 + rand1 * 0.35);
        const outerRadius = maxRadius * 1.1;
        const lineWidthAngle = 0.0015 + rand2 * 0.006;

        const x1 = centerX + Math.cos(angle - lineWidthAngle) * outerRadius;
        const y1 = centerY + Math.sin(angle - lineWidthAngle) * outerRadius;
        const x2 = centerX + Math.cos(angle + lineWidthAngle) * outerRadius;
        const y2 = centerY + Math.sin(angle + lineWidthAngle) * outerRadius;
        const x3 = centerX + Math.cos(angle) * innerRadius;
        const y3 = centerY + Math.sin(angle) * innerRadius;

        k.beginPath();
        k.moveTo(x1, y1);
        k.lineTo(x2, y2);
        k.lineTo(x3, y3);
        k.closePath();
        k.fill();
      }
    }

    drawComicBackground();
    window.addEventListener("resize", drawComicBackground);
    return () => window.removeEventListener("resize", drawComicBackground);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden py-14 px-6 md:py-20">
      {/* Komiksowe tło: speed lines + halftone (canvas) */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      {/* Obrastające przyciemnienie dla czytelności napisów */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/20" />

      {/* Nagłówek sekcji */}
      <div className="relative z-[5] mb-12 w-full max-w-6xl text-center md:mb-16">
        {/* Mniejszy napis — CUZI KEBAB */}
        <p className="font-sans text-sm font-extrabold uppercase tracking-[0.5em] text-slate-50 sm:text-base">
          CUZI KEBAB
        </p>

        {/* Główny napis NASZE MENU */}
        <h2 className="relative mt-2 font-[FontMain] uppercase italic">
          {/* Warstwa spodnia: gruba czarna obwódka */}
          <span
            aria-hidden="true"
            className="absolute inset-0 text-[#FFD300]"
            style={{
              WebkitTextStroke: "10px #000000",
              color: "transparent",
            }}
          >
            NASZE MENU
          </span>
          {/* Warstwa wierzchnia: wypełnienie + podwójne cieniowanie */}
          <span
            className="relative block text-[#FFD300] text-5xl sm:text-6xl md:text-7xl"
            style={{
              filter: "drop-shadow(4px 4px 0 #000000) drop-shadow(7px 7px 0 rgba(0,0,0,0.5))",
            }}
          >
            NASZE MENU
          </span>
        </h2>
      </div>

      {/* Karty produktów */}
      <div className="relative z-[5] flex w-full max-w-6xl flex-col items-center justify-center gap-6 md:flex-row md:items-stretch">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex w-full max-w-sm flex-col border-4 border-black bg-[#FCEEBD] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Treść karty */}
            <div className="flex flex-1 flex-col p-5">
              {/* Nagłówek karty */}
              <h3
                className={`font-sans text-lg font-extrabold uppercase leading-tight ${card.titleClass}`}
              >
                {card.title}
              </h3>

              {/* Grafika — karta środkowa ma sunburst/speed lines za obrazkiem */}
              <div className="relative mt-4 flex h-44 items-center justify-center">
                {card.center && (
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 200 100"
                    preserveAspectRatio="none"
                  >
                    {/* Sunburst / speed lines */}
                    {Array.from({ length: 26 }).map((_, i) => (
                      <line
                        key={i}
                        x1="100"
                        y1="50"
                        x2={50 + Math.cos((i / 26) * Math.PI * 2) * 120}
                        y2={50 + Math.sin((i / 26) * Math.PI * 2) * 70}
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.35"
                      />
                    ))}
                  </svg>
                )}
                <Image
                  src={card.img}
                  alt={card.imgAlt}
                  width={2032}
                  height={774}
                  className="relative h-full w-full object-contain"
                />
              </div>

              {/* Badge */}
              <span
                className={`mt-4 inline-block rounded px-3 py-1 text-sm font-bold ${card.badgeClass}`}
              >
                {card.badge}
              </span>

              {/* Warianty cenowe */}
              <ul className="mt-4 flex flex-col gap-1 border-t-2 border-dashed border-black pt-3 text-sm">
                {card.variants.map((v) => (
                  <li key={v.name} className="flex items-baseline justify-between gap-2 font-semibold">
                    <span className="uppercase">
                      {v.name}
                      {v.size && <span className="text-slate-600"> ({v.size})</span>}
                    </span>
                    <span className="whitespace-nowrap">{v.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
