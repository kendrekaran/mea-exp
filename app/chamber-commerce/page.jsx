import ServiceHeader from "../components/chamber-commerce/ServiceHeader";
import AboutAttestation from "../components/chamber-commerce/AboutAttestation";
import DocumentTypes from "../components/chamber-commerce/DocumentTypes";
import ProcessSteps from "../components/chamber-commerce/ProcessSteps";
import UseCases from "../components/chamber-commerce/UseCases";
import WhyChooseUs from "../components/chamber-commerce/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";

export const metadata = {
  title: "Chamber of Commerce Attestation Services | MEA EXPERT",
  description: "Professional Chamber of Commerce attestation services for business documents across India. Fast, reliable attestation for international trade & business.",
};

export default function ChamberAttestationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader />
      <AboutAttestation />
      <DocumentTypes />
      <ProcessSteps />
      <UseCases />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}