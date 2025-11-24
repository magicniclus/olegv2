import { Metadata } from 'next';
import HomeClient from './home-client';

// Métadonnées SEO pour la page d'accueil
export const metadata: Metadata = {
  title: "ExFactor - Entrepreneur du bâtiment en Île-de-France | Devis Gratuit, Peinture, Plâtrerie",
  description: "Expert entrepreneur du bâtiment en Île-de-France. ExFactor spécialisé en électricité, placo peinture, menuiserie, cuisine & salle de bains, rénovation globale et sols carrelage. Devis gratuit et intervention rapide.",
  keywords: "électricien Île-de-France, peintre bâtiment, plâtrier, entrepreneur bâtiment Île-de-France, électricité, placo peinture, menuiserie, ExFactor, devis gratuit, artisan qualifié, travaux bâtiment, BTP Île-de-France",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ExFactor - Expert Entrepreneur du bâtiment en Île-de-France",
    description: "Spécialiste électricité, peinture et plâtrerie. Intervention rapide en Île-de-France. Devis gratuit et personnalisé.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ExFactor - Entrepreneur du bâtiment en Île-de-France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExFactor - Expert Entrepreneur du bâtiment",
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
