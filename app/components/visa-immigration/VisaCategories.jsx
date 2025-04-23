'use client';

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

export default function VisaCategories() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">SERVICES</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Visa & Immigration Services
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We help with all major visa categories for your global aspirations
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