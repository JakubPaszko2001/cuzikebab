import Image from "next/image";

export default function GemuseSection() {
  return (
    <section className="relative flex min-h-[34vh] w-full items-center overflow-hidden border-y-6 border-black bg-amber-400">
      {/* ---- Zawartość: lewa tekst / prawa grafika ---- */}
      <div className="relative z-[10] flex w-full flex-col md:flex-row">
        {/* Lewa strona — tekst (tło tylko w tej części, nie na 100vw) */}
        <div className="relative overflow-hidden md:w-[55%]">
          {/* Warstwa tła szarego, przycięta do ukośnego podziału */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 62% 100%, 0 100%)",
              backgroundImage: "url('/szare-tlo-2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Czarna kreska 4px wzdłuż skośnej krawędzi */}
          <svg
            className="pointer-events-none absolute inset-0 z-[8] h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
                aria-hidden="true"
              >
            <line
              x1="100"
              y1="0"
              x2="62"
              y2="100"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="square"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="relative z-[10] flex flex-col justify-center gap-3 px-8 py-6 md:px-12 lg:px-20">
            {/* Nagłówek GEMUSE KEBAB — jedna linia, komiksowy outline (outside) */}
            <h2
              className="relative font-[FontMain] text-4xl uppercase leading-none -rotate-2 sm:text-5xl lg:text-6xl"
              style={{
                filter: "drop-shadow(4px 4px 0 #000000)",
              }}
            >
              {/* Warstwa spodnia: sam obrys */}
              <span
                aria-hidden="true"
                className="absolute inset-0"
                style={{ WebkitTextStroke: "6px black", color: "transparent" }}
              >
                GEMUSE KEBAB
              </span>
              {/* Warstwa wierzchnia: wypełnienie */}
              <span className="relative">
                <span className="text-[#FFD300]">GEMUSE</span>{" "}
                <span className="text-white">KEBAB</span>
              </span>
            </h2>

            {/* Opis — z komiksowym outline (outside) */}
            <p className="relative mt-6 max-w-xl text-lg italic font-[FontMain] lg:text-3xl">
              {/* Warstwa spodnia: sam obrys */}
              <span
                aria-hidden="true"
                className="absolute inset-0 text-white"
                style={{ WebkitTextStroke: "4px black", color: "transparent" }}
              >
                Generacja Cuzi przyprowadza do Polski smak, ktory do tej pory byl tylko za nasza zachodnia granica. Wprowadzamy swiezosc, na ktora kazdy czekal.
              </span>
              {/* Warstwa wierzchnia: wypełnienie */}
              <span className="relative text-white" style={{ textShadow: "4px 4px 0 #000000" }}>
                Generacja Cuzi przyprowadza do Polski smak, ktory do tej pory byl tylko za nasza zachodnia granica. Wprowadzamy swiezosc, na ktora kazdy czekal.
              </span>
            </p>
        </div>
      </div>

        {/* Prawa strona — grafika warzyw */}
        <div className="relative flex items-center justify-center md:w-[45%]">
          <Image
            src="/warzywa8.png"
            alt="Świeże warzywa w stylu komiksu"
            width={900}
            height={900}
            priority={false}
            quality={100}
            className="h-[34vh] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

