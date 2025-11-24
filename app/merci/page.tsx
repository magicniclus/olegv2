import { Metadata } from 'next';
import MerciClient from './merci-client';

// Métadonnées SEO pour la page merci
export const metadata: Metadata = {
  title: "Merci - OLEGE | Demande Reçue",
  description: "Merci pour votre demande de devis ! OLEGE vous recontactera rapidement pour votre projet d'électricité, peinture ou plâtrerie en Île-de-France.",
  keywords: "merci demande devis, confirmation contact OLEGE, demande reçue entrepreneur bâtiment, suivi projet Île-de-France",
  authors: [{ name: "OLEGE" }],
  creator: "OLEGE",
  publisher: "OLEGE",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciPage() {
  return <MerciClient />;
}
