import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Menuisier Suresnes 92150 | Placards Sur Mesure - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Suresnes (92150). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Suresnes, électricien Suresnes, menuisier Suresnes, rénovation Suresnes, ExFactor, devis gratuit travaux Suresnes, artisan Suresnes 92150",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Suresnes | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Suresnes (92150). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Suresnes | ExFactor",
    description: "Expert entrepreneur du bâtiment à Suresnes. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentSuresnesPage() {
  const cityData = {
    name: "Suresnes",
    postalCode: "92150",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Suresnes, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Suresnes",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Suresnes.",
      keywords: "électricien Suresnes 92150, installation électrique Suresnes, dépannage électrique Suresnes"
    },
    {
      title: "Placo Peinture à Suresnes", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Suresnes.",
      keywords: "plaquiste Suresnes, peintre Suresnes, cloisons sèches Suresnes 92150"
    },
    {
      title: "Menuiserie à Suresnes",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Suresnes.",
      keywords: "menuisier Suresnes, pose parquet Suresnes, placards sur mesure Suresnes 92150"
    },
    {
      title: "Cuisine & Salle de bains à Suresnes",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Suresnes.",
      keywords: "rénovation cuisine Suresnes, rénovation salle de bain Suresnes, plombier Suresnes"
    },
    {
      title: "Sols Carrelage à Suresnes",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Suresnes.",
      keywords: "carreleur Suresnes, pose carrelage Suresnes 92150, sols Suresnes"
    },
    {
      title: "Rénovation Globale à Suresnes",
      description: "Rénovation complète de maisons et appartements à Suresnes, coordination tous corps de métier.",
      keywords: "rénovation maison Suresnes, rénovation globale Suresnes, travaux Suresnes"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Suresnes et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
