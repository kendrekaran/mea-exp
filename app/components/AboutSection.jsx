"use client";

import { BookOpen, CheckCircle, Clock, Phone } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="pt-20 md:pb-4 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="flex flex-col">
          <h3 className="text-[#0A9DB2] md:px-4 text-medium text-xl md:text-2xl font-medium mb-3">
            About the company
          </h3>

          <h2 className="text-3xl md:text-4xl md:px-4 poppins-medium mb-10">
            We're Trusted Attestation Apostille Agency.
          </h2>

          <div className="relative w-full h-[450px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/about1.svg"
              alt="Attestation service representative helping a client with documents"
              fill
              className="lg:max-h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col mt-0 md:mt-[100px]">
          <p className="text-gray-600 mb-10 text-lg md:text-xl leading-relaxed">
            MEA Expert is India's trusted provider of document attestation,
            apostille, and legalization services. We specialize in authenticating
            personal, educational, and commercial documents for international use
            - be it for study, work, business, or migration. With verified
            processing for MEA, Embassy, HRD, and Translation, we ensure fast,
            secure, and legally compliant documentation.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 mb-6">
            <div className="flex items-center gap-4">
              <BookOpen className="text-[#0A9DB2] h-7 w-7 flex-shrink-0" />
              <p className="font-medium text-lg">Best Attestation Resources</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 mb-10">
          <div className="flex items-start gap-4">
            <CheckCircle className="text-[#0A9DB2] h-7 w-7 flex-shrink-0 mt-1" />
            <p className="font-medium text-lg">
              Quick, Reliable, and Expert Services
            </p>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="text-[#0A9DB2] h-7 w-7 flex-shrink-0 mt-1" />
            <p className="font-medium text-lg">
            100% Genuine Assistance
            </p>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="text-[#0A9DB2] h-7 w-7 flex-shrink-0 mt-1" />
            <p className="font-medium text-lg">
              24/7 Dedicated Support
            </p>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}