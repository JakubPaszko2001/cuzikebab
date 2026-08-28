import type { MetadataRoute } from "next";

// UWAGA: podmień na docelową domenę produkcyjną (ta sama co w layout.tsx)
const SITE_URL = "https://cuzikebab.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
