import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Isolation Combles Meudon 92190 | Aménagement Combles - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Meudon (92190). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Meudon, électricien Meudon, menuisier Meudon, rénovation Meudon, ExFactor, devis gratuit travaux Meudon, artisan Meudon 92190",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Meudon | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Meudon (92190). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Meudon | ExFactor",
    description: "Expert entrepreneur du bâtiment à Meudon. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentMeudonPage() {
  const cityData = {
    name: "Meudon",
    postalCode: "92190",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Meudon, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Meudon",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Meudon.",
      keywords: "électricien Meudon 92190, installation électrique Meudon, dépannage électrique Meudon"
    },
    {
      title: "Placo Peinture à Meudon", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Meudon.",
      keywords: "plaquiste Meudon, peintre Meudon, cloisons sèches Meudon 92190"
    },
    {
      title: "Menuiserie à Meudon",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Meudon.",
      keywords: "menuisier Meudon, pose parquet Meudon, placards sur mesure Meudon 92190"
    },
    {
      title: "Cuisine & Salle de bains à Meudon",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Meudon.",
      keywords: "rénovation cuisine Meudon, rénovation salle de bain Meudon, plombier Meudon"
    },
    {
      title: "Sols Carrelage à Meudon",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Meudon.",
      keywords: "carreleur Meudon, pose carrelage Meudon 92190, sols Meudon"
    },
    {
      title: "Rénovation Globale à Meudon",
      description: "Rénovation complète de maisons et appartements à Meudon, coordination tous corps de métier.",
      keywords: "rénovation maison Meudon, rénovation globale Meudon, travaux Meudon"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Meudon et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
