"use client"
import Image from "next/image";
import Head from 'next/head';
import { useEffect } from 'react';

export default function OfficeSection() {
  const offices = [
    {
      city: "New Delhi",
      phone: "+ 91 7878868595",
      email: "info@meaexpert.com",
      address: "MB-03, A-Block Naurang House K.G. Marg Connaught Place New Delhi -110001",
      image: "https://i.pinimg.com/474x/d6/db/05/d6db054449ae5515da69a959d2d14704.jpg?height=200&width=400"
    },
    {
      city: "Haryana",
      phone: "+ 91 8178636828, + 91 7503760950",
      email: "info@meaexpert.com",
      address: "Surya nagar sector 91, Faridabad, Sco market sector 84 Dwarka expressway, Gurugram",
      image: "https://i.pinimg.com/474x/3c/3d/10/3c3d10029c38098b94966a62a3cfa3a0.jpg?height=200&width=400"
    },
    {
      city: "Bangalore",
      phone: "+ 91 9319333405",
      email: "info@meaexpert.com",
      address: "Kundalahalli Colony Above Ramdev Medicals, 7th Cross Kundalahalli Colony, Bangalore -560037",
      image: "https://i.pinimg.com/474x/01/b3/21/01b3211f103f49432f273bb72ca7b99d.jpg?height=200&width=400"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MEA Expert",
    "url": "https://meaexpert.com",
    "location": offices.map(office => ({
      "@type": "LocalBusiness",
      "name": `MEA Expert ${office.city}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": office.city,
        "addressCountry": "IN",
        "streetAddress": office.address
      },
      "telephone": office.phone,
      "email": office.email
    }))
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 max-w-7xl" aria-label="Our Office Locations">
      <Head>
        <title>MEA Expert Office Locations - Document Attestation Services in India</title>
        <meta name="description" content="Visit our offices in New Delhi, Haryana, and Bangalore for document attestation and apostille services. Get expert assistance for your visa and immigration needs." />
        <meta name="keywords" content="MEA office locations, attestation services, document verification, New Delhi, Haryana, Bangalore" />
      </Head>

      <div className="mt-12 mb-16">
        <header className="text-center mb-24">
          <h3 className="text-xl poppins-medium mb-2">Our Offices</h3>
          <h2 className="text-5xl poppins-medium mb-4">
            <span className="text-black">Explore Our </span>
            <span className="text-[#0A9DB2]">Office </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {offices.map((office, index) => (
            <article 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[400px]"
              role="listitem"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <div className="h-[200px] relative">
                <Image
                  src={office.image}
                  alt={`MEA Expert ${office.city} Office Location`}
                  fill
                  className="object-cover"
                  {...(index === 0 ? { priority: true } : { loading: 'lazy' })}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2" itemProp="name">{office.city}</h3>
                <p className="text-gray-600 mb-1" itemProp="telephone">{office.phone}</p>
                <p className="text-gray-600 mb-4" itemProp="email">{office.email}</p>
                <p className="text-gray-500 text-sm mt-auto" itemProp="address">{office.address}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

