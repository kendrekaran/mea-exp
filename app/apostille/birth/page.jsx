import React from 'react';
import DocumentTypeHeader from '@/app/components/apostille/DocumentTypeHeader';
import ProcessSteps from '@/app/components/apostille/ProcessSteps';
import WhyChooseUs from '@/app/components/apostille/WhyChooseUs';

export const metadata = {
  title: 'Birth Certificate Apostille Services | MEA Expert',
  description: 'Professional apostille services for birth certificates. Fast and reliable document attestation for international recognition.',
};

export default function BirthCertificateApostille() {
  return (
    <main>
      <DocumentTypeHeader 
        title="Birth Certificate Apostille Services" 
        description="Get your birth certificate apostilled for international use. Our expert team ensures smooth and efficient document legalization process."
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Birth Certificate Apostille</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Birth certificate apostille is essential for various international purposes, including immigration, education, and employment. The apostille confirms the authenticity of your birth certificate for use in countries that are part of the Hague Convention.
            </p>
            <p className="text-gray-600 mb-4">
              Our birth certificate apostille service includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Document verification and preparation</li>
              <li>SDM (Sub-Divisional Magistrate) attestation</li>
              <li>MEA apostille stamp</li>
              <li>Notary attestation when required</li>
              <li>Complete assistance throughout the process</li>
            </ul>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <WhyChooseUs />
    </main>
  );
}