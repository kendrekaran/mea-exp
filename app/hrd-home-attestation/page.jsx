import AboutAttestation from "../components/hrd-home-attestation/AboutAttestation";
import AttestationComparison from "../components/hrd-home-attestation/AttestationComparison";
import ProcessSteps from "../components/hrd-home-attestation/ProcessSteps";
import ServiceHeader from "../components/hrd-home-attestation/ServiceHeader";
import WhyChooseUs from "../components/hrd-home-attestation/WhyChooseUs";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "HRD Attestation Services in India | MEA Expert - Fast & Reliable",
  description: "Professional HRD/Home Department attestation services. Quick processing for educational documents, reliable verification service.",
  metadataBase: new URL('https://meaexpert.com/'),
  openGraph: {
    title: 'HRD Attestation Services - MEA Expert',
    description: 'Professional HRD attestation services for educational documents',
    type: 'website',
    images: ['/about1.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'HRD attestation, home department attestation, educational document verification, degree attestation, MEA HRD services',
  canonical: 'https://meaexpert.com/hrd-home-attestation',
};

export default function ApostillePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <ServiceHeader />
      <AboutAttestation />
      <ProcessSteps />
      <AttestationComparison />
      <WhyChooseUs />
    </div>
  );
}