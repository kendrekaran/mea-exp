'use client';

import { Globe2 } from 'lucide-react';

const languages = [
  {
    code: 'FR',
    name: 'French',
    flag: '🇫🇷'
  },
  {
    code: 'DE',
    name: 'German',
    flag: '🇩🇪'
  },
  {
    code: 'AR',
    name: 'Arabic',
    flag: '🇦🇪'
  },
  {
    code: 'ES',
    name: 'Spanish',
    flag: '🇪🇸'
  },
  {
    code: 'RU',
    name: 'Russian',
    flag: '🇷🇺'
  },
  {
    code: 'IT',
    name: 'Italian',
    flag: '🇮🇹'
  },
  {
    code: 'ZH',
    name: 'Chinese',
    flag: '🇨🇳'
  },
  {
    code: 'JA',
    name: 'Japanese',
    flag: '🇯🇵'
  },
  {
    code: 'PT',
    name: 'Portuguese',
    flag: '🇵🇹'
  }
];

const LanguageCard = ({ language }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-4">
      <div className="text-4xl">{language.flag}</div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">{language.name}</h3>
        <p className="text-gray-600">Translation Services</p>
      </div>
    </div>
  </div>
);

export default function Languages() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <Globe2 className="text-[#0A9DB2] w-6 h-6 mr-2" />
            <h6 className="text-[#0A9DB2] font-semibold">LANGUAGES</h6>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Languages We Translate
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide certified document translation services in major global languages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <LanguageCard key={lang.code} language={lang} />
          ))}
        </div>

        <div className="text-center mt-8 text-gray-600">
          And many more languages available upon request
        </div>
      </div>
    </section>
  );
}