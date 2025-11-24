import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

// Métadonnées SEO pour la page placo peinture
export const metadata: Metadata = {
  title: "Placo Peinture - ExFactor | Devis Gratuit Plaquiste Île-de-France",
  description: "Expert placo peinture en Île-de-France. ExFactor réalise vos cloisons, enduits et peinture intérieure/extérieure. Devis gratuit et personnalisé. Finitions soignées.",
  keywords: "placo peinture Île-de-France, plaquiste, cloisons sèches, enduit peinture, ExFactor, devis gratuit placo, artisan peintre, finitions",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Placo Peinture ExFactor - Devis Gratuit Plaquiste Île-de-France",
    description: "Expert placo peinture pour vos cloisons et finitions. Devis gratuit et personnalisé en Île-de-France.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Placo Peinture ExFactor - Devis Gratuit",
    description: "Expert placo peinture en Île-de-France. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PlacoPeinturePage() {
  const subServices = [
    {
      title: "Cloisons sèches",
      description: "Pose de cloisons en plaques de plâtre pour créer et séparer vos espaces intérieurs.",
      icon: "🧱"
    },
    {
      title: "Doublage isolation",
      description: "Doublage des murs pour améliorer l'isolation thermique et phonique de votre habitat.",
      icon: "🏠"
    },
    {
      title: "Faux plafonds",
      description: "Installation de plafonds suspendus avec intégration d'éclairage et isolation.",
      icon: "📐"
    },
    {
      title: "Enduits et finitions",
      description: "Réalisation d'enduits lisses et finitions parfaites pour vos surfaces murales.",
      icon: "🎨"
    },
    {
      title: "Peinture intérieure",
      description: "Application de peinture décorative et de protection pour tous vos espaces intérieurs.",
      icon: "🖌️"
    },
    {
      title: "Peinture extérieure",
      description: "Ravalement et peinture de façades pour protéger et embellir votre habitat.",
      icon: "🏡"
    }
  ];

  const advantages = [
    "Devis gratuit et personnalisé",
    "Finitions soignées et professionnelles",
    "Matériaux de qualité supérieure",
    "Garantie décennale sur tous les travaux",
    "Conseil couleurs et matériaux",
    "Respect des délais convenus",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Préparation minutieuse des supports",
    "Nettoyage du chantier inclus"
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
      title="Placo Peinture - ExFactor | Devis Gratuit Plaquiste Île-de-France"
      description="Expert placo peinture en Île-de-France. ExFactor réalise vos cloisons, enduits et peinture intérieure/extérieure. Devis gratuit et personnalisé."
      keywords={["placo peinture Île-de-France", "plaquiste", "cloisons sèches", "enduit peinture", "devis gratuit placo", "artisan peintre"]}
      serviceName="Placo Peinture"
      heroImage="/image-client/placo.jpeg"
      heroTitle="Placo Peinture en Île-de-France"
      heroSubtitle="Cloisons et finitions avec ExFactor"
      sector="Île-de-France"
      location="Paris et région parisienne"
      mainDescription="ExFactor, spécialiste placo peinture en Île-de-France, vous accompagne dans tous vos projets de cloisons et finitions. Notre équipe de 3 collaborateurs qualifiés maîtrise parfaitement les techniques de plâtrerie et peinture pour vous offrir des finitions parfaites avec garantie décennale."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
