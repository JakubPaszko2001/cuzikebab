"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Strona Glowna", href: "#strona-glowna" },
  { label: "O Nas", href: "#o-nas" },
  { label: "Menu", href: "#menu" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY.current && current > 120) {
        setHidden(true); // scroll w dół → schowaj
      } else {
        setHidden(false); // scroll w górę → pokaż
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Pasek górny — logo + hamburger (mobile) + linki (desktop) */}
      <header
        className={`fixed top-0 left-0 z-[60] w-full bg-black/40 backdrop-blur-lg transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-6 py-2">
          {/* Logo + nazwa */}
          <a href="#strona-glowna" onClick={closeMenu} className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Cuzi Kebab — logo"
              width={387}
              height={607}
              priority
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Linki — desktop (ukryte na mobile) */}
          <ul className="hidden items-center gap-2 sm:gap-4 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative inline-block rounded border-2 border-black bg-[#FFD300] px-4 py-1 font-[FontMain] text-xl uppercase tracking-wide text-black transition-transform duration-150 hover:scale-105"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — tylko mobile */}
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-11 w-8 flex-col items-center justify-center gap-1.5 rounded transition-transform duration-150 hover:scale-105 md:hidden"
          >
            <span
              className={`block h-1 w-8 bg-[#FFD300] transition-transform duration-300 ${open ? "translate-y-2.5 rotate-45" : ""}`}
            />
            <span
              className={`block h-1 w-8 bg-[#FFD300] transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-1 w-8 bg-[#FFD300] transition-transform duration-300 ${open ? "-translate-y-2.5 -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Menu mobilne — pełnoekranowe (100vh x 100vw), przyciski wyśrodkowane w kolumnie */}
      <div
        className={`fixed inset-0 z-[50] flex h-screen w-screen flex-col items-center justify-center gap-6 bg-black/40 backdrop-blur-lg transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            className="inline-block rounded border-2 border-black bg-[#FFD300] px-8 py-3 text-center font-[FontMain] text-3xl uppercase tracking-wide text-black transition-transform duration-150 hover:scale-105"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}


