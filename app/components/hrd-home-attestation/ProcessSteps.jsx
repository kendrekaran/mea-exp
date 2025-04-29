'use client';

import Head from 'next/head';
import { FileCheck, Building2, Landmark, Globe } from 'lucide-react';

const steps = [
  {
    icon: FileCheck,
    title: 'University Verification',
    description: 'First, we verify your educational documents from the issuing university or institution to confirm their authenticity.',
    forType: 'Educational Documents'
  },
  {
    icon: Building2,
    title: 'HRD/Home Department',
    description: 'Documents are then authenticated by the respective state\'s HRD (for educational) or Home Department (for personal documents).',
    forType: 'All Documents'
  },
  {
    icon: Landmark,
    title: 'MEA Attestation',
    description: 'After state verification, documents proceed to MEA (Ministry of External Affairs) for attestation or apostille.',
    forType: 'All Documents'
  },
  {
    icon: Globe,
    title: 'Embassy/MOFA',
    description: 'Final step involves embassy attestation or MOFA verification (if required by your destination country).',
    forType: 'As Required'
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
        <meta name="description" content="Complete HRD Certificate Attestation Process: University verification, HRD/Home Department authentication, MEA attestation, and Embassy/MOFA verification." />
        <meta name="keywords" content="HRD attestation, certificate attestation, document verification, MEA attestation, embassy attestation, MOFA verification, educational documents" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "HRD Certificate Attestation Process",
            "description": "Complete process of HRD certificate attestation",
            "totalTime": "PT5-7D",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": "Varies by document type"
            },
            "supply": [{
              "@type": "HowToSupply",
              "name": "Original Documents"
            }],
            "tool": [{
              "@type": "HowToTool",
              "name": "Document Copies"
            }],
            "step": steps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.title,
              "text": step.description,
              "itemListElement": {
                "@type": "HowToDirection",
                "text": step.description
              }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://yourwebsite.com"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://yourwebsite.com/services"
            }, {
              "@type": "ListItem",
              "position": 3,
              "name": "HRD Certificate Attestation",
              "item": "https://yourwebsite.com/hrd-attestation"
            }]
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-gray-50"
        aria-labelledby="process-title"
        itemScope
        itemType="https://schema.org/HowTo"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-[#0A9DB2] font-semibold mb-2">PROCESS</p>
            <h1 
              id="process-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              HRD Certificate Attestation Process
            </h1>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              We handle the complete process on your behalf, saving you time and effort
            </p>
          </header>

          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-1 bg-[#0A9DB2]/20 -translate-x-1/2"></div>

            <div className="relative space-y-12 md:space-y-24">
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

          <aside className="mt-16 bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-100 p-3 rounded-full">
                <FileCheck className="text-[#0A9DB2] h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Important Note:</h4>
                <p className="text-gray-700">
                  The process may vary slightly depending on your document type and destination country. Our experts will guide you through the specific requirements for your case.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}