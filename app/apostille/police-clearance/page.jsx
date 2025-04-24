import React from 'react';
import DocumentTypeHeader from '@/app/components/apostille/DocumentTypeHeader';
import ProcessSteps from '@/app/components/apostille/ProcessSteps';
import WhyChooseUs from '@/app/components/apostille/WhyChooseUs';

export const metadata = {
  title: 'Police Clearance Certificate Apostille Services | MEA Expert',
  description: 'Professional apostille services for Police Clearance Certificates (PCC). Fast and reliable document attestation for international use.',
};

export default function PoliceClearanceCertificateApostille() {
  return (
    <main>
      <DocumentTypeHeader 
        title="Police Clearance Certificate Apostille Services" 
        description="Get your Police Clearance Certificate (PCC) apostilled for international use. Our expert team ensures efficient document legalization that meets all requirements."
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Police Clearance Certificate Apostille</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Police Clearance Certificate (PCC) apostille is essential for various international purposes, including visa applications, employment, and immigration. The apostille validates the authenticity of your PCC for use in countries that are members of the Hague Convention.
            </p>
            <p className="text-gray-600 mb-4">
              Our PCC apostille service includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Document verification and preparation</li>
              <li>Notary attestation</li>
              <li>State Home Department attestation</li>
              <li>MEA apostille stamp</li>
              <li>Complete guidance throughout the process</li>
            </ul>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <WhyChooseUs />
    </main>
  );
}