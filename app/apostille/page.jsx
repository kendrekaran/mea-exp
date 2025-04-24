import ServiceHeader from "../components/apostille/ServiceHeader";
import AboutApostille from "../components/apostille/AboutApostille";
import DocumentTypes from "../components/apostille/DocumentTypes";
import ProcessSteps from "../components/apostille/ProcessSteps";
import PricingSection from "../components/apostille/ServiceFees";
import AttestationVsApostille from "../components/apostille/AttestationVsApostille";
import WhyChooseUs from "../components/apostille/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";

export const metadata = {
  title: "Apostille Services in India | MEA Expert - All Document Types",
  description: "Comprehensive apostille services for all documents. Fast processing, government-recognized attestation for international use with expert assistance.",
  metadataBase: new URL('https://meaexpert.com/'),
  openGraph: {
    title: 'Apostille Services - MEA Expert',
    description: 'Complete apostille services for all document types',
    type: 'website',
    images: ['/about1.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'apostille services, document apostille, Hague convention, international document verification, MEA apostille stamp',
  canonical: 'https://meaexpert.com/apostille',
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