
import ServiceHeader from "../components/apostille/ServiceHeader";
import AboutApostille from "../components/apostille/AboutApostille";
import DocumentTypes from "../components/apostille/DocumentTypes";
import ProcessSteps from "../components/apostille/ProcessSteps";
import PricingSection from "../components/apostille/ServiceFees";
import AttestationVsApostille from "../components/apostille/AttestationVsApostille";
import WhyChooseUs from "../components/apostille/WhyChooseUs";
import ContactSection from "../components/MEA_Attestation/ContactSection";
import ScrollToTop from "../components/ScrollToTop";

export const generateMetadata = () => {
  return {
    title: "Apostille Services in India | MEA Expert - All Document Types",
    description: "Professional apostille services for all documents. Fast processing, government-recognized attestation for international use with expert assistance. Valid in 100+ Hague Convention countries.",
    metadataBase: new URL('https://meaexpert.com/'),
    alternates: {
      canonical: 'https://meaexpert.com/apostille',
    },
    openGraph: {
      title: 'Apostille Services - MEA Expert',
      description: 'Complete apostille services for all document types',
      type: 'website',
      url: 'https://meaexpert.com/apostille',
      images: ['/about1.svg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Apostille Services in India - MEA Expert',
      description: 'Professional apostille services for all types of documents',
      images: ['/about1.svg'],
    }
  };
};

const generateSchemaMarkup = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Apostille Services",
    "provider": {
      "@type": "Organization",
      "name": "MEA Expert",
      "url": "https://meaexpert.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": "Professional apostille services for all types of documents including educational, personal, and commercial documents.",
    "serviceType": "Document Attestation",
    "termsOfService": "https://meaexpert.com/terms",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "areaServed": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Apostille Document Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Educational Document Apostille"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Document Apostille"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Document Apostille"
          }
        }
      ]
    }
  };
};

export default function ApostillePage() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
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