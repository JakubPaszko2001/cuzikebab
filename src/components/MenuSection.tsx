
import Image from "next/image";

/* Pomocnicze dane kart */
const cards = [
  {
    title1: "Chicken",
    title2: "Gemüse Kebab",
    subTag: null,
    badge: "Bułka",
    isVege: false,

    img: "/chicken-burger2.png",
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
    img: "/steak-kebab.png",
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
    img: "/falafel-kebab.png",
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
    <section id="menu" className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-[#222624] py-14 px-6 md:py-20">
      {/* Tło: bg-menu-3.png (na kolorze #222624) */}
      <Image
        src="/bg-menu-3.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
        aria-hidden="true"
      />

      {/* Nagłówek sekcji — zaczyna się tam, gdzie zaczyna się menu (lewa krawędź kart) */}
      <div className="relative z-[5] mb-10 mt-8 w-full max-w-[1100px]">
        <h2
          className="relative font-[FontMain] uppercase italic text-[#FFD300] text-8xl sm:text-9xl md:text-[10rem]"
          style={{
            WebkitTextStroke: "5px #000000",
            textShadow: "4px 4px 0 #000000",
            transform: "rotate(-1.5deg)",
            transformOrigin: "left center",
          }}
        >
          NASZE MENU
        </h2>
      </div>

      {/* Karty produktów */}
      <div className="relative z-[5] flex w-full max-w-[1100px] flex-col items-stretch justify-center gap-6 md:flex-row">
        {cards.map((card, idx) => (
          <div
            key={card.title1 + card.title2}
            className="group relative w-full flex-1"
            style={{ filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.4))" }}
          >
            {/* Karta z agresywnym skosem (clip-path) i czarną obwódką */}
            <div
              className="relative flex h-[560px] flex-col bg-[#f7e2ba] p-5"
              // kolor FFEDCA a f7e2ba
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
                      // card.isVege ? "bg-[#FFD300]" : "bg-[#FFD300]"
                      card.isVege ? "bg-black" : "bg-black"
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Ceny */}
                <div className="mt-[10px] flex h-[105px] flex-col justify-start gap-1.5">
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
                  <div className="mt-1.5 flex h-6 items-center">
                    {card.extra && (
                      <span className="text-[0.85rem] font-bold uppercase text-black">{card.extra}</span>
                    )}
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOLNA SEKCJA (info banner + 4 kafelki) */}
      <div className="relative z-[5] mt-10 w-full max-w-[1100px]">
          {/* Info banner */}
          <div
            className="mb-10 flex items-center justify-center gap-2 bg-[#f7e2ba] px-5 py-3 text-center text-[1.05rem] font-bold uppercase text-black"
            style={{
              border: "4px solid #000",
              filter: "drop-shadow(0 6px 0 rgba(0,0,0,0.4))",
            }}
          >
            <span className="text-[1.3rem] text-[#d65118]">✕</span>
            <span>
              Istnieje możliwość zamówienia w tej samej cenie kebaba{" "}
              <span className="text-[#d65118]">bez Gemüse</span>
            </span>
            <span className="text-[1.3rem] text-[#d65118]">✕</span>
          </div>

          {/* 4 kafelki */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* LUNCH */}
            <div className="group">
              <div
                className="relative flex h-[220px] flex-col items-center justify-start overflow-hidden bg-[#f7e2ba] p-4"
                style={{ border: "4px solid #000", filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.4))", isolation: "isolate" }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[450ms] group-hover:opacity-100"
                  style={{ backgroundImage: SUNBURST_BG }}
                />
                <h3
                  className="relative z-[1] mb-3 flex h-[64px] w-full flex-col items-center justify-center border-b-2 border-black pb-1 text-center uppercase leading-[1] text-black"
                  style={{ fontFamily: "var(--font-bangers), cursive", fontSize: "2rem" }}
                >
                  Lunch{" "}
                  <span
                    className="text-[0.95rem] font-bold text-[#d65118]"
                    style={{ fontFamily: "var(--font-sans), sans-serif" }}
                  >
                    12:00–15:00
                  </span>
                </h3>
                <div className="relative z-[1] flex flex-1 flex-col items-center justify-center text-center">
                  <div className="text-[0.9rem] font-bold uppercase leading-[1.2] text-black">
                    Chicken Gemüse Kebab
                    <br />
                    + Cola + Frytki
                  </div>
                  <div
                    className="mt-1 text-[#d65118]"
                    style={{ fontFamily: "var(--font-bangers), cursive", fontSize: "2.6rem", lineHeight: 1 }}
                  >
                    = 32 zł
                  </div>
                </div>
              </div>
            </div>

            {/* DODATKI */}
            <div className="group">
              <div
                className="relative flex h-[220px] flex-col items-center justify-start overflow-hidden bg-[#f7e2ba] p-4"
                style={{ border: "4px solid #000", filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.4))", isolation: "isolate" }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[450ms] group-hover:opacity-100"
                  style={{ backgroundImage: SUNBURST_BG }}
                />
                <h3
                  className="relative z-[1] mb-3 flex h-[64px] w-full items-center justify-center border-b-2 border-black pb-1 text-center uppercase leading-[1] text-black"
                  style={{ fontFamily: "var(--font-bangers), cursive", fontSize: "2rem" }}
                >
                  Dodatki:
                </h3>
                <div className="relative z-[1] flex w-full flex-1 flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[0.95rem] font-bold text-black">
                    <span>FRYTKI MAŁE</span>
                    <span className="text-[1.1rem] font-bold text-[#d65118]">12 zł</span>
                  </div>
                  <div className="flex items-center justify-between text-[0.95rem] font-bold text-black">
                    <span>FRYTKI DUŻE</span>
                    <span className="text-[1.1rem] font-bold text-[#d65118]">16 zł</span>
                  </div>
                </div>
                <div className="relative z-[1] mt-auto text-center text-[0.8rem] font-bold italic text-[#555555]">
                  (Cuzi Sauce lub inne)
                </div>
              </div>
            </div>

            {/* NAPOJE */}
            <div className="group">
              <div
                className="relative flex h-[220px] flex-col items-center justify-start overflow-hidden bg-[#f7e2ba] p-4"
                style={{ border: "4px solid #000", filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.4))", isolation: "isolate" }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[450ms] group-hover:opacity-100"
                  style={{ backgroundImage: SUNBURST_BG }}
                />
                <h3
                  className="relative z-[1] mb-3 flex h-[64px] w-full items-center justify-center border-b-2 border-black pb-1 text-center uppercase leading-[1] text-black"
                  style={{ fontFamily: "var(--font-bangers), cursive", fontSize: "2rem" }}
                >
                  Napoje:
                </h3>
                <div className="relative z-[1] flex w-full flex-1 flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[0.95rem] font-bold text-black">
                    <span>AYRAN</span>
                    <span className="text-[1.1rem] font-bold text-[#d65118]">9 zł</span>
                  </div>
                  <div className="flex items-center justify-between text-[0.95rem] font-bold text-black">
                    <div>
                      <span>COCA COLA</span>
                      <span className="block text-[0.7rem] font-medium italic text-[#555555]">
                        I WSZYSTKIE INNE SOFTY
                      </span>
                    </div>
                    <span className="text-[1.1rem] font-bold text-[#d65118]">8 zł</span>
                  </div>
                  <div className="flex items-center justify-between text-[0.95rem] font-bold text-black">
                    <span>WODA</span>
                    <span className="text-[1.1rem] font-bold text-[#d65118]">7 zł</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SOSY */}
            <div className="group">
              <div
                className="relative flex h-[220px] flex-col items-center justify-start overflow-hidden bg-[#f7e2ba] p-4"
                style={{ border: "4px solid #000", filter: "drop-shadow(0 8px 0 rgba(0,0,0,0.4))", isolation: "isolate" }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[450ms] group-hover:opacity-100"
                  style={{ backgroundImage: SUNBURST_BG }}
                />
                <h3
                  className="relative z-[1] mb-3 flex h-[64px] w-full items-center justify-center border-b-2 border-black pb-1 text-center uppercase leading-[1] text-black"
                  style={{ fontFamily: "var(--font-bangers), cursive", fontSize: "2rem" }}
                >
                  Sosy:
                </h3>
                <div className="relative z-[1] flex w-full flex-1 flex-col gap-0.5">
                  {[
                    { name: "Cuzi Sauce", color: "#f5a623" },
                    { name: "Czosnkowy", color: "#ffffff" },
                    { name: "Ostry", color: "#e60000" },
                    { name: "Ziołowy", color: "#50b83c" },
                  ].map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-2.5 text-[0.95rem] font-bold uppercase text-black"
                    >
                      <span
                        className="inline-block h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-black"
                        style={{ backgroundColor: s.color }}
                      />
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
