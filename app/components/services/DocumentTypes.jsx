'use client';

import { useState } from 'react';
import {
  GraduationCap,
  ScrollText,
  BarChart3,
  Search,
  Baby,
  Heart,
  ShieldCheck,
  FileText,
  FileSignature,
  Handshake,
  Building2
} from 'lucide-react';

const categories = {
  educational: [
    {
      icon: GraduationCap,
      title: 'Degree Certificates',
      description: "Bachelor's, Master's, and Doctoral degrees from recognized universities.",
    },
    {
      icon: ScrollText,
      title: 'Diploma Certificates',
      description: 'Diplomas and certificates from technical institutions and colleges.',
    },
    {
      icon: BarChart3,
      title: 'Mark Sheets',
      description: 'Academic transcripts and mark sheets from schools, colleges, and universities.',
    },
    {
      icon: Search,
      title: 'Other Educational Documents',
      description: 'Transfer certificates, bona fide certificates, and more.',
    },
  ],
  personal: [
    {
      icon: Baby,
      title: 'Birth Certificates',
      description: 'Official birth records issued by authorities or hospitals.',
    },
    {
      icon: Heart,
      title: 'Marriage Certificates',
      description: 'Legal marriage documents registered with government authorities.',
    },
    {
      icon: ShieldCheck,
      title: 'Police Clearance Certificate (PCC)',
      description: 'Certificate verifying no criminal record from police authorities.',
    },
    {
      icon: FileText,
      title: 'Other Personal Documents',
      description: 'Death certificates, divorce decrees, name change certificates, etc.',
    },
  ],
  commercial: [
    {
      icon: FileSignature,
      title: 'Power of Attorney',
      description: 'Legal documents for business or personal representation.',
    },
    {
      icon: FileText,
      title: 'Invoices',
      description: 'Commercial invoices for international trade and transactions.',
    },
    {
      icon: Handshake,
      title: 'Company Agreements',
      description: 'Contracts, partnership deeds, MoUs, etc.',
    },
    {
      icon: Building2,
      title: 'Other Commercial Documents',
      description: 'Incorporation certificates, resolutions, export-import docs.',
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
  >
    {label}
  </button>
);

const DocumentItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="bg-cyan-100 rounded-full p-3 mr-4 text-[#0A9DB2]">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-cyan-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default function DocumentsSection() {
  const [activeCategory, setActiveCategory] = useState('educational');

  return (
    <section id="documents" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h6 className="text-cyan-600 font-semibold tracking-wider mb-3">DOCUMENTATION</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Documents That Require MEA Attestation</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We assist with attestation for various types of documents. Choose a category below to explore.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <CategoryButton
            label="Educational"
            active={activeCategory === 'educational'}
            onClick={() => setActiveCategory('educational')}
          />
          <CategoryButton
            label="Personal"
            active={activeCategory === 'personal'}
            onClick={() => setActiveCategory('personal')}
          />
          <CategoryButton
            label="Commercial"
            active={activeCategory === 'commercial'}
            onClick={() => setActiveCategory('commercial')}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
  );
}
