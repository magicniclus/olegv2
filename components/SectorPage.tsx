'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { submitFormToFirebase, validateFormData, FormData } from '@/lib/firebase-service';
import FormLoader from '@/components/FormLoader';
import { useRouter } from 'next/navigation';

interface CityData {
  name: string;
  postalCode: string;
  department: string;
  region: string;
  description: string;
  landmarks: string[];
  neighborhoods: string[];
}

interface Service {
  title: string;
  description: string;
  keywords: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface SectorPageProps {
  cityData: CityData;
  services: Service[];
  contactInfo: ContactInfo;
}

export default function SectorPage({ cityData, services, contactInfo }: SectorPageProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    motif: `Demande de devis pour travaux à ${cityData.name}`,
    rgpd: false,
    source: 'hero'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loaderStage, setLoaderStage] = useState<'sending' | 'success' | 'redirecting'>('sending');
  const [showLoader, setShowLoader] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const isFormValid = () => {
    return validateFormData(formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid() || isSubmitting) return;

    setIsSubmitting(true);
    setShowLoader(true);
    setLoaderStage('sending');

    try {
      const docId = await submitFormToFirebase(formData);
      console.log('Form submitted successfully:', docId);
      
      setLoaderStage('success');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setLoaderStage('redirecting');
      await new Promise(resolve => setTimeout(resolve, 800));
      
      router.push('/merci');
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowLoader(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Entrepreneur Bâtiment à {cityData.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              ExFactor, votre entrepreneur du bâtiment de confiance à {cityData.name} ({cityData.postalCode}). 
              Électricité, placo peinture, menuiserie, rénovation globale avec garantie décennale.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <motion.div 
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">{cityData.department}</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Devis Gratuit</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Garantie Décennale</span>
              </motion.div>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200 group"
              >
                <Phone className="h-5 w-5 mr-2" />
                Appeler maintenant
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                Devis gratuit
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services à {cityData.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ExFactor intervient dans tous les quartiers de {cityData.name} pour vos travaux du bâtiment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="text-sm text-slate-600">
                  <strong>Spécialités :</strong> {service.keywords}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About City Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir ExFactor à {cityData.name} ?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>{cityData.description}</p>
                <p>
                  Notre équipe de 3 collaborateurs qualifiés intervient rapidement dans tous les quartiers 
                  de {cityData.name} pour vos projets de rénovation, avec une garantie décennale sur tous nos travaux.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nos avantages :</h3>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Devis gratuit et personnalisé",
                    "Garantie décennale",
                    "Équipe de 3 collaborateurs qualifiés",
                    `Intervention rapide à ${cityData.name}`,
                    "Matériaux de qualité",
                    "Finitions soignées"
                  ].map((advantage, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{advantage}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quartiers d'intervention à {cityData.name}
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-8">
                {cityData.neighborhoods.map((neighborhood, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-3 rounded-lg border hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <MapPin className="h-4 w-4 inline mr-2 text-slate-500" />
                    {neighborhood}
                  </motion.div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-slate-600" />
                  Contact
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-slate-500" />
                    <strong>Téléphone :</strong> 
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="ml-2 text-slate-700 hover:text-slate-900 font-medium">
                      {contactInfo.phone}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-slate-500" />
                    <strong>Email :</strong> 
                    <a href={`mailto:${contactInfo.email}`} className="ml-2 text-slate-700 hover:text-slate-900 font-medium">
                      {contactInfo.email}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                    <strong>Zone :</strong> 
                    <span className="ml-2">{contactInfo.address}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Demandez votre devis gratuit
            </h2>
            <p className="text-xl text-gray-600">
              Contactez-nous pour obtenir un devis personnalisé pour vos travaux à {cityData.name}
            </p>
          </motion.div>

          <motion.div
            id="contact-form"
            className="bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom & Prénom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Motif */}
              <div>
                <label htmlFor="motif" className="block text-sm font-medium text-gray-700 mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="motif"
                  name="motif"
                  rows={4}
                  value={formData.motif}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                  placeholder={`Décrivez vos besoins pour vos travaux à ${cityData.name}...`}
                  required
                />
              </div>

              {/* RGPD */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  name="rgpd"
                  checked={formData.rgpd}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-slate-500 focus:ring-slate-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="rgpd" className="text-sm text-gray-600">
                  J'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande. *
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`w-full py-4 text-white font-semibold rounded-lg transition-all duration-300 ${
                  isFormValid() && !isSubmitting
                    ? 'bg-slate-700 hover:bg-slate-800 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Envoyer ma demande de devis
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'un entrepreneur du bâtiment à {cityData.name} ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contactez ExFactor pour un devis gratuit et personnalisé. Intervention rapide garantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 mr-2" />
                {contactInfo.phone}
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors duration-200 group"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Loader */}
      <FormLoader isVisible={showLoader} stage={loaderStage} />
    </div>
  );
}
