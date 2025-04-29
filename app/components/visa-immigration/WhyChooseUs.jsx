'use client';

import Head from 'next/head';
import { ShieldCheck, Globe2, Brain, CheckSquare, FileStack, Truck } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: ShieldCheck,
    title: 'End-to-End Visa Support',
    description: 'Complete assistance from documentation to submission'
  },
  {
    icon: Brain,
    title: 'Experienced Advisors',
    description: 'Specialized experts for every country & visa category'
  },
  {
    icon: Globe2,
    title: 'Up-to-Date Knowledge',
    description: 'Current with latest immigration rules and policies'
  },
  {
    icon: CheckSquare,
    title: 'Error-Free Filing',
    description: 'Meticulous attention to detail in every submission'
  },
  {
    icon: FileStack,
    title: 'Complex Case Handling',
    description: 'Specialized in handling difficult cases & refusals'
  },
  {
    icon: Truck,
    title: 'PAN India Support',
    description: 'Convenient service with doorstep document pickup'
  }
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <article 
    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
    itemScope
    itemType="https://schema.org/Service"
  >
    <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
      <Icon className="text-[#0A9DB2] w-6 h-6" />
    </div>
    <h2 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">{title}</h2>
    <p className="text-gray-600" itemProp="description">{description}</p>
  </article>
);

export default function WhyChooseUs() {
  return (
    <>
      <Head>
        <meta name="description" content="Choose MEA EXPERT for comprehensive visa support, experienced advisors, and pan-India services. Specialized in complex immigration cases with meticulous attention to detail." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MEA EXPERT",
            "description": "Visa and Immigration Services",
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
            <p className="text-[#0A9DB2] font-semibold mb-2">WHY US</p>
            <h2
              id="features-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Why Choose MEA EXPERT?
            </h2>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              Trust your visa journey with our experienced team
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