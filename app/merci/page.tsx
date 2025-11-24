import { Metadata } from 'next';
import MerciClient from './merci-client';

// Métadonnées SEO pour la page merci
export const metadata: Metadata = {
  title: "Merci - ExFactor | Demande Reçue",
  description: "Merci pour votre demande de devis ! ExFactor vous recontactera rapidement pour votre projet d'électricité, peinture ou plâtrerie en Île-de-France.",
  keywords: "merci demande devis, confirmation contact ExFactor, demande reçue entrepreneur bâtiment, suivi projet Île-de-France",
  authors: [{ name: "ExFactor" }],
  creator: "ExFactor",
  publisher: "ExFactor",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciPage() {
  return <MerciClient />;
}
