'use client';

import Head from 'next/head';
import { GraduationCap, Briefcase, Plane, Home } from 'lucide-react';

const categories = [
  {
    icon: Home,
    title: 'Permanent Residency (PR)',
    services: [
      'Canada Express Entry & PNP',
      'Australia Skilled Migration',
      'UK Skilled Worker Visa',
      'Germany Job Seeker Visa'
    ]
  },
  {
    icon: Briefcase,
    title: 'Work Permits',
    services: [
      'UAE, Qatar, Oman, Kuwait Work Visas',
      'EU Blue Card',
      'LMIA for Canada',
      'Sponsorship & employer documentation'
    ]
  },
  {
    icon: Plane,
    title: 'Tourist & Visitor Visas',
    services: [
      'Schengen Visa (France, Germany, Italy, etc.)',
      'USA B1/B2 Visa',
      'UK Standard Visitor Visa',
      'Dubai Tourist Visa'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Student Visas',
    services: [
      'Canada SDS & Non-SDS',
      'USA F1 Visa',
      'Australia & New Zealand Student Visas',
      'Germany, France, UK & Ireland study permits'
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

export default function VisaCategories() {
  return (
    <>
      <Head>
        <meta name="description" content="Comprehensive visa and immigration services including PR, work permits, tourist visas, and student visas for Canada, USA, UK, Australia, UAE, and Europe." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Visa & Immigration Services",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "itemListElement": categories.map((category, index) => ({
                "@type": "Service",
                "position": index + 1,
                "name": category.title,
                "serviceType": category.services
              }))
            }
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
            <h2
              id="services-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Our Visa & Immigration Services
            </h2>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              We help with all major visa categories for your global aspirations
            </p>
          </header>

          <div 
            className="grid md:grid-cols-2 gap-6"
            role="list"
            aria-label="Visa categories and services"
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