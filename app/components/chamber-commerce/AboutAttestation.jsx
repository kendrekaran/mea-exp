'use client';

import { Building, FileCheck, Globe2 } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';

const features = [
  {
    icon: Building,
    title: 'Authentication Process',
    description: 'Authentication of commercial documents by the regional Chamber of Commerce.'
  },
  {
    icon: FileCheck,
    title: 'Document Legitimacy',
    description: 'Confirms the legitimacy of company documents before MEA and Embassy legalization.'
  },
  {
    icon: Globe2,
    title: 'International Requirements',
    description: 'Essential for international trade, business expansion, and visa applications.'
  }
];

export default function AboutAttestation() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Understanding Chamber of Commerce Attestation",
            "description": "Learn about Chamber of Commerce attestation process, document legitimacy, and international requirements for business documents.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://yourdomain.com/chamber-commerce-attestation"
            }
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        aria-labelledby="attestation-title"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <article className="order-2 md:order-1 flex flex-col">
            <header className="mb-8">
              <h1 
                id="attestation-title"
                className="text-[#0A9DB2] text-xl md:text-2xl font-medium mb-3"
              >
                Understanding Chamber of Commerce Attestation
              </h1>
              <h2 className="text-3xl md:text-5xl poppins-medium mb-8">
                What is Chamber of Commerce Attestation?
              </h2>
            </header>
            
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong>Chamber Attestation</strong> is the authentication of commercial documents by the regional Chamber of Commerce. This attestation confirms the <span className="font-semibold">legitimacy of company documents</span> before they are legalized by the <span className="font-semibold">Ministry of External Affairs (MEA)</span> and the Embassy of the destination country.
              </p>
            </div>
          </article>
          
          <figure className="order-1 md:order-2 relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://i.pinimg.com/736x/6f/d9/01/6fd901385758def2fd4704e47dbae77a.jpg"
              alt="Official process of Chamber of Commerce document attestation and verification"
              fill
              className="object-cover"
              loading="eager"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
        </div>
      </section>
    </>
  );
}