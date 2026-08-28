
import Image from "next/image";

/* Pomocnicze dane kart */
const cards = [
  {
    title1: "Chicken",
    title2: "Gemüse Kebab",
    subTag: null,
    badge: "Bułka",
    isVege: false,
    img: "/warzywa2.png",
    imgAlt: "Chicken gemüse kebab",
    variants: [
      { name: "SMALL", size: "140 G", price: "34 zł" },
      { name: "REGULAR", size: "180 G", price: "40 zł" },
      { name: "BIG", size: "220 G", price: "46 zł" },
    ],
    extra: "Mięso Mieszane +2 zł",
  },
  {
    title1: "Steak / Beef",
    title2: "Gemüse Kebab",
    subTag: null,
    badge: "Bułka",
    isVege: false,
    img: "/warzywa5.png",
    imgAlt: "Steak beef gemüse kebab",
    variants: [
      { name: "SMALL", size: "140 G", price: "37 zł" },
      { name: "REGULAR", size: "180 G", price: "45 zł" },
      { name: "BIG", size: "220 G", price: "53 zł" },
    ],
    extra: "",
  },
  {
    title1: "Falafel",
    title2: null,
    subTag: "(VEGE)",
    badge: "Bułka",
    isVege: true,
    img: "/warzywa6.png",
    imgAlt: "Falafel vege kebab",
    variants: [
      { name: "SMALL", size: "4 SZT.", price: "32 zł" },
      { name: "REGULAR", size: "5 SZT.", price: "37 zł" },
    ],
    extra: "",
  },
];

/* Skos dla każdej karty — stały jednolity kąt (wzór z dostarczonego HTML) */
const clipPaths = [
  "polygon(0 9%, 100% 7%, 100% 100%, 0 100%)",
  "polygon(0 7%, 100% 5%, 100% 100%, 0 100%)",
  "polygon(0 5%, 100% 3%, 100% 100%, 0 100%)",
];

const SUNBURST_BG =
  "repeating-conic-gradient(from 0deg at 50% 30%, #f7e2ba 0deg 10deg, #ebd09b 10deg 20deg)";

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
      <div className="relative z-[5] flex w-full max-w-[1100px] flex-wrap items-end justify-center gap-6 md:flex-nowrap">
        {cards.map((card, idx) => (
          <div
            key={card.title1 + card.title2}
            className="group relative w-full flex-1"
            style={{ filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.4))" }}
          >
            {/* Karta z agresywnym skosem (clip-path) i czarną obwódką */}
            <div
              className="relative flex h-[560px] flex-col bg-[#f7e2ba] p-5"
              style={{ clipPath: clipPaths[idx], border: "4px solid #000", isolation: "isolate" }}
            >
              {/* Efekt "słoneczka" po najechaniu */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[450ms] group-hover:opacity-100"
                style={{ backgroundImage: SUNBURST_BG }}
              />

              {/* Margines górny chroniący tytuł */}
              <div className="relative z-[1] mt-9 flex h-20 items-center justify-center">
                <h2
                  className="text-center uppercase leading-[0.95] tracking-[1px] text-black"
                  style={{ fontFamily: "var(--font-bangers), cursive", fontSize: "2.1rem" }}
                >
                  {card.title1}
                  {card.title2 && (
                    <>
                      <br />
                      {card.title2}
                    </>
                  )}
                  {card.subTag && (
                    <span style={{ color: "#487328", fontSize: "1.3rem" }}> {card.subTag}</span>
                  )}
                </h2>
              </div>

              {/* Obrazek */}
              <div className="relative z-[1] mx-auto my-[10px] flex h-[180px] w-full items-center justify-center">
                <Image
                  src={card.img}
                  alt={card.imgAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Sekcja dolna */}
              <div className="relative z-[1] mt-auto flex flex-col">
                {/* Badge */}
                <div className="flex h-8 items-center">
                  <span
                    className={`rounded-[12px] px-[14px] py-[3px] text-[0.9rem] font-bold uppercase tracking-[0.5px] text-white ${
                      card.isVege ? "bg-[#487328]" : "bg-[#1c2d42]"
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Ceny */}
                <div className="mt-[10px] flex flex-col gap-1.5">
                  {card.variants.map((v) => (
                    <div
                      key={v.name}
                      className="flex items-center justify-between text-[1.1rem] font-bold"
                    >
                      <span className="uppercase text-black">
                        {v.name}{" "}
                        <span className="text-[0.95rem] font-medium text-[#555555]">
                          ({v.size})
                        </span>
                      </span>
                      <span className="text-[1.25rem] font-bold text-[#d65118]">{v.price}</span>
                    </div>
                  ))}
                </div>

                {/* Dodatek */}
                {card.extra && (
                  <div className="mt-1.5 flex h-6 items-center">
                    <span className="text-[0.85rem] font-bold uppercase text-black">{card.extra}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
