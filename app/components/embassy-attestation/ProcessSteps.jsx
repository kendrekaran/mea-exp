'use client';

import Head from 'next/head';
import { FileCheck, Building2, Landmark, Globe } from 'lucide-react';

const steps = [
  {
    icon: FileCheck,
    title: 'Document Verification',
    description: 'Cross-check with issuing authorities to confirm document authenticity.',
    forType: 'All Documents'
  },
  {
    icon: Building2,
    title: 'State Authentication',
    description: 'Authentication from Home Department (for personal documents) or HRD (for educational documents).',
    forType: 'State Level'
  },
  {
    icon: Landmark,
    title: 'MEA Attestation',
    description: 'Verification by the Ministry of External Affairs - a mandatory step before embassy attestation.',
    forType: 'Central Level'
  },
  {
    icon: Globe,
    title: 'Embassy Attestation',
    description: 'Submission and verification at target country\'s embassy.',
    forType: 'International Level'
  },
  {
    icon: Globe,
    title: 'MOFA Attestation',
    description: 'Final attestation by Ministry of Foreign Affairs (MOFA) in the destination country, if applicable.',
    forType: 'International Level'
  }
];

const ProcessStep = ({ step, index, isReverse }) => (
  <article 
    className={`md:flex items-center ${isReverse ? 'md:flex-row-reverse' : ''}`}
    itemProp="step"
    itemScope
    itemType="https://schema.org/HowToStep"
  >
    <div className="md:w-1/2 md:px-12 mb-6 md:mb-0 flex md:justify-end">
      <div className="w-full md:max-w-md bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-cyan-100 rounded-full p-3 mr-4" aria-hidden="true">
            <step.icon className="w-6 h-6 text-[#0A9DB2]" />
          </div>
          <span className="text-sm font-medium text-cyan-600">{step.forType}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">{step.title}</h3>
        <p className="text-gray-600" itemProp="text">{step.description}</p>
      </div>
    </div>
    <div 
      className="hidden md:flex md:w-14 h-14 rounded-full bg-[#0A9DB2] items-center justify-center text-2xl font-bold text-white border-4 border-white absolute left-1/2 -translate-x-1/2 shadow-lg"
      aria-hidden="true"
    >
      {index + 1}
    </div>
    <div className="md:w-1/2 md:px-12"></div>
  </article>
);

export default function ProcessSteps() {
  return (
    <>
      <Head>
        <meta name="description" content="Complete embassy attestation process: document verification, state authentication, MEA attestation, embassy verification, and MOFA attestation." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Embassy Attestation Process",
            "description": "Complete process of document attestation for embassy verification",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": "Varies by document type and country"
            },
            "totalTime": "PT5-7D",
            "tool": [{
              "@type": "HowToTool",
              "name": "Original Documents"
            }],
            "supply": [{
              "@type": "HowToSupply",
              "name": "Document Copies"
            }],
            "step": steps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.title,
              "text": step.description,
              "itemListElement": [{
                "@type": "HowToDirection",
                "text": step.description
              }]
            }))
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-gray-50"
        aria-labelledby="process-title"
        itemScope
        itemType="https://schema.org/HowTo"
        role="region"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-[#0A9DB2] font-semibold mb-2">PROCESS</p>
            <h1 
              id="process-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Our Embassy Attestation Process
            </h1>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              We handle the complete attestation process with online tracking and fast delivery options
            </p>
          </header>

          <div className="relative">
            <div 
              className="hidden md:block absolute left-1/2 top-10 bottom-10 w-1 bg-[#0A9DB2]/20 -translate-x-1/2"
              role="presentation"
              aria-hidden="true"
            ></div>

            <div 
              className="relative space-y-12 md:space-y-24"
              role="list"
              aria-label="Embassy attestation process steps"
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
        </div>
      </section>
    </>
  );
}