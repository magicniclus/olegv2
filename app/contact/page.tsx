import { Metadata } from 'next';
import ContactClient from './contact-client';

// Métadonnées SEO pour la page contact
export const metadata: Metadata = {
  title: "Contact - MARQUES VAZ PLACO | Devis Gratuit Plaquiste PACA",
  description: "Contactez MARQUES VAZ PLACO pour votre projet de plâtrerie, cloisons sèches, doublages ou faux plafonds en Provence-Alpes-Côte d'Azur. Devis gratuit et personnalisé. Intervention rapide à Marseille et environs.",
  keywords: "contact MARQUES VAZ PLACO, devis gratuit plaquiste, contact plaquiste PACA, devis cloisons sèches Marseille, contact artisan Bouches-du-Rhône, plâtrerie contact",
  authors: [{ name: "AMILTON VAZ" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  openGraph: {
    title: "Contact MARQUES VAZ PLACO - Devis Gratuit Plaquiste PACA",
    description: "Contactez notre expert plaquiste pour votre projet. Devis gratuit et personnalisé en Provence-Alpes-Côte d'Azur.",
    type: "website",
    locale: "fr_FR",
    siteName: "MARQUES VAZ PLACO - Plaquiste Professionnel",
  },
  twitter: {
    card: "summary",
    title: "Contact MARQUES VAZ PLACO - Devis Gratuit",
    description: "Contactez notre expert plaquiste pour votre projet en PACA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}