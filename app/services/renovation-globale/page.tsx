import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

// Métadonnées SEO pour la page rénovation globale
export const metadata: Metadata = {
  title: "Rénovation Globale - ExFactor | Devis Gratuit Rénovation Île-de-France",
  description: "Expert rénovation globale en Île-de-France. ExFactor coordonne tous vos travaux : électricité, plomberie, carrelage, peinture. Devis gratuit et personnalisé. Projet clé en main.",
  keywords: "rénovation globale Île-de-France, rénovation appartement, travaux complets, ExFactor, devis gratuit rénovation, entrepreneur bâtiment, projet clé en main",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  openGraph: {
    title: "Rénovation Globale ExFactor - Devis Gratuit Île-de-France",
    description: "Expert rénovation globale. Coordination de tous les corps de métier. Devis gratuit et personnalisé en Île-de-France.",
    type: "website",
    locale: "fr_FR",
    siteName: "ExFactor - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Rénovation Globale ExFactor - Devis Gratuit",
    description: "Expert rénovation globale en Île-de-France. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RenovationGlobalePage() {
  const subServices = [
    {
      title: "Rénovation appartement",
      description: "Rénovation complète d'appartements avec coordination de tous les corps de métier.",
      icon: "🏠"
    },
    {
      title: "Rénovation maison",
      description: "Transformation complète de maisons individuelles selon vos besoins et budget.",
      icon: "🏡"
    },
    {
      title: "Gros œuvre",
      description: "Démolition, création d'ouvertures, modification de cloisons et structure.",
      icon: "🔨"
    },
    {
      title: "Second œuvre",
      description: "Électricité, plomberie, chauffage, isolation et tous corps d'état techniques.",
      icon: "⚡"
    },
    {
      title: "Finitions",
      description: "Peinture, carrelage, parquet, menuiseries et tous travaux de finition.",
      icon: "🎨"
    },
    {
      title: "Coordination",
      description: "Gestion complète du projet, planning et coordination des différents artisans.",
      icon: "📋"
    }
  ];

  const advantages = [
    "Devis gratuit et personnalisé",
    "Projet clé en main de A à Z",
    "Coordination de tous les corps de métier",
    "Garantie décennale sur tous les travaux",
    "Un seul interlocuteur pour tout le projet",
    "Respect des délais convenus",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Suivi personnalisé du chantier",
    "Finitions soignées et garanties"
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
      title="Rénovation Globale - ExFactor | Devis Gratuit Rénovation Île-de-France"
      description="Expert rénovation globale en Île-de-France. ExFactor coordonne tous vos travaux : électricité, plomberie, carrelage, peinture. Devis gratuit et personnalisé."
      keywords={["rénovation globale Île-de-France", "rénovation appartement", "travaux complets", "devis gratuit rénovation", "entrepreneur bâtiment"]}
      serviceName="Rénovation Globale"
      heroImage="/image-client/chantier/dix.jpeg"
      heroTitle="Rénovation Globale en Île-de-France"
      heroSubtitle="Projets complets avec ExFactor"
      sector="Île-de-France"
      location="Paris et région parisienne"
      mainDescription="ExFactor, entrepreneur du bâtiment en Île-de-France, vous accompagne dans vos projets de rénovation globale. Notre équipe de 3 collaborateurs qualifiés coordonne tous les corps de métier pour vous offrir un projet clé en main avec garantie décennale. Un seul interlocuteur pour toute votre rénovation."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
