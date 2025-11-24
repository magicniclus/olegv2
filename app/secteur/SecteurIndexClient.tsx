'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Star, Building2, Phone } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';

const sectors = [
  { name: 'Paris', slug: 'entrepreneur-batiment-paris' },
  { name: 'Clamart', slug: 'entrepreneur-batiment-clamart' },
  { name: 'Malakoff', slug: 'entrepreneur-batiment-malakoff' },
  { name: 'Montrouge', slug: 'entrepreneur-batiment-montrouge' },
  { name: 'Châtillon', slug: 'entrepreneur-batiment-chatillon' },
  { name: 'Vanves', slug: 'entrepreneur-batiment-vanves' },
  { name: 'Meudon', slug: 'entrepreneur-batiment-meudon' },
  { name: 'Boulogne-Billancourt', slug: 'entrepreneur-batiment-boulogne-billancourt' },
  { name: 'Sèvres', slug: 'entrepreneur-batiment-sevres' },
  { name: 'Chaville', slug: 'entrepreneur-batiment-chaville' },
  { name: 'Sceaux', slug: 'entrepreneur-batiment-sceaux' },
  { name: 'Levallois-Perret', slug: 'entrepreneur-batiment-levallois-perret' },
  { name: 'Chatou', slug: 'entrepreneur-batiment-chatou' },
  { name: 'Saint-Cloud', slug: 'entrepreneur-batiment-saint-cloud' },
  { name: 'Rueil-Malmaison', slug: 'entrepreneur-batiment-rueil-malmaison' },
  { name: 'La Défense', slug: 'entrepreneur-batiment-la-defense' },
  { name: 'Guyancourt', slug: 'entrepreneur-batiment-guyancourt' },
  { name: 'La Garenne-Colombes', slug: 'entrepreneur-batiment-la-garenne-colombes' },
  { name: 'Neuilly-sur-Seine', slug: 'entrepreneur-batiment-neuilly-sur-seine' },
  { name: 'Vélizy-Villacoublay', slug: 'entrepreneur-batiment-velizy-villacoublay' },
  { name: 'Antony', slug: 'entrepreneur-batiment-antony' },
  { name: 'Asnières-sur-Seine', slug: 'entrepreneur-batiment-asnieres-sur-seine' },
  { name: 'Fontenay-aux-Roses', slug: 'entrepreneur-batiment-fontenay-aux-roses' },
  { name: 'Châtenay-Malabry', slug: 'entrepreneur-batiment-chatenay-malabry' },
  { name: 'Suresnes', slug: 'entrepreneur-batiment-suresnes' },
  { name: 'Cachan', slug: 'entrepreneur-batiment-cachan' },
  { name: 'Arcueil', slug: 'entrepreneur-batiment-arcueil' }
];

export default function SecteurIndexClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Breadcrumb */}
            <div className="flex justify-center mb-6">
              <Breadcrumb 
                items={[
                  { label: 'Accueil', href: '/' },
                  { label: 'Secteurs', current: true }
                ]}
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos secteurs d'intervention ExFactor
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Découvrez nos prestations d'entrepreneur du bâtiment en Île-de-France : 
              électricité, placo peinture, menuiserie, cuisine & salle de bains, sols carrelage et rénovation globale.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-slate-300" />
                <span className="text-sm font-medium">Île-de-France</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">27 secteurs couverts</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Building2 className="h-5 w-5 text-green-300" />
                <span className="text-sm font-medium">Entrepreneur du bâtiment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre secteur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cliquez sur votre secteur pour découvrir nos prestations de plaquiste spécialisées dans votre zone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link
                  href={`/secteur/${sector.slug}`}
                  className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-slate-700 transition-colors">
                      {sector.name}
                    </h3>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Électricité, placo peinture, menuiserie, cuisine & SDB, sols, rénovation
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Votre secteur n'est pas listé ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nous intervenons sur toute l'Île-de-France pour vos travaux du bâtiment. 
            Contactez-nous pour connaître nos possibilités d'intervention dans votre secteur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              Nous contacter
            </Link>
            <Link
              href="tel:0605598897"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              06 05 59 88 97
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
