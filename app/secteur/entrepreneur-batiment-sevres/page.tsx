import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Carreleur Sèvres 92310 | Pose Carrelage Sèvres - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Sèvres (92310). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Sèvres, électricien Sèvres, menuisier Sèvres, rénovation Sèvres, ExFactor, devis gratuit travaux Sèvres, artisan Sèvres 92310",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Sèvres | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Sèvres (92310). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Sèvres | ExFactor",
    description: "Expert entrepreneur du bâtiment à Sèvres. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentSevresPage() {
  const cityData = {
    name: "Sèvres",
    postalCode: "92310",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Sèvres, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Sèvres",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Sèvres.",
      keywords: "électricien Sèvres 92310, installation électrique Sèvres, dépannage électrique Sèvres"
    },
    {
      title: "Placo Peinture à Sèvres", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Sèvres.",
      keywords: "plaquiste Sèvres, peintre Sèvres, cloisons sèches Sèvres 92310"
    },
    {
      title: "Menuiserie à Sèvres",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Sèvres.",
      keywords: "menuisier Sèvres, pose parquet Sèvres, placards sur mesure Sèvres 92310"
    },
    {
      title: "Cuisine & Salle de bains à Sèvres",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Sèvres.",
      keywords: "rénovation cuisine Sèvres, rénovation salle de bain Sèvres, plombier Sèvres"
    },
    {
      title: "Sols Carrelage à Sèvres",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Sèvres.",
      keywords: "carreleur Sèvres, pose carrelage Sèvres 92310, sols Sèvres"
    },
    {
      title: "Rénovation Globale à Sèvres",
      description: "Rénovation complète de maisons et appartements à Sèvres, coordination tous corps de métier.",
      keywords: "rénovation maison Sèvres, rénovation globale Sèvres, travaux Sèvres"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Sèvres et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
