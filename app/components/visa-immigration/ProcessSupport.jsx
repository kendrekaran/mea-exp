'use client';

import Head from 'next/head';
import { FileCheck, FileText, Building2, Mail, Globe, FileSpreadsheet, MessagesSquare } from 'lucide-react';

const supportServices = [
  {
    icon: FileCheck,
    title: 'Document Checklist & Verification',
    description: 'Complete document verification and preparation'
  },
  {
    icon: FileText,
    title: 'Filling Visa Application Forms',
    description: 'Accurate completion of all visa forms'
  },
  {
    icon: Building2,
    title: 'Embassy Appointment Booking',
    description: 'Scheduling and submission assistance'
  },
  {
    icon: Mail,
    title: 'Cover Letter & SOP Drafting',
    description: 'Professional document drafting services'
  },
  {
    icon: Globe,
    title: 'Document Authentication',
    description: 'Translation, Apostille & Attestation'
  },
  {
    icon: FileSpreadsheet,
    title: 'Travel Documentation',
    description: 'Insurance & Itinerary preparation'
  },
  {
    icon: MessagesSquare,
    title: 'Interview Preparation',
    description: 'Visa interview guidance if applicable'
  }
];

const SupportCard = ({ service: { icon: Icon, title, description } }) => (
  <article 
    className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
    itemScope
    itemType="https://schema.org/Service"
  >
    <div className="bg-cyan-100 rounded-full p-3 mr-4 text-[#0A9DB2]" aria-hidden="true">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-cyan-600" itemProp="name">{title}</h3>
      <p className="text-gray-600" itemProp="description">{description}</p>
    </div>
  </article>
);

export default function ProcessSupport() {
  return (
    <>
      <Head>
        <meta name="description" content="Complete visa process support including document verification, application filling, embassy appointments, cover letters, authentication, and interview preparation." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Visa Process Support",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "itemListElement": supportServices.map((service, index) => ({
                "@type": "Service",
                "position": index + 1,
                "name": service.title,
                "description": service.description
              }))
            }
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-white"
        aria-labelledby="process-title"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-[#0A9DB2] font-semibold mb-2">PROCESS</p>
            <h2
              id="process-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Our Complete Visa Process Support
            </h2>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              Comprehensive support at every step of your visa application
            </p>
          </header>

          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Visa support services"
          >
            {supportServices.map((service, index) => (
              <SupportCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}