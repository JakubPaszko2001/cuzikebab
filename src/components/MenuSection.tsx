
import Image from "next/image";

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
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-[#222624] py-14 px-6 md:py-20">
      {/* Tło: bg-menu-2.png (na kolorze #222624) */}
      <Image
        src="/bg-menu-3.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
        aria-hidden="true"
      />

      {/* Nagłówek sekcji */}
      <div className="relative z-[5] mb-12 w-full max-w-6xl text-center md:mb-16">
        {/* Główny napis NASZE MENU */}
        <h2
          className="relative mt-2 font-[FontMain] uppercase italic text-[#FFD300] text-7xl sm:text-8xl md:text-9xl"
          style={{
            WebkitTextStroke: "3px #000000",
            textShadow: "4px 4px 0 #000000",
          }}
        >
          NASZE MENU
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
