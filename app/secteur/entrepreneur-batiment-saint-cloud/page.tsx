import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Rénovation Appartement Saint-Cloud 92210 | Électricien Saint-Cloud - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Saint-Cloud (92210). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Saint-Cloud, électricien Saint-Cloud, menuisier Saint-Cloud, rénovation Saint-Cloud, ExFactor, devis gratuit travaux Saint-Cloud, artisan Saint-Cloud 92210",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Saint-Cloud | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Saint-Cloud (92210). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Saint-Cloud | ExFactor",
    description: "Expert entrepreneur du bâtiment à Saint-Cloud. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentSaintCloudPage() {
  const cityData = {
    name: "Saint-Cloud",
    postalCode: "92210",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Saint-Cloud, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Saint-Cloud",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Saint-Cloud.",
      keywords: "électricien Saint-Cloud 92210, installation électrique Saint-Cloud, dépannage électrique Saint-Cloud"
    },
    {
      title: "Placo Peinture à Saint-Cloud", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Saint-Cloud.",
      keywords: "plaquiste Saint-Cloud, peintre Saint-Cloud, cloisons sèches Saint-Cloud 92210"
    },
    {
      title: "Menuiserie à Saint-Cloud",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Saint-Cloud.",
      keywords: "menuisier Saint-Cloud, pose parquet Saint-Cloud, placards sur mesure Saint-Cloud 92210"
    },
    {
      title: "Cuisine & Salle de bains à Saint-Cloud",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Saint-Cloud.",
      keywords: "rénovation cuisine Saint-Cloud, rénovation salle de bain Saint-Cloud, plombier Saint-Cloud"
    },
    {
      title: "Sols Carrelage à Saint-Cloud",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Saint-Cloud.",
      keywords: "carreleur Saint-Cloud, pose carrelage Saint-Cloud 92210, sols Saint-Cloud"
    },
    {
      title: "Rénovation Globale à Saint-Cloud",
      description: "Rénovation complète de maisons et appartements à Saint-Cloud, coordination tous corps de métier.",
      keywords: "rénovation maison Saint-Cloud, rénovation globale Saint-Cloud, travaux Saint-Cloud"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Saint-Cloud et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
