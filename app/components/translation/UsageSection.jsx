'use client';

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
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="flex items-start">
      <div className="bg-cyan-100 rounded-full p-3 mr-4">
        <Icon className="text-[#0A9DB2] w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export default function UsageSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">ACCEPTANCE</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Where are Translations Accepted?
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our translations are recognized and accepted by major institutions worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usageCategories.map((usage, index) => (
            <UsageCard key={index} usage={usage} />
          ))}
        </div>

        <div className="mt-8 text-center text-gray-600">
          We also provide notarized translations and translations with affidavit/declaration, based on the requirements of the country or institution.
        </div>
      </div>
    </section>
  );
}