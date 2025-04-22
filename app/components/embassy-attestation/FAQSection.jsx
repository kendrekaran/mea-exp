'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      className="w-full py-6 text-left flex justify-between items-start"
      onClick={onClick}
    >
      <span className="font-medium text-lg text-gray-900 pr-8">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-6 h-6 text-[#0A9DB2]" />
      ) : (
        <ChevronDown className="w-6 h-6 text-gray-400" />
      )}
    </button>
    {isOpen && (
      <div className="pb-6">
        <p className="text-gray-600">{answer}</p>
      </div>
    )}
  </div>
);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is embassy attestation and why is it required?",
      answer: "Embassy attestation is the process of getting your documents verified by a foreign embassy in India. It's required for using your documents abroad, especially in non-Hague Convention countries. This attestation is mandatory for visa processing, employment, higher education, and business purposes in countries like UAE, Saudi Arabia, and Qatar."
    },
    {
      question: "Which documents need embassy attestation?",
      answer: "Common documents requiring embassy attestation include educational certificates (degrees, diplomas, mark sheets), personal documents (birth certificates, marriage certificates, PCC), and commercial documents (invoices, power of attorney, company documents). The specific requirements depend on the purpose and destination country."
    },
    {
      question: "How long does the embassy attestation process take?",
      answer: "The timeline varies by embassy and document type, typically ranging from 7-15 working days. Factors affecting processing time include document verification, state-level attestation, MEA processing, and embassy procedures. We offer express services for urgent requirements."
    },
    {
      question: "Do I need to visit the embassy in person?",
      answer: "No, you don't need to visit the embassy personally. As authorized attestation service providers, we handle the complete process on your behalf, from document collection to delivery. We coordinate with all necessary authorities and embassies."
    },
    {
      question: "What is MOFA attestation?",
      answer: "MOFA (Ministry of Foreign Affairs) attestation is an additional verification required in some countries after embassy attestation. It's typically needed in Gulf countries where your documents need to be verified by their local MOFA after Indian embassy attestation."
    },
    {
      question: "What are the steps involved in embassy attestation?",
      answer: "The process typically involves: 1) Document verification from issuing authority, 2) State-level attestation (HRD/Home Department), 3) MEA (Ministry of External Affairs) attestation, 4) Embassy attestation, and 5) MOFA attestation (if required). We handle all these steps systematically."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">FAQ</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get answers to common questions about embassy attestation services
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don't see your question here?{' '}
            <a href="#contact" className="text-[#0A9DB2] font-medium hover:underline">
              Contact us
            </a>{' '}
            for more information
          </p>
        </div>
      </div>
    </section>
  );
}