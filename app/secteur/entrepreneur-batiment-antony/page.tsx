import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Carreleur Antony 92160 | Salle de Bain Antony - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Antony (92160). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Antony, électricien Antony, menuisier Antony, rénovation Antony, ExFactor, devis gratuit travaux Antony, artisan Antony 92160",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Antony | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Antony (92160). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Antony | ExFactor",
    description: "Expert entrepreneur du bâtiment à Antony. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentAntonyPage() {
  const cityData = {
    name: "Antony",
    postalCode: "92160",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Antony, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Antony",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Antony.",
      keywords: "électricien Antony 92160, installation électrique Antony, dépannage électrique Antony"
    },
    {
      title: "Placo Peinture à Antony", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Antony.",
      keywords: "plaquiste Antony, peintre Antony, cloisons sèches Antony 92160"
    },
    {
      title: "Menuiserie à Antony",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Antony.",
      keywords: "menuisier Antony, pose parquet Antony, placards sur mesure Antony 92160"
    },
    {
      title: "Cuisine & Salle de bains à Antony",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Antony.",
      keywords: "rénovation cuisine Antony, rénovation salle de bain Antony, plombier Antony"
    },
    {
      title: "Sols Carrelage à Antony",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Antony.",
      keywords: "carreleur Antony, pose carrelage Antony 92160, sols Antony"
    },
    {
      title: "Rénovation Globale à Antony",
      description: "Rénovation complète de maisons et appartements à Antony, coordination tous corps de métier.",
      keywords: "rénovation maison Antony, rénovation globale Antony, travaux Antony"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Antony et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
