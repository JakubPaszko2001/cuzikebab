import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cuzi Kebab - Gemuse Kebab Warszawa",
    short_name: "Cuzi Kebab",
    description:
      "Najlepszy gemüse kebab w Warszawie. Berliński kebab z grillowanymi warzywami w centrum przy Alejach Jerozolimskich 87.",
    start_url: "/",
    display: "standalone",
    background_color: "#222624",
    theme_color: "#FFD300",
    lang: "pl",
  };
}
