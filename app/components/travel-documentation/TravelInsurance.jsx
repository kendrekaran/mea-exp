import Head from 'next/head';
import { ShieldCheck, CreditCard, BookOpen, Globe2 } from 'lucide-react';

const insuranceTypes = [
  {
    icon: ShieldCheck,
    title: "Schengen Insurance",
    description: "€30,000 coverage as per embassy requirements"
  },
  {
    icon: ShieldCheck,
    title: "USA & UK Insurance",
    description: "Coverage meeting B1/B2 and UK visit visa needs"
  },
  {
    icon: ShieldCheck,
    title: "Student Insurance",
    description: "SOP-compliant coverage for study visas"
  },
  {
    icon: ShieldCheck,
    title: "Tourist Insurance",
    description: "Standard travel medical coverage"
  }
];

const features = [
  {
    icon: CreditCard,
    title: "Visa-compliant Coverage",
    description: "Meeting all embassy requirements"
  },
  {
    icon: BookOpen,
    title: "Instant Documents",
    description: "PDF insurance policy in minutes"
  },
  {
    icon: Globe2,
    title: "Multiple Options",
    description: "Plans for different visa types"
  }
];

export default function TravelInsurance() {
  return (
    <>
      <Head>
        <meta name="description" content="Get visa-compliant travel insurance for Schengen, USA, UK visas. Instant policy documents with embassy-approved coverage for all visa types." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Travel Insurance for Visa",
            "description": "Visa-compliant travel insurance services",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "itemListElement": [...insuranceTypes, ...features].map((item, index) => ({
                "@type": "Offer",
                "name": item.title,
                "description": item.description
              }))
            }
          })}
        </script>
      </Head>
      <section 
        className="py-16 bg-white"
        aria-labelledby="insurance-title"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <header className="text-center mb-12">
            <h2
              id="insurance-title"
              className="text-3xl font-bold mb-6"
              itemProp="name"
            >
              <span className="text-[#0A9DB2]">Travel Insurance</span> for Visa
            </h2>
            <p 
              className="text-gray-600 max-w-3xl mx-auto mb-8"
              itemProp="description"
            >
              Stay protected and fulfill visa requirements with travel medical insurance from leading providers
            </p>
          </header>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            role="list"
            aria-label="Insurance types and features"
          >
            <article className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-xl font-bold mb-6">Insurance Types:</h2>
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                role="list"
                aria-label="Available insurance types"
              >
                {insuranceTypes.map((type, index) => (
                  <div 
                    key={index} 
                    className="flex items-start"
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <div className="bg-cyan-100 rounded-full p-2 mr-4" aria-hidden="true">
                      <type.icon className="w-5 h-5 text-[#0A9DB2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" itemProp="name">{type.title}</h3>
                      <p className="text-sm text-gray-600" itemProp="description">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-xl font-bold mb-6">We offer:</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-cyan-100 rounded-full p-2 mr-4" aria-hidden="true">
                      <feature.icon className="w-5 h-5 text-[#0A9DB2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <footer className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-6 rounded-lg text-center">
            <p className="text-gray-700">
              <span className="font-medium">Note:</span> All our insurance policies are issued by authorized providers and meet embassy requirements. Perfect for Schengen visa, USA visa, and other international travel needs.
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}