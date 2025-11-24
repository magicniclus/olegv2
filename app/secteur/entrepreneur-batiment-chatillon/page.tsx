import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Menuisier Châtillon 92320 | Pose Parquet Châtillon - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Châtillon (92320). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Châtillon, électricien Châtillon, menuisier Châtillon, rénovation Châtillon, ExFactor, devis gratuit travaux Châtillon, artisan Châtillon 92320",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Châtillon | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Châtillon (92320). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Châtillon | ExFactor",
    description: "Expert entrepreneur du bâtiment à Châtillon. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentChatillonPage() {
  const cityData = {
    name: "Châtillon",
    postalCode: "92320",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Châtillon, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Châtillon",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Châtillon.",
      keywords: "électricien Châtillon 92320, installation électrique Châtillon, dépannage électrique Châtillon"
    },
    {
      title: "Placo Peinture à Châtillon", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Châtillon.",
      keywords: "plaquiste Châtillon, peintre Châtillon, cloisons sèches Châtillon 92320"
    },
    {
      title: "Menuiserie à Châtillon",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Châtillon.",
      keywords: "menuisier Châtillon, pose parquet Châtillon, placards sur mesure Châtillon 92320"
    },
    {
      title: "Cuisine & Salle de bains à Châtillon",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Châtillon.",
      keywords: "rénovation cuisine Châtillon, rénovation salle de bain Châtillon, plombier Châtillon"
    },
    {
      title: "Sols Carrelage à Châtillon",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Châtillon.",
      keywords: "carreleur Châtillon, pose carrelage Châtillon 92320, sols Châtillon"
    },
    {
      title: "Rénovation Globale à Châtillon",
      description: "Rénovation complète de maisons et appartements à Châtillon, coordination tous corps de métier.",
      keywords: "rénovation maison Châtillon, rénovation globale Châtillon, travaux Châtillon"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Châtillon et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
