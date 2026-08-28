import type { MetadataRoute } from "next";

// UWAGA: podmień na docelową domenę produkcyjną (ta sama co w layout.tsx)
const SITE_URL = "https://cuzikebab.pl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
