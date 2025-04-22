'use client';

import { motion } from 'framer-motion';

export default function ServiceHeader() {
  return (
    <div className="bg-gradient-to-r from-[#0A9DB2] to-[#065660] text-white mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold poppins-bold leading-tight mb-4">
            Chamber of Commerce Attestation Services in India
          </h1>
          <p className="text-lg md:text-xl poppins-medium mb-8">
            Fast and reliable chamber attestation services across major Indian cities
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <p className="text-base md:text-lg poppins-regular">
              If you're submitting commercial or business-related documents overseas, Chamber of Commerce Attestation is often the first and mandatory step in the authentication process. At MEA EXPERT, we provide fast and reliable chamber attestation services in India, including Hyderabad Chamber Attestation, Mumbai, Delhi, and other major cities — essential for businesses, exporters, entrepreneurs, and firms planning to operate internationally.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}