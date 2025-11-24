import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Électricien Guyancourt 78280 | Domotique Guyancourt - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Guyancourt (78280). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Guyancourt, électricien Guyancourt, menuisier Guyancourt, rénovation Guyancourt, ExFactor, devis gratuit travaux Guyancourt, artisan Guyancourt 78280",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Guyancourt | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Guyancourt (78280). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Guyancourt | ExFactor",
    description: "Expert entrepreneur du bâtiment à Guyancourt. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentGuyancourtPage() {
  const cityData = {
    name: "Guyancourt",
    postalCode: "78280",
    department: "Yvelines (78)",
    region: "Île-de-France",
    description: "Guyancourt, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Guyancourt",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Guyancourt.",
      keywords: "électricien Guyancourt 78280, installation électrique Guyancourt, dépannage électrique Guyancourt"
    },
    {
      title: "Placo Peinture à Guyancourt", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Guyancourt.",
      keywords: "plaquiste Guyancourt, peintre Guyancourt, cloisons sèches Guyancourt 78280"
    },
    {
      title: "Menuiserie à Guyancourt",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Guyancourt.",
      keywords: "menuisier Guyancourt, pose parquet Guyancourt, placards sur mesure Guyancourt 78280"
    },
    {
      title: "Cuisine & Salle de bains à Guyancourt",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Guyancourt.",
      keywords: "rénovation cuisine Guyancourt, rénovation salle de bain Guyancourt, plombier Guyancourt"
    },
    {
      title: "Sols Carrelage à Guyancourt",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Guyancourt.",
      keywords: "carreleur Guyancourt, pose carrelage Guyancourt 78280, sols Guyancourt"
    },
    {
      title: "Rénovation Globale à Guyancourt",
      description: "Rénovation complète de maisons et appartements à Guyancourt, coordination tous corps de métier.",
      keywords: "rénovation maison Guyancourt, rénovation globale Guyancourt, travaux Guyancourt"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Guyancourt et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
