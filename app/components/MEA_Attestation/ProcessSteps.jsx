import Head from 'next/head';

const steps = [
    {
      title: 'Notary or State-Level Attestation',
      description:
        'The first step involves verification from state authorities such as HRD (for educational documents), Home Department (for personal documents), or Chamber of Commerce (for commercial documents).',
    },
    {
      title: 'MEA Attestation',
      description:
        'Once verified by state authorities, documents are sent to the Ministry of External Affairs in Delhi. MEA officials check the authentication and apply their stamp and signature if all requirements are met.',
    },
    {
      title: 'Embassy Attestation',
      description:
        'The final step (if required for your destination country) is getting attestation from the embassy or consulate of the country where you plan to use the documents.',
    },
  ];
  
  const ProcessStep = ({ step, index, isReverse }) => (
  <article 
    className={`md:flex items-center ${isReverse ? 'md:flex-row-reverse' : ''}`}
    itemProp="step"
    itemScope
    itemType="https://schema.org/HowToStep"
  >
    <div className="md:w-1/2 md:px-12 mb-6 md:mb-0 flex md:justify-end">
      <div className="w-full md:max-w-md bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div 
          className="bg-mea text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4 md:hidden"
          aria-hidden="true"
        >
          {index + 1}
        </div>
        <h3 className="text-xl font-bold mb-3 text-mea" itemProp="name">{step.title}</h3>
        <p className="text-gray-700" itemProp="text">{step.description}</p>
      </div>
    </div>
    <div className="hidden md:block md:w-14 h-14 rounded-full bg-mea bg-[#0A9DB2] pl-4 pt-2 text-white flex items-center justify-center text-2xl font-bold border-4 border-white absolute left-1/2 -translate-x-1/2">
      {index + 1}
    </div>
    <div className="md:w-1/2 md:px-12"></div>
  </article>
);

export default function ProcessSection() {
  return (
    <>
      <Head>
        <meta name="description" content="Understanding the MEA attestation process: State-level verification, MEA attestation, and Embassy attestation. Complete guide to document attestation in India." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "MEA Attestation Process",
            "description": "Complete process of document attestation through MEA",
            "totalTime": "PT7-14D",
            "step": steps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.title,
              "text": step.description,
              "itemListElement": {
                "@type": "HowToDirection",
                "text": step.description
              }
            }))
          })}
        </script>
      </Head>
      <section 
        id="process" 
        className="py-16 px-4 bg-gray-50"
        aria-labelledby="process-title"
        itemScope
        itemType="https://schema.org/HowTo"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <p className="text-mea font-semibold mb-2">HOW IT WORKS</p>
            <h2
              id="process-title"
              className="text-3xl md:text-4xl font-bold mb-6"
              itemProp="name"
            >
              What is the Attestation Process?
            </h2>
            <div className="w-24 h-1 bg-mea mx-auto bg-[#0A9DB2] mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The MEA attestation process usually involves three major steps. Our experts will guide you through each stage for a smooth experience.
            </p>
          </header>

          <div className="relative">
            {/* Vertical Line for timeline */}
            <div 
              className="hidden md:block bg-[#0A9DB2] absolute left-1/2 top-10 bottom-10 w-1 bg-mea/20 -translate-x-1/2 z-0"
              role="presentation"
              aria-hidden="true"
            ></div>

            <div 
              className="relative z-10 space-y-12 md:space-y-24"
              role="list"
              aria-label="Attestation process steps"
            >
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  step={step}
                  index={index}
                  isReverse={index % 2 !== 0}
                />
              ))}
            </div>
          </div>

          <aside className="mt-16 bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-start">

              <div>
                <p className="text-lg font-medium">Important Note:</p>
                <p className="text-gray-700">
                  MEA only attests documents after verification from the respective State Home Department 
                  or HRD/Chamber of Commerce. Our experts will handle this entire process for you.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
