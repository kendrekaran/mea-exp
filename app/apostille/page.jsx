import ServiceHeader from "../components/apostille/ServiceHeader";
import AboutApostille from "../components/apostille/AboutApostille";
import DocumentTypes from "../components/apostille/DocumentTypes";
import ProcessSteps from "../components/apostille/ProcessSteps";
import PricingSection from "../components/apostille/ServiceFees";
import AttestationVsApostille from "../components/apostille/AttestationVsApostille";
import WhyChooseUs from "../components/apostille/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";

export const metadata = {
  title: "Apostille Attestation Services | MEA EXPERT",
  description: "Professional Apostille services for all document types. Fast, reliable and MEA-approved attestation across India.",
};

export default function ApostillePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader />
      <AboutApostille />
      <DocumentTypes />
      <ProcessSteps />
      <PricingSection />
      <AttestationVsApostille />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}