import Image from "next/image";

/* Sekcja Kontakt — pełnoekranowa, w palecie komiksowej, z postacią z public */
export default function ContactSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-between overflow-hidden border-t-6 border-black bg-[#000000] px-[5vw] py-[5vh] text-white">
      {/* Tło: rozchodzące się promienie komiksowe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          // background: "repeating-conic-gradient(from 0deg at 75% 50%, #222624 0deg 10deg, #1a1d1b 10deg 20deg)",
          background: "repeating-conic-gradient(from 0deg at 75% 50%, #222624 0deg 10deg, #000000 10deg 20deg)",
        }}
      />

      {/* Lewa sekcja z treścią */}
      <div className="relative z-[2] flex w-full flex-col justify-center md:w-[55vw]">
        {/* Tytuł KONTAKT — pochylony jak w komiksie */}
        <h2
          className="font-[FontMain] uppercase tracking-[2px] text-[#FFD300] text-7xl sm:text-8xl md:text-[10vw] leading-[0.85]"
          style={{
            transform: "rotate(-3deg) skewX(-5deg)",
            textShadow:
              "5px 5px 0 #000000, -2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000",
            marginBottom: "3vh",
          }}
        >
          KONTAKT
        </h2>

        {/* Układ dwukolumnowy danych kontaktowych */}
        <div className="mb-[4vh] grid grid-cols-1 gap-[2.5vh] sm:grid-cols-2 sm:gap-[2.5vh_2vw]">
          {/* Telefon */}
          <div className="flex items-center gap-[1vw]">
            <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center border-[3px] border-black bg-[#FFD300] text-[20px] text-black shadow-[3px_3px_0_#000000] md:h-[3.2vw] md:w-[3.2vw] md:text-[1.6vw]">
              📞
            </div>
            <div>
              <h4 className="font-[FontMain] text-[#FFD300] uppercase text-2xl leading-none tracking-wide md:text-[1.8vw] [text-shadow:2px_2px_0_#000000]">
                ZADZWON:
              </h4>
              <a
                href="tel:+48123456789"
                className="block text-lg font-bold leading-[1.2] text-white no-underline [text-shadow:1px_1px_2px_#000000] md:text-[1.1vw]"
              >
                +48 123 456 789
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-[1vw]">
            <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center border-[3px] border-black bg-[#FFD300] text-[20px] text-black shadow-[3px_3px_0_#000000] md:h-[3.2vw] md:w-[3.2vw] md:text-[1.6vw]">
              ✉️
            </div>
            <div>
              <h4 className="font-[FontMain] text-[#FFD300] uppercase text-2xl leading-none tracking-wide md:text-[1.8vw] [text-shadow:2px_2px_0_#000000]">
                NAPISZ DO NAS:
              </h4>
              <a
                href="mailto:biuro@cuzikebab.pl"
                className="block text-lg font-bold leading-[1.2] text-white no-underline [text-shadow:1px_1px_2px_#000000] md:text-[1.1vw]"
              >
                biuro@cuzikebab.pl
              </a>
            </div>
          </div>

          {/* Adres */}
          <div className="flex items-center gap-[1vw]">
            <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center border-[3px] border-black bg-[#FFD300] text-[20px] text-black shadow-[3px_3px_0_#000000] md:h-[3.2vw] md:w-[3.2vw] md:text-[1.6vw]">
              📍
            </div>
            <div>
              <h4 className="font-[FontMain] text-[#FFD300] uppercase text-2xl leading-none tracking-wide md:text-[1.8vw] [text-shadow:2px_2px_0_#000000]">
                ADRES:
              </h4>
              <p className="block text-lg font-bold leading-[1.2] text-white no-underline [text-shadow:1px_1px_2px_#000000] md:text-[1.1vw]">
                ul. Przykładowa 12,
                <br />
                00-001 Miasto
              </p>
            </div>
          </div>

          {/* Godziny */}
          <div className="flex items-center gap-[1vw]">
            <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center border-[3px] border-black bg-[#FFD300] text-[20px] text-black shadow-[3px_3px_0_#000000] md:h-[3.2vw] md:w-[3.2vw] md:text-[1.6vw]">
              🕒
            </div>
            <div>
              <h4 className="font-[FontMain] text-[#FFD300] uppercase text-2xl leading-none tracking-wide md:text-[1.8vw] [text-shadow:2px_2px_0_#000000]">
                GODZINY OTWARCIA:
              </h4>
              <p className="block text-lg font-bold leading-[1.2] text-white no-underline [text-shadow:1px_1px_2px_#000000] md:text-[1.1vw]">
                Pon-Sob: 11:00-22:00
                <br />
                Nd: Nieczynne
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-[1vw] sm:col-span-2">
            <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center border-[3px] border-black bg-[#FFD300] text-[20px] text-black shadow-[3px_3px_0_#000000] md:h-[3.2vw] md:w-[3.2vw] md:text-[1.6vw]">
              👍
            </div>
            <div>
              <h4 className="font-[FontMain] text-[#FFD300] uppercase text-2xl leading-none tracking-wide md:text-[1.8vw] [text-shadow:2px_2px_0_#000000]">
                OBSERWUJ NAS:
              </h4>
              <div className="mt-[0.5vh] flex gap-[1vw]">
                <span className="flex items-center gap-[0.5vw] border-2 border-[#FFD300] bg-black px-[0.8vw] py-[0.4vh] text-[14px] font-bold text-white md:text-[1vw]">
                  📷 @cuzikebab
                </span>
                <span className="flex items-center gap-[0.5vw] border-2 border-[#FFD300] bg-black px-[0.8vw] py-[0.4vh] text-[14px] font-bold text-white md:text-[1vw]">
                  📘 @cuzikebab
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Przycisk akcji */}
        <a
          href="tel:+48123456789"
          className="font-[FontMain] self-start border-4 border-black bg-[#FFD300] uppercase text-black no-underline px-[2.5vw] py-[0.5vh] text-3xl md:text-[2.2vw] tracking-wide transition-transform duration-100 shadow-[5px_5px_0_#000000] rotate-[-2deg] hover:rotate-[-2deg] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_#000000]"
        >
          SKONTAKTUJ SIE
        </a>
      </div>

      {/* Prawa sekcja na postać PNG */}
      <div className="relative z-[2] hidden h-full w-[40vw] items-end justify-end md:flex">
        <Image
          src="/postac-kontakt-4.png"
          alt="Kebab Man"
          width={900}
          height={1200}
          className="max-h-[95vh] max-w-full object-contain"
        />
      </div>
    </section>
  );
}
