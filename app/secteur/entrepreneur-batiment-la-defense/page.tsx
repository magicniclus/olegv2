import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Rénovation Bureau La Défense 92400 | Aménagement Tertiaire - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à La Défense (92400). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment La Défense, électricien La Défense, menuisier La Défense, rénovation La Défense, ExFactor, devis gratuit travaux La Défense, artisan La Défense 92400",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment La Défense | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à La Défense (92400). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment La Défense | ExFactor",
    description: "Expert entrepreneur du bâtiment à La Défense. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentLaDefensePage() {
  const cityData = {
    name: "La Défense",
    postalCode: "92400",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "La Défense, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à La Défense",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de La Défense.",
      keywords: "électricien La Défense 92400, installation électrique La Défense, dépannage électrique La Défense"
    },
    {
      title: "Placo Peinture à La Défense", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à La Défense.",
      keywords: "plaquiste La Défense, peintre La Défense, cloisons sèches La Défense 92400"
    },
    {
      title: "Menuiserie à La Défense",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de La Défense.",
      keywords: "menuisier La Défense, pose parquet La Défense, placards sur mesure La Défense 92400"
    },
    {
      title: "Cuisine & Salle de bains à La Défense",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à La Défense.",
      keywords: "rénovation cuisine La Défense, rénovation salle de bain La Défense, plombier La Défense"
    },
    {
      title: "Sols Carrelage à La Défense",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de La Défense.",
      keywords: "carreleur La Défense, pose carrelage La Défense 92400, sols La Défense"
    },
    {
      title: "Rénovation Globale à La Défense",
      description: "Rénovation complète de maisons et appartements à La Défense, coordination tous corps de métier.",
      keywords: "rénovation maison La Défense, rénovation globale La Défense, travaux La Défense"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur La Défense et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
