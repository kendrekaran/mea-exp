'use client';

import { Building, FileCheck, Globe2, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutAttestation() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 space-y-24 max-w-7xl mx-auto">
      
      {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col">
            <div className="mb-8">
          <h3 className="text-[#0A9DB2] text-xl md:text-2xl font-medium mb-3">
            Understanding Embassy Attestation
          </h3>
          <h2 className="text-3xl md:text-5xl poppins-medium mb-8">
            What is Embassy Attestation?
          </h2>
            </div>
            
            <div className="space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            Embassy Attestation is the process where the respective foreign country's embassy in India certifies your documents after <span className="font-semibold">MEA (Ministry of External Affairs)</span> attestation. It confirms that your certificates are <span className="font-semibold">genuine and legally valid</span> for visa, employment, or higher education abroad.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            It is often followed by <span className="font-semibold">MOFA Attestation</span> (Ministry of Foreign Affairs) in the destination country.
          </p>
            </div>
            
          </div>
          
          <div className="order-1 md:order-2 relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
            <Image
          src="/about1.svg"
          alt="Embassy requirements illustration"
          fill
          className="object-cover"
          priority
            />
          </div>
        </div>

        {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


      <div className="order-1 md:order-1 relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/about2.svg"
            alt="Embassy requirements illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

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
        
      </div>
    </section>
  );
}