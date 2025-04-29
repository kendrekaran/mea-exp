'use client';

import Head from 'next/head';
import { GraduationCap, FileCheck, BookOpen, CheckCircle, Globe2 } from 'lucide-react';
import Image from 'next/image';

const HomeDocumentList = [
  "Birth Certificates",
  "Marriage Certificates",
  "Divorce Papers",
  "Police Clearance Certificates (PCC)",
];

const HRDRequirements = [
  "Planning to study abroad",
  "Applying for work visas or job opportunities overseas",
  "Immigration or PR processing",
  "Professional licensing in Gulf or European countries",
];

const AttestationBenefits = [
  "Genuine and issued by recognized authorities",
  "Verified for legal and academic use abroad",
  "Compliant with the immigration and embassy requirements",
];

export default function AboutAttestation() {
  return (
    <>
      <Head>
        <meta name="description" content="Learn about HRD Attestation and Home Department Attestation in India. Complete guide for educational and personal document attestation for international use." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Understanding HRD and Home Department Attestation",
            "description": "Comprehensive guide about HRD Attestation and Home Department Attestation processes in India",
            "mainEntity": [{
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is HRD Attestation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HRD Attestation refers to the authentication of educational certificates by the Human Resource Development (HRD) department of the respective Indian state."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Home Department Attestation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Home Department attestation is done for personal documents and is a prerequisite step before apostille or embassy attestation."
                  }
                }
              ]
            }]
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        aria-labelledby="attestation-title"
      >
        <article className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex flex-col">
            <h2 className="text-[#0A9DB2] text-lg font-medium mb-2">
              Understanding Attestation
            </h2>
            <h1 
              id="attestation-title"
              className="text-3xl md:text-4xl font-semibold mb-6"
              itemProp="headline"
            >
              What is HRD Attestation?
            </h1>
            <div itemProp="articleBody">
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                <strong>HRD Attestation</strong> refers to the authentication of educational certificates by the Human Resource Development (HRD) department of the respective Indian state. It is a mandatory step before MEA attestation or apostille attestation for educational documents.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-100 rounded-full p-3">
                    <BookOpen className="text-[#0A9DB2] h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">HRD Full Form</h4>
                    <p className="text-gray-600">Human Resource Development</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-cyan-100 rounded-full p-3">
                    <FileCheck className="text-[#0A9DB2] h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">HRD Attestation Full Form</h4>
                    <p className="text-gray-600">Human Resource Development Certificate Attestation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <figure className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://i.pinimg.com/474x/1f/42/fc/1f42fc28efecaee5c63be08a301cf993.jpg"
              alt="Detailed process of HRD document attestation"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
        </article>

        {/* Home Department Attestation Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-20">
          <h3 className="text-2xl font-semibold mb-6">
            What is Home Department Attestation?
          </h3>
          <p className="text-gray-600 mb-8">
            The <b>Home Department attestation</b> is typically done for personal documents and is a prerequisite step before apostille or embassy attestation, especially for countries not under the Hague Convention.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {HomeDocumentList.map((doc, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-cyan-100 rounded-full p-2">
                  <FileCheck className="text-[#0A9DB2] h-5 w-5" />
                </div>
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* When HRD Attestation Required Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-6">
            When Is HRD Attestation Required?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {HRDRequirements.map((req, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-cyan-100 rounded-full p-2 mt-1">
                  <Globe2 className="text-[#0A9DB2] h-5 w-5" />
                </div>
                <p className="text-gray-700 mt-2">{req}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600">
            Many countries, including the UAE, Germany, and Canada, require degree certificate attestation and education certificate attestation via HRD and MEA before embassy verification.
          </p>
        </div>

        {/* Why Attestation Required Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6">
            Why Attestation is Required?
          </h3>
          <p className="text-gray-600 mb-6">
            Attestation proves that your documents are verified and valid for international use:
          </p>
          <div className="space-y-4 mb-8">
            {AttestationBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-[#0A9DB2] h-5 w-5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700">
              <span className="font-medium">Note:</span> Still confused about attestation meaning in Hindi? 
              It simply means "<span className="font-medium">प्रमाणन</span>", which translates to authentication or validation of documents.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}