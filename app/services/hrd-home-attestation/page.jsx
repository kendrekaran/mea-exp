import ServiceHeader from "../../components/services/hrd-home-attestation/ServiceHeader";
import AboutAttestation from "../../components/services/hrd-home-attestation/AboutAttestation";
import DocumentTypes from "../../components/services/hrd-home-attestation/DocumentTypes";
import ProcessSteps from "../../components/services/hrd-home-attestation/ProcessSteps";
import AttestationComparison from "../../components/services/hrd-home-attestation/AttestationComparison";
import WhyChooseUs from "../../components/services/hrd-home-attestation/WhyChooseUs";
import ContactSection from "../../components/services/ContactSection";

export const metadata = {
  title: "HRD & Home Department Attestation Services | MEA EXPERT",
  description: "Professional HRD and Home Department attestation services for all educational and personal documents. Fast, reliable attestation across India.",
};

export default function HrdHomePage() {
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