import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Rénovation Appartement Cachan 94230 | Électricien Cachan - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Cachan (94230). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Cachan, électricien Cachan, menuisier Cachan, rénovation Cachan, ExFactor, devis gratuit travaux Cachan, artisan Cachan 94230",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Cachan | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Cachan (94230). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Cachan | ExFactor",
    description: "Expert entrepreneur du bâtiment à Cachan. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentCachanPage() {
  const cityData = {
    name: "Cachan",
    postalCode: "94230",
    department: "Val-de-Marne (94)",
    region: "Île-de-France",
    description: "Cachan, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Cachan",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Cachan.",
      keywords: "électricien Cachan 94230, installation électrique Cachan, dépannage électrique Cachan"
    },
    {
      title: "Placo Peinture à Cachan", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Cachan.",
      keywords: "plaquiste Cachan, peintre Cachan, cloisons sèches Cachan 94230"
    },
    {
      title: "Menuiserie à Cachan",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Cachan.",
      keywords: "menuisier Cachan, pose parquet Cachan, placards sur mesure Cachan 94230"
    },
    {
      title: "Cuisine & Salle de bains à Cachan",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Cachan.",
      keywords: "rénovation cuisine Cachan, rénovation salle de bain Cachan, plombier Cachan"
    },
    {
      title: "Sols Carrelage à Cachan",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Cachan.",
      keywords: "carreleur Cachan, pose carrelage Cachan 94230, sols Cachan"
    },
    {
      title: "Rénovation Globale à Cachan",
      description: "Rénovation complète de maisons et appartements à Cachan, coordination tous corps de métier.",
      keywords: "rénovation maison Cachan, rénovation globale Cachan, travaux Cachan"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Cachan et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
