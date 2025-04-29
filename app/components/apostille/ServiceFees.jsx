'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, FileText, CheckSquare, Clock, CheckCircle } from 'lucide-react';

export default function ServiceFees() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Apostille Service Fees",
    "description": "Cost factors and pricing details for apostille services",
    "eligibleCustomerType": "http://schema.org/Individual",
    "priceType": "Variable",
    "valueAddedTaxIncluded": true,
    "priceComponent": [
      {
        "@type": "PriceComponentSpecification",
        "name": "Document Type",
        "description": "Educational, personal, or commercial documents have different processing fees"
      },
      {
        "@type": "PriceComponentSpecification",
        "name": "State Attestation",
        "description": "Additional fees apply if state-level verification is required"
      },
      {
        "@type": "PriceComponentSpecification",
        "name": "Processing Time",
        "description": "Regular processing (5-7 business days) or expedited options"
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
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="pricing-title">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-[#0A9DB2] px-4 py-2 rounded-full font-medium mb-4">
            <span className="mr-2" role="img" aria-label="pricing">💰</span>
            Apostille Fees & Timelines
          </span>
          <h2 
            id="pricing-title"
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          >
            What Affects Your MEA Apostille Cost?
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your MEA apostille fees may vary depending on several factors:
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-start gap-5 mb-6">
            <AlertCircle className="text-[#0A9DB2] w-8 h-8 mt-1 flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Cost Factors</h3>
              <div className="space-y-6">
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <FileText className="w-5 h-5 mr-3 text-[#0A9DB2]" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-gray-800">Document Type</span>
                    <p className="text-gray-600 mt-1">Educational, personal, or commercial documents have different processing fees</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <CheckSquare className="w-5 h-5 mr-3 text-[#0A9DB2]" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-gray-800">State Attestation</span>
                    <p className="text-gray-600 mt-1">Additional fees apply if state-level verification is required</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <Clock className="w-5 h-5 mr-3 text-[#0A9DB2]" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-gray-800">Processing Time</span>
                    <p className="text-gray-600 mt-1">Regular processing (5-7 business days) or expedited options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h4 className="text-lg font-semibold mb-4">Benefits Included:</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="text-[#0A9DB2] w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
                <span>Free document pick-up and delivery</span>
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="text-[#0A9DB2] w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
                <span>End-to-end tracking system</span>
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="text-[#0A9DB2] w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
                <span>Expert document verification</span>
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="text-[#0A9DB2] w-5 h-5 mr-3 flex-shrink-0" aria-hidden="true" />
                <span>Dedicated support throughout the process</span>
              </li>
            </ul>

            <Link href="/contact" className="block mt-8">
              <button 
                className="w-full py-4 rounded-3xl text-lg mb-4 bg-[#0A9DB2] text-white hover:bg-cyan-700 transition-colors"
                aria-label="Contact for pricing details"
              >
                Get Detailed Pricing
              </button>
            </Link>
            <p className="text-sm text-gray-500 text-center">
              Contact us for a personalized quote based on your specific requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}