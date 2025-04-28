"use client";

import { BookOpen, CheckCircle, Clock, Phone } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <article className="pt-20 md:pb-4 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <section 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
        aria-label="About MEA Expert"
      >
        <div className="flex flex-col">
          <header className="mb-10">
            <h2 className="text-[#0A9DB2] md:px-4 text-medium text-xl md:text-2xl font-medium mb-3">
              About the company
            </h2>

            <h1 className="text-3xl md:text-4xl md:px-4 poppins-medium">
              We're Trusted Attestation Apostille Agency.
            </h1>
          </header>

          <figure className="relative w-full h-[450px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/about1.svg"
              alt="Professional MEA Expert team member assisting with document attestation"
              fill
              className="lg:max-h-96 object-cover"
              loading="lazy"
              priority={false}
            />
          </figure>
        </div>

        <div className="flex flex-col mt-0 md:mt-[100px]">
          <div className="content-wrapper">
            <p className="text-gray-600 mb-10 text-lg md:text-xl leading-relaxed">
              MEA Expert is India's trusted provider of document attestation,
              apostille, and legalization services. We specialize in authenticating
              personal, educational, and commercial documents for international use
              - be it for study, work, business, or migration. With verified
              processing for MEA, Embassy, HRD, and Translation, we ensure fast,
              secure, and legally compliant documentation.
            </p>

            <div role="list" className="features-list flex flex-col sm:flex-row gap-8 mb-6">
              <div role="listitem" className="flex items-center gap-4">
                <BookOpen 
                  className="text-[#0A9DB2] h-7 w-7 flex-shrink-0" 
                  aria-hidden="true"
                />
                <p className="font-medium text-lg">Best Attestation Resources</p>
              </div>
            </div>

            <div role="list" className="benefits-list flex flex-col gap-6 mb-10">
              {[
                "Quick, Reliable, and Expert Services",
                "100% Genuine Assistance",
                "24/7 Dedicated Support"
              ].map((benefit, index) => (
                <div key={index} role="listitem" className="flex items-start gap-4">
                  <CheckCircle 
                    className="text-[#0A9DB2] h-7 w-7 flex-shrink-0 mt-1" 
                    aria-hidden="true"
                  />
                  <p className="font-medium text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org markup for Organization */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MEA Expert",
          "description": "India's trusted provider of document attestation, apostille, and legalization services",
          "image": "/about1.svg",
          "url": "https://meaexpert.com",
          "serviceType": [
            "Document Attestation",
            "Apostille Services",
            "Document Legalization",
            "Translation Services"
          ],
          "areaServed": "IN",
          "brand": {
            "@type": "Brand",
            "name": "MEA Expert"
          }
        })
      }} />
    </article>
  );
}