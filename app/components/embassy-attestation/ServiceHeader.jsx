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
            Embassy Attestation Services in India
          </h1>
          <p className="text-lg md:text-xl poppins-medium mb-8">
            Professional Document Attestation Services for UAE, Qatar, Saudi Arabia & Other Countries
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <p className="text-base md:text-lg poppins-regular">
              Planning to travel abroad for work, study, or immigration? You'll need Embassy Attestation — the final and crucial step to get your documents legally accepted in foreign countries. At MEA EXPERT, we offer end-to-end embassy attestation services in India, including UAE embassy attestation, Qatar embassy attestation, Saudi, Kuwait, and European countries — all with 100% authenticity and fast turnaround.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}