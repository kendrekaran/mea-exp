'use client';

import Head from 'next/head';
import { Globe2 } from 'lucide-react';

const countries = [
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦'
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺'
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪'
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧'
  },
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸'
  },
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷'
  },
  {
    code: 'AE',
    name: 'UAE',
    flag: '🇦🇪'
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    flag: '🇳🇿'
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬'
  },
  {
    code: 'IE',
    name: 'Ireland',
    flag: '🇮🇪'
  }
];

const CountryCard = ({ country }) => (
  <article 
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
    itemScope
    itemType="https://schema.org/Country"
  >
    <div className="flex items-center gap-4">
      <div className="text-4xl" aria-hidden="true">{country.flag}</div>
      <div>
        <h3 className="text-xl font-bold text-gray-800" itemProp="name">{country.name}</h3>
        <p className="text-gray-600" itemProp="description">Visa Services</p>
      </div>
    </div>
  </article>
);

export default function CountryServices() {
  return (
    <>
      <Head>
        <meta name="description" content="Expert visa assistance for Canada, Australia, Germany, UK, USA, and other major global destinations. Professional immigration services." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Visa Services",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "areaServed": countries.map(country => ({
              "@type": "Country",
              "name": country.name
            }))
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-gray-50"
        aria-labelledby="countries-title"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-2">
              <Globe2 className="text-[#0A9DB2] w-6 h-6 mr-2" aria-hidden="true" />
              <p className="text-[#0A9DB2] font-semibold">COUNTRIES</p>
            </div>
            <h1 
              id="countries-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Countries We Serve
            </h1>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              Expert visa assistance for major global destinations
            </p>
          </header>

          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Countries we provide visa services for"
          >
            {countries.map((country) => (
              <CountryCard key={country.code} country={country} />
            ))}
          </div>

          <footer className="text-center mt-8 text-gray-600">
            And many more destinations available upon request
          </footer>
        </div>
      </section>
    </>
  );
}