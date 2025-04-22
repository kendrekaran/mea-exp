'use client';

import { GraduationCap, Building, FileCheck, BookOpen, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutAttestation() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="flex flex-col">
          <h3 className="text-[#0A9DB2] md:px-4 text-medium text-xl md:text-2xl font-medium mb-2">
            Understanding Attestation
          </h3>

          <h2 className="text-3xl md:text-4xl md:px-4 poppins-medium mb-8">
            What is HRD Attestation?
          </h2>

          <div className="relative w-full h-[400px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about1.svg"
              alt="Document attestation process illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col mt-0 md:mt-[90px]">
          <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
            HRD Attestation refers to the authentication of educational certificates by the Human Resource Development (HRD) department of the respective Indian state. It is a mandatory step before MEA attestation or apostille attestation for educational documents.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-100 rounded-full p-3">
                <BookOpen className="text-[#0A9DB2] h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg">HRD Full Form</h4>
                <p className="text-gray-600">Human Resource Development</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-cyan-100 rounded-full p-3">
                <FileCheck className="text-[#0A9DB2] h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg">HRD Attestation Full Form</h4>
                <p className="text-gray-600">Human Resource Development Certificate Attestation</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-100 p-3 rounded-full">
                <CheckCircle className="text-[#0A9DB2] h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Purpose of HRD Attestation</h4>
                <p className="text-gray-700">
                  This process confirms the genuineness of your degree or diploma for international acceptance. It serves as the primary verification step before documents can proceed for MEA attestation or apostille.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}