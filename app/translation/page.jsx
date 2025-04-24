import ServiceHeader from "../components/translation/ServiceHeader";
import Languages from "../components/translation/Languages";
import DocumentTypes from "../components/translation/DocumentTypes";
import UsageSection from "../components/translation/UsageSection";
import WhyChooseUs from "../components/translation/WhyChooseUs";
import RequirementsSection from "../components/translation/RequirementsSection";
import ContactSection from "../components/MEA_Attestation/ContactSection";

export const metadata = {
  title: "Professional Document Translation Services | MEA Expert",
  description: "Expert document translation services in multiple languages. Certified translations for legal, academic, and business documents.",
  metadataBase: new URL('https://meaexpert.com/'),
  openGraph: {
    title: 'Document Translation Services - MEA Expert',
    description: 'Professional document translation services in India',
    type: 'website',
    images: ['/about1.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'document translation, certified translation, legal translation, academic translation, business document translation, multi-language translation',
  canonical: 'https://meaexpert.com/translation',
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