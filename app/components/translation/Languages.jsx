'use client';

import Head from 'next/head';
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
  <article 
    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
    itemScope
    itemType="https://schema.org/Language"
  >
    <div className="flex items-center gap-4">
      <div className="text-4xl" aria-hidden="true">{language.flag}</div>
      <div>
        <h3 className="text-xl font-bold text-gray-800" itemProp="name">{language.name}</h3>
        <p className="text-gray-600" itemProp="description">Translation Services</p>
      </div>
    </div>
  </article>
);

export default function Languages() {
  return (
    <>
      <Head>
        <meta name="description" content="Professional document translation services in French, German, Arabic, Spanish, and other major global languages. Certified translations for all documents." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Document Translation Services",
            "availableLanguage": languages.map(lang => ({
              "@type": "Language",
              "name": lang.name,
              "alternateName": lang.code
            }))
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-white"
        aria-labelledby="languages-title"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-2">
              <Globe2 className="text-[#0A9DB2] w-6 h-6 mr-2" aria-hidden="true" />
              <p className="text-[#0A9DB2] font-semibold">LANGUAGES</p>
            </div>
            <h2
              id="languages-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Languages We Translate
            </h2>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide certified document translation services in major global languages
            </p>
          </header>

          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Available languages for translation"
          >
            {languages.map((lang) => (
              <LanguageCard key={lang.code} language={lang} />
            ))}
          </div>

          <footer className="text-center mt-8 text-gray-600">
            And many more languages available upon request
          </footer>
        </div>
      </section>
    </>
  );
}