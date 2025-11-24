import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Cuisine Équipée Vanves 92170 | Rénovation Cuisine Vanves - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Vanves (92170). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Vanves, électricien Vanves, menuisier Vanves, rénovation Vanves, ExFactor, devis gratuit travaux Vanves, artisan Vanves 92170",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Vanves | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Vanves (92170). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Vanves | ExFactor",
    description: "Expert entrepreneur du bâtiment à Vanves. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentVanvesPage() {
  const cityData = {
    name: "Vanves",
    postalCode: "92170",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Vanves, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Vanves",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Vanves.",
      keywords: "électricien Vanves 92170, installation électrique Vanves, dépannage électrique Vanves"
    },
    {
      title: "Placo Peinture à Vanves", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Vanves.",
      keywords: "plaquiste Vanves, peintre Vanves, cloisons sèches Vanves 92170"
    },
    {
      title: "Menuiserie à Vanves",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Vanves.",
      keywords: "menuisier Vanves, pose parquet Vanves, placards sur mesure Vanves 92170"
    },
    {
      title: "Cuisine & Salle de bains à Vanves",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Vanves.",
      keywords: "rénovation cuisine Vanves, rénovation salle de bain Vanves, plombier Vanves"
    },
    {
      title: "Sols Carrelage à Vanves",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Vanves.",
      keywords: "carreleur Vanves, pose carrelage Vanves 92170, sols Vanves"
    },
    {
      title: "Rénovation Globale à Vanves",
      description: "Rénovation complète de maisons et appartements à Vanves, coordination tous corps de métier.",
      keywords: "rénovation maison Vanves, rénovation globale Vanves, travaux Vanves"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Vanves et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
