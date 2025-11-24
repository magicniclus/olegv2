import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Rénovation Complète Sceaux 92330 | Maison Sceaux - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Sceaux (92330). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Sceaux, électricien Sceaux, menuisier Sceaux, rénovation Sceaux, ExFactor, devis gratuit travaux Sceaux, artisan Sceaux 92330",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Sceaux | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Sceaux (92330). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Sceaux | ExFactor",
    description: "Expert entrepreneur du bâtiment à Sceaux. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentSceauxPage() {
  const cityData = {
    name: "Sceaux",
    postalCode: "92330",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Sceaux, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Sceaux",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Sceaux.",
      keywords: "électricien Sceaux 92330, installation électrique Sceaux, dépannage électrique Sceaux"
    },
    {
      title: "Placo Peinture à Sceaux", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Sceaux.",
      keywords: "plaquiste Sceaux, peintre Sceaux, cloisons sèches Sceaux 92330"
    },
    {
      title: "Menuiserie à Sceaux",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Sceaux.",
      keywords: "menuisier Sceaux, pose parquet Sceaux, placards sur mesure Sceaux 92330"
    },
    {
      title: "Cuisine & Salle de bains à Sceaux",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Sceaux.",
      keywords: "rénovation cuisine Sceaux, rénovation salle de bain Sceaux, plombier Sceaux"
    },
    {
      title: "Sols Carrelage à Sceaux",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Sceaux.",
      keywords: "carreleur Sceaux, pose carrelage Sceaux 92330, sols Sceaux"
    },
    {
      title: "Rénovation Globale à Sceaux",
      description: "Rénovation complète de maisons et appartements à Sceaux, coordination tous corps de métier.",
      keywords: "rénovation maison Sceaux, rénovation globale Sceaux, travaux Sceaux"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Sceaux et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
