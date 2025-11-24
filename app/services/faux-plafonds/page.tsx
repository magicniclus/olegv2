import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

// Métadonnées SEO pour la page Faux Plafonds
export const metadata: Metadata = {
  title: "Faux Plafonds - MARQUES VAZ PLACO | Devis Gratuit Plafonds PACA",
  description: "Expert en faux plafonds en Provence-Alpes-Côte d'Azur. MARQUES VAZ PLACO installe vos plafonds suspendus avec intégration d'éclairage. Devis gratuit à Marseille et environs.",
  keywords: "faux plafonds Marseille, plafonds suspendus PACA, plafond placo Provence, éclairage intégré Bouches-du-Rhône, devis gratuit plafonds, plaquiste Marseille",
  authors: [{ name: "AMILTON VAZ" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  openGraph: {
    title: "Faux Plafonds PACA - MARQUES VAZ PLACO | Devis Gratuit",
    description: "Spécialiste faux plafonds en Provence-Alpes-Côte d'Azur. Plafonds suspendus modernes avec éclairage intégré. Devis gratuit et personnalisé.",
    type: "website",
    locale: "fr_FR",
    siteName: "MARQUES VAZ PLACO - Plaquiste Professionnel",
  },
  twitter: {
    card: "summary",
    title: "Faux Plafonds PACA - Devis Gratuit",
    description: "Expert faux plafonds en Provence-Alpes-Côte d'Azur. Devis gratuit et personnalisé.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FauxPlafondsPrestationPage() {
  const contactInfo = {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Provence-Alpes-Côte d'Azur, Marseille et environs"
  };

  const subServices = [
    {
      title: "Plafonds suspendus",
      description: "Installation de faux plafonds sur ossature métallique avec plaques de plâtre pour masquer les défauts et créer des volumes."
    },
    {
      title: "Plafonds décoratifs",
      description: "Réalisation de plafonds design avec formes géométriques, courbes et éléments décoratifs personnalisés."
    },
    {
      title: "Intégration d'éclairage",
      description: "Incorporation de spots LED, éclairage indirect, bandeaux lumineux dans la structure du faux plafond."
    },
    {
      title: "Plafonds acoustiques",
      description: "Solutions avec isolation phonique pour réduire les bruits d'impact et améliorer le confort acoustique."
    },
    {
      title: "Plafonds techniques",
      description: "Intégration de systèmes de ventilation, climatisation et passages de câbles avec accès technique."
    },
    {
      title: "Finitions et peinture",
      description: "Réalisation des finitions parfaites avec enduits, lissage et préparation pour peinture ou revêtements."
    }
  ];

  const advantages = [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Design moderne et personnalisé",
    "Intégration d'éclairage LED",
    "Amélioration acoustique",
    "Masquage des défauts existants",
    "Création de volumes sur mesure",
    "Matériaux de qualité certifiés",
    "Pose professionnelle et soignée",
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
      title="Faux Plafonds - MARQUES VAZ PLACO | Devis Gratuit Plafonds PACA"
      description="Expert en faux plafonds en Provence-Alpes-Côte d'Azur. MARQUES VAZ PLACO installe vos plafonds suspendus avec intégration d'éclairage. Devis gratuit à Marseille et environs."
      keywords={["faux plafonds Marseille", "plafonds suspendus PACA", "plafond placo Provence", "éclairage intégré Bouches-du-Rhône", "devis gratuit plafonds", "plaquiste Marseille"]}
      serviceName="Faux Plafonds"
      heroImage="/maison-work.png"
      heroTitle="Faux Plafonds en Provence-Alpes-Côte d'Azur"
      heroSubtitle="Plafonds suspendus modernes avec MARQUES VAZ PLACO"
      sector="Provence-Alpes-Côte d'Azur"
      location="Marseille"
      mainDescription="MARQUES VAZ PLACO, spécialiste des faux plafonds depuis 2015, transforme vos intérieurs en Provence-Alpes-Côte d'Azur. Nous installons des plafonds suspendus en plaques de plâtre avec intégration d'éclairage, amélioration de l'isolation et création de volumes sur mesure pour moderniser et embellir vos espaces."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
