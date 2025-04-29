'use client';

import Head from 'next/head';
import {
  Building2,
  ScrollText,
  FileText,
  FilePen,
  FileBox,
  GanttChartSquare,
  BookUser,
  Briefcase,
  BadgeCheck,
  GraduationCap
} from 'lucide-react';

const documents = [
  {
    icon: Building2,
    title: 'Company Incorporation Certificate',
    description: 'Legal proof of company registration and existence'
  },
  {
    icon: ScrollText,
    title: 'Memorandum of Association (MOA)',
    description: 'Fundamental company constitution document'
  },
  {
    icon: FileText,
    title: 'Articles of Association (AOA)',
    description: 'Internal rules and regulations of the company'
  },
  {
    icon: FilePen,
    title: 'Board Resolutions',
    description: 'Official company decisions and authorizations'
  },
  {
    icon: FileBox,
    title: 'Invoices and Commercial Bills',
    description: 'Business transaction and payment documents'
  },
  {
    icon: GanttChartSquare,
    title: 'Export Documents',
    description: 'Export documentation and packing lists'
  },
  {
    icon: BookUser,
    title: 'Power of Attorney',
    description: 'Business authorization documents'
  },
  {
    icon: Briefcase,
    title: 'Business Agreements',
    description: 'Contracts and commercial agreements'
  },
  {
    icon: BadgeCheck,
    title: 'Business License',
    description: 'Official permits and operating licenses'
  },
  {
    icon: GraduationCap,
    title: 'Degree Certificates',
    description: 'For company-sponsored visas (when required)'
  }
];

const DocumentCard = ({ icon: Icon, title, description }) => (
  <article className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="bg-cyan-100 rounded-full p-3 mr-4 text-[#0A9DB2]" aria-hidden="true">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-cyan-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </article>
);

export default function DocumentTypes() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": documents.map((doc, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": doc.title,
                "description": doc.description
              }
            }))
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-gray-50"
        aria-labelledby="documents-section-title"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-[#0A9DB2] font-semibold mb-2">DOCUMENTATION</p>
            <h1 
              id="documents-section-title"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Documents Requiring Chamber of Commerce Attestation
            </h1>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We assist with attestation of all types of commercial and business documents
            </p>
          </header>

          <div 
            className="grid md:grid-cols-2 gap-6"
            role="list"
            aria-label="Document types requiring attestation"
          >
            {documents.map((doc, index) => (
              <DocumentCard 
                key={index} 
                {...doc} 
                role="listitem"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}