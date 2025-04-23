'use client';

import { ShieldCheck, Globe2, Brain, CheckSquare, FileStack, Truck } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'End-to-End Visa Support',
    description: 'Complete assistance from documentation to submission'
  },
  {
    icon: Brain,
    title: 'Experienced Advisors',
    description: 'Specialized experts for every country & visa category'
  },
  {
    icon: Globe2,
    title: 'Up-to-Date Knowledge',
    description: 'Current with latest immigration rules and policies'
  },
  {
    icon: CheckSquare,
    title: 'Error-Free Filing',
    description: 'Meticulous attention to detail in every submission'
  },
  {
    icon: FileStack,
    title: 'Complex Case Handling',
    description: 'Specialized in handling difficult cases & refusals'
  },
  {
    icon: Truck,
    title: 'PAN India Support',
    description: 'Convenient service with doorstep document pickup'
  }
];

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
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">WHY US</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose MEA EXPERT?
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Trust your visa journey with our experienced team
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
                Apply With Confidence
              </h4>
              <p className="text-gray-600">
                Contact us now for a free consultation or document review
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