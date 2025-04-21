"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Mail, Phone } from "lucide-react"
import Navbar from "./Navbar"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full bg-[#F9F9F9]">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-6 md:px-6 lg:px-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-6 md:gap-8 md:grid-cols-2">
          <div className="flex flex-col space-y-3 md:space-y-5 text-center md:text-left">
            <p className="text-sm  sm:text-base md:text-lg font-medium text-[#0A9DB2]">
              Best Attestation Services in India -<br /> Fast, Reliable & Government-Recognized
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900">
              Certificate <span className="text-[#0A9DB2]">Attestation</span> and Apostille Services
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 mx-auto md:mx-0 max-w-md">
              All Document Types | MEA, Embassy, HRD, Visa Services | 100% Genuine & Timely Processing
            </p>

            <div className="pt-2 md:pt-4">
              <Link
                href="/get-started"
                className="inline-block rounded-md bg-[#0A9DB2] px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base font-medium text-white hover:bg-[#0A9DB2] hover:shadow-lg"
              >
                Apply Now
              </Link>
            </div>
          </div>

          <div className="relative mt-6 md:mt-0">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/hero.svg"
                alt="Passport and travel documents"
                width={600}
                height={600}
                className="h-auto w-full max-h-[300px] md:max-h-none md:h-[40vh] lg:h-[50vh] xl:h-[60vh] object-contain"
              />
            </div>

            <div className="absolute -left-2 top-1/32 rounded-lg bg-white px-2 py-1 sm:px-3 sm:py-2 shadow-lg md:-left-4 lg:-left-8">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#0A9DB2]" />
                <span className="text-xs sm:text-sm md:text-base font-medium">+ 91 7878868595</span>
              </div>
            </div>

            <div className="absolute -bottom-2 right-2 rounded-lg bg-white px-2 py-1 sm:px-3 sm:py-2 shadow-lg md:right-4 lg:-right-8">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#0A9DB2]" />
                <span className="text-xs sm:text-sm md:text-base font-medium">contact@meaexpert.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
