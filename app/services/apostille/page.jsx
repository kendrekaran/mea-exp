import ServiceHeader from "../../components/services/apostille/ServiceHeader";
import AboutApostille from "../../components/services/apostille/AboutApostille";
import DocumentTypes from "../../components/services/apostille/DocumentTypes";
import ProcessSteps from "../../components/services/apostille/ProcessSteps";
import PricingSection from "../../components/services/apostille/ServiceFees";
import AttestationVsApostille from "../../components/services/apostille/AttestationVsApostille";
import WhyChooseUs from "../../components/services/apostille/WhyChooseUs";
import ContactSection from "../../components/services/ContactSection";

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