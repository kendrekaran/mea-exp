import ServiceHeader from "../components/chamber-commerce/ServiceHeader";
import AboutAttestation from "../components/chamber-commerce/AboutAttestation";
import DocumentTypes from "../components/chamber-commerce/DocumentTypes";
import ProcessSteps from "../components/chamber-commerce/ProcessSteps";
import UseCases from "../components/chamber-commerce/UseCases";
import WhyChooseUs from "../components/chamber-commerce/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";

export const metadata = {
  title: "Chamber of Commerce Attestation Services | MEA Expert",
  description: "Professional Chamber of Commerce attestation services for business documents. Fast and reliable attestation for international trade.",
  metadataBase: new URL('https://meaexpert.com/'),
  openGraph: {
    title: 'Chamber of Commerce Attestation - MEA Expert',
    description: 'Expert Chamber of Commerce document attestation services',
    type: 'website',
    images: ['/about1.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'chamber of commerce, attestation services, business documents, commercial documents, trade documentation, export documents',
  canonical: 'https://meaexpert.com/chamber-commerce',
};

export default function ChamberAttestationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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