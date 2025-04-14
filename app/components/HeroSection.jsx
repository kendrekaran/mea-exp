"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Mail, Phone } from "lucide-react"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full bg-white">
      {/* Navigation Bar */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-3 md:flex-row md:py-4">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link href="/" className="flex items-center">
              <Image
                src="/mea-logo.svg"
                alt="Mea Expert Logo"
                width={140}
                height={80}
                className="h-10 w-auto md:h-12 lg:h-16"
              />
            </Link>

            <button
              className="block rounded p-2 text-gray-700 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <nav className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col items-center space-y-4 md:flex md:w-auto md:flex-row md:space-x-4 lg:space-x-8 md:space-y-0`}>
            <Link href="/" className="text-base font-medium text-[#0A9DB2] transition-colors hover:text-[#0A9DB2]">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-base font-medium text-gray-700 transition-colors hover:text-[#0A9DB2]">
                Apostille <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 z-10 mt-2 hidden w-48 rounded-md bg-white py-2 shadow-lg group-hover:block">
                <Link href="/services/attestation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Attestation
                </Link>
                <Link href="/services/apostille" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Apostille
                </Link>
                <Link href="/services/translation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Translation
                </Link>
              </div>
            </div>
            <Link href="/documents" className="text-base font-medium text-gray-700 transition-colors hover:text-[#0A9DB2]">
              Documents
            </Link>
            <div className="relative group">
              <button className="flex items-center text-base font-medium text-gray-700 transition-colors hover:text-[#0A9DB2]">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 z-10 mt-2 hidden w-48 rounded-md bg-white py-2 shadow-lg group-hover:block">
                <Link href="/services/attestation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Attestation
                </Link>
                <Link href="/services/apostille" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Apostille
                </Link>
                <Link href="/services/translation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Translation
                </Link>
              </div>
            </div>
            <Link href="/abroad-study" className="text-base font-medium text-gray-700 transition-colors hover:text-[#0A9DB2]">
              Abroad Study
            </Link>
          </nav>

          <div className={`${isMenuOpen ? "flex" : "hidden"} mt-4 w-full justify-center md:mt-0 md:flex md:w-auto`}>
            <Link
              href="/contact"
              className="rounded-md bg-[#0A9DB2] px-6 py-2 text-base font-medium text-white transition-all hover:bg-[#0A9DB2] hover:shadow-lg w-full md:w-auto text-center"
            >
              Contact us
            </Link>
          </div>
        </div>
      </header>

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
