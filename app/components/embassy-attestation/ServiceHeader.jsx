'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ServiceHeader() {
  return (
    <>
      <Head>
        <meta name="description" content="Professional embassy attestation services in India for UAE, Qatar, Saudi Arabia and other countries. Fast, reliable document attestation with 100% authenticity." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Embassy Attestation Services",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "areaServed": "India",
            "description": "Professional document attestation services for UAE, Qatar, Saudi Arabia & other countries",
            "serviceType": "Document Attestation"
          })}
        </script>
      </Head>
      <header 
        className="bg-gradient-to-r from-[#0A9DB2] to-[#065660] text-white mt-1"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-5xl mx-auto"
            itemScope
            itemType="https://schema.org/Service"
          >
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold poppins-bold leading-tight mb-4"
              itemProp="name"
            >
              Embassy Attestation Services in India
            </h1>
            <p 
              className="text-lg md:text-xl poppins-medium mb-8"
              itemProp="description"
            >
              Professional Document Attestation Services for UAE, Qatar, Saudi Arabia & Other Countries
            </p>
            <div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg"
              itemProp="offers"
            >
              <p className="text-base md:text-lg poppins-regular">
                Planning to travel abroad for work, study, or immigration? You'll need Embassy Attestation — the final and crucial step to get your documents legally accepted in foreign countries. At MEA EXPERT, we offer end-to-end embassy attestation services in India, including UAE embassy attestation, Qatar embassy attestation, Saudi, Kuwait, and European countries — all with 100% authenticity and fast turnaround.
              </p>
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
}