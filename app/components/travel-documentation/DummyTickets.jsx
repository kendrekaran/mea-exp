import Head from 'next/head';
import { Plane, CheckCircle, Clock, Globe2 } from 'lucide-react';

const visaTypes = [
  {
    icon: Plane,
    title: "Schengen Visa",
    description: "For all Schengen countries"
  },
  {
    icon: Plane,
    title: "Canada Tourist Visa",
    description: "For Canadian visitor visas"
  },
  {
    icon: Plane,
    title: "USA B1/B2 Visa",
    description: "For US tourist/business visas"
  },
  {
    icon: Plane,
    title: "Other Countries",
    description: "UK, UAE, Singapore etc."
  }
];

const features = [
  {
    icon: CheckCircle,
    title: "Verified PNR",
    description: "Real airline confirmation codes"
  },
  {
    icon: Clock,
    title: "Quick Processing",
    description: "Delivery in 30-90 minutes"
  },
  {
    icon: Globe2,
    title: "Multiple Airlines",
    description: "All major carriers covered"
  }
];

export default function DummyTickets() {
  return (
    <>
      <Head>
        <meta name="description" content="Get verifiable dummy flight tickets with real PNR codes for visa applications. Perfect for Schengen, Canada, USA, UK, UAE visa requirements." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Dummy Flight Tickets Service",
            "description": "Verifiable flight reservations for visa applications",
            "provider": {
              "@type": "Organization",
              "name": "MEA EXPERT"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "itemListElement": [...visaTypes, ...features].map((item, index) => ({
                "@type": "Offer",
                "name": item.title,
                "description": item.description
              }))
            }
          })}
        </script>
      </Head>
      <section 
        className="py-16 bg-gray-50"
        aria-labelledby="dummy-tickets-title"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <header className="text-center mb-12">
            <h1 
              id="dummy-tickets-title"
              className="text-3xl font-bold mb-6"
              itemProp="name"
            >
              <span className="text-[#0A9DB2]">Dummy Flight Tickets</span> with Verifiable PNR
            </h1>
            <p 
              className="text-gray-600 max-w-3xl mx-auto mb-8"
              itemProp="description"
            >
              Need a flight reservation without full payment for your visa file? Get dummy tickets with valid PNR booked through real airline systems.
            </p>
          </header>

          <div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            role="list"
            aria-label="Visa types and features"
          >
            <article className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-6">Ideal for:</h2>
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                role="list"
                aria-label="Supported visa types"
              >
                {visaTypes.map((type, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-4 bg-gray-50 rounded-lg"
                    itemScope
                    itemType="https://schema.org/Service"
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

            <article className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-6">Why choose our service?</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-cyan-100 rounded-full p-2 mr-4">
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

          <footer className="bg-white p-6 rounded-lg shadow-sm text-center">
            <p className="text-gray-600">
              Our dummy ticket service provides verifiable flight reservations that are perfect for visa applications. All bookings come with real PNR codes that can be checked on airline websites.
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}