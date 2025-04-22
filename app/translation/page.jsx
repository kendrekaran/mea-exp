import ServiceHeader from "../components/translation/ServiceHeader";
import Languages from "../components/translation/Languages";
import DocumentTypes from "../components/translation/DocumentTypes";
import UsageSection from "../components/translation/UsageSection";
import WhyChooseUs from "../components/translation/WhyChooseUs";
import RequirementsSection from "../components/translation/RequirementsSection";
import ContactSection from "../components/MEA_Attestation/ContactSection";

export const metadata = {
  title: "Certified Translation Services | MEA EXPERT",
  description: "Professional document translation services for visa, immigration, and legal use. Certified translations in multiple languages accepted worldwide.",
};

export default function TranslationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader />
      <Languages />
      <DocumentTypes />
      <UsageSection />
      <RequirementsSection />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}