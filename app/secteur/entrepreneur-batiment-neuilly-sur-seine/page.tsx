import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO pour Neuilly-sur-Seine
export const metadata: Metadata = {
  title: "Rénovation Haut de Gamme Neuilly-sur-Seine 92200 | Architecte Intérieur - ExFactor",
  description: "Rénovation haut de gamme à Neuilly-sur-Seine 92200. Architecte d'intérieur, électricien, menuisier de luxe. Spécialiste maisons bourgeoises, appartements standing.",
  keywords: "rénovation haut de gamme Neuilly-sur-Seine, architecte intérieur Neuilly 92200, menuisier luxe Neuilly, rénovation maison bourgeoise, électricien haut de gamme",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Neuilly-sur-Seine | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Neuilly-sur-Seine (92200). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Neuilly-sur-Seine | ExFactor",
    description: "Expert entrepreneur du bâtiment à Neuilly-sur-Seine. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurNeuillysurSeinePage() {
  const cityData = {
    name: "Neuilly-sur-Seine",
    postalCode: "92200",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Neuilly-sur-Seine, ville dynamique d'Île-de-France, bénéficie de l'expertise d'ExFactor pour tous vos projets de rénovation et travaux du bâtiment.",
    landmarks: ["Centre-ville", "Gare", "Mairie", "Parc"],
    neighborhoods: ["Centre", "Nord", "Sud", "Est", "Ouest", "Résidentiel"]
  };

  const services = [
    {
      title: "Électricité à Neuilly-sur-Seine",
      description: "Installation électrique, mise aux normes, dépannage électrique dans tous les quartiers de Neuilly-sur-Seine.",
      keywords: "électricien Neuilly-sur-Seine 92200, installation électrique Neuilly-sur-Seine, dépannage électrique Neuilly-sur-Seine"
    },
    {
      title: "Placo Peinture à Neuilly-sur-Seine", 
      description: "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches, enduits à Neuilly-sur-Seine.",
      keywords: "plaquiste Neuilly-sur-Seine, peintre Neuilly-sur-Seine, cloisons sèches Neuilly-sur-Seine 92200"
    },
    {
      title: "Menuiserie à Neuilly-sur-Seine",
      description: "Pose de portes, fenêtres, placards sur mesure, parquet dans la ville de Neuilly-sur-Seine.",
      keywords: "menuisier Neuilly-sur-Seine, pose parquet Neuilly-sur-Seine, placards sur mesure Neuilly-sur-Seine 92200"
    },
    {
      title: "Cuisine & Salle de bains à Neuilly-sur-Seine",
      description: "Rénovation complète de cuisines et salles de bains, plomberie, carrelage à Neuilly-sur-Seine.",
      keywords: "rénovation cuisine Neuilly-sur-Seine, rénovation salle de bain Neuilly-sur-Seine, plombier Neuilly-sur-Seine"
    },
    {
      title: "Sols Carrelage à Neuilly-sur-Seine",
      description: "Pose de carrelage, parquet, vinyle, ragréage dans tous les quartiers de Neuilly-sur-Seine.",
      keywords: "carreleur Neuilly-sur-Seine, pose carrelage Neuilly-sur-Seine 92200, sols Neuilly-sur-Seine"
    },
    {
      title: "Rénovation Globale à Neuilly-sur-Seine",
      description: "Rénovation complète de maisons et appartements à Neuilly-sur-Seine, coordination tous corps de métier.",
      keywords: "rénovation maison Neuilly-sur-Seine, rénovation globale Neuilly-sur-Seine, travaux Neuilly-sur-Seine"
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Neuilly-sur-Seine et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}