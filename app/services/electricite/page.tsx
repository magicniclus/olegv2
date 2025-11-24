import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

// Métadonnées SEO pour la page électricité
export const metadata: Metadata = {
  title: "Électricité - ExFactor | Devis Gratuit Électricien Île-de-France",
  description: "Expert électricien en Île-de-France. ExFactor réalise vos installations électriques, mise aux normes et dépannage. Devis gratuit et personnalisé. Intervention rapide.",
  keywords: "électricien Île-de-France, installation électrique, mise aux normes, dépannage électrique, ExFactor, devis gratuit électricité, artisan électricien, tableau électrique",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Électricité ExFactor - Devis Gratuit Électricien Île-de-France",
    description: "Expert électricien pour vos installations et dépannages. Devis gratuit et personnalisé en Île-de-France.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Électricité ExFactor - Devis Gratuit",
    description: "Expert électricien en Île-de-France. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ElectricitePage() {
  const subServices = [
    {
      title: "Installation électrique complète",
      description: "Mise en place de circuits électriques, tableaux, prises et éclairage selon les normes NF C 15-100.",
      icon: "⚡"
    },
    {
      title: "Mise aux normes",
      description: "Diagnostic et mise en conformité de votre installation électrique pour votre sécurité.",
      icon: "🔧"
    },
    {
      title: "Dépannage électrique",
      description: "Intervention rapide pour résoudre vos pannes électriques et dysfonctionnements.",
      icon: "🚨"
    },
    {
      title: "Tableau électrique",
      description: "Installation et rénovation de tableaux électriques avec disjoncteurs et protection.",
      icon: "📋"
    },
    {
      title: "Éclairage et prises",
      description: "Pose d'éclairage LED, spots, prises électriques et interrupteurs design.",
      icon: "💡"
    },
    {
      title: "Domotique",
      description: "Installation de systèmes domotiques pour automatiser votre habitat.",
      icon: "🏠"
    }
  ];

  const advantages = [
    "Devis gratuit et personnalisé",
    "Intervention sécurisée et conforme aux normes",
    "Électricien qualifié et expérimenté",
    "Garantie décennale sur tous les travaux",
    "Matériel de qualité professionnelle",
    "Respect des délais convenus",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Conseil technique personnalisé",
    "Service après-vente assuré"
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
      title="Électricité - ExFactor | Devis Gratuit Électricien Île-de-France"
      description="Expert électricien en Île-de-France. ExFactor réalise vos installations électriques, mise aux normes et dépannage. Devis gratuit et personnalisé."
      keywords={["électricien Île-de-France", "installation électrique", "mise aux normes", "dépannage électrique", "devis gratuit électricité", "artisan électricien"]}
      serviceName="Électricité"
      heroImage="/image-client/electricite.jpeg"
      heroTitle="Électricité en Île-de-France"
      heroSubtitle="Installation & rénovation électrique avec ExFactor"
      sector="Île-de-France"
      location="Paris et région parisienne"
      mainDescription="ExFactor, votre électricien de confiance en Île-de-France, vous accompagne dans tous vos projets électriques. Installation complète, mise aux normes, dépannage : notre équipe de 3 collaborateurs qualifiés intervient avec garantie décennale. Nous privilégions la qualité et la sécurité pour tous vos travaux électriques."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
