import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Menuisier La Garenne-Colombes 92250 | Porte Fenêtre - ExFactor",
  description: "ExFactor, entrepreneur du bâtiment à La Garenne-Colombes (92250). Électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage, rénovation globale. Devis gratuit.",
  keywords: "entrepreneur bâtiment La Garenne-Colombes, électricien La Garenne-Colombes, menuisier La Garenne-Colombes, rénovation La Garenne-Colombes, ExFactor, devis gratuit travaux La Garenne-Colombes, artisan La Garenne-Colombes 92250",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment La Garenne-Colombes | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à La Garenne-Colombes (92250). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment La Garenne-Colombes | ExFactor",
    description: "Expert entrepreneur du bâtiment à La Garenne-Colombes. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentLaGarenneColombesPage() {
  const cityData = {
    name: "La Garenne-Colombes",
    postalCode: "92250",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "La Garenne-Colombes, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à La Garenne-Colombes",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de La Garenne-Colombes.",
      keywords: "électricien La Garenne-Colombes 92250, installation électrique La Garenne-Colombes, dépannage électrique La Garenne-Colombes"
    },
    {
      title: "Placo Peinture à La Garenne-Colombes", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à La Garenne-Colombes.",
      keywords: "plaquiste La Garenne-Colombes, peintre La Garenne-Colombes, cloisons sèches La Garenne-Colombes 92250"
    },
    {
      title: "Menuiserie à La Garenne-Colombes",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de La Garenne-Colombes.",
      keywords: "menuisier La Garenne-Colombes, pose parquet La Garenne-Colombes, placards sur mesure La Garenne-Colombes 92250"
    },
    {
      title: "Cuisine & Salle de bains à La Garenne-Colombes",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à La Garenne-Colombes.",
      keywords: "rénovation cuisine La Garenne-Colombes, rénovation salle de bain La Garenne-Colombes, plombier La Garenne-Colombes"
    },
    {
      title: "Sols Carrelage à La Garenne-Colombes",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de La Garenne-Colombes.",
      keywords: "carreleur La Garenne-Colombes, pose carrelage La Garenne-Colombes 92250, sols La Garenne-Colombes"
    },
    {
      title: "Rénovation Globale à La Garenne-Colombes",
      description: "Rénovation complète de maisons et appartements à La Garenne-Colombes, coordination tous corps de métier.",
      keywords: "rénovation maison La Garenne-Colombes, rénovation globale La Garenne-Colombes, travaux La Garenne-Colombes"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur La Garenne-Colombes et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
