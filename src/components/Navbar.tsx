import Image from "next/image";

const links = [
  { label: "Strona Glowna", href: "#" },
  { label: "O Nas", href: "#" },
  { label: "Menu", href: "#" },
  { label: "Kontakt", href: "#" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-[50] w-full bg-black/40 backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-6 py-2">
        {/* Logo + nazwa */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Cuzi Kebab — logo"
            width={387}
            height={607}
            priority
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Zakładki */}
        <ul className="flex items-center gap-2 sm:gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative inline-block rounded border-2 border-black bg-[#FFD300] px-4 py-1 font-[FontMain] text-xl uppercase tracking-wide transition-transform duration-150 hover:scale-105"
              >
                {/* Warstwa spodnia: sam obrys (stroke na całym słowie) */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    // WebkitTextStroke: "4px #000000",
                    color: "transparent",
                  }}
                >
                  {link.label}
                </span>
                {/* Warstwa wierzchnia: pełne wypełnienie */}
                <span className="relative text-black">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

