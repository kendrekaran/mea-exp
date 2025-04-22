'use client';

import { ShieldCheck, Clock, Medal, Globe2, Users, HeartHandshake } from 'lucide-react';

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
      icon: ShieldCheck,
      title: 'Certified Translations',
      description: 'Official translations with stamp, signature & translator declaration',
    },
    {
      icon: Globe2,
      title: 'Multi-language Experts',
      description: 'Native translators with expertise in legal and technical translations',
    },
    {
      icon: Medal,
      title: 'Legally Compliant',
      description: 'Translations accepted by embassies, universities & visa offices',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Express translations available in 24-48 hours',
    },
    {
      icon: HeartHandshake,
      title: 'Affordable Rates',
      description: 'Transparent pricing with no hidden costs',
    },
    {
      icon: Users,
      title: 'PAN India Support',
      description: 'Document pickup & delivery available across India',
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">WHY CHOOSE US</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose MEA EXPERT for Translation?
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Professional translation services you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-50 to-cyan-100 p-6 rounded-lg border border-cyan-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Need Document Translation?
              </h4>
              <p className="text-gray-600">
                Contact us now for a free consultation and quote
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