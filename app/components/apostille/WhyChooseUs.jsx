'use client';

import { useEffect } from 'react';
import { ShieldCheck, Clock, Medal, Globe2, Users, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'MEA Authorized',
      description: 'We are registered and authorized by the Ministry of External Affairs for apostille services.',
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Get your documents apostilled in as little as 1-2 working days with our premium service.',
    },
    {
      icon: Medal,
      title: 'Expert Team',
      description: 'Our experienced professionals ensure accurate and hassle-free document processing.',
    },
    {
      icon: Globe2,
      title: 'Pan India Service',
      description: 'We offer our services across all major cities in India with doorstep pickup available.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 customer support and real-time updates on your document status.',
    },
    {
      icon: HeartHandshake,
      title: 'Transparent Pricing',
      description: 'No hidden charges. Clear pricing structure based on service type and urgency.',
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MEA Expert",
    "description": "Professional apostille and document attestation services in India",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Apostille Service Features",
      "itemListElement": features.map((feature, index) => ({
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
    return () => document.head.removeChild(script);
  }, []);

  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="why-choose-title">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-[#0A9DB2] font-semibold mb-2">WHY CHOOSE US</span>
          <h2 
            id="why-choose-title"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Why MEA EXPERT for Apostille?
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose the most trusted name in document attestation services across India
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Our key features"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="border-t-4 border-[#0A9DB2] shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg group"
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="p-6">
                <div className="rounded-full bg-cyan-100 w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-cyan-200 transition-colors">
                  <feature.icon className="text-[#0A9DB2]" size={28} aria-hidden="true" />
                </div>
                <h3 
                  className="text-xl font-bold text-[#0A9DB2] mb-3"
                  itemProp="name"
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-700"
                  itemProp="description"
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}