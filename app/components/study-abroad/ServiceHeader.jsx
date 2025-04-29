'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ServiceHeader() {
  return (
    <>
      <Head>
        <meta name="description" content="Complete study abroad consultancy services for Canada, UK, USA, Australia, Germany. Expert guidance for university admissions, visa filing, and document attestation." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Study Abroad Services",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "description": "Complete support for international education including document attestation, visa filing, and university admissions",
            "serviceType": "Education Consultancy"
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
              Complete Support for Students Planning to Study Overseas
            </h1>
            <p className="text-lg md:text-xl poppins-medium mb-8">
              Your Gateway to Global Education
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <p className="text-base md:text-lg poppins-regular">
                Dreaming of studying in Canada, UK, USA, Australia, Germany, or other top study destinations? MEA EXPERT offers complete study abroad consultancy services — from document attestation, apostille, visa filing, to university admission guidance, all under one roof.
              </p>
            </div>
          </motion.article>
        </div>
      </header>
    </>
  );
}