'use client';

import { useEffect } from 'react';
import { FileCheck, Building2, Stamp, FileCheck2 } from 'lucide-react';

const steps = [
  {
    icon: FileCheck,
    title: 'Document Verification',
    description: 'Our experts verify your documents for eligibility and completeness. We ensure all papers meet the requirements for apostille attestation.',
    step: 1
  },
  {
    icon: Building2,
    title: 'Pre-Attestation',
    description: 'If needed, documents are first attested by state authorities (Home Department, HRD, or SDM) before proceeding to MEA apostille.',
    step: 2
  },
  {
    icon: Stamp,
    title: 'MEA Apostille',
    description: 'Documents are submitted to the Ministry of External Affairs for apostille. A unique numbered sticker is affixed, making them valid internationally.',
    step: 3
  },
  {
    icon: FileCheck2,
    title: 'Quality Check & Delivery',
    description: 'We verify all apostille stamps and signatures, then securely deliver your documents to your preferred location.',
    step: 4
  },
];

const ProcessStep = ({ step, index, isReverse }) => (
  <div 
    className={`md:flex items-center ${isReverse ? 'md:flex-row-reverse' : ''}`}
    itemScope
    itemType="https://schema.org/HowToStep"
    itemProp="step"
  >
    <div className="md:w-1/2 md:px-12 mb-6 md:mb-0 flex md:justify-end">
      <div className="w-full md:max-w-md bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-cyan-100 rounded-full p-3 mr-4">
            <step.icon className="w-6 h-6 text-[#0A9DB2]" aria-hidden="true" />
          </div>
          <span className="text-sm font-medium text-cyan-600">Step {step.step}</span>
        </div>
        <h3 
          className="text-xl font-bold mb-2"
          itemProp="name"
        >
          {step.title}
        </h3>
        <p 
          className="text-gray-600"
          itemProp="text"
        >
          {step.description}
        </p>
      </div>
    </div>
  </div>
);

export default function ProcessSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Apostille Process in India",
    "description": "Step-by-step guide for document apostille attestation",
    "step": steps.map(step => ({
      "@type": "HowToStep",
      "position": step.step,
      "name": step.title,
      "text": step.description
    }))
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <section id="process" className="py-16 px-4 bg-gray-50" aria-labelledby="process-title">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-[#0A9DB2] font-semibold mb-2">PROCEDURE</span>
          <h2 
            id="process-title" 
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Apostille Process in India
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our streamlined process ensures your documents are apostilled correctly and efficiently. Here's how we do it:
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block bg-[#0A9DB2] absolute left-1/2 top-10 bottom-10 w-1 bg-opacity-20 -translate-x-1/2 z-0"></div>

          <div 
            className="relative z-10 space-y-12 md:space-y-24"
            itemScope
            itemType="https://schema.org/HowTo"
          >
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isReverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-start">
            <div>
              <p className="text-lg font-medium">Express Service Available:</p>
              <p className="text-gray-700">
                Need urgent apostille? Ask about our express service for faster processing of your documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}