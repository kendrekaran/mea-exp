import React from 'react';
import DocumentTypeHeader from '@/app/components/apostille/DocumentTypeHeader';
import ProcessSteps from '@/app/components/apostille/ProcessSteps';
import WhyChooseUs from '@/app/components/apostille/WhyChooseUs';

export const metadata = {
  title: 'Driving License Apostille Services | MEA Expert',
  description: 'Professional apostille services for Driving Licenses. Fast and reliable document attestation for international recognition.',
};

export default function DrivingLicenseApostille() {
  return (
    <main>
      <DocumentTypeHeader 
        title="Driving License Apostille Services" 
        description="Get your Driving License apostilled for international use. Our expert team ensures efficient and reliable document legalization."
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Driving License Apostille</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Driving License apostille is essential for individuals planning to drive in foreign countries or convert their license abroad. The apostille validates the authenticity of your driving license for use in countries that are members of the Hague Convention.
            </p>
            <p className="text-gray-600 mb-4">
              Our Driving License apostille service includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Document verification and preparation</li>
              <li>Notary attestation</li>
              <li>RTO verification</li>
              <li>State Transport Department attestation</li>
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