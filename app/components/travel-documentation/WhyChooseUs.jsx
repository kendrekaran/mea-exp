'use client';

import Head from 'next/head';
import { FileCheck, Clock, Users, Globe2 } from 'lucide-react';
import Link from 'next/link';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <article 
    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
    itemScope
    itemType="https://schema.org/Service"
  >
    <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
      <Icon className="text-[#0A9DB2] w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">{title}</h3>
    <p className="text-gray-600" itemProp="description">{description}</p>
  </article>
);

export default function WhyChooseUs() {
  const features = [
    {
      icon: FileCheck,
      title: 'Embassy Standards',
      description: 'All documents meet embassy standards',
    },
    {
      icon: Clock,
      title: 'Quick Delivery',
      description: 'Delivered digitally within hours',
    },
    {
      icon: Users,
      title: 'Trusted Service',
      description: 'Trusted by visa consultants across India',
    },
    {
      icon: Globe2,
      title: 'Wide Coverage',
      description: 'Experience across 20+ embassy types',
    }
  ];

  return (
    <>
      <Head>
        <meta name="description" content="Choose MEA EXPERT for embassy-standard travel documentation. Quick digital delivery, trusted service across India, and experience with 20+ embassy types." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MEA EXPERT",
            "description": "Professional Travel Documentation Services",
            "offers": features.map(feature => ({
              "@type": "Offer",
              "name": feature.title,
              "description": feature.description
            }))
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-white"
        aria-labelledby="features-title"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-[#0A9DB2] font-semibold mb-2">WHY CHOOSE US</p>
            <h2
              id="features-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Why MEA EXPERT for Travel Documentation?
            </h2>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
          </header>

          <div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            role="list"
            aria-label="Our features and benefits"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}