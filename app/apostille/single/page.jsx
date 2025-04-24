import React from 'react';
import DocumentTypeHeader from '@/app/components/apostille/DocumentTypeHeader';
import ProcessSteps from '@/app/components/apostille/ProcessSteps';
import WhyChooseUs from '@/app/components/apostille/WhyChooseUs';

export const metadata = {
  title: 'Single Status Certificate Apostille Services | MEA Expert',
  description: 'Professional apostille services for Single Status Certificates. Quick and reliable document attestation for international recognition.',
};

export default function SingleStatusCertificateApostille() {
  return (
    <main>
      <DocumentTypeHeader 
        title="Single Status Certificate Apostille Services" 
        description="Get your Single Status Certificate apostilled for international use. Our expert team ensures efficient and reliable document legalization."
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Single Status Certificate Apostille</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Single Status Certificate apostille is crucial for individuals who need to prove their marital status in foreign countries. This document is often required for marriage abroad, visa applications, or immigration purposes in countries that are members of the Hague Convention.
            </p>
            <p className="text-gray-600 mb-4">
              Our Single Status Certificate apostille service includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Document verification and preparation</li>
              <li>Notary attestation</li>
              <li>SDM (Sub-Divisional Magistrate) attestation</li>
              <li>MEA apostille stamp</li>
              <li>Comprehensive support throughout the process</li>
            </ul>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <WhyChooseUs />
    </main>
  );
}