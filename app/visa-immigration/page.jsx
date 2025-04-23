import ServiceHeader from "../components/visa-immigration/ServiceHeader";
import VisaCategories from "../components/visa-immigration/VisaCategories";
import ProcessSupport from "../components/visa-immigration/ProcessSupport";
import CountryServices from "../components/visa-immigration/CountryServices";
import WhyChooseUs from "../components/visa-immigration/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";

export const metadata = {
  title: "Visa & Immigration Services | MEA EXPERT",
  description: "Expert visa and immigration services for PR, work permits, tourist & student visas. Complete support for Canada, USA, UK, Australia, and more.",
};

export default function VisaImmigrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader />
      <VisaCategories />
      <ProcessSupport />
      <CountryServices />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}