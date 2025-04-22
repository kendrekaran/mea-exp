const steps = [
  {
    title: 'Document Verification',
    description:
      'Our experts verify your documents for eligibility and completeness. We ensure all papers meet the requirements for apostille attestation.',
  },
  {
    title: 'Pre-Attestation',
    description:
      'If needed, documents are first attested by state authorities (Home Department, HRD, or SDM) before proceeding to MEA apostille.',
  },
  {
    title: 'MEA Apostille',
    description:
      'Documents are submitted to the Ministry of External Affairs for apostille. A unique numbered sticker is affixed, making them valid internationally.',
  },
  {
    title: 'Quality Check & Delivery',
    description:
      'We verify all apostille stamps and signatures, then securely deliver your documents to your preferred location.',
  },
];

const ProcessStep = ({ step, index, isReverse }) => (
  <div className={`md:flex items-center ${isReverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="md:w-1/2 md:px-12 mb-6 md:mb-0 flex md:justify-end">
      <div className="w-full md:max-w-md bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="bg-[#0A9DB2] text-white text-xl font-bold rounded-full w-10 h-10 flex items-center  justify-center mb-4 md:hidden">
          {index + 1}
        </div>
        <h3 className="text-xl font-bold mb-3 text-[#0A9DB2]">{step.title}</h3>
        <p className="text-gray-700">{step.description}</p>
      </div>
    </div>
    <div className="hidden md:block md:w-14 h-14 rounded-full bg-[#0A9DB2] text-white flex items-center justify-center text-2xl font-bold border-4 border-white absolute left-1/2 pl-4 pt-2 -translate-x-1/2 z-10">
      {index + 1}
    </div>
    <div className="md:w-1/2 md:px-12"></div>
  </div>
);

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">PROCEDURE</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Apostille Process in India</h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our streamlined process ensures your documents are apostilled correctly and efficiently. Here's how we do it:
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for timeline */}
          <div className="hidden md:block bg-[#0A9DB2] absolute left-1/2 top-10 bottom-10 w-1 bg-opacity-20 -translate-x-1/2 z-0"></div>

          <div className="relative z-10 space-y-12 md:space-y-24">
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

        <div className="mt-16 bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-start">
            <div>
              <p className="text-lg font-medium">Express Service Available:</p>
              <p className="text-gray-700">
                Need urgent apostille? Ask about our express service for faster processing of your documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}