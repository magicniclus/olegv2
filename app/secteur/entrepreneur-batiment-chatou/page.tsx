import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Extension Maison Chatou 78400 | Agrandissement Chatou - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Chatou (78400). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Chatou, électricien Chatou, menuisier Chatou, rénovation Chatou, ExFactor, devis gratuit travaux Chatou, artisan Chatou 78400",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Chatou | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Chatou (78400). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Chatou | ExFactor",
    description: "Expert entrepreneur du bâtiment à Chatou. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentChatouPage() {
  const cityData = {
    name: "Chatou",
    postalCode: "78400",
    department: "Yvelines (78)",
    region: "Île-de-France",
    description: "Chatou, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Chatou",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Chatou.",
      keywords: "électricien Chatou 78400, installation électrique Chatou, dépannage électrique Chatou"
    },
    {
      title: "Placo Peinture à Chatou", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Chatou.",
      keywords: "plaquiste Chatou, peintre Chatou, cloisons sèches Chatou 78400"
    },
    {
      title: "Menuiserie à Chatou",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Chatou.",
      keywords: "menuisier Chatou, pose parquet Chatou, placards sur mesure Chatou 78400"
    },
    {
      title: "Cuisine & Salle de bains à Chatou",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Chatou.",
      keywords: "rénovation cuisine Chatou, rénovation salle de bain Chatou, plombier Chatou"
    },
    {
      title: "Sols Carrelage à Chatou",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Chatou.",
      keywords: "carreleur Chatou, pose carrelage Chatou 78400, sols Chatou"
    },
    {
      title: "Rénovation Globale à Chatou",
      description: "Rénovation complète de maisons et appartements à Chatou, coordination tous corps de métier.",
      keywords: "rénovation maison Chatou, rénovation globale Chatou, travaux Chatou"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Chatou et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
