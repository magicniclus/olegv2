import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

// Métadonnées SEO pour la page cuisine salle de bains
export const metadata: Metadata = {
  title: "Cuisine & Salle de Bains - ExFactor | Devis Gratuit Rénovation Île-de-France",
  description: "Expert rénovation cuisine et salle de bains en Île-de-France. ExFactor réalise vos projets clés en main : plomberie, carrelage, mobilier. Devis gratuit et personnalisé.",
  keywords: "rénovation cuisine Île-de-France, salle de bains, plomberie, carrelage, ExFactor, devis gratuit cuisine, artisan salle de bain, aménagement",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Cuisine & Salle de Bains ExFactor - Devis Gratuit Île-de-France",
    description: "Expert rénovation cuisine et salle de bains. Projets clés en main. Devis gratuit et personnalisé en Île-de-France.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Cuisine & Salle de Bains ExFactor - Devis Gratuit",
    description: "Expert rénovation cuisine et salle de bains en Île-de-France. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CuisineSalleDeBainsPage() {
  const subServices = [
    {
      title: "Rénovation cuisine complète",
      description: "Conception et réalisation de cuisines sur mesure avec électroménager et finitions.",
      icon: "🍳"
    },
    {
      title: "Salle de bains clé en main",
      description: "Aménagement complet : douche, baignoire, vasque, WC et carrelage.",
      icon: "🛁"
    },
    {
      title: "Plomberie sanitaire",
      description: "Installation et rénovation de tous équipements sanitaires et réseaux.",
      icon: "🔧"
    },
    {
      title: "Carrelage et faïence",
      description: "Pose de carrelage sol et mural, faïence décorative et étanchéité.",
      icon: "🏺"
    },
    {
      title: "Mobilier sur mesure",
      description: "Conception de meubles de cuisine et salle de bains adaptés à vos besoins.",
      icon: "🪑"
    },
    {
      title: "Électricité spécialisée",
      description: "Installation électrique adaptée aux pièces humides selon normes NF.",
      icon: "💡"
    }
  ];

  const advantages = [
    "Devis gratuit et personnalisé",
    "Projet clé en main de A à Z",
    "Coordination de tous les corps de métier",
    "Garantie décennale sur tous les travaux",
    "Matériaux et équipements de qualité",
    "Respect des délais convenus",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Conseil design et aménagement",
    "Finitions soignées et durables"
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
      title="Cuisine & Salle de Bains - ExFactor | Devis Gratuit Rénovation Île-de-France"
      description="Expert rénovation cuisine et salle de bains en Île-de-France. ExFactor réalise vos projets clés en main : plomberie, carrelage, mobilier. Devis gratuit et personnalisé."
      keywords={["rénovation cuisine Île-de-France", "salle de bains", "plomberie", "carrelage", "devis gratuit cuisine", "artisan salle de bain"]}
      serviceName="Cuisine & Salle de Bains"
      heroImage="/image-client/salle de bain.jpeg"
      heroTitle="Cuisine & Salle de Bains en Île-de-France"
      heroSubtitle="Rénovation complète avec ExFactor"
      sector="Île-de-France"
      location="Paris et région parisienne"
      mainDescription="ExFactor, spécialiste de la rénovation de cuisines et salles de bains en Île-de-France, vous accompagne dans vos projets clés en main. Notre équipe de 3 collaborateurs qualifiés coordonne tous les corps de métier pour vous offrir des espaces fonctionnels et esthétiques avec garantie décennale."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
