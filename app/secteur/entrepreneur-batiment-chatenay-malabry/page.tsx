import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Plombier Châtenay-Malabry 92290 | Rénovation Cuisine - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Châtenay-Malabry (92290). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Châtenay-Malabry, électricien Châtenay-Malabry, menuisier Châtenay-Malabry, rénovation Châtenay-Malabry, ExFactor, devis gratuit travaux Châtenay-Malabry, artisan Châtenay-Malabry 92290",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Châtenay-Malabry | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Châtenay-Malabry (92290). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Châtenay-Malabry | ExFactor",
    description: "Expert entrepreneur du bâtiment à Châtenay-Malabry. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentChatenayMalabryPage() {
  const cityData = {
    name: "Châtenay-Malabry",
    postalCode: "92290",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Châtenay-Malabry, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Châtenay-Malabry",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Châtenay-Malabry.",
      keywords: "électricien Châtenay-Malabry 92290, installation électrique Châtenay-Malabry, dépannage électrique Châtenay-Malabry"
    },
    {
      title: "Placo Peinture à Châtenay-Malabry", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Châtenay-Malabry.",
      keywords: "plaquiste Châtenay-Malabry, peintre Châtenay-Malabry, cloisons sèches Châtenay-Malabry 92290"
    },
    {
      title: "Menuiserie à Châtenay-Malabry",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Châtenay-Malabry.",
      keywords: "menuisier Châtenay-Malabry, pose parquet Châtenay-Malabry, placards sur mesure Châtenay-Malabry 92290"
    },
    {
      title: "Cuisine & Salle de bains à Châtenay-Malabry",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Châtenay-Malabry.",
      keywords: "rénovation cuisine Châtenay-Malabry, rénovation salle de bain Châtenay-Malabry, plombier Châtenay-Malabry"
    },
    {
      title: "Sols Carrelage à Châtenay-Malabry",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Châtenay-Malabry.",
      keywords: "carreleur Châtenay-Malabry, pose carrelage Châtenay-Malabry 92290, sols Châtenay-Malabry"
    },
    {
      title: "Rénovation Globale à Châtenay-Malabry",
      description: "Rénovation complète de maisons et appartements à Châtenay-Malabry, coordination tous corps de métier.",
      keywords: "rénovation maison Châtenay-Malabry, rénovation globale Châtenay-Malabry, travaux Châtenay-Malabry"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Châtenay-Malabry et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
