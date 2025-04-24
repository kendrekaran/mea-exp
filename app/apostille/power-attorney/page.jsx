import React from 'react';
import DocumentTypeHeader from '@/app/components/apostille/DocumentTypeHeader';
import ProcessSteps from '@/app/components/apostille/ProcessSteps';
import WhyChooseUs from '@/app/components/apostille/WhyChooseUs';

export const metadata = {
  title: 'Power of Attorney Apostille Services | MEA Expert',
  description: 'Professional apostille services for Power of Attorney documents. Fast and reliable document attestation for international legal use.',
};

export default function PowerOfAttorneyApostille() {
  return (
    <main>
      <DocumentTypeHeader 
        title="Power of Attorney Apostille Services" 
        description="Get your Power of Attorney document apostilled for international use. Our expert team ensures efficient and reliable document legalization."
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Power of Attorney Apostille</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Power of Attorney apostille is crucial for individuals and businesses who need to authorize representatives to act on their behalf in foreign countries. The apostille ensures your Power of Attorney is legally recognized in countries that are members of the Hague Convention.
            </p>
            <p className="text-gray-600 mb-4">
              Our Power of Attorney apostille service includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Document verification and preparation</li>
              <li>Notary attestation</li>
              <li>Sub-Registrar verification</li>
              <li>MEA apostille stamp</li>
              <li>Comprehensive legal guidance</li>
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