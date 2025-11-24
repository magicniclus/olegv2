import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Rénovation Énergétique Clamart 92140 | Isolation Pompe Chaleur - ExFactor",
  description: "Rénovation énergétique à Clamart 92140. Isolation, pompe à chaleur, panneaux solaires. Aides MaPrimeRénov. Électricien, plombier éco-responsable.",
  keywords: "rénovation énergétique Clamart, isolation Clamart 92140, pompe chaleur Clamart, panneaux solaires, MaPrimeRénov Clamart",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Clamart | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Clamart (92). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Clamart | ExFactor",
    description: "Expert entrepreneur du bâtiment à Clamart. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentClamartPage() {
  const cityData = {
    name: "Clamart",
    postalCode: "92140",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Clamart, ville dynamique des Hauts-de-Seine, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Parc Maison Blanche", "Forêt de Meudon", "Centre-ville", "Gare de Clamart"],
    neighborhoods: ["Centre-ville", "Petit Clamart", "Trivaux", "Plaine", "Garenne", "Schneider"]
  };

  const services = [
    {
      title: "Électricité à Clamart",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Clamart.",
      keywords: "électricien Clamart 92140, installation électrique Clamart, dépannage électrique Clamart"
    },
    {
      title: "Placo Peinture à Clamart", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Clamart.",
      keywords: "plaquiste Clamart, peintre Clamart, cloisons sèches Clamart 92"
    },
    {
      title: "Menuiserie à Clamart",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Clamart.",
      keywords: "menuisier Clamart, pose parquet Clamart, placards sur mesure Clamart 92140"
    },
    {
      title: "Cuisine & Salle de bains à Clamart",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Clamart.",
      keywords: "rénovation cuisine Clamart, rénovation salle de bain Clamart, plombier Clamart 92"
    },
    {
      title: "Sols Carrelage à Clamart",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Clamart.",
      keywords: "carreleur Clamart, pose carrelage Clamart 92140, sols Clamart"
    },
    {
      title: "Rénovation Globale à Clamart",
      description: "Rénovation complète de maisons et appartements à Clamart, coordination tous corps de métier.",
      keywords: "rénovation maison Clamart, rénovation globale Clamart, travaux Clamart 92"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Clamart et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
