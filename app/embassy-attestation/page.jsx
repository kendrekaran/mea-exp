import ServiceHeader from "../components/embassy-attestation/ServiceHeader";

import DocumentTypes from "../components/embassy-attestation/DocumentTypes";
import ProcessSteps from "../components/embassy-attestation/ProcessSteps";

import AttestationComparison from "../components/embassy-attestation/AttestationComparison";
import WhyChooseUs from "../components/embassy-attestation/WhyChooseUs";

import ContactSection from "../components/MEA_Attestation/ContactSection";
import AboutAttestation from "../components/embassy-attestation/AboutAttestation";

export const metadata = {
  title: "Embassy Attestation Services in India | MEA Expert - Trusted & Quick",
  description: "Professional embassy attestation services for all documents. Fast processing, reliable service for international document verification.",
  metadataBase: new URL('https://meaexpert.com/'),
  openGraph: {
    title: 'Embassy Attestation Services - MEA Expert',
    description: 'Professional embassy attestation services in India',
    type: 'website',
    images: ['/about1.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'embassy attestation, document attestation, embassy verification, international attestation, MEA embassy services',
  canonical: 'https://meaexpert.com/embassy-attestation',
};

export default function EmbassyAttestationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader />
      <AboutAttestation />
      <DocumentTypes />
      <ProcessSteps />
      <AttestationComparison />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}