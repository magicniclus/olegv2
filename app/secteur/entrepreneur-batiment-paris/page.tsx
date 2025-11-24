import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Rénovation Appartement Paris | Électricien Plombier Paris 75 - ExFactor",
  description: "Rénovation d'appartement parisien par ExFactor. Électricien, plombier, menuisier à Paris 75. Spécialiste Haussmannien, studio, 2 pièces. Devis gratuit 24h.",
  keywords: "rénovation appartement Paris, électricien Paris 75, plombier Paris, menuisier Paris, rénovation Haussmannien Paris, travaux studio Paris",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Paris | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Paris. Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Paris | ExFactor",
    description: "Expert entrepreneur du bâtiment à Paris. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentParisPage() {
  const cityData = {
    name: "Paris",
    postalCode: "75000",
    department: "Paris (75)",
    region: "Île-de-France",
    description: "Paris concentre 80% des demandes de rénovation d'appartements Haussmanniens en Île-de-France. ExFactor intervient dans tous les arrondissements pour vos travaux d'électricité, plomberie et rénovation complète.",
    landmarks: ["Appartements Haussmanniens", "Studios 9ème", "Lofts Marais", "Duplex 16ème", "2 pièces Montmartre"],
    neighborhoods: ["Marais (3ème-4ème)", "Saint-Germain (6ème)", "Montmartre (18ème)", "Bastille (11ème)", "Nation (12ème)", "Passy (16ème)", "Batignolles (17ème)", "Belleville (20ème)"]
  };

  const services = [
    {
      title: "Électricité Appartement Haussmannien Paris",
      description: "Spécialiste électricité appartements anciens parisiens. Mise aux normes NF C 15-100, tableaux électriques, éclairage LED. Intervention 24h/24.",
      keywords: "électricien Paris 75, mise aux normes électricité Paris, tableau électrique Haussmannien",
      price: "Dès 80€/h",
      popular: true
    },
    {
      title: "Plomberie Studio & 2 Pièces Paris", 
      description: "Plombier spécialiste petites surfaces parisiennes. Optimisation salle de bain, cuisine, WC. Devis gratuit sous 2h.",
      keywords: "plombier Paris, rénovation salle de bain studio Paris, plomberie 2 pièces",
      price: "Dès 90€/h",
      popular: false
    },
    {
      title: "Menuiserie Sur-Mesure Paris Centre",
      description: "Création placards, bibliothèques, dressing sur-mesure. Optimisation espaces parisiens. Bois massif, mélaminé.",
      keywords: "menuisier Paris, placard sur mesure Paris, dressing Paris",
      price: "Dès 150€/m²",
      popular: false
    },
    {
      title: "Rénovation Cuisine Parisienne",
      description: "Spécialiste cuisine 3-8m² Paris. Aménagement optimal, électroménager intégré, plan de travail quartz.",
      keywords: "rénovation cuisine Paris, cuisine 6m2 Paris, aménagement cuisine studio",
      price: "Dès 8000€",
      popular: true
    },
    {
      title: "Parquet Massif Appartement Paris",
      description: "Pose parquet chêne massif, point de Hongrie, rénovation parquet ancien. Finition cirée, vitrifiée.",
      keywords: "parquet Paris, pose parquet Haussmannien, rénovation parquet ancien Paris",
      price: "Dès 45€/m²",
      popular: false
    },
    {
      title: "Rénovation Appartement Haussmannien",
      description: "Rénovation complète 40-120m². Respect cachet architectural, moulures, cheminées. Projet clé en main.",
      keywords: "rénovation Haussmannien Paris, rénovation appartement 75, travaux appartement Paris",
      price: "Dès 1200€/m²",
      popular: true
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Paris et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
