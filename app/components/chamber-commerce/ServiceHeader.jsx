'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ServiceHeader() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Chamber of Commerce Attestation Services",
    "description": "Professional Chamber of Commerce attestation services for business and commercial documents in India",
    "provider": {
      "@type": "Organization",
      "name": "MEA Expert",
      "url": "https://meaexpert.com"
    },
    "areaServed": "India",
    "serviceType": "Document Attestation",
    "category": "Business Services"
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#0A9DB2] to-[#065660] text-white mt-1" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold poppins-bold leading-tight mb-4"
            itemScope 
            itemType="https://schema.org/Service"
            itemProp="name"
          >
            Chamber of Commerce Attestation Services in India
          </h1>
          <p 
            className="text-lg md:text-xl poppins-medium mb-8"
            itemProp="description"
          >
            Fast and reliable chamber attestation services across major Indian cities
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <p className="text-base md:text-lg poppins-regular">
              If you're submitting commercial or business-related documents overseas, Chamber of Commerce Attestation is often the first and mandatory step in the authentication process. At MEA EXPERT, we provide fast and reliable chamber attestation services in India, including Hyderabad Chamber Attestation, Mumbai, Delhi, and other major cities — essential for businesses, exporters, entrepreneurs, and firms planning to operate internationally.
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}