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
      title: 'All Embassies Under One Roof',
      description: 'We provide attestation services for UAE, Qatar, Saudi, Kuwait, and European embassies from a single point.',
    },
    {
      icon: Globe2,
      title: 'Pan India Services',
      description: 'Embassy attestation in Bangalore, Chennai, Delhi & across India with local support.',
    },
    {
      icon: Medal,
      title: 'Direct Embassy Coordination',
      description: 'Direct coordination with UAE, Qatar, Saudi embassies for faster processing.',
    },
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: 'Track your document status in real-time with our online tracking system.',
    },
    {
      icon: Users,
      title: 'Government Recognized',
      description: '100% secure, reliable, and government-recognized attestation process.',
    },
    {
      icon: HeartHandshake,
      title: 'Transparent Pricing',
      description: 'Clear and affordable attestation fees with no hidden charges.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">WHY CHOOSE US</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why MEA EXPERT for Embassy Attestation?
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose the most trusted name in embassy attestation services across India
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