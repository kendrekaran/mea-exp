'use client';

import { FileCheck, Building2, Landmark, Globe } from 'lucide-react';

const steps = [
  {
    icon: FileCheck,
    title: 'Document Collection',
    description: 'Free pickup from your location for document collection.',
    forType: 'Step 1'
  },
  {
    icon: Building2,
    title: 'Verification',
    description: 'Check with issuing authority (if required).',
    forType: 'Step 2'
  },
  {
    icon: Landmark,
    title: 'Chamber Attestation',
    description: 'Submission and stamping at regional Chamber of Commerce.',
    forType: 'Step 3'
  },
  {
    icon: Globe,
    title: 'Further Processing',
    description: 'Forwarding for MEA or Embassy Attestation (if needed).',
    forType: 'Step 4'
  },
  {
    icon: FileCheck,
    title: 'Delivery',
    description: 'Safe and timely return of your attested documents.',
    forType: 'Step 5'
  }
];

const ProcessStep = ({ step, index, isReverse }) => (
  <div className={`md:flex items-center ${isReverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="md:w-1/2 md:px-12 mb-6 md:mb-0 flex md:justify-end">
      <div className="w-full md:max-w-md bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-cyan-100 rounded-full p-3 mr-4">
            <step.icon className="w-6 h-6 text-[#0A9DB2]" />
          </div>
          <span className="text-sm font-medium text-cyan-600">{step.forType}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </div>
    <div className="hidden md:flex md:w-14 h-14 rounded-full bg-[#0A9DB2] items-center justify-center text-2xl font-bold text-white border-4 border-white absolute left-1/2 -translate-x-1/2 shadow-lg">
      {index + 1}
    </div>
    <div className="md:w-1/2 md:px-12"></div>
  </div>
);

export default function ProcessSteps() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">PROCESS</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Chamber Attestation Process
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We handle your documents with care through every step of the process
          </p>
        </div>

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

      </div>
    </section>
  );
}