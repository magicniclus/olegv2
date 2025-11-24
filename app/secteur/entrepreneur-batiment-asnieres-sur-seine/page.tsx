import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Électricien Asnières-sur-Seine 92600 | Tableau Électrique - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Asnières-sur-Seine (92600). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Asnières-sur-Seine, électricien Asnières-sur-Seine, menuisier Asnières-sur-Seine, rénovation Asnières-sur-Seine, ExFactor, devis gratuit travaux Asnières-sur-Seine, artisan Asnières-sur-Seine 92600",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Asnières-sur-Seine | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Asnières-sur-Seine (92600). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Asnières-sur-Seine | ExFactor",
    description: "Expert entrepreneur du bâtiment à Asnières-sur-Seine. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentAsnieresSurSeinePage() {
  const cityData = {
    name: "Asnières-sur-Seine",
    postalCode: "92600",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Asnières-sur-Seine, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Asnières-sur-Seine",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Asnières-sur-Seine.",
      keywords: "électricien Asnières-sur-Seine 92600, installation électrique Asnières-sur-Seine, dépannage électrique Asnières-sur-Seine"
    },
    {
      title: "Placo Peinture à Asnières-sur-Seine", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Asnières-sur-Seine.",
      keywords: "plaquiste Asnières-sur-Seine, peintre Asnières-sur-Seine, cloisons sèches Asnières-sur-Seine 92600"
    },
    {
      title: "Menuiserie à Asnières-sur-Seine",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Asnières-sur-Seine.",
      keywords: "menuisier Asnières-sur-Seine, pose parquet Asnières-sur-Seine, placards sur mesure Asnières-sur-Seine 92600"
    },
    {
      title: "Cuisine & Salle de bains à Asnières-sur-Seine",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Asnières-sur-Seine.",
      keywords: "rénovation cuisine Asnières-sur-Seine, rénovation salle de bain Asnières-sur-Seine, plombier Asnières-sur-Seine"
    },
    {
      title: "Sols Carrelage à Asnières-sur-Seine",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Asnières-sur-Seine.",
      keywords: "carreleur Asnières-sur-Seine, pose carrelage Asnières-sur-Seine 92600, sols Asnières-sur-Seine"
    },
    {
      title: "Rénovation Globale à Asnières-sur-Seine",
      description: "Rénovation complète de maisons et appartements à Asnières-sur-Seine, coordination tous corps de métier.",
      keywords: "rénovation maison Asnières-sur-Seine, rénovation globale Asnières-sur-Seine, travaux Asnières-sur-Seine"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Asnières-sur-Seine et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
