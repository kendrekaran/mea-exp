
import ServiceHeader from "../components/chamber-commerce/ServiceHeader";
import AboutAttestation from "../components/chamber-commerce/AboutAttestation";
import DocumentTypes from "../components/chamber-commerce/DocumentTypes";
import ProcessSteps from "../components/chamber-commerce/ProcessSteps";
import UseCases from "../components/chamber-commerce/UseCases";
import WhyChooseUs from "../components/chamber-commerce/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";
import ScrollToTop from "../components/ScrollToTop";

export const generateMetadata = () => {
  return {
    title: "Chamber of Commerce Attestation Services India | MEA Expert",
    description: "Professional Chamber of Commerce attestation services for business documents. Fast and reliable attestation for international trade.",
    metadataBase: new URL('https://meaexpert.com/'),
    alternates: {
      canonical: 'https://meaexpert.com/chamber-commerce',
    },
    openGraph: {
      title: 'Chamber of Commerce Attestation - MEA Expert',
      description: 'Expert Chamber of Commerce document attestation services',
      type: 'website',
      url: 'https://meaexpert.com/chamber-commerce',
      images: ['/about1.svg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Chamber of Commerce Attestation Services - MEA Expert',
      description: 'Professional Chamber attestation services for business documents',
      images: ['/about1.svg'],
    }
  };
};


export default function ChamberPage() {


  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <ServiceHeader />
      <AboutAttestation />
      <DocumentTypes />
      <ProcessSteps />
      <UseCases />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}