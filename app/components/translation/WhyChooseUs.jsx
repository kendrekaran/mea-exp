'use client';

import Head from 'next/head';
import { ShieldCheck, Clock, Medal, Globe2, Users, HeartHandshake } from 'lucide-react';
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
      icon: ShieldCheck,
      title: 'Certified Translations',
      description: 'Official translations with stamp, signature & translator declaration',
    },
    {
      icon: Globe2,
      title: 'Multi-language Experts',
      description: 'Native translators with expertise in legal and technical translations',
    },
    {
      icon: Medal,
      title: 'Legally Compliant',
      description: 'Translations accepted by embassies, universities & visa offices',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Express translations available in 24-48 hours',
    },
    {
      icon: HeartHandshake,
      title: 'Affordable Rates',
      description: 'Transparent pricing with no hidden costs',
    },
    {
      icon: Users,
      title: 'PAN India Support',
      description: 'Document pickup & delivery available across India',
    }
  ];

  return (
    <>
      <Head>
        <meta name="description" content="Professional translation services with certified translations, multi-language experts, and fast delivery across India. Trusted by embassies and institutions." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MEA EXPERT",
            "description": "Professional Translation Services",
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
            <h1 
              id="features-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Why Choose MEA EXPERT for Translation?
            </h1>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              Professional translation services you can trust
            </p>
          </header>

          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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