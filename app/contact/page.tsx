import { Metadata } from 'next';
import ContactClient from './contact-client';

// Métadonnées SEO pour la page contact
export const metadata: Metadata = {
  title: "Contact - OLEGE | Devis Gratuit Entrepreneur Bâtiment Île-de-France",
  description: "Contactez OLEGE pour votre projet d'électricité, peinture ou plâtrerie en Île-de-France. Devis gratuit et personnalisé. Intervention rapide dans toute la région.",
  keywords: "contact OLEGE, devis gratuit entrepreneur bâtiment, contact électricien Île-de-France, devis peinture, contact artisan, électricité contact",
  authors: [{ name: "OLEGE" }],
  creator: "OLEGE",
  publisher: "OLEGE",
  openGraph: {
    title: "Contact OLEGE - Devis Gratuit Entrepreneur Bâtiment Île-de-France",
    description: "Contactez notre entrepreneur du bâtiment pour votre projet. Devis gratuit et personnalisé en Île-de-France.",
    type: "website",
    locale: "fr_FR",
    siteName: "OLEGE - Entrepreneur du bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Contact OLEGE - Devis Gratuit",
    description: "Contactez notre entrepreneur du bâtiment pour votre projet en Île-de-France.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}