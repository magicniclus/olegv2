import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Rénovation Bureau Levallois-Perret 92300 | Électricien Tertiaire - ExFactor",
  description: "Rénovation bureau à Levallois-Perret 92300. Électricien tertiaire, aménagement open space, cloisons modulaires. Spécialiste entreprises, startups.",
  keywords: "rénovation bureau Levallois-Perret, électricien tertiaire Levallois 92300, aménagement open space, cloisons modulaires bureau, rénovation entreprise",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Levallois-Perret | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Levallois-Perret (92300). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Levallois-Perret | ExFactor",
    description: "Expert entrepreneur du bâtiment à Levallois-Perret. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentLevalloisPerretPage() {
  const cityData = {
    name: "Levallois-Perret",
    postalCode: "92300",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Levallois-Perret, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Levallois-Perret",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Levallois-Perret.",
      keywords: "électricien Levallois-Perret 92300, installation électrique Levallois-Perret, dépannage électrique Levallois-Perret"
    },
    {
      title: "Placo Peinture à Levallois-Perret", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Levallois-Perret.",
      keywords: "plaquiste Levallois-Perret, peintre Levallois-Perret, cloisons sèches Levallois-Perret 92300"
    },
    {
      title: "Menuiserie à Levallois-Perret",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Levallois-Perret.",
      keywords: "menuisier Levallois-Perret, pose parquet Levallois-Perret, placards sur mesure Levallois-Perret 92300"
    },
    {
      title: "Cuisine & Salle de bains à Levallois-Perret",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Levallois-Perret.",
      keywords: "rénovation cuisine Levallois-Perret, rénovation salle de bain Levallois-Perret, plombier Levallois-Perret"
    },
    {
      title: "Sols Carrelage à Levallois-Perret",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Levallois-Perret.",
      keywords: "carreleur Levallois-Perret, pose carrelage Levallois-Perret 92300, sols Levallois-Perret"
    },
    {
      title: "Rénovation Globale à Levallois-Perret",
      description: "Rénovation complète de maisons et appartements à Levallois-Perret, coordination tous corps de métier.",
      keywords: "rénovation maison Levallois-Perret, rénovation globale Levallois-Perret, travaux Levallois-Perret"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Levallois-Perret et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
