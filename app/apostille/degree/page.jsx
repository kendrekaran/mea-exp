import React from 'react';
import DocumentTypeHeader from '@/app/components/apostille/DocumentTypeHeader';
import ProcessSteps from '@/app/components/apostille/ProcessSteps';
import WhyChooseUs from '@/app/components/apostille/WhyChooseUs';

export const metadata = {
  title: 'Degree Certificate Apostille Services | MEA Expert',
  description: 'Professional apostille services for degree certificates. Fast, reliable, and government-approved document attestation for international use.',
};

export default function DegreeCertificateApostille() {
  return (
    <main>
      <DocumentTypeHeader 
        title="Degree Certificate Apostille Services" 
        description="Get your degree certificates apostilled for international recognition. Our experts ensure quick and reliable document legalization that meets all requirements."
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Degree Certificate Apostille</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Degree certificate apostille is a crucial process for students and professionals planning to use their educational credentials abroad. The apostille certifies the authenticity of your degree certificate for international recognition in countries that are members of the Hague Convention.
            </p>
            <p className="text-gray-600 mb-4">
              Our comprehensive degree certificate apostille service includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Document verification and preparation</li>
              <li>MEA (Ministry of External Affairs) apostille stamp</li>
              <li>Notary attestation when required</li>
              <li>HRD verification for educational documents</li>
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