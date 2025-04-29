'use client';

import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSectin";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MEA Expert",
  "description": "Professional Chamber of Commerce attestation services in India",
  "url": "https://meaexpert.com",
  "logo": "https://meaexpert.com/mea-logo.svg",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "India"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "name": "India",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937",
      "longitude": "78.9629"
    }
  }
};

export default function ChamberLayout({ children }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        {children}
      </main>
      <FooterSection />
    </>
  );
}