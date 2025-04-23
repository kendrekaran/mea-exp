'use client';

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
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="flex items-center gap-4">
      <div className="text-4xl">{country.flag}</div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">{country.name}</h3>
        <p className="text-gray-600">Visa Services</p>
      </div>
    </div>
  </div>
);

export default function CountryServices() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <Globe2 className="text-[#0A9DB2] w-6 h-6 mr-2" />
            <h6 className="text-[#0A9DB2] font-semibold">COUNTRIES</h6>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Countries We Serve
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Expert visa assistance for major global destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <CountryCard key={country.code} country={country} />
          ))}
        </div>

        <div className="text-center mt-8 text-gray-600">
          And many more destinations available upon request
        </div>
      </div>
    </section>
  );
}