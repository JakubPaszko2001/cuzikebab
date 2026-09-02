import Image from "next/image";

export default function GemuseSection() {
  return (
    <section
      id="o-nas"
      className="relative flex h-[70vh] lg:h-[34vh] w-full items-stretch overflow-hidden border-y-6 border-black bg-amber-400"
    >
      <div className="relative z-[10] flex h-full w-full flex-col lg:flex-row">
        <div className="relative h-full overflow-hidden lg:w-[55%]">
          <div
            className="gemuse-clip absolute inset-0"
            style={{
              backgroundImage: "url('/szare-tlo-2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          />

          <svg
            className="pointer-events-none absolute inset-0 z-[8] hidden h-full w-full lg:block"
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

          <div className="relative z-[10] flex h-full flex-col justify-center gap-3 border-b-4 border-black px-8 py-6 lg:border-b-0 lg:px-20">
            <h2
              className="relative [font-family:var(--font-titan)] text-4xl uppercase leading-none -rotate-2 sm:text-5xl lg:text-6xl"
              style={{ filter: "drop-shadow(4px 4px 0 #000000)" }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0"
                style={{ WebkitTextStroke: "6px black", color: "transparent" }}
              >
                GEMÜSE KEBAB
              </span>
              <span className="relative">
                <span className="text-[#FFD300]">GEMÜSE</span>{" "}
                <span className="text-white">KEBAB</span>
              </span>
            </h2>

            <p className="relative mt-6 max-w-xl text-lg italic [font-family:var(--font-titan)] lg:text-3xl">
              <span
                aria-hidden="true"
                className="absolute inset-0 text-white"
                style={{ WebkitTextStroke: "4px black", color: "transparent" }}
              >
                Generacja Cuzi przyprowadza do Polski smak, który do tej pory był tylko za naszą zachodnią granicą. Wprowadzamy świeżość, na którą każdy czekał.
              </span>
              <span
                className="relative text-white"
                style={{ textShadow: "4px 4px 0 #000000" }}
              >
                Generacja Cuzi przyprowadza do Polski smak, który do tej pory był tylko za naszą zachodnią granicą. Wprowadzamy świeżość, na którą każdy czekał.
              </span>
            </p>
          </div>
        </div>

        <div className="relative flex h-full items-center justify-center px-8 py-6 lg:w-[45%] lg:px-0">
          <Image
            src="/warzywa8.png"
            alt="Świeże warzywa w stylu komiksu"
            width={900}
            height={900}
            priority={false}
            quality={100}
            className="h-[16vh] w-auto object-contain lg:h-[30vh]"
          />
        </div>
      </div>
    </section>
  );
}