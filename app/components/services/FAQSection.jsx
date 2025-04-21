'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: "What is the full form of MEA attestation?",
      answer: "MEA stands for Ministry of External Affairs. MEA attestation means document verification by this authority."
    },
    {
      question: "How long does MEA attestation take?",
      answer: "Usually 3–5 working days, depending on the document type and state authentication."
    },
    {
      question: "Do I need embassy attestation after MEA?",
      answer: "Yes, if your destination country requires it (e.g., UAE, Qatar, Saudi Arabia)."
    },
    {
      question: "Can I get MEA attestation without HRD or Home attestation?",
      answer: "No, MEA only processes documents attested by the relevant state departments."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h6 className="text-[#0A9DB2] font-semibold tracking-wider mb-3">COMMON QUESTIONS</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#0A9DB2]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#0A9DB2]" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Have more questions? Feel free to 
              <a href="/contact" className="text-[#0A9DB2] hover:underline mx-1">
                contact our team
              </a>
              for assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 