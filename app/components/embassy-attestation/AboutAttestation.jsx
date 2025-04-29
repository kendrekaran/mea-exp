'use client';

import Head from 'next/head';
import { Building, FileCheck, Globe2, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutAttestation() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Understanding Embassy Attestation",
            "description": "Learn about Embassy Attestation process, its importance for visa issuance, and requirements for countries like UAE, Saudi Arabia, and Qatar.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://meaexpert.com/embassy-attestation"
            }
          })}
        </script>
      </Head>
      <section 
        className="py-20 px-4 md:px-8 lg:px-16 space-y-24 max-w-7xl mx-auto"
        aria-labelledby="embassy-title"
      >
        <article className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col">
            <header className="mb-8">
              <h1 
                id="embassy-title"
                className="text-[#0A9DB2] text-xl md:text-2xl font-medium mb-3"
              >
                Understanding Embassy Attestation
              </h1>
              <h2 className="text-3xl md:text-5xl poppins-medium mb-8">
                What is Embassy Attestation?
              </h2>
            </header>
            
            <div className="space-y-6" itemProp="articleBody">
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong>Embassy Attestation</strong> is the process where the respective foreign country's embassy in India certifies your documents after <span className="font-semibold">MEA (Ministry of External Affairs)</span> attestation. It confirms that your certificates are <span className="font-semibold">genuine and legally valid</span> for visa, employment, or higher education abroad.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                It is often followed by <span className="font-semibold">MOFA Attestation</span> (Ministry of Foreign Affairs) in the destination country.
              </p>
            </div>
          </div>
          
          <figure className="order-1 md:order-2 relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://i.pinimg.com/736x/83/6d/d3/836dd3b9965ef275822164a77e183b65.jpg"
              alt="Detailed process of Embassy Attestation and document verification"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
        </article>

        <article 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          itemScope
          itemType="https://schema.org/Article"
        >
          <figure className="order-1 md:order-1 relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about2.svg"
              alt="Requirements and importance of Embassy verification process"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>

          <div className="order-2 md:order-2 flex flex-col">
            <div className="mb-8">
              <h3 className="text-[#0A9DB2] text-xl md:text-2xl font-medium mb-3">
                Importance of Embassy Verification
              </h3>
              <h2 className="text-3xl md:text-5xl poppins-medium mb-8">
                Why Embassy Attestation is Required
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Embassy attestation is <span className="font-semibold">mandatory for visa issuance</span>, whether it's for employment, higher education, family sponsorship, business, or PR.
                Countries like the <span className="font-semibold">UAE, Saudi Arabia, and Qatar</span> require embassy-verified documents for processing <span className="font-semibold">work permits</span> and <span className="font-semibold">residence visas</span>.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}