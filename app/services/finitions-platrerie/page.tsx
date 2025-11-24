import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

// Métadonnées SEO pour la page Finitions Plâtrerie
export const metadata: Metadata = {
  title: "Finitions Plâtrerie - MARQUES VAZ PLACO | Devis Gratuit Enduits PACA",
  description: "Expert en finitions plâtrerie en Provence-Alpes-Côte d'Azur. MARQUES VAZ PLACO réalise enduits, lissage et préparation surfaces. Devis gratuit à Marseille et environs.",
  keywords: "finitions plâtrerie Marseille, enduits placo PACA, lissage murs Provence, préparation peinture Bouches-du-Rhône, devis gratuit finitions, plaquiste Marseille",
  authors: [{ name: "AMILTON VAZ" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  openGraph: {
    title: "Finitions Plâtrerie PACA - MARQUES VAZ PLACO | Devis Gratuit",
    description: "Spécialiste finitions plâtrerie en Provence-Alpes-Côte d'Azur. Enduits et préparation surfaces parfaites. Devis gratuit et personnalisé.",
    type: "website",
    locale: "fr_FR",
    siteName: "MARQUES VAZ PLACO - Plaquiste Professionnel",
  },
  twitter: {
    card: "summary",
    title: "Finitions Plâtrerie PACA - Devis Gratuit",
    description: "Expert finitions plâtrerie en Provence-Alpes-Côte d'Azur. Devis gratuit et personnalisé.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FinitionsPllatreriePrestationPage() {
  const contactInfo = {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Provence-Alpes-Côte d'Azur, Marseille et environs"
  };

  const subServices = [
    {
      title: "Enduits de finition",
      description: "Application d'enduits de lissage et de finition pour obtenir des surfaces parfaitement lisses et prêtes à peindre."
    },
    {
      title: "Lissage et ponçage",
      description: "Préparation minutieuse des surfaces avec lissage et ponçage pour un rendu professionnel impeccable."
    },
    {
      title: "Réparation de fissures",
      description: "Traitement et réparation des fissures dans les murs et plafonds avec techniques professionnelles durables."
    },
    {
      title: "Préparation pour peinture",
      description: "Préparation complète des surfaces pour application de peinture ou pose de revêtements muraux."
    },
    {
      title: "Enduits décoratifs",
      description: "Réalisation d'enduits à effets décoratifs (talochés, grattés, projetés) pour personnaliser vos intérieurs."
    },
    {
      title: "Ratissage et rebouchage",
      description: "Correction des défauts, rebouchage des trous et ratissage pour une surface parfaitement uniforme."
    }
  ];

  const advantages = [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Finitions parfaites garanties",
    "Surfaces prêtes à peindre",
    "Techniques professionnelles",
    "Matériaux de qualité certifiés",
    "Rendu impeccable et durable",
    "Conseil technique personnalisé",
    "Respect des délais convenus",
    "Garantie sur tous les travaux",
    "Suivi post-travaux"
  ];

  const serviceArea = [
    "Marseille",
    "Aix-en-Provence", 
    "Aubagne",
    "Martigues",
    "Salon-de-Provence",
    "Istres",
    "Arles",
    "Toulon",
    "Provence-Alpes-Côte d'Azur"
  ];

  return (
    <ServicePage
      title="Finitions Plâtrerie - MARQUES VAZ PLACO | Devis Gratuit Enduits PACA"
      description="Expert en finitions plâtrerie en Provence-Alpes-Côte d'Azur. MARQUES VAZ PLACO réalise enduits, lissage et préparation surfaces. Devis gratuit à Marseille et environs."
      keywords={["finitions plâtrerie Marseille", "enduits placo PACA", "lissage murs Provence", "préparation peinture Bouches-du-Rhône", "devis gratuit finitions", "plaquiste Marseille"]}
      serviceName="Finitions Plâtrerie"
      heroImage="/mur.png"
      heroTitle="Finitions Plâtrerie en Provence-Alpes-Côte d'Azur"
      heroSubtitle="Enduits et finitions parfaites avec MARQUES VAZ PLACO"
      sector="Provence-Alpes-Côte d'Azur"
      location="Marseille"
      mainDescription="MARQUES VAZ PLACO, expert en finitions plâtrerie depuis 2015, vous garantit des surfaces parfaites en Provence-Alpes-Côte d'Azur. Nous réalisons tous types d'enduits, lissage et préparation de surfaces pour obtenir un rendu professionnel impeccable, prêt pour vos peintures et revêtements muraux."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
