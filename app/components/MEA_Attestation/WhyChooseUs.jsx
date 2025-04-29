'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import { Award, Shield, Clock, MapPin, Activity, FileCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "10+ Years of Experience",
      icon: <Award className="text-[#0A9DB2]" size={28} />
    },
    {
      title: "100% Genuine Attestation",
      icon: <Shield className="text-[#0A9DB2]" size={28} />
    },
    {
      title: "PAN India Support",
      icon: <MapPin className="text-[#0A9DB2]" size={28} />
    },
    {
      title: "Doorstep Pick-up & Delivery",
      icon: <FileCheck className="text-[#0A9DB2]" size={28} />
    },
    {
      title: "Real-Time Tracking",
      icon: <Activity className="text-[#0A9DB2]" size={28} />
    },
    {
      title: "Affordable Fees",
      icon: <Clock className="text-[#0A9DB2]" size={28} />
    }
  ];

  return (
    <>
      <Head>
        <meta name="description" content="Choose MEA EXPERT for reliable document attestation services. 10+ years experience, genuine attestation, PAN India support, and doorstep services." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MEA EXPERT",
            "description": "Professional MEA attestation services",
            "offers": features.map(feature => ({
              "@type": "Offer",
              "name": feature.title
            })),
            "areaServed": "India",
            "foundingDate": "2013"
          })}
        </script>
      </Head>
      <section 
        className="py-20 px-4 bg-gray-50"
        aria-labelledby="features-title"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-14">
            <p className="text-[#0A9DB2] font-semibold tracking-wider mb-3">OUR ADVANTAGES</p>
            <h2
              id="features-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Why Choose MEA EXPERT?
            </h2>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto" role="presentation"></div>
          </header>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" p-8 md:p-12"
          >
            <div 
              className="grid md:grid-cols-3 gap-8"
              role="list"
              aria-label="Our features and benefits"
            >
              {features.map((feature, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-t-4 border-[#0A9DB2] shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg group"
                  itemProp="hasOfferCatalog"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <div className="p-6">
                    <div 
                      className="rounded-full bg-cyan-100 w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-cyan-200 transition-colors"
                      aria-hidden="true"
                    >
                      {feature.icon}
                    </div>
                    <h2 
                      className="text-xl font-bold text-[#0A9DB2] mb-3"
                      itemProp="name"
                    >
                      {feature.title}
                    </h2>
                    <p className="text-gray-700" itemProp="description">
                      Trust the experts with your document attestation needs
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}