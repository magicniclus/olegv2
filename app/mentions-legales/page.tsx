import { Metadata } from 'next';
import MentionsLegalesClient from './mentions-legales-client';

// Métadonnées SEO pour la page mentions légales
export const metadata: Metadata = {
  title: "Mentions Légales - MARQUES VAZ PLACO | Informations Légales",
  description: "Consultez les mentions légales de MARQUES VAZ PLACO, expert en plâtrerie, cloisons sèches, doublages et faux plafonds en Provence-Alpes-Côte d'Azur. Informations légales et réglementaires.",
  keywords: "mentions légales MARQUES VAZ PLACO, informations légales plâtrerie, SIRET artisan PACA, mentions légales BTP, informations entreprise plaquiste",
  authors: [{ name: "AMILTON VAZ" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  openGraph: {
    title: "Mentions Légales MARQUES VAZ PLACO",
    description: "Informations légales et réglementaires de MARQUES VAZ PLACO, expert en plâtrerie en PACA.",
    type: "website",
    locale: "fr_FR",
    siteName: "MARQUES VAZ PLACO - Plaquiste Professionnel",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />;
}