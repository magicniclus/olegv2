import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Électricien Malakoff 92240 | Rénovation Appartement Malakoff - ExFactor",
  description: "Électricien à Malakoff 92240. Rénovation appartement, studio. Spécialiste mise aux normes électriques. Plombier, menuisier. Devis gratuit 24h.",
  keywords: "électricien Malakoff 92240, rénovation appartement Malakoff, mise aux normes électriques, plombier Malakoff, studio Malakoff",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Malakoff | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Malakoff (92240). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Malakoff | ExFactor",
    description: "Expert entrepreneur du bâtiment à Malakoff. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentMalakoffPage() {
  const cityData = {
    name: "Malakoff",
    postalCode: "92240",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Malakoff, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Malakoff",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Malakoff.",
      keywords: "électricien Malakoff 92240, installation électrique Malakoff, dépannage électrique Malakoff"
    },
    {
      title: "Placo Peinture à Malakoff", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Malakoff.",
      keywords: "plaquiste Malakoff, peintre Malakoff, cloisons sèches Malakoff 92240"
    },
    {
      title: "Menuiserie à Malakoff",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Malakoff.",
      keywords: "menuisier Malakoff, pose parquet Malakoff, placards sur mesure Malakoff 92240"
    },
    {
      title: "Cuisine & Salle de bains à Malakoff",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Malakoff.",
      keywords: "rénovation cuisine Malakoff, rénovation salle de bain Malakoff, plombier Malakoff"
    },
    {
      title: "Sols Carrelage à Malakoff",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Malakoff.",
      keywords: "carreleur Malakoff, pose carrelage Malakoff 92240, sols Malakoff"
    },
    {
      title: "Rénovation Globale à Malakoff",
      description: "Rénovation complète de maisons et appartements à Malakoff, coordination tous corps de métier.",
      keywords: "rénovation maison Malakoff, rénovation globale Malakoff, travaux Malakoff"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Malakoff et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
