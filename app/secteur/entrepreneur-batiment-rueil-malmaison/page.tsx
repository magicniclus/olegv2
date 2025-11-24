import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Plombier Rueil-Malmaison 92500 | Chauffagiste Rueil - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Rueil-Malmaison (92500). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Rueil-Malmaison, électricien Rueil-Malmaison, menuisier Rueil-Malmaison, rénovation Rueil-Malmaison, ExFactor, devis gratuit travaux Rueil-Malmaison, artisan Rueil-Malmaison 92500",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Rueil-Malmaison | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Rueil-Malmaison (92500). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Rueil-Malmaison | ExFactor",
    description: "Expert entrepreneur du bâtiment à Rueil-Malmaison. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentRueilMalmaisonPage() {
  const cityData = {
    name: "Rueil-Malmaison",
    postalCode: "92500",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Rueil-Malmaison, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Rueil-Malmaison",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Rueil-Malmaison.",
      keywords: "électricien Rueil-Malmaison 92500, installation électrique Rueil-Malmaison, dépannage électrique Rueil-Malmaison"
    },
    {
      title: "Placo Peinture à Rueil-Malmaison", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Rueil-Malmaison.",
      keywords: "plaquiste Rueil-Malmaison, peintre Rueil-Malmaison, cloisons sèches Rueil-Malmaison 92500"
    },
    {
      title: "Menuiserie à Rueil-Malmaison",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Rueil-Malmaison.",
      keywords: "menuisier Rueil-Malmaison, pose parquet Rueil-Malmaison, placards sur mesure Rueil-Malmaison 92500"
    },
    {
      title: "Cuisine & Salle de bains à Rueil-Malmaison",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Rueil-Malmaison.",
      keywords: "rénovation cuisine Rueil-Malmaison, rénovation salle de bain Rueil-Malmaison, plombier Rueil-Malmaison"
    },
    {
      title: "Sols Carrelage à Rueil-Malmaison",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Rueil-Malmaison.",
      keywords: "carreleur Rueil-Malmaison, pose carrelage Rueil-Malmaison 92500, sols Rueil-Malmaison"
    },
    {
      title: "Rénovation Globale à Rueil-Malmaison",
      description: "Rénovation complète de maisons et appartements à Rueil-Malmaison, coordination tous corps de métier.",
      keywords: "rénovation maison Rueil-Malmaison, rénovation globale Rueil-Malmaison, travaux Rueil-Malmaison"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Rueil-Malmaison et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
