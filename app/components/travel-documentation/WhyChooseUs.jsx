'use client';

import { FileCheck, Clock, Users, Globe2 } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-[#0A9DB2] w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function WhyChooseUs() {
  const features = [
    {
      icon: FileCheck,
      title: 'Embassy Standards',
      description: 'All documents meet embassy standards',
    },
    {
      icon: Clock,
      title: 'Quick Delivery',
      description: 'Delivered digitally within hours',
    },
    {
      icon: Users,
      title: 'Trusted Service',
      description: 'Trusted by visa consultants across India',
    },
    {
      icon: Globe2,
      title: 'Wide Coverage',
      description: 'Experience across 20+ embassy types',
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">WHY CHOOSE US</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why MEA EXPERT for Travel Documentation?
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-50 to-cyan-100 p-6 rounded-lg border border-cyan-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Need Travel Documents for Visa?
              </h4>
              <p className="text-gray-600">
                Contact us now for quick and reliable documentation
              </p>
            </div>
            <button className="bg-[#0A9DB2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#098699] transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}