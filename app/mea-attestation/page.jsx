import ServiceHeader from "../components/MEA_Attestation/ServiceHeader";
import AboutSection from "../components/MEA_Attestation/MEAAttestationInfo";
import DocumentsSection from "../components/MEA_Attestation/DocumentTypes";
import ProcessSection from "../components/MEA_Attestation/ProcessSteps";
import PricingSection from "../components/MEA_Attestation/ServiceFees";
import MEAvsMOFA from "../components/MEA_Attestation/MEAvsMOFA";
import WhyChooseUs from "../components/MEA_Attestation/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";
import FAQSection from "../components/MEA_Attestation/FAQSection";

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