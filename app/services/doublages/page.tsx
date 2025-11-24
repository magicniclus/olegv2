import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

// Métadonnées SEO pour la page Doublages
export const metadata: Metadata = {
  title: "Doublages - MARQUES VAZ PLACO | Devis Gratuit Isolation PACA",
  description: "Expert en doublages et isolation en Provence-Alpes-Côte d'Azur. MARQUES VAZ PLACO améliore l'isolation thermique et phonique de vos murs. Devis gratuit à Marseille et environs.",
  keywords: "doublage murs Marseille, isolation thermique PACA, isolation phonique Provence, placo doublage Bouches-du-Rhône, devis gratuit isolation, plaquiste Marseille",
  authors: [{ name: "AMILTON VAZ" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  openGraph: {
    title: "Doublages et Isolation PACA - MARQUES VAZ PLACO | Devis Gratuit",
    description: "Spécialiste doublages et isolation en Provence-Alpes-Côte d'Azur. Amélioration thermique et phonique. Devis gratuit et personnalisé.",
    type: "website",
    locale: "fr_FR",
    siteName: "MARQUES VAZ PLACO - Plaquiste Professionnel",
  },
  twitter: {
    card: "summary",
    title: "Doublages et Isolation PACA - Devis Gratuit",
    description: "Expert doublages et isolation en Provence-Alpes-Côte d'Azur. Devis gratuit et personnalisé.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DoublagesPrestationPage() {
  const contactInfo = {
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    address: "Provence-Alpes-Côte d'Azur, Marseille et environs"
  };

  const subServices = [
    {
      title: "Doublage collé",
      description: "Pose de complexes isolants collés directement sur les murs existants pour une isolation thermique efficace."
    },
    {
      title: "Doublage sur ossature",
      description: "Installation de plaques de plâtre sur ossature métallique avec isolant pour une isolation renforcée."
    },
    {
      title: "Isolation thermique",
      description: "Amélioration des performances énergétiques avec des isolants adaptés (laine de verre, polystyrène, etc.)."
    },
    {
      title: "Isolation phonique",
      description: "Réduction des nuisances sonores avec des matériaux isolants acoustiques spécialisés."
    },
    {
      title: "Doublage hydrofuge",
      description: "Solutions spéciales pour pièces humides (salles de bain, cuisines) avec plaques résistantes à l'humidité."
    },
    {
      title: "Finitions et enduits",
      description: "Réalisation des finitions parfaites avec enduits et préparation pour peinture ou revêtements."
    }
  ];

  const advantages = [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Amélioration thermique garantie",
    "Réduction des nuisances sonores",
    "Matériaux isolants certifiés",
    "Pose professionnelle et soignée",
    "Respect des normes RT2012",
    "Conseil technique personnalisé",
    "Garantie sur tous les travaux",
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
      title="Doublages - MARQUES VAZ PLACO | Devis Gratuit Isolation PACA"
      description="Expert en doublages et isolation en Provence-Alpes-Côte d'Azur. MARQUES VAZ PLACO améliore l'isolation thermique et phonique de vos murs. Devis gratuit à Marseille et environs."
      keywords={["doublage murs Marseille", "isolation thermique PACA", "isolation phonique Provence", "placo doublage Bouches-du-Rhône", "devis gratuit isolation", "plaquiste Marseille"]}
      serviceName="Doublages"
      heroImage="/plomberie.png"
      heroTitle="Doublages et Isolation en Provence-Alpes-Côte d'Azur"
      heroSubtitle="Amélioration thermique et phonique avec MARQUES VAZ PLACO"
      sector="Provence-Alpes-Côte d'Azur"
      location="Marseille"
      mainDescription="MARQUES VAZ PLACO, expert en doublages depuis 2015, améliore l'isolation thermique et phonique de vos murs en Provence-Alpes-Côte d'Azur. Nous proposons des solutions d'isolation adaptées à vos besoins : doublage collé, sur ossature métallique, avec isolants performants pour optimiser votre confort et réduire vos factures énergétiques."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
