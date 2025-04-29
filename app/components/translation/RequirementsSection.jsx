import Head from 'next/head';
import { Plane, GraduationCap, Building2, Scale, Stamp } from 'lucide-react';

const requirements = [
  {
    icon: Plane,
    title: 'Visa Applications',
    description: 'For tourist, student, and work visa submissions',
    examples: ['Personal documents', 'Educational certificates', 'Employment records']
  },
  {
    icon: Building2,
    title: 'Immigration & PR',
    description: 'During immigration or PR filing process',
    examples: ['Birth certificates', 'Marriage certificates', 'Police clearance']
  },
  {
    icon: GraduationCap,
    title: 'University Admissions',
    description: 'For study abroad applications',
    examples: ['Academic transcripts', 'Recommendation letters', 'Certificates']
  },
  {
    icon: Scale,
    title: 'Legal Submissions',
    description: 'For court/legal submissions abroad',
    examples: ['Legal documents', 'Affidavits', 'Court papers']
  },
  {
    icon: Stamp,
    title: 'Document Attestation',
    description: 'For MOFA or Embassy attestation',
    examples: ['Non-English documents', 'Official certificates', 'Legal papers']
  }
];

const RequirementCard = ({ requirement: { icon: Icon, title, description, examples } }) => (
  <article 
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
    itemScope
    itemType="https://schema.org/Service"
  >
    <div className="flex items-start mb-4">
      <div className="bg-cyan-100 rounded-full p-3 mr-4" aria-hidden="true">
        <Icon className="text-[#0A9DB2] w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2" itemProp="name">{title}</h3>
        <p className="text-gray-600" itemProp="description">{description}</p>
      </div>
    </div>
    <div className="pl-16">
      <ul 
        className="list-disc text-sm text-gray-500 space-y-1"
        role="list"
        aria-label={`Required documents for ${title}`}
      >
        {examples.map((example, index) => (
          <li key={index} itemProp="serviceType">{example}</li>
        ))}
      </ul>
    </div>
  </article>
);

export default function RequirementsSection() {
  return (
    <>
      <Head>
        <meta name="description" content="Professional document translation services required for visa applications, immigration, university admissions, legal submissions, and document attestation." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Document Translation Requirements",
            "serviceType": "Translation Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "itemListElement": requirements.map((req, index) => ({
                "@type": "Service",
                "position": index + 1,
                "name": req.title,
                "description": req.description,
                "serviceType": req.examples
              }))
            }
          })}
        </script>
      </Head>
      <section 
        className="py-16 px-4 bg-white"
        aria-labelledby="requirements-title"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-[#0A9DB2] font-semibold mb-2">REQUIREMENTS</p>
            <h1 
              id="requirements-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              Why Translation is Needed?
            </h1>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8" role="presentation"></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              itemProp="description"
            >
              Professional translation is required for various international procedures
            </p>
          </header>

          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Translation requirements by category"
          >
            {requirements.map((requirement, index) => (
              <RequirementCard key={index} requirement={requirement} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}