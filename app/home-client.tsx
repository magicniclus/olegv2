'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function HomeClient() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  
  const servicesData = [
    {
      title: "Électricité",
      subtitle: "Installation et rénovation électrique",
      content: "Installation complète et rénovation de systèmes électriques. Mise aux normes, tableaux électriques, éclairage et prises. Intervention sécurisée et conforme aux normes.",
      image: "/image-client/electricite.jpeg",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b"
    },
    {
      title: "Plâtrerie",
      subtitle: "Cloisons et finitions plâtre",
      content: "Pose de cloisons sèches, doublages, faux plafonds et finitions plâtrerie. Création et aménagement d'espaces avec isolation thermique et phonique.",
      image: "/image-client/placo.jpeg",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2"
    },
    {
      title: "Menuiserie",
      subtitle: "Travaux de menuiserie sur mesure",
      content: "Fabrication et pose de menuiseries intérieures et extérieures. Portes, fenêtres, placards, aménagements sur mesure. Travail du bois de qualité.",
      image: "/image-client/menuiserie.jpeg",
      gradientFrom: "#28a745",
      gradientTo: "#20c997"
    },
    {
      title: "Cuisine & Salle de Bain",
      subtitle: "Aménagement et rénovation",
      content: "Conception et réalisation de cuisines et salles de bain sur mesure. Plomberie, carrelage, mobilier. Projets clés en main pour vos espaces de vie.",
      image: "/image-client/salle de bain.jpeg",
      gradientFrom: "#6f42c1",
      gradientTo: "#e83e8c"
    },
    {
      title: "Revêtements de Sols",
      subtitle: "Pose et rénovation de sols",
      content: "Installation de tous types de revêtements : carrelage, parquet, lino, moquette. Préparation des supports et finitions soignées.",
      image: "/image-client/sol.jpeg",
      gradientFrom: "#fd7e14",
      gradientTo: "#ffc107"
    }
  ];

  const contactInfo = {
    address: "Île-de-France\nIntervention dans toute la région\nRayon d'intervention : 100 km",
    phone: "06 05 59 88 97",
    email: "contact@olege.fr",
    mapEmbedUrl: "https://maps.google.com/maps?q=Ile-de-France,France&t=&z=10&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      <ServicesSection id="services" cards={servicesData} />
      <ProjectGallery id="realisations" config={config.gallery} />
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection config={config.team} />
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de votre projet d'électricité, plâtrerie, menuiserie, cuisine, salle de bain ou sols en Île-de-France"
        contactInfo={contactInfo} 
      />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
