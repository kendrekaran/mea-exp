'use client';

import Head from 'next/head';
import { Building2, GraduationCap, Landmark, Globe2, Building, ShieldCheck } from 'lucide-react';

const usageCategories = [
  {
    icon: Landmark,
    title: 'Embassies and Consulates',
    description: 'For visa applications and document verification'
  },
  {
    icon: GraduationCap,
    title: 'Universities & Colleges',
    description: 'For admission applications and transcript evaluation'
  },
  {
    icon: Building2,
    title: 'Visa Centers',
    description: 'VFS, BLS, and other visa processing centers'
  },
  {
    icon: ShieldCheck,
    title: 'Legal & Government Bodies',
    description: 'For official document submissions'
  },
  {
    icon: Building,
    title: 'Corporate Employers',
    description: 'For job applications and work permits'
  },
  {
    icon: Globe2,
    title: 'Immigration Authorities',
    description: 'For PR and immigration processing'
  }
];

const UsageCard = ({ usage: { icon: Icon, title, description } }) => (
  <article 
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
    itemScope
    itemType="https://schema.org/Service"
  >
    <div className="flex items-start">
      <div className="bg-cyan-100 rounded-full p-3 mr-4" aria-hidden="true">
        <Icon className="text-[#0A9DB2] w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2" itemProp="name">{title}</h3>
        <p className="text-gray-600" itemProp="description">{description}</p>
      </div>
    </div>
  </article>
);

export default function UsageSection() {
  return (
    <>
      <Head>
        <meta name="description" content="Our certified translations are accepted by embassies, universities, visa centers, legal bodies, employers, and immigration authorities worldwide." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Translation Acceptance",
            "description": "Certified translations accepted by major institutions worldwide",
            "serviceType": "Document Translation",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "itemListElement": usageCategories.map((category, index) => ({
                "@type": "Service",
                "position": index + 1,
                "name": category.title,
                "description": category.description
              }))
            }
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-gray-50"
        aria-labelledby="usage-title"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-[#0A9DB2] font-semibold mb-2">ACCEPTANCE</p>
            <h1 
              id="usage-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Where are Translations Accepted?
            </h1>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              Our translations are recognized and accepted by major institutions worldwide
            </p>
          </header>

          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Translation acceptance institutions"
          >
            {usageCategories.map((usage, index) => (
              <UsageCard key={index} usage={usage} />
            ))}
          </div>

          <footer className="mt-8 text-center text-gray-600">
            We also provide notarized translations and translations with affidavit/declaration, based on the requirements of the country or institution.
          </footer>
        </div>
      </section>
    </>
  );
}