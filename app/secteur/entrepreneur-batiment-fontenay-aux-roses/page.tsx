import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Peintre Fontenay-aux-Roses 92260 | Ravalement Façade - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Fontenay-aux-Roses (92260). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Fontenay-aux-Roses, électricien Fontenay-aux-Roses, menuisier Fontenay-aux-Roses, rénovation Fontenay-aux-Roses, ExFactor, devis gratuit travaux Fontenay-aux-Roses, artisan Fontenay-aux-Roses 92260",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Fontenay-aux-Roses | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Fontenay-aux-Roses (92260). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Fontenay-aux-Roses | ExFactor",
    description: "Expert entrepreneur du bâtiment à Fontenay-aux-Roses. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentFontenayAuxRosesPage() {
  const cityData = {
    name: "Fontenay-aux-Roses",
    postalCode: "92260",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Fontenay-aux-Roses, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Fontenay-aux-Roses",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Fontenay-aux-Roses.",
      keywords: "électricien Fontenay-aux-Roses 92260, installation électrique Fontenay-aux-Roses, dépannage électrique Fontenay-aux-Roses"
    },
    {
      title: "Placo Peinture à Fontenay-aux-Roses", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Fontenay-aux-Roses.",
      keywords: "plaquiste Fontenay-aux-Roses, peintre Fontenay-aux-Roses, cloisons sèches Fontenay-aux-Roses 92260"
    },
    {
      title: "Menuiserie à Fontenay-aux-Roses",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Fontenay-aux-Roses.",
      keywords: "menuisier Fontenay-aux-Roses, pose parquet Fontenay-aux-Roses, placards sur mesure Fontenay-aux-Roses 92260"
    },
    {
      title: "Cuisine & Salle de bains à Fontenay-aux-Roses",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Fontenay-aux-Roses.",
      keywords: "rénovation cuisine Fontenay-aux-Roses, rénovation salle de bain Fontenay-aux-Roses, plombier Fontenay-aux-Roses"
    },
    {
      title: "Sols Carrelage à Fontenay-aux-Roses",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Fontenay-aux-Roses.",
      keywords: "carreleur Fontenay-aux-Roses, pose carrelage Fontenay-aux-Roses 92260, sols Fontenay-aux-Roses"
    },
    {
      title: "Rénovation Globale à Fontenay-aux-Roses",
      description: "Rénovation complète de maisons et appartements à Fontenay-aux-Roses, coordination tous corps de métier.",
      keywords: "rénovation maison Fontenay-aux-Roses, rénovation globale Fontenay-aux-Roses, travaux Fontenay-aux-Roses"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Fontenay-aux-Roses et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
