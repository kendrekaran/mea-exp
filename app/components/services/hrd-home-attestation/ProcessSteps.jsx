'use client';

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
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">PROCESS</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            HRD Certificate Attestation Process
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We handle the complete process on your behalf, saving you time and effort
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

        <div className="mt-16 bg-white rounded-lg p-6 border border-gray-200">
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
        </div>
      </div>
    </section>
  );
}