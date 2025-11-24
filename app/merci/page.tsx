import { Metadata } from 'next';
import MerciClient from './merci-client';

// Métadonnées SEO pour la page merci
export const metadata: Metadata = {
  title: "Merci - MARQUES VAZ PLACO | Demande Reçue",
  description: "Merci pour votre demande de devis ! MARQUES VAZ PLACO vous recontactera rapidement pour votre projet de plâtrerie, cloisons sèches, doublages ou faux plafonds en Provence-Alpes-Côte d'Azur.",
  keywords: "merci demande devis, confirmation contact MARQUES VAZ PLACO, demande reçue plaquiste, suivi projet PACA",
  authors: [{ name: "AMILTON VAZ" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciPage() {
  return <MerciClient />;
}
