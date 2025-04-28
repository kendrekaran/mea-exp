"use client"
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from 'next/head';

export default function MEAServices() {
  const [hoveredId, setHoveredId] = useState(null);

  const services = [
    {
      id: 1,
      title: "MEA Attestation Services",
      description: "Ministry of External Affairs (India) document attestation for all types of documents.",
      image: "https://i.pinimg.com/736x/a0/fd/1c/a0fd1c102e40829ec94f8ece5e077343.jpg",
      link: "/mea-attestation"
    },
    {
      id: 2,
      title: "Apostille Services",
      description: "Apostille stamping for documents going to Hague Convention countries.",
      image: "https://i.pinimg.com/474x/52/af/be/52afbe09cbdcda34aa23d616b9a032db.jpg",
      link: "/apostille"
    },
    {
      id: 3,
      title: "HRD & Home Department",
      description: "State-level authentication of educational/personal documents (HRD, Home, SDM).",
      image: "https://i.pinimg.com/474x/b4/71/fc/b471fc4dbf0e6f24ce7eb4094fbaa0a7.jpg",
      link: "/hrd-home-attestation"
    },
    {
      id: 4,
      title: "Embassy Attestation",
      description: "Legalization from foreign embassies (UAE, Qatar, Kuwait, etc.) post MEA attestation.",
      image: "https://i.pinimg.com/736x/83/6d/d3/836dd3b9965ef275822164a77e183b65.jpg",
      link: "/embassy-attestation"
    },
    {
      id: 5,
      title: "Chamber of Commerce",
      description: "Attestation for commercial/corporate documents before MEA or embassy attestation.",
      image: "https://i.pinimg.com/736x/30/e6/b1/30e6b115515715e460045adac676d27c.jpg",
      link: "/chamber-commerce"
    },
    {
      id: 9,
      title: "Translation Services",
      description: "Certified translation of documents into foreign languages (French, German, Arabic, etc.) for visa, immigration, and legal use.",
      image: "https://i.pinimg.com/474x/63/75/e6/6375e613497e19b86dd9dc30faba1754.jpg",
      link: "/translation"
    },
    {
      id: 7,
      title: "Visa & Immigration",
      description: "Includes PR, work permits, tourist/student visas, documentation, embassy submissions, and expert guidance",
      image: "https://i.pinimg.com/474x/20/ab/28/20ab28154cbdbeabffbc010611a860e8.jpg",
      link: "/visa-immigration"
    },
    {
      id: 8,
      title: "Study Abroad",
      description: "Focused on students: document attestation, apostille, visa help, university application support.",
      image: "https://i.pinimg.com/474x/2a/12/20/2a1220bd30d4a7b794c32d917eba439d.jpg",
      link: "/study-abroad"

    },
    {
      id: 10,
      title: "Travel Documentation",
      description: "Visa-compliant travel insurance, dummy tickets with verifiable PNR, and verified itineraries for Schengen, US, UK, and more.",
      image: "https://i.pinimg.com/474x/91/81/08/918108561824e8aaedb364f4dee2ac59.jpg",
      link: "/travel-documentation"
    }
  ];

  // Move jsonLd after services array
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "MEA Document Attestation Services",
    "provider": {
      "@type": "Organization",
      "name": "MEA Attestation Services"
    },
    "serviceType": "Document Attestation",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "itemListElement": services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
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
  }, [jsonLd]); // Add jsonLd as dependency

  return (
    <section className="py-16 md:pb-16 md:py-0" aria-label="MEA Services Section">
      <Head>
        <title>MEA Attestation & Apostille Services in India | Document Authentication</title>
        <meta name="description" content="Professional MEA attestation, apostille, and document authentication services across India. Expert assistance for visa, immigration, and educational documents." />
        <meta name="keywords" content="MEA attestation, apostille services, document authentication, visa services, embassy attestation, India" />
      </Head>

      <div className="container mx-auto px-4 max-w-7xl">
        <header className="text-center mb-16">
          <h2 className="text-xl poppins-medium mb-2">MEA Services</h2>
          <h1 className="text-5xl poppins-medium mb-4">
            <span className="text-black">Certificate </span>
            <span className="text-[#0A9DB2]">Attestation</span>
            <span className="text-black"> and</span>
          </h1>
          <h1 className="text-5xl poppins-medium mb-6">
            <span className="text-[#0A9DB2]">Apostilles</span>
            <span className="text-black"> Services in India</span>
          </h1>
          <p className="text-gray-600 poppins-medium text-sm">
            We are a reliable and professional attestation and apostille service agency.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {services.map((service) => (
            <Link 
              href={service.link} 
              key={service.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              role="listitem"
              aria-label={`${service.title} - ${service.description}`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} - ${service.description}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="px-6 pb-6">
                {service.link ? (
                  <div
                    className={`group flex items-center text-sm font-medium ${hoveredId === service.id ? 'text-[#0A9DB2]' : 'text-gray-700'} hover:text-[#0A9DB2] transition-colors duration-200`}
                  >
                    <span className="mr-2">Explore Service</span>
                    <span className={`flex items-center justify-center rounded-full p-1 ${hoveredId === service.id ? 'bg-[#0A9DB2] text-white' : 'bg-gray-100 text-gray-500'} group-hover:bg-[#0A9DB2] group-hover:text-white transition-all duration-200 transform ${hoveredId === service.id ? 'translate-x-1' : ''} group-hover:translate-x-1`}>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                ) : (
                  <button 
                    className={`group flex items-center text-sm font-medium ${hoveredId === service.id ? 'text-[#0A9DB2]' : 'text-gray-700'} hover:text-[#0A9DB2] transition-colors duration-200`}
                  >
                    <span className="mr-2">Coming Soon</span>
                    <span className={`flex items-center justify-center rounded-full p-1 ${hoveredId === service.id ? 'bg-[#0A9DB2] text-white' : 'bg-gray-100 text-gray-500'} group-hover:bg-[#0A9DB2] group-hover:text-white transition-all duration-200 transform ${hoveredId === service.id ? 'translate-x-1' : ''} group-hover:translate-x-1`}>
                      <ArrowRight size={14} />
                    </span>
                  </button>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
