import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

// Métadonnées SEO pour la page menuiserie
export const metadata: Metadata = {
  title: "Menuiserie - OLEGE | Devis Gratuit Menuisier Île-de-France",
  description: "Expert menuisier en Île-de-France. OLEGE réalise vos portes, fenêtres, placards et aménagements sur mesure. Devis gratuit et personnalisé. Travail du bois de qualité.",
  keywords: "menuisier Île-de-France, menuiserie sur mesure, portes fenêtres, placards, OLEGE, devis gratuit menuiserie, artisan menuisier, aménagement bois",
  authors: [{ name: "OLEGE" }],
  creator: "OLEGE",
  publisher: "OLEGE",
  openGraph: {
    title: "Menuiserie OLEGE - Devis Gratuit Menuisier Île-de-France",
    description: "Expert menuisier pour vos aménagements sur mesure. Devis gratuit et personnalisé en Île-de-France.",
    type: "website",
    locale: "fr_FR",
    siteName: "OLEGE - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Menuiserie OLEGE - Devis Gratuit",
    description: "Expert menuisier en Île-de-France. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MenuiseriePage() {
  const subServices = [
    {
      title: "Portes intérieures",
      description: "Fabrication et pose de portes sur mesure : battantes, coulissantes, pliantes.",
      icon: "🚪"
    },
    {
      title: "Fenêtres et volets",
      description: "Installation de fenêtres bois, PVC, alu et volets pour optimiser l'isolation.",
      icon: "🪟"
    },
    {
      title: "Placards sur mesure",
      description: "Conception et réalisation de placards, dressings et rangements personnalisés.",
      icon: "🗄️"
    },
    {
      title: "Parquet et sols",
      description: "Pose de parquet massif, contrecollé et stratifié avec finitions soignées.",
      icon: "🪵"
    },
    {
      title: "Escaliers bois",
      description: "Fabrication et installation d'escaliers droits, tournants et sur mesure.",
      icon: "🪜"
    },
    {
      title: "Aménagements",
      description: "Bibliothèques, étagères, meubles intégrés et tous aménagements bois.",
      icon: "📚"
    }
  ];

  const advantages = [
    "Devis gratuit et personnalisé",
    "Travail du bois de qualité supérieure",
    "Aménagements sur mesure",
    "Garantie décennale sur tous les travaux",
    "Conseils techniques et esthétiques",
    "Respect des délais convenus",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Finitions soignées et durables",
    "Matériaux certifiés et écologiques"
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
      title="Menuiserie - OLEGE | Devis Gratuit Menuisier Île-de-France"
      description="Expert menuisier en Île-de-France. OLEGE réalise vos portes, fenêtres, placards et aménagements sur mesure. Devis gratuit et personnalisé."
      keywords={["menuisier Île-de-France", "menuiserie sur mesure", "portes fenêtres", "placards", "devis gratuit menuiserie", "artisan menuisier"]}
      serviceName="Menuiserie"
      heroImage="/image-client/menuiserie.jpeg"
      heroTitle="Menuiserie en Île-de-France"
      heroSubtitle="Aménagements bois sur mesure avec OLEGE"
      sector="Île-de-France"
      location="Paris et région parisienne"
      mainDescription="OLEGE, artisan menuisier en Île-de-France, vous accompagne dans tous vos projets d'aménagement bois. Portes, fenêtres, placards sur mesure : notre équipe de 3 collaborateurs qualifiés allie savoir-faire traditionnel et techniques modernes pour vous offrir des réalisations durables avec garantie décennale."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
