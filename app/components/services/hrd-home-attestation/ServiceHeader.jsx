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
            HRD & Home Department Attestation Services in India
          </h1>
          <p className="text-lg md:text-xl poppins-medium mb-8">
            Professional Certificate Attestation Services for Educational and Personal Documents
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <p className="text-base md:text-lg poppins-regular">
              Need to get your academic documents verified for use abroad? At MEA EXPERT, we provide hassle-free and reliable HRD attestation and State Home Department attestation services across India. Whether you're applying for higher education, employment, or immigration, we ensure your documents go through proper certificate attestation before they are accepted by foreign authorities.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}