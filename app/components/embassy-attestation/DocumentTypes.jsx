'use client';

import Head from 'next/head';
import { useState } from 'react';
import {
  GraduationCap,
  ScrollText,
  BarChart3,
  FileSpreadsheet,
  Baby,
  Heart,
  FileText,
  FileCheck,
  FileSignature,
  Building2,
  Files,
  PenTool
} from 'lucide-react';

const categories = {
  educational: [
    {
      icon: GraduationCap,
      title: 'Degree & Diploma Certificates',
      description: "Bachelor's, Master's, and PhD certificates from recognized universities",
    },
    {
      icon: ScrollText,
      title: 'HSC / SSC Marksheets',
      description: 'Secondary and higher secondary education mark sheets',
    },
    {
      icon: BarChart3,
      title: 'Technical Course Certificates',
      description: 'Professional and vocational course certificates',
    },
    {
      icon: FileSpreadsheet,
      title: 'Other Educational Documents',
      description: 'Transcripts, course completion certificates, etc.',
    },
  ],
  personal: [
    {
      icon: Heart,
      title: 'Marriage Certificate',
      description: 'Marriage registration and ceremonial certificates',
    },
    {
      icon: Baby,
      title: 'Birth Certificate',
      description: 'Birth records and registration documents',
    },
    {
      icon: FileCheck,
      title: 'Police Clearance Certificate',
      description: 'PCC for visa and immigration purposes',
    },
    {
      icon: FileText,
      title: 'Other Personal Documents',
      description: 'Affidavits, medical records, divorce certificates',
    },
  ],
  commercial: [
    {
      icon: Files,
      title: 'Invoices & Bills',
      description: 'Commercial invoices and business documents',
    },
    {
      icon: FileSignature,
      title: 'Power of Attorney',
      description: 'Legal authorization documents',
    },
    {
      icon: Building2,
      title: 'Company Documents',
      description: 'Incorporation papers and business registration',
    },
    {
      icon: PenTool,
      title: 'Legal Documents',
      description: 'MoA, AoA, and other corporate documents',
    },
  ],
};

const CategoryButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition ${
      active ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }`}
    aria-pressed={active}
    role="tab"
  >
    {label}
  </button>
);

const DocumentItem = ({ icon: Icon, title, description }) => (
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
      <p className="text-gray-700" itemProp="description">{description}</p>
    </div>
  </article>
);

export default function DocumentsSection() {
  const [activeCategory, setActiveCategory] = useState('educational');

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Embassy Document Attestation Services",
            "itemListElement": Object.entries(categories).flatMap(([category, items], categoryIndex) =>
              items.map((item, index) => ({
                "@type": "Service",
                "position": categoryIndex * items.length + index + 1,
                "name": item.title,
                "description": item.description
              }))
            )
          })}
        </script>
      </Head>
      <section 
        id="documents" 
        className="py-20 px-4 bg-white"
        aria-labelledby="documents-title"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-14">
            <p className="text-cyan-600 font-semibold tracking-wider mb-3">DOCUMENTATION</p>
            <h1 
              id="documents-title"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Types of Documents Attested by Embassies
            </h1>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8" role="presentation"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide embassy attestation services for various types of documents. Select a category to learn more.
            </p>
          </header>

          <div 
            className="flex justify-center gap-4 mb-10 flex-wrap"
            role="tablist"
            aria-label="Document categories"
          >
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
          </div>

          <div 
            className="grid md:grid-cols-2 gap-6"
            role="tabpanel"
            aria-label={`${activeCategory} documents`}
          >
            {categories[activeCategory].map((doc, index) => (
              <DocumentItem
                key={index}
                icon={doc.icon}
                title={doc.title}
                description={doc.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}