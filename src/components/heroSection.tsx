import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100vh", width: "100vw" }}
    >
      {/* Tło z delikatnym blurem 2px */}
      <Image
        src="/bg2.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center blur-[4px] scale-100"
      />
      {/* Postać jako osobna warstwa */}
      <Image
        src="/postac9.png"
        alt="Postać"
        width={1016}
        height={848}
        priority
        className="absolute bottom-0 right-15 z-[2] h-auto w-[70vw] min-w-[520px] max-w-[1040px] object-contain"
      />
      {/* Napis CUZI / KEBAB + podtytuł — absolutnie z lewej strony */}
      <div
        className="absolute left-40 top-30 z-[10] m-0 p-0"
        style={{ transform: "rotate(-8deg)" }}
      >
        <h1 className="m-0 p-0 font-[FontMain] leading-none">
          {/* Warstwa spodnia: sam obrys (outside) */}
          <span
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              WebkitTextStroke: "34px black",
              color: "transparent",
            }}
          >
          <span className="block text-[200px] leading-none">CUZI</span>
          <span className="block text-[200px] leading-none">KEBAB</span>
        </span>

          {/* Warstwa wierzchnia: wypełnienie */}
          <span className="relative block">
          <span className="block text-[200px] leading-none text-white">CUZI</span>
          <span className="block text-[200px] leading-none text-[#FFD300]">KEBAB</span>
          </span>
        </h1>

        {/* Podtytuł */}
        <h2 className="relative m-0 mt-6 p-0 font-[FontMain] leading-none">
          {/* Warstwa spodnia: obrys 10px (outside) */}
          <span
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              WebkitTextStroke: "8px black",
              color: "transparent",
            }}
          >
            <span className="block text-[44px] leading-none">
              kazdy pytal,
            </span>
            <span className="block text-[44px] leading-none">
              kazdy <span className="text-[#FFD300]">potrzebowal</span>
            </span>
          </span>

          {/* Warstwa wierzchnia: wypełnienie */}
          <span className="relative block">
            <span className="block text-[44px] leading-none text-white">
              kazdy pytal,
            </span>
            <span className="block text-[44px] leading-none text-white">
              kazdy <span className="text-[#FFD300]">potrzebowal</span>
            </span>
          </span>
        </h2>

        {/* Przycisk ZOBACZ MENU (równoległobok wg przycisk2.html) */}
        <div
          className="mt-10 inline-block transition-transform duration-200 hover:scale-105"
          style={{ filter: "drop-shadow(6px 8px 0px #000000)" }}
        >
          <button
            type="button"
            className="relative inline-block cursor-pointer rounded border-4 border-black bg-[#FFD300] px-11 py-4 outline-none"
            style={{ transform: "skewX(-15deg)" }}
          >
            <span
              className="block text-[45px] uppercase tracking-[2px] leading-none text-black"
              style={{ fontFamily: "var(--font-bangers)", transform: "skewX(15deg)" }}
            >
              ZOBACZ MENU
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

