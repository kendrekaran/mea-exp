'use client';

import { Globe2, Shield, Clock, Building } from 'lucide-react';

const ComparisonItem = ({ title, apostille, embassy }) => (
  <div className="grid grid-cols-3 gap-4 py-4 border-b last:border-0">
    <div className="font-medium text-gray-900">{title}</div>
    <div className="text-gray-600">{apostille}</div>
    <div className="text-gray-600">{embassy}</div>
  </div>
);

export default function AttestationComparison() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">COMPARISON</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Difference Between Apostille and Embassy Attestation
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4">
            <div className="font-semibold text-gray-900">Feature</div>
            <div className="font-semibold text-gray-900">Apostille</div>
            <div className="font-semibold text-gray-900">Embassy Attestation</div>
          </div>

          {/* Comparison Items */}
          <div className="p-4">
            <ComparisonItem 
              title="Valid For"
              apostille="Hague Convention countries"
              embassy="Non-Hague Convention countries (e.g. UAE)"
            />
            <ComparisonItem 
              title="Final Step"
              apostille="MEA Apostille Sticker"
              embassy="Attestation by respective foreign embassy"
            />
            <ComparisonItem 
              title="Countries"
              apostille="France, Germany, Italy, etc."
              embassy="UAE, Qatar, Saudi, Kuwait, etc."
            />
            <ComparisonItem 
              title="Time & Cost"
              apostille="Quicker, Less Costly"
              embassy="Slightly Longer, Country-specific Fee"
            />
          </div>
        </div>

      </div>
    </section>
  );
}