import AboutAttestation from "../components/hrd-home-attestation/AboutAttestation";
import AttestationComparison from "../components/hrd-home-attestation/AttestationComparison";
import ProcessSteps from "../components/hrd-home-attestation/ProcessSteps";
import ServiceHeader from "../components/hrd-home-attestation/ServiceHeader";
import WhyChooseUs from "../components/hrd-home-attestation/WhyChooseUs";

export const metadata = {
  title: "Apostille Attestation Services | MEA EXPERT",
  description: "Professional Apostille services for all document types. Fast, reliable and MEA-approved attestation across India.",
};

export default function ApostillePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader />
      <AboutAttestation />
      <ProcessSteps />
      <AttestationComparison />
      <WhyChooseUs />
    </div>
  );
}