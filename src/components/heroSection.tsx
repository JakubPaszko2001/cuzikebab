import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function HeroSection() {
  return (
    <section
      id="strona-glowna"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100vh", width: "100vw" }}
    >
      {/* Nawigacja przypięta do sekcji hero */}
      <Navbar />

      {/* Tło z delikatnym blurem 2px */}
      <Image
        src="/bg2.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center blur-[4px] scale-100"
      />
      {/* Postać jako osobna warstwa — tylko widoczna powyżej mobile (sm:) */}
      <Image
        src="/postac11.png"
        alt="Postać"
        width={1016}
        height={848}
        priority
        className="absolute bottom-0 right-15 z-[2] hidden h-auto w-[58vw] min-w-[420px] max-w-[1000px] object-contain xl:block"
      />
      {/* Napis CUZI / KEBAB + podtytuł — wyśrodkowany pod mobile */}
      <div
        className="absolute left-0 top-1/2 z-[10] m-0 w-full -translate-y-1/2 p-0 text-center xl:left-40 xl:w-auto xl:rotate-[-5deg] xl:text-left"
      >
        <h1 className="m-0 p-0 font-[FontMain] leading-none">
          {/* Warstwa spodnia: sam obrys (outside) */}
          <span
            aria-hidden="true"
            className="hero-outline-big absolute inset-0"
          >
            <span className="block text-[100px] leading-none sm:text-[200px]">CUZI</span>
            <span className="block text-[100px] leading-none sm:text-[200px]">KEBAB</span>
          </span>

          {/* Warstwa wierzchnia: wypełnienie */}
          <span className="relative block">
            <span className="block text-[100px] leading-none text-white sm:text-[200px]">CUZI</span>
            <span className="block text-[100px] leading-none text-[#FFD300] sm:text-[200px]">KEBAB</span>
          </span>
        </h1>

        {/* Podtytuł */}
        <h2 className="relative m-0 mt-7 p-0 font-[FontMain] leading-none sm:mt-8">
          {/* Warstwa spodnia: obrys */}
          <span
            aria-hidden="true"
            className="hero-outline-sub absolute inset-0"
          >
            <span className="block text-[28px] leading-none sm:text-[52px]">
              kazdy pytal,
            </span>
            <span className="block text-[28px] leading-none sm:text-[52px]">
              kazdy <span className="text-[#FFD300]">potrzebowal</span>
            </span>
          </span>

          {/* Warstwa wierzchnia: wypełnienie */}
          <span className="relative block">
            <span className="block text-[28px] leading-none text-white sm:text-[52px]">
              kazdy pytal,
            </span>
            <span className="block text-[28px] leading-none text-white sm:text-[52px]">
              kazdy <span className="text-[#FFD300]">potrzebowal</span>
            </span>
          </span>
        </h2>

        {/* Przycisk ZOBACZ MENU (równoległobok wg przycisk2.html) */}
        <div
          className="mt-10 inline-block px-2 transition-transform duration-200 hover:scale-105 sm:mt-14 sm:px-3"
          style={{ filter: "drop-shadow(6px 8px 0px #000000)" }}
        >
          <a
            href="#menu"
            className="relative inline-block cursor-pointer rounded border-4 border-black bg-[#FFD300] px-8 py-3 outline-none sm:px-11 sm:py-4"
            style={{ transform: "skewX(-15deg)" }}
          >
            <span
              className="block text-[24px] uppercase tracking-[2px] leading-none text-black sm:text-[45px]"
              style={{ fontFamily: "var(--font-bangers)", transform: "skewX(15deg)" }}
            >
              ZOBACZ MENU
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

