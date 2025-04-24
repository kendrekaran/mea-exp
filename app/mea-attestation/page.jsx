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
  title: "MEA Attestation Services in India | MEA Expert - Trusted & Official",
  description: "Official MEA attestation services for all documents. Fast processing, government-recognized verification for international use.",
  metadataBase: new URL('https://meaexpert.com/'),
  openGraph: {
    title: 'MEA Attestation Services - MEA Expert',
    description: 'Official MEA document attestation services in India',
    type: 'website',
    images: ['/about1.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'MEA attestation, ministry of external affairs, document attestation, international verification, official attestation',
  canonical: 'https://meaexpert.com/mea-attestation',
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