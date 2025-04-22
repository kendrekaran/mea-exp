'use client';

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

export default function DocumentTypes() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">DOCUMENTATION</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Documents Requiring Chamber of Commerce Attestation
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We assist with attestation of all types of commercial and business documents
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <DocumentCard key={index} {...doc} />
          ))}
        </div>
      </div>
    </section>
  );
}