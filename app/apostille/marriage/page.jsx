import React from 'react';
import DocumentTypeHeader from '@/app/components/apostille/DocumentTypeHeader';
import ProcessSteps from '@/app/components/apostille/ProcessSteps';
import WhyChooseUs from '@/app/components/apostille/WhyChooseUs';

export const metadata = {
  title: 'Marriage Certificate Apostille Services | MEA Expert',
  description: 'Professional apostille services for marriage certificates. Quick and reliable document attestation for international recognition.',
};

export default function MarriageCertificateApostille() {
  return (
    <main>
      <DocumentTypeHeader 
        title="Marriage Certificate Apostille Services" 
        description="Get your marriage certificate apostilled for international recognition. Our experts ensure efficient and reliable document legalization."
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Marriage Certificate Apostille</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Marriage certificate apostille is crucial for couples planning to relocate abroad or seeking recognition of their marriage in another country. The apostille verifies the authenticity of your marriage certificate for use in Hague Convention member countries.
            </p>
            <p className="text-gray-600 mb-4">
              Our marriage certificate apostille service includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Document verification and preparation</li>
              <li>Marriage registrar attestation</li>
              <li>MEA apostille stamp</li>
              <li>Notary attestation when required</li>
              <li>Complete guidance and support</li>
            </ul>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <WhyChooseUs />
    </main>
  );
}