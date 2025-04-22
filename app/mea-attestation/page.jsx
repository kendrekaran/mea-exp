import ServiceHeader from "../components/services/ServiceHeader";
import AboutSection from "../components/services/MEAAttestationInfo";
import DocumentsSection from "../components/services/DocumentTypes";
import ProcessSection from "../components/services/ProcessSteps";
import PricingSection from "../components/services/ServiceFees";
import MEAvsMOFA from "../components/services/MEAvsMOFA";
import WhyChooseUs from "../components/services/WhyChooseUs";
import ContactSection from "../components/services/ContactSection";
import FAQSection from "../components/services/FAQSection";

export const metadata = {
  title: "MEA Attestation Services | MEA EXPERT",
  description: "Professional MEA Attestation services for all document types. Fast, reliable and government-recognized attestation across India.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Service Header */}
      <ServiceHeader />
      <AboutSection />
      <DocumentsSection />
      <ProcessSection />
      <PricingSection />
      <MEAvsMOFA />
      <WhyChooseUs />
      <FAQSection />
      <ContactSection />
    </div>
  );
} 