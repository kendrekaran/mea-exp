import ServiceHeader from "../components/travel-documentation/ServiceHeader";
import TravelInsurance from "../components/travel-documentation/TravelInsurance";
import DummyTickets from "../components/travel-documentation/DummyTickets";
import TravelItinerary from "../components/travel-documentation/TravelItinerary";
import WhyChooseUs from "../components/travel-documentation/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";

export const metadata = {
  title: "Travel Documentation Services | MEA EXPERT",
  description: "Professional travel documentation services including visa-compliant insurance, dummy tickets, and verified itineraries for visa applications.",
};

export default function TravelDocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader />
      <TravelInsurance />
      <DummyTickets />
      <TravelItinerary />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}