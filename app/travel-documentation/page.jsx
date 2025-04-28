import RootLayout from "../components/RootLayout";
import ServiceHeader from "../components/travel-documentation/ServiceHeader";
import TravelInsurance from "../components/travel-documentation/TravelInsurance";
import DummyTickets from "../components/travel-documentation/DummyTickets";
import TravelItinerary from "../components/travel-documentation/TravelItinerary";
import WhyChooseUs from "../components/travel-documentation/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";

export const metadata = {
  title: "Travel Documentation Services | MEA Expert - Fast & Reliable",
  description: "Complete travel documentation services. Expert assistance for visas, passports, and international travel requirements.",
  metadataBase: new URL('https://meaexpert.com/'),
  openGraph: {
    title: 'Travel Documentation Services - MEA Expert',
    description: 'Professional travel documentation services in India',
    type: 'website',
    images: ['/about1.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'travel documentation, visa services, passport services, international travel, document attestation',
  canonical: 'https://meaexpert.com/travel-documentation',
};

export default function TravelDocumentationPage() {
  return (
    <RootLayout>
      <ServiceHeader />
      <TravelInsurance />
      <DummyTickets />
      <TravelItinerary />
      <WhyChooseUs />
      <ContactSection />
    </RootLayout>
  );
}