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
            Travel Documentation Services for Visa Applications
          </h1>
          <p className="text-lg md:text-xl poppins-medium mb-8">
            Get Visa-Ready with Compliant Travel Insurance, Flight Reservations & Itineraries
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <p className="text-base md:text-lg poppins-regular">
            Applying for a Schengen, UK, USA, Canada, or Dubai visa?
            Embassies often require travel insurance, dummy flight tickets, and verified travel itineraries for visa approval.
            MEA EXPERT provides visa-compliant, verifiable, and affordable travel documentation services with quick turnaround.

            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}