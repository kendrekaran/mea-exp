'use client';

import Head from 'next/head';
import { GraduationCap, FileCheck, Target, Users, HeadphonesIcon, Briefcase } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: GraduationCap,
    title: 'Specialized in Student Visas',
    description: 'Expert guidance for university applications and student visas'
  },
  {
    icon: FileCheck,
    title: 'Complete Document Support',
    description: 'Full assistance with attestation, apostille, and translations'
  },
  {
    icon: Target,
    title: 'Profile Evaluation',
    description: 'Professional assessment and country selection guidance'
  },
  {
    icon: Users,
    title: 'Trained Counselors',
    description: 'Experienced advisors with country-specific expertise'
  },
  {
    icon: HeadphonesIcon,
    title: 'Personalized Guidance',
    description: 'One-on-one support throughout your application journey'
  },
  {
    icon: Briefcase,
    title: 'Pre-departure Support',
    description: 'Comprehensive assistance before you leave for studies'
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
    <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">{title}</h3>
    <p className="text-gray-600" itemProp="description">{description}</p>
  </article>
);

export default function WhyChooseUs() {
  return (
    <>
      <Head>
        <meta name="description" content="Choose MEA EXPERT for expert study abroad guidance. Specialized in student visas, document support, and personalized counseling for international education." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MEA EXPERT",
            "description": "Study Abroad Services",
            "offers": features.map(feature => ({
              "@type": "Service",
              "name": feature.title,
              "description": feature.description
            }))
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-gray-50"
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
              Why Choose MEA EXPERT for Study Abroad?
            </h2>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" itemProp="description">
              Your trusted partner in international education
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