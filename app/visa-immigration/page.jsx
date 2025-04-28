import ServiceHeader from "../components/visa-immigration/ServiceHeader";
import VisaCategories from "../components/visa-immigration/VisaCategories";
import ProcessSupport from "../components/visa-immigration/ProcessSupport";
import CountryServices from "../components/visa-immigration/CountryServices";
import WhyChooseUs from "../components/visa-immigration/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "Visa & Immigration Services | MEA Expert - Expert Guidance",
  description: "Professional visa and immigration services. Expert assistance for all types of visas, immigration processes, and documentation.",
  metadataBase: new URL('https://meaexpert.com/'),
  openGraph: {
    title: 'Visa & Immigration Services - MEA Expert',
    description: 'Complete visa and immigration services in India',
    type: 'website',
    images: ['/about1.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'visa services, immigration services, work visa, student visa, tourist visa, PR visa, visa consultation',
  canonical: 'https://meaexpert.com/visa-immigration',
};

export default function VisaImmigrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <ServiceHeader />
      <VisaCategories />
      <ProcessSupport />
      <CountryServices />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}