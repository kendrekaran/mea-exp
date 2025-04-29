"use client"
import React, {  useEffect } from 'react';
import {  ClipboardCheck, FileText, CreditCard, Search, FileCheck } from 'lucide-react';
import Head from 'next/head';



const steps = [
  {
    icon: ClipboardCheck,
    title: "Register for MEA Apostille",
    description: "Complete the registration process for MEA apostille service"
  },
  {
    icon: FileText,
    title: "Send the original documents for apostille",
    description: "Submit your original documents for the apostille process"
  },
  {
    icon: CreditCard,
    title: "Make the payment online for MEA apostille",
    description: "Secure online payment for your apostille service"
  },
  {
    icon: Search,
    title: "Track processing status of MEA apostille",
    description: "Monitor your document's apostille processing status"
  },
  {
    icon: FileCheck,
    title: "Once MEA apostille document is returned",
    description: "Receive your completed apostille document"
  }
];

function StepsSection() {
  // Add structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "MEA Apostille Process Steps",
    "description": "Step-by-step guide for obtaining MEA Apostille certification",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description
    }))
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50" role="main">
      <Head>
        <title>MEA Apostille Process Steps - Simple Guide to Document Attestation</title>
        <meta name="description" content="Learn the step-by-step process for MEA Apostille certification. From registration to document submission, payment, tracking, and completion." />
        <meta name="keywords" content="MEA apostille steps, document attestation process, apostille certification, India" />
      </Head>

      <section className="py-16 bg-white" aria-label="MEA Apostille Process">
        <div className="container mx-auto px-4">
          <header className="text-center mb-8">
            <h2 className="text-5xl poppins-medium mb-16">
              <span className="text-black">Steps to get </span>
              <span className="text-[#0A9DB2]">MEA Apostille</span>
            </h2>
          </header>

          <div className="max-w-3xl mx-auto" role="list">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-center mb-4"
                role="listitem"
                aria-label={`Step ${index + 1}: ${step.title}`}
              >
                <div 
                  className="w-12 h-12 rounded-full bg-[#0A9DB2] flex items-center justify-center text-white font-bold mr-4"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3">
                    <step.icon className="w-6 h-6 text-[#0A9DB2]" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-gray-600 ml-9">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default StepsSection;