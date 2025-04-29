'use client';

import Head from 'next/head';
import { Phone, Mail, ArrowRight, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  return (
    <>
      <Head>
        <meta name="description" content="Contact MEA EXPERT for professional MEA attestation services in India. Get a free quote, call now, or email us for assistance." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MEA EXPERT",
            "description": "MEA Attestation Services in India",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+917878868595",
              "email": "info@meaexpert.com",
              "contactType": "customer service",
              "areaServed": "India"
            }]
          })}
        </script>
      </Head>
      <section 
        className="py-20 px-4 bg-gray-50"
        aria-labelledby="contact-title"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-14">
            <p className="text-[#0A9DB2] font-semibold tracking-wider mb-3">GET IN TOUCH</p>
            <h1 
              id="contact-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Contact Us Today
            </h1>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto" role="presentation"></div>
          </header>

          <div className="grid md:grid-cols-1 gap-8">
            <article 
              className="shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <div className="p-8">
                <h2 className="text-xl font-bold text-[#0A9DB2] mb-4">Contact Us Today for MEA Attestation</h2>
                
                <p className="text-gray-700 mb-6 text-lg">
                  Need help with MEA attestation in India? Our team is here to make the process smooth and stress-free.
                </p>
                
                <p className="text-gray-700 mb-8 text-lg font-medium">
                  Call Now or Fill the Form to Get a Free Quote!
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <a 
                    href="tel:+917878868595" 
                    className="flex items-center space-x-2 bg-[#0A9DB2] hover:bg-[#098da0] text-white py-3 px-6 rounded-lg transition-colors shadow-sm"
                    itemProp="telephone"
                    aria-label="Call us now"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    <span>Call Now</span>
                  </a>
                  <a 
                    href="mailto:info@meaexpert.com" 
                    className="flex items-center space-x-2 bg-white border border-[#0A9DB2] text-[#0A9DB2] hover:bg-blue-50 py-3 px-6 rounded-lg transition-colors shadow-sm"
                    itemProp="email"
                    aria-label="Email us"
                  >
                    <MessageSquare className="w-5 h-5" aria-hidden="true" />
                    <span>Email Us</span>
                  </a>
                </div>
                
                <div className="mt-10 flex items-center justify-center">
                  <a 
                    href="/contact" 
                    className="flex items-center gap-2 text-[#0A9DB2] hover:text-[#087d8f] font-medium transition-colors duration-200"
                  >
                    Learn more about our services
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}