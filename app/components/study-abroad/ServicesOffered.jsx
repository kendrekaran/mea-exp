'use client';

import Head from 'next/head';
import { FileCheck, GraduationCap, Plane, MessageSquare } from 'lucide-react';

const categories = [
  {
    icon: FileCheck,
    title: 'Document Attestation & Apostille',
    services: [
      'Educational certificate attestation',
      'Apostille for degree, transcripts, birth certificate',
      'MEA, HRD & embassy attestation support',
      'Translations (French, German, Arabic, etc.) for visa & university needs'
    ]
  },
  {
    icon: GraduationCap,
    title: 'University Application Guidance',
    services: [
      'University shortlisting based on profile & budget',
      'Application filing & SOP/LOR assistance',
      'Documentation for admission process',
      'Regular updates on admission status'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Student Visa Filing Services',
    services: [
      'Canada SDS/Non-SDS Student Visa',
      'UK Tier 4 Student Visa',
      'USA F1 Visa',
      'Australia, Germany, France, Ireland & more',
      'Visa file creation, checklist, cover letter & interview guidance'
    ]
  },
  {
    icon: Plane,
    title: 'Travel & Pre-departure Support',
    services: [
      'Travel itinerary for visa file',
      'Dummy tickets & travel insurance for student visa',
      'Currency exchange, accommodation & checklist before departure'
    ]
  }
];

const CategoryCard = ({ category: { icon: Icon, title, services } }) => (
  <article 
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
    itemScope
    itemType="https://schema.org/Service"
  >
    <div className="flex items-start mb-4">
      <div className="bg-cyan-100 rounded-full p-3 mr-4" aria-hidden="true">
        <Icon className="text-[#0A9DB2] w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">{title}</h3>
        <ul 
          className="space-y-2"
          role="list"
          aria-label={`${title} services`}
          itemProp="offers"
        >
          {services.map((service, index) => (
            <li 
              key={index} 
              className="flex items-center text-gray-600"
              itemProp="hasOfferCatalog"
            >
              <span className="mr-2 text-[#0A9DB2]" aria-hidden="true">✓</span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </article>
);

export default function ServicesOffered() {
  return (
    <>
      <Head>
        <meta name="description" content="Comprehensive study abroad services including document attestation, university application guidance, visa filing, and pre-departure support for international students." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Study Abroad Services",
            "itemListElement": categories.map((category, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": category.title,
              "offers": {
                "@type": "Offer",
                "itemOffered": category.services
              }
            }))
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-gray-50"
        aria-labelledby="services-title"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-[#0A9DB2] font-semibold mb-2">SERVICES</p>
            <h1 
              id="services-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Services We Offer for Study Abroad Aspirants
            </h1>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              Comprehensive support at every step of your study abroad journey
            </p>
          </header>

          <div 
            className="grid md:grid-cols-2 gap-6"
            role="list"
            aria-label="Study abroad services"
          >
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}