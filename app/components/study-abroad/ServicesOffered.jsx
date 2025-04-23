'use client';

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
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="flex items-start mb-4">
      <div className="bg-cyan-100 rounded-full p-3 mr-4">
        <Icon className="text-[#0A9DB2] w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="mr-2 text-[#0A9DB2]">✓</span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function ServicesOffered() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">SERVICES</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Services We Offer for Study Abroad Aspirants
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive support at every step of your study abroad journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}