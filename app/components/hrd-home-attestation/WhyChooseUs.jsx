'use client';

import { ShieldCheck, Clock, Medal, Globe2, Users, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

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
      title: 'Pan India Services',
      description: 'We handle HRD and Home Department attestation across all Indian states with local expertise.',
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Get your documents attested in as little as 1-2 working days with our premium service.',
    },
    {
      icon: Medal,
      title: 'Expert Team',
      description: 'Our experienced professionals coordinate directly with universities and departments.',
    },
    {
      icon: Globe2,
      title: 'State Coverage',
      description: 'Services available in Chennai, Delhi, Bangalore, Kerala, and all major cities.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 customer support and real-time updates on your document status.',
    },
    {
      icon: HeartHandshake,
      title: 'Transparent Pricing',
      description: 'Clear pricing structure with no hidden charges, based on service type and urgency.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">WHY CHOOSE US</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why MEA EXPERT for Attestation?
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose the most trusted name in document attestation services across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
}