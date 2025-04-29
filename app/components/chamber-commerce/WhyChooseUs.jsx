'use client';

import Head from 'next/head';
import { 
  Clock, 
  Globe, 
  Shield, 
  Package, 
  CheckCircle, 
  Users, 
  Building2, 
  Briefcase, 
  GanttChartSquare, 
  FileText, 
  Globe2, 
  Building 
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'No delays or repeated follow-ups'
  },
  {
    icon: Package,
    title: 'All-In-One Service',
    description: 'Chamber, MEA, Embassy attestation under one roof'
  },
  {
    icon: Globe,
    title: 'Nationwide Reach',
    description: 'We work with all regional Chambers'
  },
  {
    icon: Shield,
    title: 'Secure & Verified',
    description: '100% document safety guaranteed'
  },
  {
    icon: CheckCircle,
    title: 'Free Pickup & Delivery',
    description: 'Available across major cities'
  },
  {
    icon: Users,
    title: 'Trusted by Businesses',
    description: 'Serving Exporters, Corporates, & SMEs'
  }
];

const chamberRequirements = [
  {
    icon: GanttChartSquare,
    text: 'International Trade & Export'
  },
  {
    icon: Building2,
    text: 'Company Expansion Abroad'
  },
  {
    icon: Briefcase,
    text: 'Business Visa Applications'
  },
  {
    icon: Building,
    text: 'Opening Branches or Offices Overseas'
  },
  {
    icon: FileText,
    text: 'MOFA or Embassy Legalization of Business Papers'
  },
  {
    icon: Globe2,
    text: 'Dubai Chamber Attestation and Gulf Requirements'
  }
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <article 
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
    itemProp="offer"
    itemScope
    itemType="https://schema.org/Offer"
  >
    <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
      <Icon className="text-[#0A9DB2] w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">{title}</h3>
    <p className="text-gray-600" itemProp="description">{description}</p>
  </article>
);

const ChamberRequirementSection = () => (
  <section 
    className="py-16 px-4 bg-gray-50"
    aria-labelledby="requirements-title"
    itemScope
    itemType="https://schema.org/Service"
  >
    <div className="container mx-auto max-w-6xl">
      <header className="text-center mb-12">
        <p className="text-[#0A9DB2] font-semibold mb-2">CHAMBER OF COMMERCE</p>
        <h2 
          id="requirements-title"
          className="text-3xl md:text-4xl font-bold mb-6"
          itemProp="name"
        >
          Why is Chamber of Commerce Attestation Required?
        </h2>
        <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
      </header>

      <div 
        className="bg-white rounded-xl shadow-md p-8 border border-gray-200"
        role="list"
        aria-label="Attestation requirements"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chamberRequirements.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-cyan-50 p-3 rounded-lg">
                <item.icon className="text-[#0A9DB2] h-5 w-5 flex-shrink-0" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-5 bg-cyan-50 rounded-lg border border-cyan-100">
          <p className="text-gray-700 text-center font-medium">
            Without Chamber Attestation, your documents cannot proceed for MEA or Embassy Attestation, making this the foundation of your business documentation process.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default function WhyChooseUs() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MEA EXPERT",
            "description": "Trusted attestation services for businesses across India",
            "offers": features.map(feature => ({
              "@type": "Offer",
              "name": feature.title,
              "description": feature.description
            })),
            "areaServed": "India",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Chamber of Commerce Attestation Services",
              "itemListElement": chamberRequirements.map(req => ({
                "@type": "Service",
                "name": req.text
              }))
            }
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-white"
        aria-labelledby="why-choose-title"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-[#0A9DB2] font-semibold mb-2">WHY CHOOSE US</p>
            <h1 
              id="why-choose-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Why Choose MEA EXPERT?
            </h1>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              Trusted attestation services for businesses across India
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
      
      <ChamberRequirementSection />
    </>
  );
}