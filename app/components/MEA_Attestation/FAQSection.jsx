'use client';

import Head from 'next/head';
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
    <>
      <Head>
        <meta name="description" content="Frequently asked questions about MEA attestation process, timeline, and requirements. Learn about document verification by Ministry of External Affairs." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Head>
      <section 
        className="py-20 px-4 bg-gray-50"
        aria-labelledby="faq-title"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-14">
            <p className="text-[#0A9DB2] font-semibold tracking-wider mb-3">COMMON QUESTIONS</p>
            <h2
              id="faq-title"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto" role="presentation"></div>
          </header>

          <div 
            className="bg-white rounded-lg shadow-sm p-6 md:p-8"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            <div 
              className="space-y-4"
              role="list"
              aria-label="Frequently Asked Questions about MEA attestation"
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  itemProp="mainEntity"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span 
                      className="text-lg font-medium text-gray-900"
                      itemProp="name"
                    >
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-[#0A9DB2]" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#0A9DB2]" aria-hidden="true" />
                    )}
                  </button>
                  
                  {openFaq === index && (
                    <div 
                      id={`faq-answer-${index}`}
                      className="p-4 bg-white border-t border-gray-200"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <p 
                        className="text-gray-700"
                        itemProp="text"
                      >
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
    </>
  );
}