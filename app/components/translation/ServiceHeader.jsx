'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ServiceHeader() {
  return (
    <>
      <Head>
        <meta name="description" content="Professional certified translation services for visa, immigration, study abroad and legal documentation. Multi-language translation services accepted by embassies." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Certified Translation Services",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "description": "Professional and certified translations in multiple foreign languages",
            "serviceType": "Document Translation"
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
              Certified Translation Services for Visa, Immigration & Legal Use
            </h1>
            <p className="text-lg md:text-xl poppins-medium mb-8">
              Professional Document Translation Services in Multiple Languages
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <p className="text-base md:text-lg poppins-regular">
                Looking for professional and certified translation services for visa, immigration, study abroad, or legal documentation? MEA EXPERT offers accurate, timely, and certified translations in multiple foreign languages accepted by embassies and international institutions.
              </p>
            </div>
          </motion.article>
        </div>
      </header>
    </>
  );
}