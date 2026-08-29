import Image from "next/image";

/* Sekcja Kontakt */
export default function ContactSection() {
  return (
    <section id="kontakt" className="relative flex min-h-screen w-full items-center justify-between overflow-hidden border-t-6 border-black bg-[#000000] px-[5vw] py-[5vh] text-white">
      {/* Tło: promienie komiksowe (odbicie lustrzane w osi X) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "repeating-conic-gradient(from 0deg at 75% 50%, #222624 0deg 10deg, #000000 10deg 20deg)",
          transform: "scaleY(-1)",
        }}
      />

      {/* Lewa sekcja z treścią */}
      <div className="relative z-[2] flex w-full flex-col justify-center md:w-[55vw]">
        {/* Tytuł KONTAKT */}
        <h2
          className="font-[FontMain] uppercase tracking-[2px] text-[#FFD300] text-7xl sm:text-8xl md:text-[10vw] leading-[0.85]"
                    style={{
            WebkitTextStroke: "5px #000000",
            transform: "rotate(-3deg) skewX(-5deg)",
            textShadow: "5px 5px 0 #000000, -2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000",
            marginBottom: "4vh",
          }}
        >
          KONTAKT
        </h2>

        {/* Układ dwukolumnowy */}
        <div className="mb-[4vh] mt-[4vh] grid grid-cols-1 gap-[2.5vh] sm:grid-cols-2 sm:gap-[2.5vh_2vw]">
          {/* Telefon */}

          <div className="flex h-full min-h-[140px] items-start gap-[1vw] md:min-h-[8vh]">
            <div className="shrink-0" style={{ filter: "drop-shadow(6px 8px 0px #000000)" }}>
                            <div className="flex h-[45px] w-[45px] items-center justify-center rounded border-4 border-black bg-[#FFD300] text-black md:h-[3.2vw] md:w-[3.2vw]" style={{ transform: "skewX(-15deg)" }}>
                <span style={{ transform: "skewX(15deg) translateX(8px)" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[70%] w-[70%] text-black">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02z"/>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-[FontMain] text-[#FFD300] uppercase text-2xl leading-none tracking-wide md:text-[1.8vw] [text-shadow:2px_2px_0_#000000]">ZADZWON:</h4>
              <a href="tel:+48796664366" className="block text-lg font-bold leading-[1.2] text-white no-underline [text-shadow:1px_1px_2px_#000000] md:text-[1.1vw]">+48 796 664 366</a>
            </div>
          </div>

          {/* Email */}
          <div className="flex h-full min-h-[140px] items-start gap-[1vw] md:min-h-[8vh]">
            <div className="shrink-0" style={{ filter: "drop-shadow(6px 8px 0px #000000)" }}>
                <div className="flex h-[45px] w-[45px] items-center justify-center rounded border-4 border-black bg-[#FFD300] text-black md:h-[3.2vw] md:w-[3.2vw]" style={{ transform: "skewX(-15deg)" }}>
                <span style={{ transform: "skewX(15deg) translateX(8px)" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[70%] w-[70%] text-black">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-[FontMain] text-[#FFD300] uppercase text-2xl leading-none tracking-wide md:text-[1.8vw] [text-shadow:2px_2px_0_#000000]">NAPISZ DO NAS:</h4>
              <a href="mailto:Kontakt@cuzikebab.pl" className="block text-lg font-bold leading-[1.2] text-white no-underline [text-shadow:1px_1px_2px_#000000] md:text-[1.1vw]">Kontakt@cuzikebab.pl</a>
            </div>
          </div>

          {/* Adres */}
          <div className="flex h-full min-h-[140px] items-start gap-[1vw] md:min-h-[8vh]">
            <div className="shrink-0" style={{ filter: "drop-shadow(6px 8px 0px #000000)" }}>
                            <div className="flex h-[45px] w-[45px] items-center justify-center rounded border-4 border-black bg-[#FFD300] text-black md:h-[3.2vw] md:w-[3.2vw]" style={{ transform: "skewX(-15deg)" }}>
                <span style={{ transform: "skewX(15deg) translateX(8px)" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[70%] w-[70%] text-black">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-[FontMain] text-[#FFD300] uppercase text-2xl leading-none tracking-wide md:text-[1.8vw] [text-shadow:2px_2px_0_#000000]">ADRES:</h4>
              <p className="block text-lg font-bold leading-[1.2] text-white no-underline [text-shadow:1px_1px_2px_#000000] md:text-[1.1vw]">Aleje Jerozolimskie 87<br />02-001 Warszawa</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex h-full min-h-[140px] items-start gap-[1vw] md:min-h-[8vh]">
            <div className="shrink-0" style={{ filter: "drop-shadow(6px 8px 0px #000000)" }}>
                            <div className="flex h-[45px] w-[45px] items-center justify-center rounded border-4 border-black bg-[#FFD300] text-black md:h-[3.2vw] md:w-[3.2vw]" style={{ transform: "skewX(-15deg)" }}>
                <span style={{ transform: "skewX(15deg) translateX(8px)" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[70%] w-[70%] text-black">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </span>
              </div>
            </div>
                            <div>
                              <h4 className="font-[FontMain] text-[#FFD300] uppercase text-2xl leading-none tracking-wide md:text-[1.8vw] [text-shadow:2px_2px_0_#000000]">OBSERWUJ NAS:</h4>
                              <a href="https://www.instagram.com/cuzikebab/" target="_blank" rel="noopener noreferrer" className="mt-[0.5vh] inline-flex items-center gap-[0.5vw] text-[14px] font-bold text-white no-underline md:text-[1vw]">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[1.2em] w-[1.2em] shrink-0 text-[#FFD300]">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                                @cuzikebab
                              </a>
                            </div>
          </div>

          {/* Godziny */}
          <div className="flex h-full min-h-[140px] items-start gap-[1vw] md:min-h-[8vh]">
            <div className="shrink-0" style={{ filter: "drop-shadow(6px 8px 0px #000000)" }}>
                            <div className="flex h-[45px] w-[45px] items-center justify-center rounded border-4 border-black bg-[#FFD300] text-black md:h-[3.2vw] md:w-[3.2vw]" style={{ transform: "skewX(-15deg)" }}>
                <span style={{ transform: "skewX(15deg) translateX(2.5px)" }}>
                  <Image
                    src="/time.svg"
                    alt="Godziny otwarcia"
                    width={24}
                    height={24}
                    className="h-[90%] w-[90%] object-contain"
                  />
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-[FontMain] text-[#FFD300] uppercase text-2xl leading-none tracking-wide md:text-[1.8vw] [text-shadow:2px_2px_0_#000000]">GODZINY OTWARCIA:</h4>
              <p className="block text-lg font-bold leading-[1.2] text-white no-underline [text-shadow:1px_1px_2px_#000000] md:text-[1.1vw]">Pon-Czw: 12:00-00:00<br />Pt-Sb: 12:00-01:00 <br />Ndz: 12:00-24:00</p>
            </div>
          </div>
        </div>

                {/* Przycisk akcji — jak w HeroSection */}
        <div className="mt-4 inline-block transition-transform duration-200 hover:scale-105" style={{ filter: "drop-shadow(6px 8px 0px #000000)" }}>
          <a href="tel:+48796664366" className="relative inline-block cursor-pointer rounded border-4 border-black bg-[#FFD300] px-11 py-4 outline-none" style={{ transform: "skewX(-15deg)" }}>
            <span className="block text-[45px] uppercase tracking-[2px] leading-none text-black" style={{ fontFamily: "var(--font-bangers)", transform: "skewX(15deg)" }}>SKONTAKTUJ SIE</span>
          </a>
        </div>
      </div>

            {/* Postać — absolutna, na dole, po lewej stronie */}
      <div className="absolute bottom-0 right-0 z-[3] hidden items-end justify-start md:flex">
        <Image
          src="/postac-kontakt-13.png"
          alt="Postać z informacjami kontaktowymi"
          width={850}
          height={1200}
          priority
          className="object-contain"
          style={{ maxHeight: "100vh" }}
        />
      </div>
    </section>
  );
}
