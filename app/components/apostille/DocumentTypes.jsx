'use client';

import { useState } from 'react';
import Head from 'next/head';
import {
  GraduationCap,
  ScrollText,
  FileText,
  Baby,
  Heart,
  ShieldCheck,
  FilePen,
  Building2,
  FileSignature,
  FileDown
} from 'lucide-react';

// Structured data for Schema.org markup
const getSchemaData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Document Apostille Services",
    "description": "Professional apostille attestation services for educational, personal, and commercial documents.",
    "provider": {
      "@type": "Organization",
      "name": "Apostille Services"
    },
    "serviceType": "Document Apostille",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Document Types for Apostille",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Educational Documents Apostille",
          "description": "Apostille services for academic degrees, transcripts, diplomas and school certificates"
        },
        {
          "@type": "Offer",
          "name": "Personal Documents Apostille",
          "description": "Apostille services for birth certificates, marriage certificates, police clearance and affidavits"
        },
        {
          "@type": "Offer",
          "name": "Commercial Documents Apostille",
          "description": "Apostille services for power of attorney, company documents, commercial invoices and business agreements"
        }
      ]
    }
  };
};

const categories = {
  educational: [
    {
      icon: GraduationCap,
      title: 'Degree Certificate Apostille',
      description: "Apostille services for Bachelor's, Master's, and PhD certificates from recognized universities for international use",
      alt: "Degree certificate with apostille seal"
    },
    {
      icon: ScrollText,
      title: 'Academic Transcript Apostille',
      description: 'Official apostille for academic transcripts and educational records required for overseas education or employment',
      alt: "Academic transcript with apostille stamp"
    },
    {
      icon: FileText,
      title: 'Diploma Certificate Apostille',
      description: 'International authentication for technical and vocational education diplomas through apostille process',
      alt: "Diploma with apostille certification"
    },
    {
      icon: FileDown,
      title: 'School Certificate Apostille',
      description: 'Apostille services for high school and secondary education certificates for global recognition',
      alt: "School certificate with apostille"
    },
  ],
  personal: [
    {
      icon: Baby,
      title: 'Birth Certificate Apostille',
      description: 'Official apostille attestation for birth records required for visa, immigration, and international legal purposes',
      alt: "Birth certificate with apostille seal"
    },
    {
      icon: Heart,
      title: 'Marriage Certificate Apostille',
      description: 'Authentication of marriage documents for international recognition, visa applications, and foreign residency',
      alt: "Marriage certificate with apostille"
    },
    {
      icon: ShieldCheck,
      title: 'Police Clearance (PCC) Apostille',
      description: 'Apostille verification for criminal record certificates required by foreign governments and institutions',
      alt: "Police clearance certificate with apostille"
    },
    {
      icon: FilePen,
      title: 'Affidavit Apostille',
      description: 'Legal apostille for sworn statements and declarations that require international validity and recognition',
      alt: "Affidavit document with apostille seal"
    },
  ],
  commercial: [
    {
      icon: FileSignature,
      title: 'Power of Attorney Apostille',
      description: 'Apostille certification for legal authorization documents for use in foreign business and legal matters',
      alt: "Power of attorney with apostille"
    },
    {
      icon: Building2,
      title: 'Company Document Apostille',
      description: 'Official apostille for business registration, incorporation papers, and corporate documents for international operations',
      alt: "Company documents with apostille certification"
    },
    {
      icon: FileText,
      title: 'Commercial Invoice Apostille',
      description: 'Authentication of business and trade documentation through apostille for global commercial transactions',
      alt: "Commercial invoice with apostille stamp"
    },
    {
      icon: FilePen,
      title: 'Business Agreement Apostille',
      description: 'International validation for contracts and memorandums of understanding through the apostille process',
      alt: "Business agreement with apostille seal"
    },
  ],
};

const CategoryButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition ${
      active
        ? 'bg-cyan-600 text-white'
        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }`}
    aria-pressed={active}
    aria-label={`View ${label} documents`}
  >
    {label}
  </button>
);

const DocumentItem = ({ icon: Icon, title, description, alt }) => (
  <article className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="bg-cyan-100 rounded-full p-3 mr-4 text-cyan-600" aria-hidden="true">
      <Icon className="w-6 h-6" aria-label={alt} />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-cyan-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </article>
);

export default function DocumentTypes() {
  const [activeCategory, setActiveCategory] = useState('educational');
  const pageTitle = "Document Types Eligible for Apostille Services | Official Authentication";
  const pageDescription = "Learn about educational, personal, and commercial documents eligible for apostille attestation. Get official international authentication for degrees, certificates, and legal documents.";

  const canonicalUrl = "https://yourdomain.com/documents-apostille";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="apostille services, document apostille, certificate authentication, international document validation, educational documents apostille, personal documents apostille, commercial documents apostille" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://yourdomain.com/images/apostille-services.jpg" />
        
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://yourdomain.com/images/apostille-services.jpg" />
        
        {/* Schema.org structured data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchemaData()) }}
        />
      </Head>

      <section id="apostille-documents" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Documents Eligible for Apostille Authentication
            </h1>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8" aria-hidden="true"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive apostille attestation services for all types of documents.
              Our experts ensure proper authentication for international use and recognition.
              Select a category below to explore eligible documents.
            </p>
          </header>

          <nav aria-label="Document categories" className="flex justify-center gap-4 mb-10 flex-wrap">
            <CategoryButton
              label="Educational Documents"
              active={activeCategory === 'educational'}
              onClick={() => setActiveCategory('educational')}
            />
            <CategoryButton
              label="Personal Documents"
              active={activeCategory === 'personal'}
              onClick={() => setActiveCategory('personal')}
            />
            <CategoryButton
              label="Commercial Documents"
              active={activeCategory === 'commercial'}
              onClick={() => setActiveCategory('commercial')}
            />
          </nav>

          <div className="grid md:grid-cols-2 gap-6" role="region" aria-label={`${activeCategory} documents list`}>
            {categories[activeCategory].map((doc, index) => (
              <DocumentItem
                key={index}
                icon={doc.icon}
                title={doc.title}
                description={doc.description}
                alt={doc.alt}
              />
            ))}
          </div>
          
          <footer className="mt-16 text-center">
            <p className="text-gray-700">
              Need assistance with document apostille? <a href="/contact" className="text-cyan-600 font-medium hover:underline">Contact our experts</a> for personalized guidance.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              We provide apostille services for documents from all countries that are signatories to the Hague Convention.
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}