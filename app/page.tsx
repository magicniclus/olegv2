import { Metadata } from 'next';
import HomeClient from './home-client';

// Métadonnées SEO pour la page d'accueil
export const metadata: Metadata = {
  title: "OLEGE - Entrepreneur du bâtiment en Île-de-France | Électricité, Peinture, Plâtrerie",
  description: "Entrepreneur du bâtiment en Île-de-France spécialisé en électricité, peinture et plâtrerie. OLEGE vous accompagne dans tous vos projets de construction et rénovation. Devis gratuit et intervention rapide.",
  keywords: "électricien Île-de-France, peintre bâtiment, plâtrier, OLEGE, entrepreneur bâtiment, rénovation Île-de-France, devis gratuit, artisan qualifié, travaux électricité, BTP Île-de-France",
  authors: [{ name: "OLEGE" }],
  creator: "OLEGE",
  publisher: "OLEGE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "OLEGE - Entrepreneur du bâtiment en Île-de-France",
    description: "Spécialiste électricité, peinture et plâtrerie. Intervention rapide en Île-de-France. Devis gratuit et personnalisé.",
    type: "website",
    locale: "fr_FR",
    siteName: "OLEGE - Entrepreneur du bâtiment",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OLEGE - Entrepreneur du bâtiment en Île-de-France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OLEGE - Entrepreneur du bâtiment",
    description: "Spécialiste électricité, peinture et plâtrerie en Île-de-France. Devis gratuit.",
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
