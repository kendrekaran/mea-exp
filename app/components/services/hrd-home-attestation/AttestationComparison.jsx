'use client';

import { Check, X } from 'lucide-react';

const ComparisonItem = ({ title, apostille, attestation }) => (
  <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-200">
    <div className="font-medium text-gray-800">{title}</div>
    <div className="text-center flex items-center justify-center">
      {typeof apostille === 'boolean' ? (
        apostille ? (
          <Check className="text-green-500 w-5 h-5" />
        ) : (
          <X className="text-red-500 w-5 h-5" />
        )
      ) : (
        <span className="text-gray-700">{apostille}</span>
      )}
    </div>
    <div className="text-center flex items-center justify-center">
      {typeof attestation === 'boolean' ? (
        attestation ? (
          <Check className="text-green-500 w-5 h-5" />
        ) : (
          <X className="text-red-500 w-5 h-5" />
        )
      ) : (
        <span className="text-gray-700">{attestation}</span>
      )}
    </div>
  </div>
);

const comparisonData = [
    {
        title: 'Valid For',
        apostille: 'Hague Convention countries',
        attestation: 'Non-Hague Convention countries',
    },
    {
        title: 'Final Authority',
        apostille: 'MEA with Apostille Sticker',
        attestation: 'Embassy or MOFA Attestation',
    },
    {
        title: 'Intermediate Steps',
        apostille: 'State Attestation (sometimes skipped)',
        attestation: 'HRD / Home Dept. + MEA + Embassy/MOFA',
    },
    {
        title: 'Cost & Time',
        apostille: 'Lower, faster',
        attestation: 'Slightly longer and involves more steps',
    },
];


export default function AttestationComparison() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">COMPARISON</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Difference Between Apostille and Attestation
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
        
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 border-b border-gray-200">
            <div className="font-bold text-gray-800">Feature</div>
            <div className="text-center font-bold text-gray-800">Apostille</div>
            <div className="text-center font-bold text-gray-800">Attestation</div>
          </div>

          <div className="p-4">
            {comparisonData.map((item, index) => (
              <ComparisonItem
                key={index}
                title={item.title}
                apostille={item.apostille}
                attestation={item.attestation}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <p className="text-gray-700">
            <span className="font-medium">Note:</span> The choice between apostille and attestation depends on your destination country. Our experts will guide you on the right process based on your requirements.
          </p>
        </div>
      </div>
    </section>
  );
}