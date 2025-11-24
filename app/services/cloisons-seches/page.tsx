import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

// Métadonnées SEO pour la page Cloisons Sèches
export const metadata: Metadata = {
  title: "Cloisons Sèches - MARQUES VAZ PLACO | Devis Gratuit Plaquiste PACA",
  description: "Expert en cloisons sèches en Provence-Alpes-Côte d'Azur. MARQUES VAZ PLACO réalise vos cloisons en plaques de plâtre. Devis gratuit et personnalisé à Marseille et environs.",
  keywords: "cloisons sèches Marseille, placo cloisons PACA, séparation espaces Provence, aménagement intérieur Bouches-du-Rhône, devis gratuit cloisons, plaquiste Marseille",
  authors: [{ name: "AMILTON VAZ" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  openGraph: {
    title: "Cloisons Sèches PACA - MARQUES VAZ PLACO | Devis Gratuit",
    description: "Spécialiste cloisons sèches en Provence-Alpes-Côte d'Azur. Aménagement et séparation d'espaces. Devis gratuit et personnalisé.",
    type: "website",
    locale: "fr_FR",
    siteName: "MARQUES VAZ PLACO - Plaquiste Professionnel",
  },
  twitter: {
    card: "summary",
    title: "Cloisons Sèches PACA - Devis Gratuit",
    description: "Expert cloisons sèches en Provence-Alpes-Côte d'Azur. Devis gratuit et personnalisé.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CloisonsSechesPrestationPage() {
  const contactInfo = {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Provence-Alpes-Côte d'Azur, Marseille et environs"
  };

  const subServices = [
    {
      title: "Cloisons de distribution",
      description: "Création de nouvelles pièces et séparation d'espaces avec ossature métallique et plaques de plâtre standard ou hydrofuge."
    },
    {
      title: "Cloisons acoustiques",
      description: "Cloisons avec isolation phonique renforcée pour réduire les nuisances sonores entre les pièces."
    },
    {
      title: "Cloisons techniques",
      description: "Intégration de gaines électriques, plomberie et ventilation dans les cloisons avec accès technique."
    },
    {
      title: "Cloisons courbes",
      description: "Réalisation de cloisons cintrées et formes spéciales pour des aménagements design et originaux."
    },
    {
      title: "Cloisons amovibles",
      description: "Solutions modulables permettant de modifier facilement la configuration des espaces selon vos besoins."
    },
    {
      title: "Finitions et peinture",
      description: "Enduits, lissage et préparation des surfaces pour peinture ou pose de revêtements muraux."
    }
  ];

  const advantages = [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Pose professionnelle et soignée",
    "Matériaux de qualité certifiés",
    "Isolation phonique et thermique",
    "Respect des délais convenus",
    "Garantie sur tous les travaux",
    "Conseil personnalisé et technique",
    "Finitions parfaites",
    "Intervention rapide",
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
      title="Cloisons Sèches - MARQUES VAZ PLACO | Devis Gratuit Plaquiste PACA"
      description="Expert en cloisons sèches en Provence-Alpes-Côte d'Azur. MARQUES VAZ PLACO réalise vos cloisons en plaques de plâtre. Devis gratuit et personnalisé à Marseille et environs."
      keywords={["cloisons sèches Marseille", "placo cloisons PACA", "séparation espaces Provence", "aménagement intérieur Bouches-du-Rhône", "devis gratuit cloisons", "plaquiste Marseille"]}
      serviceName="Cloisons Sèches"
      heroImage="/placo.png"
      heroTitle="Cloisons Sèches en Provence-Alpes-Côte d'Azur"
      heroSubtitle="Aménagement et séparation d'espaces avec MARQUES VAZ PLACO"
      sector="Provence-Alpes-Côte d'Azur"
      location="Marseille"
      mainDescription="MARQUES VAZ PLACO, votre spécialiste en cloisons sèches depuis 2015, vous accompagne dans tous vos projets d'aménagement intérieur en Provence-Alpes-Côte d'Azur. Nous réalisons des cloisons en plaques de plâtre sur ossature métallique pour créer, séparer ou réorganiser vos espaces intérieurs selon vos besoins et votre budget."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
