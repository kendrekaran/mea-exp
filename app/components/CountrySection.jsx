'use client';

import React, { useState, useEffect } from 'react';

const countries = {
  "Asia": [
    "Armenia", "Azerbaijan", "Bahrain", "China", "Georgia", "Hong Kong", "India", "Israel",
    "Japan", "Kazakhstan", "Kyrgyzstan", "Macau", "Mongolia", "Oman", "Philippines", "Russian",
    "Singapore", "South Korea", "Tajikistan", "Turkey", "Uzbekistan"
  ],
  "Europe": [
    "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria",
    "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany",
    "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein",
    "Lithuania", "Luxembourg", "Malta", "Moldova, Republic of", "Monaco", "Montenegro",
    "Netherlands", "North Macedonia, Republic of", "Norway", "Poland", "Portugal", "Romania",
    "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine",
    "United Kingdom"
  ],
  "Americas": [
    "Antigua and Barbuda", "Argentina", "Bahamas", "Barbados", "Belize", "Bolivia", "Brazil",
    "Chile", "Colombia", "Costa Rica", "Dominica", "Dominican Republic", "Ecuador", "El Salvador",
    "Grenada", "Guatemala", "Guyana", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama",
    "Paraguay", "Peru", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Suriname", "Trinidad and Tobago", "USA", "Uruguay", "Venezuela"
  ],
  "Africa": [
    "Botswana", "Burundi", "Cape Verde", "Lesotho", "Liberia", "Malawi", "Mauritius", "Morocco",
    "Namibia", "Sao Tome and Principe", "Seychelles", "South Africa", "Tunisia"
  ],
  "Oceania": [
    "Australia", "Brunei Darussalam", "Cook Islands", "Fiji", "Marshall Islands", "New Zealand",
    "Niue", "Palau", "Samoa", "Tonga", "Vanuatu"
  ]
};

function CountrySection() {
  const [selectedRegion, setSelectedRegion] = useState('Asia');
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedCountries, setDisplayedCountries] = useState({});

  useEffect(() => {
    if (searchTerm) {
      const results = {};
      Object.keys(countries).forEach(region => {
        const filteredCountries = countries[region].filter(country =>
          country.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredCountries.length > 0) {
          results[region] = filteredCountries;
        }
      });
      setDisplayedCountries(results);
    } else {
     
      setDisplayedCountries({ [selectedRegion]: countries[selectedRegion] });
    }
  }, [searchTerm, selectedRegion]);

  return (
    <section id="country-visa-assistance" className="min-h-screen">
      <div className="text-center mb-8 mt-16">
        <h2 className="text-xl poppins-medium mb-2">COUNTRIES WE OFFER</h2>
        <h1 className="text-5xl poppins-medium mb-4">
          <span className="text-[#0A9DB2]">Visa Assistance</span>
        </h1>
        <p className="text-5xl poppins-medium mb-6">
          <span className="text-black"> in following countries</span>
        </p>
      </div>
      <main className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {Object.keys(countries).map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedRegion === region
                    ? 'bg-[#0A9DB2] text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Show ${region} countries`}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="relative">
            <label htmlFor="country-search" className="sr-only">Search countries</label>
            <input
              id="country-search"
              type="text"
              placeholder="Search countries..."
              className="px-4 py-2 rounded-lg text-black shadow-md focus:outline-none focus:ring-2 focus:ring-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search for countries across all regions"
            />
          </div>
        </div>

        {/* Countries Grid */}
        <div className="space-y-8">
          {Object.keys(displayedCountries).length > 0 ? 
            Object.entries(displayedCountries).map(([region, countryList]) => (
              <div key={region}>
                <h2 className="text-xl font-bold mb-4 text-gray-800">{region}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {countryList.map((country) => (
                    <div
                      key={country}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <p className="text-lg font-medium">{country}</p>
                    </div>
                  ))}
                </div>
              </div>
            )) : (
              <p className="text-center text-gray-500">No countries found matching your search.</p>
            )
          }
        </div>
      </main>
    </section>
  );
}

export default CountrySection;