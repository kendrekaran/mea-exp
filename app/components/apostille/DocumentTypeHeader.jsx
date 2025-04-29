'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DocumentTypeHeader({ title, description }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "MEA Expert",
      "url": "https://meaexpert.com"
    },
    "serviceType": "Document Attestation",
    "areaServed": "India",
    "category": "Legal Services"
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, [title, description]);

  return (
    <header 
      className="bg-gradient-to-r from-[#0A9DB2] to-[#065660] text-white mt-1" 
      role="banner"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold poppins-bold leading-tight mb-4"
            itemProp="name"
          >
            {title}
          </h2>
          <p 
            className="text-lg md:text-xl poppins-medium mb-8"
            itemProp="description"
          >
            {description}
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <p className="text-base md:text-lg poppins-regular">
              Trust MEA EXPERT for fast, reliable, and government-authorized document attestation services. We ensure your documents are properly legalized for international use with complete authenticity and security.
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}