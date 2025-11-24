import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Carreleur Arcueil 94110 | Rénovation Salle de Bain Arcueil - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Arcueil (94110). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Arcueil, électricien Arcueil, menuisier Arcueil, rénovation Arcueil, ExFactor, devis gratuit travaux Arcueil, artisan Arcueil 94110",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Arcueil | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Arcueil (94110). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Arcueil | ExFactor",
    description: "Expert entrepreneur du bâtiment à Arcueil. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentArcueilPage() {
  const cityData = {
    name: "Arcueil",
    postalCode: "94110",
    department: "Val-de-Marne (94)",
    region: "Île-de-France",
    description: "Arcueil, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Arcueil",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Arcueil.",
      keywords: "électricien Arcueil 94110, installation électrique Arcueil, dépannage électrique Arcueil"
    },
    {
      title: "Placo Peinture à Arcueil", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Arcueil.",
      keywords: "plaquiste Arcueil, peintre Arcueil, cloisons sèches Arcueil 94110"
    },
    {
      title: "Menuiserie à Arcueil",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Arcueil.",
      keywords: "menuisier Arcueil, pose parquet Arcueil, placards sur mesure Arcueil 94110"
    },
    {
      title: "Cuisine & Salle de bains à Arcueil",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Arcueil.",
      keywords: "rénovation cuisine Arcueil, rénovation salle de bain Arcueil, plombier Arcueil"
    },
    {
      title: "Sols Carrelage à Arcueil",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Arcueil.",
      keywords: "carreleur Arcueil, pose carrelage Arcueil 94110, sols Arcueil"
    },
    {
      title: "Rénovation Globale à Arcueil",
      description: "Rénovation complète de maisons et appartements à Arcueil, coordination tous corps de métier.",
      keywords: "rénovation maison Arcueil, rénovation globale Arcueil, travaux Arcueil"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Arcueil et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
