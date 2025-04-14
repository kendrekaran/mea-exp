"use client";

import { BookOpen, CheckCircle, Clock, Phone } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="flex flex-col">
          <h3 className="text-[#0A9DB2] md:px-4 text-medium text-xl md:text-2xl font-medium mb-2">
            About the company
          </h3>

          <h2 className="text-3xl md:text-4xl md:px-4 poppins-medium mb-8">
            We're Trusted Attestation Apostille Agency.
          </h2>

          <div className="relative w-full h-[400px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about1.svg"
              alt="Attestation service representative helping a client with documents"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col mt-0 md:mt-[90px]">
          <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
            MEA Expert is India's trusted provider of document attestation,
            apostille, and legalization services. We specialize in authenticating
            personal, educational, and commercial documents for international use
            - be it for study, work, business, or migration. With verified
            processing for MEA, Embassy, HRD, and Translation, we ensure fast,
            secure, and legally compliant documentation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="text-[#0A9DB2] h-6 w-6 flex-shrink-0" />
              <p className="font-medium">Best Attestation Resources</p>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-[#0A9DB2] h-6 w-6 flex-shrink-0" />
              <p className="font-medium">Quick Processing</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#0A9DB2] h-6 w-6 flex-shrink-0" />
              <p className="font-medium">Offer 100 % Genuine Assistance</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#0A9DB2] h-6 w-6 flex-shrink-0" />
              <p className="font-medium">It's Faster & Reliable Execution</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#0A9DB2] h-6 w-6 flex-shrink-0" />
              <p className="font-medium">Accurate & Expert Advice</p>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-4">
            <div className="bg-[#0A9DB2] text-white p-3 rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Have any questions?</p>
              <p className="text-2xl font-bold">+ 91 7878868595</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
