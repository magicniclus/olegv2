import { Metadata } from 'next';
import HomeClient from './home-client';

// Métadonnées SEO pour la page d'accueil
export const metadata: Metadata = {
  title: "MARQUES VAZ PLACO - Plaquiste Professionnel en Provence-Alpes-Côte d'Azur",
  description: "Expert plaquiste en Provence-Alpes-Côte d'Azur depuis 2015. MARQUES VAZ PLACO spécialisé en cloisons sèches, doublages et faux plafonds. Devis gratuit et intervention rapide à Marseille et région PACA.",
  keywords: "plaquiste Marseille, cloisons sèches PACA, doublage isolation Provence, faux plafond Bouches-du-Rhône, MARQUES VAZ PLACO, plâtrerie Marseille, devis gratuit, artisan qualifié, travaux placo, BTP PACA",
  authors: [{ name: "AMILTON VAZ" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MARQUES VAZ PLACO - Expert Plaquiste en Provence-Alpes-Côte d'Azur",
    description: "Spécialiste plaquiste, cloisons sèches, doublages et faux plafonds. Intervention rapide en PACA. Devis gratuit et personnalisé.",
    type: "website",
    locale: "fr_FR",
    siteName: "MARQUES VAZ PLACO - Plaquiste Professionnel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MARQUES VAZ PLACO - Plaquiste en Provence-Alpes-Côte d'Azur",
      },
    ],
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

export default function Home() {
  return <HomeClient />;
}
