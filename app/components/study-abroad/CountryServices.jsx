'use client';

import { Globe2 } from 'lucide-react';

const countries = [
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    description: 'SDS & Regular Stream'
  },
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    description: 'F1 Student Visa'
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    description: 'Tier 4 Student Visa'
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    description: 'Student Visa (Subclass 500)'
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    description: 'Study Permit'
  },
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    description: 'Long-Stay Student Visa'
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    flag: '🇳🇿',
    description: 'Fee Paying Student Visa'
  },
  {
    code: 'IE',
    name: 'Ireland',
    flag: '🇮🇪',
    description: 'Study Visa (D)'
  },
  {
    code: 'IT',
    name: 'Italy',
    flag: '🇮🇹',
    description: 'Student Visa Type D'
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    description: 'Student Pass'
  }
];

const CountryCard = ({ country }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="flex items-center gap-4">
      <div className="text-4xl">{country.flag}</div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">{country.name}</h3>
        <p className="text-gray-600">{country.description}</p>
      </div>
    </div>
  </div>
);

export default function CountryServices() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <Globe2 className="text-[#0A9DB2] w-6 h-6 mr-2" />
            <h6 className="text-[#0A9DB2] font-semibold">DESTINATIONS</h6>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Top Countries We Serve
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Expert guidance for leading study destinations worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <CountryCard key={country.code} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
}