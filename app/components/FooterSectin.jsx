"use client"
import Image from "next/image"
import { Facebook, Instagram } from 'lucide-react'
import { useEffect } from 'react'
import Head from 'next/head'

export default function FooterSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MEA Expert",
    "url": "https://meaexpert.com",
    "logo": "https://meaexpert.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+ 91 7878868595",
      "contactType": "customer service",
      "email": "info@meaexpert.com",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MB-03, A-Block Naurang House K.G. Marg",
      "addressLocality": "Connaught Place",
      "addressRegion": "New Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/people/MEA-Experts/61568621811046",
      "https://instagram.com/meaexpert"
    ]
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <footer className="overflow-x-hidden" role="contentinfo">
      <Head>
        <meta name="description" content="Contact MEA Expert for document attestation, apostille services, and visa assistance. Find our office hours, location, and connect with us on social media." />
      </Head>

      <div className="bg-[#182631] text-white py-8 md:py-12 mt-12 md:mt-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <nav className="flex flex-col md:flex-row md:justify-between gap-8">
            {/* Apostille Documents Section */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Apostille Documents</h2>
              <ul className="text-gray-300 text-sm md:text-base space-y-2" role="menu">
                <li role="menuitem"><a href="/apostille/degree" className="hover:text-white" aria-label="Get Degree Certificate Apostille Service">Degree Certificate Apostille</a></li>
                <li role="menuitem"><a href="/apostille/birth" className="hover:text-white" aria-label="Get Birth Certificate Apostille Service">Birth Certificate Apostille</a></li>
                <li role="menuitem"><a href="/apostille/marriage" className="hover:text-white" aria-label="Get Marriage Certificate Apostille Service">Marriage Certificate Apostille</a></li>
                <li role="menuitem"><a href="/apostille/police-clearance" className="hover:text-white" aria-label="Get Police Clearance Certificate Apostille Service">Police Clearance Certificate</a></li>
                <li role="menuitem"><a href="/apostille/single" className="hover:text-white" aria-label="Get Single Certificate Apostille Service">Single Certificate Apostille</a></li>
                <li role="menuitem"><a href="/apostille/gst" className="hover:text-white" aria-label="Get GST Certificate Apostille Service">GST Certificate Apostille</a></li>
                <li role="menuitem"><a href="/apostille/power-attorney" className="hover:text-white" aria-label="Get Power Attorney Apostille Service">Power Attorney Apostille</a></li>
                <li role="menuitem"><a href="/apostille/driving-license" className="hover:text-white" aria-label="Get Driving License Apostille Service">Driving License Apostille</a></li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Our Services</h3>
              <ul className="text-gray-300 text-sm md:text-base space-y-2">
                <li><a href="/mea-attestation" className="hover:text-white">MEA Attestation Services</a></li>
                <li><a href="/apostille" className="hover:text-white">Apostille Services</a></li>
                <li><a href="/hrd-home-attestation" className="hover:text-white">HRD & Home Department Attestation</a></li>
                <li><a href="/embassy-attestation" className="hover:text-white">Embassy Attestation</a></li>
                <li><a href="/chamber-commerce" className="hover:text-white">Chamber of Commerce Attestation</a></li>
                <li><a href="/translation" className="hover:text-white">Translation Services</a></li>
                <li><a href="/visa-immigration" className="hover:text-white">Visa & Immigration Assistance</a></li>
                <li><a href="/study-abroad" className="hover:text-white">Study Abroad Support</a></li>
                <li><a href="/travel-documentation" className="hover:text-white">Travel Documentation Services</a></li>
              </ul>
            </div>

            {/* Office hours and contact info */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24">
              {/* Office hours */}
              <div className="mb-6 md:mb-0" itemScope itemType="https://schema.org/LocalBusiness">
                <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Office Hours</h2>
                <meta itemProp="name" content="MEA Expert" />
                <time itemProp="openingHours" content="Mo-Sa 10:00-19:00">
                  <p className="text-gray-300 mb-1 md:mb-2">Mon - Sat:</p>
                  <p className="text-gray-300">10.00 am to 07.00 pm</p>
                </time>
              </div>

              {/* Contact info */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Contact US</h3>
                <div className="flex items-start mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-1 text-gray-300 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-300 text-sm md:text-base">
                    MB-03, A-Block Naurang
                    <br />
                    House K.G. Marg Connaught
                    <br />
                    Place New Delhi -110001
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-300 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-300 text-sm md:text-base">info@meaexpert.com</p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-300 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-gray-300 text-sm md:text-base">+ 91 7878868595</p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-300 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-gray-300 text-sm md:text-base">+ 91 8178636828</p>
                </div>
              </div>
            </div>
          </nav>

          {/* Copyright and Social Links */}
          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white rounded-full p-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 text-[#1a2e3a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p className="text-gray-300 text-sm md:text-base">MEAExpert, All right reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/MEA-Experts/61568621811046/?mibextid=ZbWKwL" 
                className="text-gray-300 hover:text-[#0A9DB2] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/meaexpert" 
                className="text-gray-300 hover:text-[#0A9DB2] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}