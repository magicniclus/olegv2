import { Metadata } from 'next';
import CGVClient from './cgv-client';

// Métadonnées SEO pour la page CGV
export const metadata: Metadata = {
  title: "Conditions Générales de Vente - MARQUES VAZ PLACO | CGV Plâtrerie",
  description: "Consultez les Conditions Générales de Vente de MARQUES VAZ PLACO pour vos travaux de plâtrerie, cloisons sèches, doublages et faux plafonds en Provence-Alpes-Côte d'Azur. Garanties et modalités de service.",
  keywords: "CGV MARQUES VAZ PLACO, conditions générales vente plâtrerie, garantie travaux PACA, modalités service plaquiste, CGV artisan BTP",
  authors: [{ name: "AMILTON VAZ" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  openGraph: {
    title: "CGV MARQUES VAZ PLACO - Conditions Générales de Vente",
    description: "Conditions Générales de Vente pour vos travaux de plâtrerie en Provence-Alpes-Côte d'Azur.",
    type: "website",
    locale: "fr_FR",
    siteName: "MARQUES VAZ PLACO - Plaquiste Professionnel",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CGVPage() {
  return <CGVClient />;
}