'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ServiceHeader() {
  return (
    <>
      <Head>
        <meta name="description" content="Professional HRD & Home Department attestation services in India for educational and personal documents. Expert certificate attestation for abroad use." />
        <meta name="keywords" content="HRD attestation, Home Department attestation, certificate attestation, document verification, India, educational documents, personal documents" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "HRD & Home Department Attestation Services",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "areaServed": "India",
            "serviceType": "Document Attestation",
            "description": "Professional certificate attestation services for educational and personal documents"
          })}
        </script>
      </Head>
      <header 
        className="bg-gradient-to-r from-[#0A9DB2] to-[#065660] text-white mt-1"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.article 
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
              HRD & Home Department Attestation Services in India
            </h1>
            <p 
              className="text-lg md:text-xl poppins-medium mb-8"
              itemProp="description"
            >
              Professional Certificate Attestation Services for Educational and Personal Documents
            </p>
            <div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg"
              itemProp="offers"
            >
              <p className="text-base md:text-lg poppins-regular">
                Need to get your academic documents verified for use abroad? At MEA EXPERT, we provide hassle-free and reliable HRD attestation and State Home Department attestation services across India. Whether you're applying for higher education, employment, or immigration, we ensure your documents go through proper certificate attestation before they are accepted by foreign authorities.
              </p>
            </div>
          </motion.article>
        </div>
      </header>
    </>
  );
}