"use client"

import { motion } from "framer-motion"
import { BookOpen, CheckCircle, Clock, Phone } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Column */}
        <div className="flex flex-col">
          <motion.h3 className="text-blue-800 text-xl md:text-2xl font-medium mb-2" variants={itemVariants}>
            About the company
          </motion.h3>

          <motion.h2 className="text-3xl md:text-4xl font-bold mb-8" variants={itemVariants}>
            We're Trusted Attestation Apostille Agency.
          </motion.h2>

          <motion.div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8" variants={imageVariants}>
            <Image
              src="/about1.svg"
              alt="Attestation service representative helping a client with documents"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-800 h-6 w-6 flex-shrink-0" />
              <p className="font-medium">Offer 100 % Genuine Assistance</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-800 h-6 w-6 flex-shrink-0" />
              <p className="font-medium">It's Faster & Reliable Execution</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-800 h-6 w-6 flex-shrink-0" />
              <p className="font-medium">Accurate & Expert Advice</p>
            </div>
          </motion.div>

          <motion.div className="mt-8 flex items-center gap-4" variants={itemVariants}>
            <div className="bg-blue-800 text-white p-3 rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">Have any questions?</p>
              <p className="text-2xl font-bold">+ 91 7503760950</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          {isMobile ? null : (
            <motion.div
              className="h-[140px]" // Spacer to align with the right column
              variants={itemVariants}
            />
          )}

          <motion.p className="text-gray-600 mb-8 text-lg leading-relaxed" variants={itemVariants}>
            We are a reliable and professional attestation and apostille service agency committed to simplifying the
            process of authenticating your personal, educational, and commercial documents. With a focus on accuracy,
            efficiency, and customer satisfaction, we ensure your documents meet international standards and legal
            requirements for use abroad. Whether it's for travel, education, employment, or business, our experienced
            team provides hassle-free solutions tailored to your needs.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <motion.div className="flex items-center gap-3" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <div className=" rounded-lg">
                <BookOpen className="text-blue-800 h-6 w-6" />
              </div>
              <p className="font-medium">Best Attestation Resources</p>
            </motion.div>

            <motion.div className="flex items-center gap-3" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <div className=" rounded-lg">
                <Clock className="text-blue-800 h-6 w-6" />
              </div>
              <p className="font-medium">Quick Processing</p>
            </motion.div>
          </div>

          <motion.div
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mt-auto"
            variants={imageVariants}
          >
            <Image
              src="/about2.svg"
              alt="Close-up of attestation documents being processed"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

