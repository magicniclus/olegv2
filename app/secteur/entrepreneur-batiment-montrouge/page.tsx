import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Plombier Montrouge 92120 | Rénovation Salle de Bain Montrouge - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Montrouge (92120). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Montrouge, électricien Montrouge, menuisier Montrouge, rénovation Montrouge, ExFactor, devis gratuit travaux Montrouge, artisan Montrouge 92120",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Montrouge | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Montrouge (92120). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Montrouge | ExFactor",
    description: "Expert entrepreneur du bâtiment à Montrouge. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentMontrougePage() {
  const cityData = {
    name: "Montrouge",
    postalCode: "92120",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Montrouge, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Montrouge",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Montrouge.",
      keywords: "électricien Montrouge 92120, installation électrique Montrouge, dépannage électrique Montrouge"
    },
    {
      title: "Placo Peinture à Montrouge", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Montrouge.",
      keywords: "plaquiste Montrouge, peintre Montrouge, cloisons sèches Montrouge 92120"
    },
    {
      title: "Menuiserie à Montrouge",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Montrouge.",
      keywords: "menuisier Montrouge, pose parquet Montrouge, placards sur mesure Montrouge 92120"
    },
    {
      title: "Cuisine & Salle de bains à Montrouge",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Montrouge.",
      keywords: "rénovation cuisine Montrouge, rénovation salle de bain Montrouge, plombier Montrouge"
    },
    {
      title: "Sols Carrelage à Montrouge",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Montrouge.",
      keywords: "carreleur Montrouge, pose carrelage Montrouge 92120, sols Montrouge"
    },
    {
      title: "Rénovation Globale à Montrouge",
      description: "Rénovation complète de maisons et appartements à Montrouge, coordination tous corps de métier.",
      keywords: "rénovation maison Montrouge, rénovation globale Montrouge, travaux Montrouge"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Montrouge et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
