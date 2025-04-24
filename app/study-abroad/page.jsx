import ServiceHeader from "../components/study-abroad/ServiceHeader";
import ServicesOffered from "../components/study-abroad/ServicesOffered";
import CountryServices from "../components/study-abroad/CountryServices";
import WhyChooseUs from "../components/study-abroad/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";

export const metadata = {
  title: "Study Abroad Documentation Services | MEA Expert - Complete Assistance",
  description: "Complete study abroad documentation services. Expert assistance for visas, attestation, and translations for international students.",
  metadataBase: new URL('https://meaexpert.com/'),
  openGraph: {
    title: 'Study Abroad Services - MEA Expert',
    description: 'Complete study abroad documentation assistance',
    type: 'website',
    images: ['/about1.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'study abroad, student visa, education documents, international education, document attestation, university admission',
  canonical: 'https://meaexpert.com/study-abroad',
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