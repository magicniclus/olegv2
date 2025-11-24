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
      title: "Cloisons Sèches",
      subtitle: "Aménagement et séparation d'espaces",
      content: "Pose de cloisons sèches en plaques de plâtre pour créer, séparer ou réorganiser vos espaces intérieurs. Solutions sur mesure avec isolation phonique et thermique.",
      image: "/placo.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/cloisons-seches"
    },
    {
      title: "Doublages",
      subtitle: "Isolation et finition murale",
      content: "Doublage des murs pour améliorer l'isolation thermique et phonique. Pose de plaques de plâtre sur ossature métallique ou collage direct selon vos besoins.",
      image: "/plomberie.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/doublages"
    },
    {
      title: "Faux Plafonds",
      subtitle: "Plafonds suspendus modernes",
      content: "Installation de faux plafonds suspendus en plaques de plâtre. Intégration d'éclairage, amélioration de l'isolation et création de volumes sur mesure.",
      image: "/maison-work.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/faux-plafonds"
    },
    {
      title: "Finitions Plâtrerie",
      subtitle: "Finitions et enduits",
      content: "Réalisation de finitions parfaites : enduits, lissage, ponçage. Préparation des surfaces pour peinture ou revêtements avec un rendu professionnel.",
      image: "/mur.png",
      gradientFrom: "#fd7e14",
      gradientTo: "#ffc107",
      href: "/services/finitions-platrerie"
    }
  ];

  const contactInfo = {
    address: "Provence-Alpes-Côte d'Azur\nMarseille et environs\nRayon d'intervention : 80 km",
    phone: "06 59 76 49 95",
    email: "amiltonvazmarques@gmail.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=Marseille,France&t=&z=12&ie=UTF8&iwloc=&output=embed"
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
        subtitle="Parlons de votre projet de plâtrerie, cloisons sèches, doublages ou faux plafonds en Provence-Alpes-Côte d'Azur"
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
