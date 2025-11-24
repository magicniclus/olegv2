const fs = require('fs');
const path = require('path');

// Liste des secteurs à convertir
const sectors = [
  'entrepreneur-batiment-antony',
  'entrepreneur-batiment-arcueil',
  'entrepreneur-batiment-asnieres-sur-seine',
  'entrepreneur-batiment-boulogne-billancourt',
  'entrepreneur-batiment-cachan',
  'entrepreneur-batiment-chatenay-malabry',
  'entrepreneur-batiment-chatillon',
  'entrepreneur-batiment-chatou',
  'entrepreneur-batiment-chaville',
  'entrepreneur-batiment-clamart',
  'entrepreneur-batiment-fontenay-aux-roses',
  'entrepreneur-batiment-guyancourt',
  'entrepreneur-batiment-la-defense',
  'entrepreneur-batiment-la-garenne-colombes',
  'entrepreneur-batiment-levallois-perret',
  'entrepreneur-batiment-malakoff',
  'entrepreneur-batiment-meudon',
  'entrepreneur-batiment-montrouge',
  'entrepreneur-batiment-paris',
  'entrepreneur-batiment-rueil-malmaison',
  'entrepreneur-batiment-saint-cloud',
  'entrepreneur-batiment-sceaux',
  'entrepreneur-batiment-sevres',
  'entrepreneur-batiment-suresnes',
  'entrepreneur-batiment-vanves',
  'entrepreneur-batiment-velizy-villacoublay'
];

const secteurDir = path.join(__dirname, '../app/secteur');

function extractCityDataFromContent(content) {
  // Extraire les données de la ville depuis le contenu existant
  const cityDataMatch = content.match(/const cityData = \{([\s\S]*?)\};/);
  if (cityDataMatch) {
    return cityDataMatch[0];
  }
  return null;
}

function extractServicesFromContent(content) {
  // Extraire les services depuis le contenu existant
  const servicesMatch = content.match(/const services = \[([\s\S]*?)\];/);
  if (servicesMatch) {
    return servicesMatch[0];
  }
  return null;
}

function extractContactInfoFromContent(content) {
  // Extraire les infos de contact depuis le contenu existant
  const contactMatch = content.match(/const contactInfo = \{([\s\S]*?)\};/);
  if (contactMatch) {
    return contactMatch[0];
  }
  return null;
}

function extractMetadataFromContent(content) {
  // Extraire les métadonnées depuis le contenu existant
  const metadataMatch = content.match(/export const metadata: Metadata = \{([\s\S]*?)\};/);
  if (metadataMatch) {
    return metadataMatch[0];
  }
  return null;
}

function convertSectorPage(sectorName) {
  const pagePath = path.join(secteurDir, sectorName, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    console.log(`❌ Page not found: ${sectorName}`);
    return;
  }

  try {
    const content = fs.readFileSync(pagePath, 'utf8');
    
    // Extraire les parties importantes
    const metadata = extractMetadataFromContent(content);
    const cityData = extractCityDataFromContent(content);
    const services = extractServicesFromContent(content);
    const contactInfo = extractContactInfoFromContent(content);
    
    if (!metadata || !cityData || !services || !contactInfo) {
      console.log(`❌ Could not extract all data from: ${sectorName}`);
      return;
    }

    // Générer le nouveau contenu
    const newContent = `import { Metadata } from 'next';
import SectorPage from '../../../components/SectorPage';

// Métadonnées SEO
${metadata}

export default function ${sectorName.split('-').map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
).join('')}Page() {
  ${cityData}

  ${services}

  ${contactInfo}

  return (
    <SectorPage 
      cityData={cityData}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
`;

    // Sauvegarder le fichier converti
    fs.writeFileSync(pagePath, newContent);
    console.log(`✅ Converted: ${sectorName}`);
    
  } catch (error) {
    console.error(`❌ Error converting ${sectorName}:`, error.message);
  }
}

// Convertir toutes les pages
console.log('🚀 Starting sector pages conversion...\n');

sectors.forEach(sector => {
  convertSectorPage(sector);
});

console.log('\n✨ Conversion completed!');
