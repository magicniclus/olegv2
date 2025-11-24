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
      subtitle: "Installation & Rénovation",
      content: "Installation électrique complète, rénovation de tableaux électriques, mise aux normes et dépannage avec garantie décennale.",
      image: "/image-client/electricite.jpeg",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b"
    },
    {
      title: "Placo Peinture",
      subtitle: "Intérieur & Extérieur",
      content: "Travaux de plâtrerie et peinture intérieure et extérieure, préparation des supports, finitions soignées et conseils couleurs.",
      image: "/image-client/placo.jpeg",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2"
    },
    {
      title: "Menuiserie",
      subtitle: "Bois & Aménagement",
      content: "Pose de portes, fenêtres, placards sur mesure, parquet et tous travaux de menuiserie intérieure et extérieure.",
      image: "/image-client/menuiserie.jpeg",
      gradientFrom: "#28a745",
      gradientTo: "#20c997"
    },
    {
      title: "Cuisine & Salle de bains",
      subtitle: "Conception & Rénovation",
      content: "Rénovation complète de cuisines et salles de bains, pose de meubles, électroménager, plomberie, carrelage et sanitaires avec finitions soignées.",
      image: "/image-client/salle de bain.jpeg",
      gradientFrom: "#6f42c1",
      gradientTo: "#e83e8c"
    },
    {
      title: "Sols Carrelage",
      subtitle: "Revêtements & Finitions",
      content: "Pose de carrelage, parquet, vinyle, ragréage et préparation des supports pour tous types de revêtements de sol.",
      image: "/image-client/sol.jpeg",
      gradientFrom: "#fd7e14",
      gradientTo: "#ffc107"
    },
    {
      title: "Rénovation globale",
      subtitle: "Projets Complets",
      content: "Rénovation complète d'appartements et maisons, coordination de tous les corps de métier pour un projet clé en main avec garantie décennale.",
      image: "/image-client/chantier/dix.jpeg",
      gradientFrom: "#17a2b8",
      gradientTo: "#6c757d"
    }
  ];

  const contactInfo = {
    address: "Île-de-France\nIntervention dans toute la région\nRayon d'intervention : 100 km",
    phone: "06 05 59 88 97",
    email: "cxfactor.fr@gmail.com",
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
        subtitle="Parlons de votre projet d'électricité, placo peinture, menuiserie, cuisine & salle de bains, rénovation globale ou sols carrelage en Île-de-France"
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
