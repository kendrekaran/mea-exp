"use client"
import React, { useState, useEffect } from 'react';
import { BookOpen, FileSearch, Timer, Shield, Barcode, Truck, Headphones, PiggyBank, Mail, } from 'lucide-react';
import Head from 'next/head';

const features = [
  {
    icon: BookOpen,
    title: "Online Booking",
    description: "Book your MEA Apostille service online without any hassle."
  },
  {
    icon: FileSearch,
    title: "Apostille Document Tracking",
    description: "Track your Apostille document all along the process."
  },
  {
    icon: Timer,
    title: "Fastest Delivery for MEA apostille",
    description: "Book your MEA Apostille service online without any hassle."
  },
  {
    icon: Shield,
    title: "Document & Privacy Safety",
    description: "Your Apostille document safety is our highest priority. All documents and personal details will be safe."
  },
  {
    icon: Barcode,
    title: "Barcode System",
    description: "This ensures that no consignment is misplaced ever. Documents are barcoded before sending to MEA apostille"
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Apostille document is safely delivered to you at home."
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Our support team will assist you all along the MEA apostille process."
  },
  {
    icon: PiggyBank,
    title: "Discounted rates",
    description: "We offer the MEA Apostille service at lowest price in the market. Apostillation at lowest price"
  },
  {
    icon: Mail,
    title: "Email Updates",
    description: "You will receive the email status updates all along the Apostillation process."
  }
];


function FeaturesSection() {
  // Add structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "MEA Document Services Features",
    "provider": {
      "@type": "Organization",
      "name": "MEA Document Services"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "itemListElement": features.map((feature) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature.title,
          "description": feature.description
        }
      }))
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen py-12 md:py-24" role="main">
      <Head>
        <title>MEA Document Services Features - Safe, Fast, and Reliable Document Processing</title>
        <meta name="description" content="Experience trusted document services with online booking, tracking, fast delivery, and guaranteed safety. Best rates for MEA Apostille services in India." />
        <meta name="keywords" content="MEA apostille, document tracking, document safety, apostille service, document delivery, India" />
      </Head>

      <section className="py-16" aria-label="Service Features">
        <div className="container mx-auto px-4">
          <header className="text-center mb-8">
            <h3 className="text-xl poppins-medium mb-2">Safe. Fast. Reliable</h3>
            <h2 className="text-5xl poppins-medium mb-4">
              <span className="text-black">Why people Trust Us </span>
              <span className="text-black">for their</span>
              <span className="text-[#0A9DB2]"> Documents</span>
            </h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:py-8 gap-8" role="list">
            {features.map((feature, index) => (
              <article 
                key={index} 
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
                role="listitem"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#0A9DB2]/10 flex items-center justify-center" aria-hidden="true">
                      <feature.icon className="w-6 h-6 text-[#0A9DB2]" />
                    </div>
                  </div>
                  <div className='px-8'>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default FeaturesSection;
