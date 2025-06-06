'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Head from 'next/head';

const services = [
  {
    id: 1,
    title: 'MEA Attestation',
    description: 'Ministry of External Affairs document attestation services',
    link: '/mea-attestation'
  },
  {
    id: 2,
    title: 'Embassy Attestation',
    description: 'Embassy document verification and attestation services',
    link: '/embassy-attestation'
  },
  {
    id: 3,
    title: 'Apostille Services',
    description: 'International document legalization through Apostille',
    link: '/apostille'
  },
  {
    id: 4,
    title: 'Chamber of Commerce',
    description: 'Document attestation from Chamber of Commerce',
    link: '/chamber-commerce'
  },
  {
    id: 5,
    title: 'HRD/Home Attestation',
    description: 'Educational and personal document attestation services',
    link: '/hrd-home-attestation'
  },
  {
    id: 6,
    title: 'Translation Services',
    description: 'Professional document translation services',
    link: '/translation'
  },
  {
    id: 7,
    title: 'Visa Assistance',
    description: 'Expert guidance for visa application and processing',
    link: '/visa-immigration'
  },
  {
    id: 8,
    title: 'Study Abroad Assistance',
    description: 'Comprehensive support for international education',
    link: '/study-abroad'
  },
  {
    id: 9,
    title: 'Travel Documentation',
    description: 'Comprehensive travel insurance coverage for your peace of mind',
    link: '/travel-documentation'
  }
];

const documents = [
  {
    id: 1,
    title: 'Degree Certificate Apostille',
    description: 'Apostille services for educational degree certificates',
    link: '/apostille/degree'
  },
  {
    id: 2,
    title: 'Birth Certificate Apostille',
    description: 'Apostille services for birth certificates',
    link: '/apostille/birth'
  },
  {
    id: 3,
    title: 'Marriage Certificate Apostille',
    description: 'Apostille services for marriage certificates',
    link: '/apostille/marriage'
  },
  {
    id: 4,
    title: 'Police Clearance Certificate',
    description: 'Apostille services for police clearance certificates',
    link: '/apostille/police-clearance'
  },
  {
    id: 5,
    title: 'Single Certificate Apostille',
    description: 'Apostille services for single status certificates',
    link: '/apostille/single'
  },
  {
    id: 6,
    title: 'GST Certificate Apostille',
    description: 'Apostille services for GST certificates',
    link: '/apostille/gst'
  },
  {
    id: 7,
    title: 'Power Attorney Apostille',
    description: 'Apostille services for power of attorney documents',
    link: '/apostille/power-attorney'
  },
  {
    id: 8,
    title: 'Driving License Apostille',
    description: 'Apostille services for driving licenses',
    link: '/apostille/driving-license'
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const documentsDropdownRef = useRef(null);

  // Add click handlers
  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsDocumentsOpen(false);
  };

  const handleDocumentsClick = () => {
    setIsDocumentsOpen(!isDocumentsOpen);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current && 
        !servicesDropdownRef.current.contains(event.target) &&
        documentsDropdownRef.current && 
        !documentsDropdownRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
        setIsDocumentsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Add structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "MEA Expert Navigation",
    "hasPart": [
      ...services.map(service => ({
        "@type": "SiteNavigationElement",
        "name": service.title,
        "description": service.description,
        "url": `https://meaexpert.com${service.link}`
      })),
      ...documents.map(doc => ({
        "@type": "SiteNavigationElement",
        "name": doc.title,
        "description": doc.description,
        "url": `https://meaexpert.com${doc.link}`
      }))
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
    <>
      <Head>
        <meta name="description" content="MEA Expert - Your trusted partner for document attestation, apostille services, and visa assistance in India. Explore our comprehensive services and solutions." />
      </Head>

      <header className="fixed w-full top-0 left-0 right-0 border-b border-gray-100 bg-[#f9f9f9] z-50 shadow-sm">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-3 md:flex-row md:py-4">
          {/* Logo and hamburger section */}
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link href="/" className="flex items-center" aria-label="MEA Expert Home">
              <Image
                src="/logo-nav.webp"
                alt="MEA Expert - Document Attestation Services"
                width={140}
                height={80}
                className="h-10 w-auto md:h-12 lg:h-16"
                priority
              />
            </Link>

            <button
              className="block rounded p-2 text-gray-700 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
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

          {/* Navigation section */}
          <nav 
            className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col items-center space-y-4 md:flex md:w-auto md:flex-row md:space-x-4 lg:space-x-8 md:space-y-0`}
            role="navigation"
            aria-label="Main navigation"
          >
            <Link href="/" className="text-lg font-semibold text-gray-700 transition-colors hover:text-[#0A9DB2]">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative w-full md:w-auto" ref={servicesDropdownRef}>
              <button
                onClick={handleServicesClick}
                className="text-lg flex w-full md:w-auto justify-center md:justify-start font-semibold text-gray-700 transition-colors hover:text-[#0A9DB2]"
                aria-expanded={isServicesOpen}
                aria-controls="services-dropdown"
              >
                Services
                <ChevronDown className={`ml-1 mt-1.5 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {isServicesOpen && (
                <div id="services-dropdown" className="fixed md:absolute left-0 md:left-auto right-0 mt-2 w-full md:w-screen max-w-md bg-white rounded-lg shadow-lg z-50 max-h-[60vh] overflow-y-auto" role="menu">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    {services.map((service) => (
                      <a
                        key={service.id}
                        href={service.link}
                        className="flex flex-col p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        role="menuitem"
                        aria-label={service.description}
                      >
                        <div className="font-medium text-gray-900">{service.title}</div>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {service.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Documents Dropdown */}
            <div className="relative w-full md:w-auto" ref={documentsDropdownRef}>
              <button
                onClick={handleDocumentsClick}
                className="text-lg flex w-full md:w-auto justify-center md:justify-start font-semibold text-gray-700 transition-colors hover:text-[#0A9DB2]"
                aria-expanded={isDocumentsOpen}
                aria-controls="documents-dropdown"
              >
                Documents
                <ChevronDown 
                  className={`ml-1 font-semibold mt-1.5 h-4 w-4 transition-transform ${isDocumentsOpen ? 'rotate-180' : ''}`} 
                  aria-hidden="true" 
                />
              </button>

              {isDocumentsOpen && (
                <div id="documents-dropdown" className="fixed md:absolute left-0 md:left-auto right-0 mt-2 w-full md:w-screen max-w-md bg-white rounded-lg shadow-lg z-50 max-h-[60vh] overflow-y-auto" role="menu">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    {documents.map((document) => (
                      <a
                        key={document.id}
                        href={document.link}
                        className="flex flex-col p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        role="menuitem"
                        aria-label={document.description}
                      >
                        <div className="font-medium text-gray-900">{document.title}</div>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {document.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            
            <Link href="/study-abroad" className="text-lg font-semibold text-gray-700 transition-colors hover:text-[#0A9DB2]">
              Abroad Study
            </Link>

            <Link href="/blog" className="text-lg font-semibold text-gray-700 transition-colors hover:text-[#0A9DB2]">
              Blogs
            </Link>
          </nav>

          {/* Contact button */}
          <div className={`${isMenuOpen ? "flex" : "hidden"} mt-5 w-full justify-center md:mt-0 md:flex md:w-auto`}>
            <Link
              href="/contact"
              className="rounded-md bg-[#0A9DB2] px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-[#0A9DB2] hover:shadow-lg w-full md:w-auto text-center"
            >
              Contact us
            </Link>
          </div>
        </div>
      </header>
      <div className="h-[72px] md:h-[80px] lg:h-[96px]"></div>
    </>
  );
};

export default Navbar;