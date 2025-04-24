import React from 'react';
import DocumentTypeHeader from '@/app/components/apostille/DocumentTypeHeader';
import ProcessSteps from '@/app/components/apostille/ProcessSteps';
import WhyChooseUs from '@/app/components/apostille/WhyChooseUs';

export const metadata = {
  title: 'GST Certificate Apostille Services | MEA Expert',
  description: 'Professional apostille services for GST Certificates. Fast and reliable document attestation for international business purposes.',
};

export default function GSTCertificateApostille() {
  return (
    <main>
      <DocumentTypeHeader 
        title="GST Certificate Apostille Services" 
        description="Get your GST Certificate apostilled for international business use. Our expert team ensures efficient and reliable document legalization."
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About GST Certificate Apostille</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              GST Certificate apostille is essential for businesses engaging in international trade or establishing their presence abroad. The apostille validates your GST registration for use in countries that are members of the Hague Convention.
            </p>
            <p className="text-gray-600 mb-4">
              Our GST Certificate apostille service includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Document verification and preparation</li>
              <li>Notary attestation</li>
              <li>State GST department verification</li>
              <li>MEA apostille stamp</li>
              <li>Expert guidance throughout the process</li>
            </ul>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <WhyChooseUs />
    </main>
  );
}