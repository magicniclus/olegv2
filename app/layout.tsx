import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MARQUES VAZ PLACO - Plaquiste Professionnel en Provence-Alpes-Côte d'Azur",
  description: "MARQUES VAZ PLACO, expert plaquiste en Provence-Alpes-Côte d'Azur. Spécialisé en cloisons sèches, doublages et faux plafonds depuis 2015. Devis gratuit et intervention rapide à Marseille et environs.",
  keywords: "plaquiste Marseille, cloisons sèches PACA, doublage isolation Provence, faux plafond Bouches-du-Rhône, MARQUES VAZ PLACO, plâtrerie Marseille, devis gratuit, artisan qualifié, travaux placo, BTP PACA",
  authors: [{ name: "AMILTON VAZ" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://marquesvazplaco.fr"),
  alternates: {
    canonical: "https://marquesvazplaco.fr",
  },
  openGraph: {
    title: "MARQUES VAZ PLACO - Expert Plaquiste en Provence-Alpes-Côte d'Azur",
    description: "MARQUES VAZ PLACO, spécialiste plaquiste, cloisons sèches, doublages et faux plafonds. Intervention rapide en PACA. Devis gratuit et personnalisé.",
    url: "https://marquesvazplaco.fr",
    siteName: "MARQUES VAZ PLACO - Plaquiste Professionnel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MARQUES VAZ PLACO - Plaquiste en Provence-Alpes-Côte d'Azur",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARQUES VAZ PLACO - Expert Plaquiste",
    description: "Spécialiste plaquiste, cloisons sèches, doublages et faux plafonds en Provence-Alpes-Côte d'Azur. Devis gratuit.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Google tag (gtag.js) - New */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11128083735" strategy="afterInteractive" />
        <Script id="google-analytics-new" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11128083735');
          `}
        </Script>

      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
