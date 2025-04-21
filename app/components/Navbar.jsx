'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-[#F9F9F9] sticky top-0 z-50">
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
            aria-label="Toggle menu"
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
              <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                MEA Attestation
              </Link>
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
  );
};

export default Navbar; 