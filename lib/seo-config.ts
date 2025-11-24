import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "ExFactor - Entrepreneur du Bâtiment en Île-de-France | Électricité, Placo, Menuiserie",
  description: "ExFactor, entrepreneur du bâtiment spécialisé en électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage et rénovation globale. Devis gratuit en Île-de-France.",
  keywords: [
    "entrepreneur bâtiment Île-de-France",
    "électricité Paris",
    "placo peinture Clamart",
    "menuiserie 92140",
    "rénovation cuisine salle de bain",
    "sols carrelage",
    "rénovation globale",
    "travaux second œuvre",
    "ExFactor",
    "devis gratuit",
    "garantie décennale",
    "artisan qualifié",
    "travaux électricité",
    "plomberie",
    "Clamart"
  ],
  author: "ExFactor",
  siteUrl: "https://exfactor.fr",
  siteName: "ExFactor - Entrepreneur du Bâtiment",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "ExFactor",
  "legalName": "EXFACTOR",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "ROMANIUC OLEG"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "56 RUE de la Noise",
    "addressLocality": "Clamart",
    "postalCode": "92140",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33605598897",
    "contactType": "customer service",
    "email": "exfactor.fr@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Île-de-France"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Hauts-de-Seine"
    },
    {
      "@type": "City",
      "name": "Clamart"
    }
  ],
  "serviceType": [
    "Électricité",
    "Placo Peinture", 
    "Menuiserie",
    "Cuisine & Salle de bains",
    "Sols Carrelage",
    "Rénovation globale",
    "Travaux de second œuvre"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-12:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de construction et rénovation",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Électricité",
          "description": "Installation électrique, mise aux normes, dépannage électrique"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Placo Peinture",
          "description": "Travaux de plâtrerie et peinture intérieure/extérieure, cloisons sèches"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Menuiserie",
          "description": "Pose de portes, fenêtres, placards sur mesure, parquet"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Cuisine & Salle de bains",
          "description": "Rénovation complète de cuisines et salles de bains, plomberie, carrelage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Sols Carrelage",
          "description": "Pose de carrelage, parquet, vinyle, ragréage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Rénovation Globale",
          "description": "Rénovation complète de maisons et appartements, coordination tous corps de métier"
        }
      }
    ]
  }
};
