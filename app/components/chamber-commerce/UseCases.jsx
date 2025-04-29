import Head from 'next/head';
import { 
  Globe, 
  Building2, 
  Stamp, 
  FileText, 
  Plane, 
  Building 
} from 'lucide-react';

const useCases = [
  {
    icon: Globe,
    title: 'Export/Import Compliance',
    description: 'Essential documentation for international trade operations'
  },
  {
    icon: Building2,
    title: 'Company Setup in UAE/UK/EU',
    description: 'Required for establishing business presence overseas'
  },
  {
    icon: Stamp,
    title: 'Trademark Registration',
    description: 'Legal documentation for international trademark registration'
  },
  {
    icon: FileText,
    title: 'International Contracts',
    description: 'Authentication for cross-border business agreements'
  },
  {
    icon: Plane,
    title: 'Business Visa & Sponsorship',
    description: 'Supporting documents for business travel and visa applications'
  },
  {
    icon: Building,
    title: 'GCC Registration',
    description: 'Documentation for Dubai Chamber and GCC authorities'
  }
];

const UseCaseCard = ({ icon: Icon, title, description }) => (
  <article 
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
    itemProp="haspart"
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

export default function UseCases() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": useCases.map((useCase, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": useCase.title,
              "description": useCase.description
            }))
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-gray-50"
        aria-labelledby="usecases-title"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-[#0A9DB2] font-semibold mb-2">USE CASES</p>
            <h2
              id="usecases-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Common Use Cases of Chamber Attested Documents
            </h2>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              Discover how Chamber of Commerce attestation supports your international business operations
            </p>
          </header>

          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Chamber attestation use cases"
          >
            {useCases.map((useCase, index) => (
              <UseCaseCard 
                key={index} 
                {...useCase} 
                role="listitem"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}