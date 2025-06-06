'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ServiceHeader() {
  return (
    <>
      <Head>
        <meta name="description" content="Professional MEA attestation services across India. Fast and reliable document attestation by Ministry of External Affairs for overseas use." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "MEA Attestation Services",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "areaServed": "India",
            "description": "Document attestation services by Ministry of External Affairs",
            "serviceType": "Document Attestation"
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold poppins-bold leading-tight mb-4">
              MEA Attestation Services in India
            </h1>
            <p className="text-lg md:text-xl poppins-medium mb-8">
              Get Your Documents Attested by the Ministry of External Affairs (MEA) with MEA EXPERT
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <p className="text-base md:text-lg poppins-regular">
                Looking to authenticate your documents for use abroad? Whether you&apos;re applying for a job, higher education, visa, or residency overseas, MEA attestation is a mandatory step in the process. At MEA EXPERT, we provide fast, reliable, and hassle-free Ministry of External Affairs attestation services across India — including Chennai, Hyderabad, Bangalore, and other major cities.
              </p>
            </div>
          </motion.article>
        </div>
      </header>
    </>
  );
}