import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Peintre Chaville 92370 | Peinture Intérieure Chaville - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Chaville (92370). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Chaville, électricien Chaville, menuisier Chaville, rénovation Chaville, ExFactor, devis gratuit travaux Chaville, artisan Chaville 92370",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Chaville | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Chaville (92370). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Chaville | ExFactor",
    description: "Expert entrepreneur du bâtiment à Chaville. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentChavillePage() {
  const cityData = {
    name: "Chaville",
    postalCode: "92370",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Chaville, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Chaville",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Chaville.",
      keywords: "électricien Chaville 92370, installation électrique Chaville, dépannage électrique Chaville"
    },
    {
      title: "Placo Peinture à Chaville", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Chaville.",
      keywords: "plaquiste Chaville, peintre Chaville, cloisons sèches Chaville 92370"
    },
    {
      title: "Menuiserie à Chaville",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Chaville.",
      keywords: "menuisier Chaville, pose parquet Chaville, placards sur mesure Chaville 92370"
    },
    {
      title: "Cuisine & Salle de bains à Chaville",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Chaville.",
      keywords: "rénovation cuisine Chaville, rénovation salle de bain Chaville, plombier Chaville"
    },
    {
      title: "Sols Carrelage à Chaville",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Chaville.",
      keywords: "carreleur Chaville, pose carrelage Chaville 92370, sols Chaville"
    },
    {
      title: "Rénovation Globale à Chaville",
      description: "Rénovation complète de maisons et appartements à Chaville, coordination tous corps de métier.",
      keywords: "rénovation maison Chaville, rénovation globale Chaville, travaux Chaville"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Chaville et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
