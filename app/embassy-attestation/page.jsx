import ServiceHeader from "../components/embassy-attestation/ServiceHeader";

import DocumentTypes from "../components/embassy-attestation/DocumentTypes";
import ProcessSteps from "../components/embassy-attestation/ProcessSteps";

import AttestationComparison from "../components/embassy-attestation/AttestationComparison";
import WhyChooseUs from "../components/embassy-attestation/WhyChooseUs";

import ContactSection from "../components/MEA_Attestation/ContactSection";
import AboutAttestation from "../components/embassy-attestation/AboutAttestation";

export const metadata = {
  title: "Embassy Attestation Services | MEA EXPERT",
  description: "Professional embassy attestation services for UAE, Qatar, Saudi Arabia and other countries. Fast, reliable attestation across India.",
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