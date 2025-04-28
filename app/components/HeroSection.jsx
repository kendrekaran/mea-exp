"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Mail, Phone } from "lucide-react"
import Navbar from "./Navbar"

export default function HeroSection() {
  return (
    <header className="w-full bg-[#f9f9f9]">
      <Navbar />
      
      <section className="container mx-auto px-4 py-6 md:px-6 lg:px-12 md:py-16 lg:py-20" aria-labelledby="main-heading">
        <div className="grid items-center gap-6 md:gap-8 md:grid-cols-2">
          <div className="flex flex-col space-y-3 md:space-y-5 text-center md:text-left">
            <p className="text-sm sm:text-base md:text-lg font-medium text-[#0A9DB2]">
              Best Attestation Services in India -<br /> Fast, Reliable & Government-Recognized
            </p>

            <h1 id="main-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900">
              Certificate <span className="text-[#0A9DB2]">Attestation</span> and Apostille Services
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 mx-auto md:mx-0 max-w-md">
              All Document Types | MEA, Embassy, HRD, Visa Services | 100% Genuine & Timely Processing
            </p>

            <div className="pt-2 md:pt-4">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-[#0A9DB2] px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base font-medium text-white hover:bg-[#0A9DB2] hover:shadow-lg"
                aria-label="Apply for attestation services"
              >
                Apply Now
              </Link>
            </div>
          </div>

          <div className="relative mt-6 md:mt-0">
            <div className="relative rotate-[4deg] overflow-hidden rounded-xl md:rounded-3xl">
              <Image
                src="/hero1.webp"
                alt="Document attestation services showing passport and official stamps for certificate verification"
                width={700}
                height={700}
                priority
                className="h-auto rounded-xl md:rounded-3xl w-full max-h-[400px] md:max-h-none md:h-[40vh] lg:h-[50vh] xl:h-[70vh] lg:w-[100vw] object-contain"
                loading="eager"
              />
            </div>

            <address className="not-italic">
              <div className="absolute -left-2 top-1/32 rounded-lg bg-white px-2 py-1 sm:px-3 sm:py-2 shadow-lg md:-left-4 lg:-left-8">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#0A9DB2]" aria-hidden="true" />
                  <a href="tel:+917878868595" className="text-xs sm:text-sm md:text-base font-medium hover:underline">+ 91 7878868595</a>
                </div>
              </div>

              <div className="absolute -bottom-2 right-2 rounded-lg bg-white px-2 py-1 sm:px-3 sm:py-2 shadow-lg md:right-4 lg:-right-8">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#0A9DB2]" aria-hidden="true" />
                  <a href="mailto:info@meaexpert.com" className="text-xs sm:text-sm md:text-base font-medium hover:underline">info@meaexpert.com</a>
                </div>
              </div>
            </address>
          </div>
        </div>
        
        {/* Schema.org structured data for Local Business */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MEA Expert Document Attestation Services",
            "description": "Certificate Attestation and Apostille Services in India - Fast, Reliable & Government-Recognized",
            "telephone": "+917878868595",
            "email": "info@meaexpert.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Attestation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Certificate Attestation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Apostille Services"
                  }
                }
              ]
            }
          })
        }} />
      </section>
    </header>
  )
}