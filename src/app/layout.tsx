import type { Metadata } from "next";
import { Geist, Geist_Mono, Bangers, Pacifico } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

/* ========== SEO – domena produkcyjna ========== */
// UWAGA: przestaw na docelową domenę produkcyjną, np. https://cuzikebab.pl
export const SITE_URL = "https://cuzikebab.pl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Cuzi Kebab - Gemuse Kebab Warszawa",
    template: "%s | Cuzi Kebab Warszawa",
  },

  description:
    "Cuzi Kebab Warszawa — najlepszy gemüse kebab w Warszawie. Berliński (niemiecki) kebab z grillowanymi warzywami, w centrum i na Ochocie, przy Alejach Jerozolimskich 87 obok Pałacu Kultury i Dworca Centralnego. Kebab blisko Ciebie — soczysty z autorskimi sosami.",

  keywords: [
    "gemüse kebab warszawa",
    "gemüse kebab w warszawie",
    "kebab warszawa",
    "najlepszy kebab warszawa",
    "dobry kebab warszawa",
    "berlin kebab warszawa",
    "berliński kebab warszawa",
    "kebab berliński warszawa",
    "niemiecki kebab warszawa",
    "kebab z grillowanymi warzywami warszawa",
    "kebab z warzywami warszawa",
    "kebab gemüse",
    "gemüse kebab",
    "kebab cuzi warszawa",
    "cuzi kebab warszawa",
    "kebab centrum",
    "kebab śródmieście",
    "kebab dworzec centralny",
    "kebab warszawa centralna",
    "gemuse kebab centrum",
    "gemuse kebab ochota",
    "gemuse kebab aleje jerozolimskie",
    "gemuse kebab pałac kultury",
    "kebab pałac kultury",
    "kebab blisko mnie",
    "kebab w pobliżu",
    "kebab aleje jerozolimskie 87",
    "najlepszy kebab centrum",
    "najlepszy kebab ochota",
    "najlepszy kebab śródmieście",
  ],

  applicationName: "Cuzi Kebab",
  authors: [{ name: "Cuzi Kebab" }],
  creator: "Cuzi Kebab",
  publisher: "Cuzi Kebab",
  formatDetection: {
    email: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "Cuzi Kebab",
    title: "Cuzi Kebab - Gemuse Kebab Warszawa",
    description:
      "Najlepszy gemüse kebab w Warszawie — berliński kebab z grillowanymi warzywami, w centrum przy Alejach Jerozolimskich 87.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cuzi Kebab - Gemuse Kebab Warszawa",
    description:
      "Najlepszy gemüse kebab w Warszawie. Berliński kebab z grillowanymi warzywami w centrum przy Alejach Jerozolimskich 87.",
  },

  category: "restaurant",
};

/* ========== Dane strukturalne (JSON-LD / Rich Results) ========== */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": `${SITE_URL}/#restaurant`,
      name: "Cuzi Kebab",
      alternateName: "Gemüse Kebab Cuzi Warszawa",
      description:
        "Cuzi Kebab to najlepszy gemüse kebab w Warszawie. Berliński kebab z grillowanymi warzywami, soczystym mięsem i autorskimi sosami, przy Alejach Jerozolimskich 87.",
      url: SITE_URL,
      telephone: "+48 000 000 000",
      priceRange: "$$",
      currency: "PLN",
      servesCuisine: ["Kebab", "Gemüse Kebab", "Berlin Kebab", "Kuchnia niemiecka"],
      image: `${SITE_URL}/logo.png`,
      logo: `${SITE_URL}/logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al. Jerozolimskie 87",
        addressLocality: "Warszawa",
        postalCode: "02-001",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.2304,
        longitude: 21.0068,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "10:00",
          closes: "22:00",
        },
      ],
      hasMenu: `${SITE_URL}/#menu`,
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      parent: { "@id": `${SITE_URL}/#restaurant` },
      name: "Cuzi Kebab – Gemüse Kebab Warszawa",
      description:
        "Kebab z grillowanymi warzywami (gemüse) w centrum Warszawy. Berliński kebab na Śródmieściu, blisko Dworca Centralnego i Pałacu Kultury.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al. Jerozolimskie 87",
        addressLocality: "Warszawa",
        postalCode: "02-001",
        addressCountry: "PL",
      },
      areaServed: "Warszawa (Centrum, Śródmieście, Ochota)",
    },
    {
      "@type": "Menu",
      "@id": `${SITE_URL}/#menu`,
      name: "Menu – Cuzi Kebab",
      url: `${SITE_URL}/#menu`,
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Gemüse Kebab (bułka)",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Chicken Gemüse Kebab",
              description: "Kebab z kurczakiem i grillowanymi warzywami w bułce.",
              offers: [
                { "@type": "Offer", name: "SMALL 140G", price: "34", priceCurrency: "PLN" },
                { "@type": "Offer", name: "REGULAR 180G", price: "40", priceCurrency: "PLN" },
                { "@type": "Offer", name: "BIG 220G", price: "46", priceCurrency: "PLN" },
              ],
            },
            {
              "@type": "MenuItem",
              name: "Steak / Beef Gemüse Kebab",
              description: "Kebab z wołowiną/steakiem i grillowanymi warzywami w bułce.",
              offers: [
                { "@type": "Offer", name: "SMALL 140G", price: "37", priceCurrency: "PLN" },
                { "@type": "Offer", name: "REGULAR 180G", price: "45", priceCurrency: "PLN" },
                { "@type": "Offer", name: "BIG 220G", price: "53", priceCurrency: "PLN" },
              ],
            },
            {
              "@type": "MenuItem",
              name: "Falafel (Vege) Gemüse Kebab",
              description: "Wegetariański kebab z falafelem i grillowanymi warzywami w bułce.",
              offers: [
                { "@type": "Offer", name: "SMALL 4 SZT.", price: "32", priceCurrency: "PLN" },
                { "@type": "Offer", name: "REGULAR 5 SZT.", price: "37", priceCurrency: "PLN" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} ${bangers.variable} ${pacifico.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Favicony i ikony aplikacji */}
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/android-icon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#222624" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#222624" />

        {/* Dane strukturalne SEO lokalnego (Rich Results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden">{children}</body>
    </html>
  );
}

