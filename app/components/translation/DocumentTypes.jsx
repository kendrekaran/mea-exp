'use client';

import { FileText, GraduationCap, Heart, FileCheck, FileSignature, Building2, Receipt, ClipboardCheck, Files } from 'lucide-react';

const documents = [
  {
    icon: GraduationCap,
    title: 'Degree & Education Certificates',
    description: 'Academic transcripts, diplomas, and degree certificates'
  },
  {
    icon: Heart,
    title: 'Marriage Certificates',
    description: 'Marriage registrations and related documents'
  },
  {
    icon: FileCheck,
    title: 'Birth Certificates',
    description: 'Birth records and related documents'
  },
  {
    icon: FileSignature,
    title: 'Identity Documents',
    description: 'Aadhar, PAN, Passports, and official IDs'
  },
  {
    icon: FileText,
    title: 'Affidavits & Declarations',
    description: 'Legal declarations and sworn statements'
  },
  {
    icon: Building2,
    title: 'Legal Contracts',
    description: 'Agreements, contracts, and legal documents'
  },
  {
    icon: Receipt,
    title: 'Financial Documents',
    description: 'Invoices, statements, and financial records'
  },
  {
    icon: ClipboardCheck,
    title: 'Medical & Police Reports',
    description: 'Health records and police clearance certificates'
  },
  {
    icon: Files,
    title: 'Business Documents',
    description: 'Corporate and trade documentation'
  }
];

const DocumentCard = ({ document: { icon: Icon, title, description } }) => (
  <div className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="bg-cyan-100 rounded-full p-3 mr-4 text-[#0A9DB2]">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-cyan-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function DocumentTypes() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">DOCUMENTS</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Documents We Translate
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our certified translation services cover a wide range of personal, academic, and legal documents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <DocumentCard key={index} document={doc} />
          ))}
        </div>
      </div>
    </section>
  );
}