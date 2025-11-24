import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

// Métadonnées SEO pour la page sols carrelage
export const metadata: Metadata = {
  title: "Sols Carrelage - ExFactor | Devis Gratuit Carreleur Île-de-France",
  description: "Expert carreleur en Île-de-France. ExFactor réalise vos sols carrelage, parquet, vinyle et ragréage. Devis gratuit et personnalisé. Pose professionnelle garantie.",
  keywords: "carreleur Île-de-France, pose carrelage, sols parquet, ragréage, ExFactor, devis gratuit carrelage, artisan carreleur, revêtements sols",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Sols Carrelage ExFactor - Devis Gratuit Carreleur Île-de-France",
    description: "Expert carreleur pour tous vos revêtements de sols. Devis gratuit et personnalisé en Île-de-France.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Sols Carrelage ExFactor - Devis Gratuit",
    description: "Expert carreleur en Île-de-France. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SolsCarrelagePage() {
  const subServices = [
    {
      title: "Carrelage sol et mural",
      description: "Pose de carrelage grès cérame, faïence et pierre naturelle avec finitions parfaites.",
      icon: "🏺"
    },
    {
      title: "Parquet et stratifié",
      description: "Installation de parquet massif, contrecollé et stratifié avec sous-couche.",
      icon: "🪵"
    },
    {
      title: "Sols vinyle et PVC",
      description: "Pose de revêtements vinyle, PVC et lino pour tous types d'espaces.",
      icon: "📐"
    },
    {
      title: "Ragréage et préparation",
      description: "Préparation des supports, ragréage et mise à niveau pour pose parfaite.",
      icon: "⚖️"
    },
    {
      title: "Étanchéité",
      description: "Réalisation d'étanchéité sous carrelage pour pièces humides et terrasses.",
      icon: "💧"
    },
    {
      title: "Joints et finitions",
      description: "Réalisation de joints, plinthes et finitions pour un rendu professionnel.",
      icon: "✨"
    }
  ];

  const advantages = [
    "Devis gratuit et personnalisé",
    "Pose professionnelle garantie",
    "Matériaux haut de gamme",
    "Garantie décennale sur tous les travaux",
    "Préparation minutieuse des supports",
    "Respect des délais convenus",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Conseil technique et esthétique",
    "Finitions parfaites et durables"
  ];

  const serviceArea = [
    "Île-de-France",
    "Paris et petite couronne",
    "Hauts-de-Seine (92)",
    "Seine-Saint-Denis (93)",
    "Val-de-Marne (94)",
    "Rayon d'intervention : 100 km"
  ];

  const contactInfo = {
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
    address: "Île-de-France"
  };

  return (
    <ServicePage
      title="Sols Carrelage - ExFactor | Devis Gratuit Carreleur Île-de-France"
      description="Expert carreleur en Île-de-France. ExFactor réalise vos sols carrelage, parquet, vinyle et ragréage. Devis gratuit et personnalisé."
      keywords={["carreleur Île-de-France", "pose carrelage", "sols parquet", "ragréage", "devis gratuit carrelage", "artisan carreleur"]}
      serviceName="Sols Carrelage"
      heroImage="/image-client/sol.jpeg"
      heroTitle="Sols Carrelage en Île-de-France"
      heroSubtitle="Revêtements et finitions avec ExFactor"
      sector="Île-de-France"
      location="Paris et région parisienne"
      mainDescription="ExFactor, expert en revêtements de sols en Île-de-France, vous accompagne dans tous vos projets de carrelage et sols. Notre équipe de 3 collaborateurs qualifiés maîtrise toutes les techniques de pose pour vous offrir des finitions parfaites et durables avec garantie décennale."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
