'use client';

import { useEffect } from 'react';
import { Info, CheckCircle, X } from 'lucide-react';

const ComparisonItem = ({ title, attestation, apostille }) => (
  <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100">
    <div className="font-medium text-gray-800">{title}</div>
    <div className="text-center">
      {typeof attestation === 'boolean' ? (
        attestation ? (
          <CheckCircle className="text-green-500 w-5 h-5 mx-auto" aria-label="Yes" />
        ) : (
          <X className="text-red-500 w-5 h-5 mx-auto" aria-label="No" />
        )
      ) : (
        <span className="text-gray-700">{attestation}</span>
      )}
    </div>
    <div className="text-center">
      {typeof apostille === 'boolean' ? (
        apostille ? (
          <CheckCircle className="text-green-500 w-5 h-5 mx-auto" aria-label="Yes" />
        ) : (
          <X className="text-red-500 w-5 h-5 mx-auto" aria-label="No" />
        )
      ) : (
        <span className="text-gray-700">{apostille}</span>
      )}
    </div>
  </div>
);

const comparisonData = [
  {
    title: 'Required Steps',
    attestation: '3-4 Steps',
    apostille: '2-3 Steps',
  },
  {
    title: 'Embassy Legalization',
    attestation: true,
    apostille: false,
  },
  {
    title: 'MEA Verification',
    attestation: true,
    apostille: true,
  },
  {
    title: 'Processing Time',
    attestation: '7-15 days',
    apostille: '3-7 days',
  },
  {
    title: 'Global Acceptance',
    attestation: 'All Countries',
    apostille: 'Hague Members',
  },
  {
    title: 'Unique ID Number',
    attestation: false,
    apostille: true,
  },
];

export default function AttestationVsApostille() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Apostille?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apostille is a type of attestation specific to Hague Convention countries, where only MEA legalization is required — no embassy step needed. It involves a square-shaped sticker with a unique identification number that makes documents valid internationally."
        }
      },
      {
        "@type": "Question",
        "name": "What is Attestation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Attestation is a general term for document verification that may involve state, MEA, and embassy validation. It typically requires multiple steps including embassy verification, making it suitable for all countries."
        }
      }
    ]
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-cyan-50 to-white" aria-labelledby="comparison-title">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-100 text-[#0A9DB2] px-4 py-2 rounded-full font-medium mb-4">
            <span className="mr-2" role="img" aria-label="light bulb">💡</span>Document Verification Guide
          </span>
          <h2 
            id="comparison-title"
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          >
            Attestation vs Apostille
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#0A9DB2] text-white px-4 py-1 rounded-bl-lg">Apostille</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 mt-6">What is Apostille?</h3>
            <p className="text-gray-700">
              Apostille is a type of attestation specific to Hague Convention countries, where only MEA legalization is required — no embassy step needed.
            </p>
            <div className="mt-4 bg-cyan-50 p-4 rounded-lg flex items-start">
              <Info className="text-[#0A9DB2] w-5 h-5 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                Simplified process with fewer steps, but limited to Hague Convention member countries.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#0A9DB2] text-white px-4 py-1 rounded-bl-lg">Attestation</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 mt-6">What is Attestation?</h3>
            <p className="text-gray-700">
              Attestation is a general term for document verification that may involve state, MEA, and embassy validation.
            </p>
            <div className="mt-4 bg-cyan-50 p-4 rounded-lg flex items-start">
              <Info className="text-[#0A9DB2] w-5 h-5 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                Typically requires multiple steps including embassy verification, making it suitable for all countries.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 border-b border-gray-200 font-bold">
            <div className="text-gray-800">Feature</div>
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
      </div>
    </section>
  );
}