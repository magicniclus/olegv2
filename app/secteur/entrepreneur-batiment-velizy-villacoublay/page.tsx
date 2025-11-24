import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Rénovation Vélizy-Villacoublay 78140 | Maison Moderne - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à Vélizy-Villacoublay (78140). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment Vélizy-Villacoublay, électricien Vélizy-Villacoublay, menuisier Vélizy-Villacoublay, rénovation Vélizy-Villacoublay, ExFactor, devis gratuit travaux Vélizy-Villacoublay, artisan Vélizy-Villacoublay 78140",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Vélizy-Villacoublay | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Vélizy-Villacoublay (78140). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Vélizy-Villacoublay | ExFactor",
    description: "Expert entrepreneur du bâtiment à Vélizy-Villacoublay. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentVelizyVillacoublayPage() {
  const cityData = {
    name: "Vélizy-Villacoublay",
    postalCode: "78140",
    department: "Yvelines (78)",
    region: "Île-de-France",
    description: "Vélizy-Villacoublay, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Vélizy-Villacoublay",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Vélizy-Villacoublay.",
      keywords: "électricien Vélizy-Villacoublay 78140, installation électrique Vélizy-Villacoublay, dépannage électrique Vélizy-Villacoublay"
    },
    {
      title: "Placo Peinture à Vélizy-Villacoublay", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Vélizy-Villacoublay.",
      keywords: "plaquiste Vélizy-Villacoublay, peintre Vélizy-Villacoublay, cloisons sèches Vélizy-Villacoublay 78140"
    },
    {
      title: "Menuiserie à Vélizy-Villacoublay",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Vélizy-Villacoublay.",
      keywords: "menuisier Vélizy-Villacoublay, pose parquet Vélizy-Villacoublay, placards sur mesure Vélizy-Villacoublay 78140"
    },
    {
      title: "Cuisine & Salle de bains à Vélizy-Villacoublay",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Vélizy-Villacoublay.",
      keywords: "rénovation cuisine Vélizy-Villacoublay, rénovation salle de bain Vélizy-Villacoublay, plombier Vélizy-Villacoublay"
    },
    {
      title: "Sols Carrelage à Vélizy-Villacoublay",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Vélizy-Villacoublay.",
      keywords: "carreleur Vélizy-Villacoublay, pose carrelage Vélizy-Villacoublay 78140, sols Vélizy-Villacoublay"
    },
    {
      title: "Rénovation Globale à Vélizy-Villacoublay",
      description: "Rénovation complète de maisons et appartements à Vélizy-Villacoublay, coordination tous corps de métier.",
      keywords: "rénovation maison Vélizy-Villacoublay, rénovation globale Vélizy-Villacoublay, travaux Vélizy-Villacoublay"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Vélizy-Villacoublay et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
