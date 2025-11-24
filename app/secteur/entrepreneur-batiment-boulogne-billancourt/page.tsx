import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
export const metadata: Metadata = {
  title: "Électricien Boulogne-Billancourt 92100 | Rénovation Maison Boulogne - ExFactor",
  description: "Électricien à Boulogne-Billancourt 92100. Rénovation maison, appartement. Spécialiste Pont de Sèvres, Marcel Sembat. Plombier, menuisier. Devis gratuit.",
  keywords: "électricien Boulogne-Billancourt 92100, rénovation maison Boulogne, plombier Boulogne-Billancourt, menuisier Pont de Sèvres, travaux Marcel Sembat",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Entrepreneur Bâtiment Boulogne-Billancourt | ExFactor - Devis Gratuit",
    description: "Expert entrepreneur du bâtiment à Boulogne-Billancourt (92100). Tous travaux de rénovation avec garantie décennale. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Entrepreneur Bâtiment Boulogne-Billancourt | ExFactor",
    description: "Expert entrepreneur du bâtiment à Boulogne-Billancourt. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EntrepreneurBatimentBoulogneBillancourtPage() {
  const cityData = {
    name: "Boulogne-Billancourt",
    postalCode: "92100",
    department: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    description: "Boulogne-Billancourt, 2ème ville des Hauts-de-Seine avec 120 000 habitants, concentre de nombreuses rénovations de maisons individuelles et appartements familiaux. ExFactor intervient sur tous les quartiers.",
    landmarks: ["Pont de Sèvres", "Marcel Sembat", "Billancourt", "Boulogne Pont de Saint-Cloud", "Porte de Saint-Cloud"],
    neighborhoods: ["Pont de Sèvres", "Marcel Sembat", "Billancourt-Rives de Seine", "Centre-ville", "Silly-Gallieni", "Escudier"]
  };

  const services = [
    {
      title: "Électricité Maison Boulogne-Billancourt",
      description: "Spécialiste électricité maisons individuelles Boulogne. Rénovation électrique complète, domotique, bornes recharge véhicules électriques.",
      keywords: "électricien Boulogne-Billancourt 92100, rénovation électrique maison, borne recharge Boulogne",
      price: "Dès 85€/h",
      popular: true
    },
    {
      title: "Plomberie Chauffage Boulogne 92100", 
      description: "Plombier chauffagiste Boulogne-Billancourt. Remplacement chaudière, radiateurs, salle de bain clé en main. Intervention rapide.",
      keywords: "plombier Boulogne-Billancourt, chauffagiste 92100, remplacement chaudière Boulogne",
      price: "Dès 95€/h",
      popular: false
    },
    {
      title: "Menuiserie Extérieure Boulogne",
      description: "Menuisier spécialiste fenêtres, volets, portails Boulogne-Billancourt. PVC, alu, bois. Pose, réparation, motorisation.",
      keywords: "menuisier Boulogne-Billancourt, fenêtre PVC Boulogne, volet roulant 92100",
      price: "Dès 180€/m²",
      popular: false
    },
    {
      title: "Rénovation Cuisine Familiale Boulogne",
      description: "Cuisine familiale 12-20m² Boulogne-Billancourt. Îlot central, rangements optimisés, électroménager haut de gamme.",
      keywords: "rénovation cuisine Boulogne-Billancourt, cuisine familiale 92100, îlot central",
      price: "Dès 12000€",
      popular: true
    },
    {
      title: "Parquet Massif Maison Boulogne",
      description: "Pose parquet massif chêne, hêtre, noyer. Rénovation parquet ancien. Finition huilée, vitrifiée. Garantie 10 ans.",
      keywords: "parquet massif Boulogne-Billancourt, rénovation parquet 92100, pose parquet chêne",
      price: "Dès 55€/m²",
      popular: false
    },
    {
      title: "Rénovation Maison Boulogne-Billancourt",
      description: "Rénovation complète maison 80-200m². Extension, surrélévation, aménagement combles. Permis de construire inclus.",
      keywords: "rénovation maison Boulogne-Billancourt, extension maison 92100, surrélévation Boulogne",
      price: "Dès 1400€/m²",
      popular: true
    }
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Intervention sur Boulogne-Billancourt et Île-de-France"
  };

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
