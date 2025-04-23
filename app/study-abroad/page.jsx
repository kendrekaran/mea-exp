import ServiceHeader from "../components/study-abroad/ServiceHeader";
import ServicesOffered from "../components/study-abroad/ServicesOffered";
import CountryServices from "../components/study-abroad/CountryServices";
import WhyChooseUs from "../components/study-abroad/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";

export const metadata = {
  title: "Study Abroad Services | MEA EXPERT",
  description: "Complete study abroad consultancy services including document attestation, visa filing, and university admission guidance. Expert support for Canada, USA, UK, Australia & more.",
};

export default function StudyAbroadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader />
      <ServicesOffered />
      <CountryServices />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}