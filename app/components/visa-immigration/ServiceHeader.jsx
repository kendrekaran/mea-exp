'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ServiceHeader() {
  return (
    <>
      <Head>
        <meta name="description" content="Expert visa and immigration services for PR, work permits, tourist & student visas. Complete assistance for Canada, USA, UK, Australia, UAE, Germany immigration." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Visa and Immigration Services",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "description": "Complete immigration support and visa assistance for global destinations",
            "serviceType": "Immigration Services"
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
              Expert Guidance for PR, Work Permits, Tourist & Student Visas
            </h1>
            <p className="text-lg md:text-xl poppins-medium mb-8">
              Complete Immigration Support for Your Global Journey
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <p className="text-base md:text-lg poppins-regular">
                Looking to settle abroad, work overseas, or pursue higher education internationally? MEA EXPERT offers complete visa and immigration assistance — from documentation and embassy submissions to expert consultation for countries like Canada, USA, UK, Australia, UAE, Germany, and more.
              </p>
            </div>
          </motion.article>
        </div>
      </header>
    </>
  );
}