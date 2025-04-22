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
    <div className={`md:flex items-center ${isReverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 md:px-12 mb-6 md:mb-0 flex md:justify-end">
        <div className="w-full md:max-w-md bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="bg-mea text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4 md:hidden">
            {index + 1}
          </div>
          <h3 className="text-xl font-bold mb-3 text-mea">{step.title}</h3>
          <p className="text-gray-700">{step.description}</p>
        </div>
      </div>
      <div className="hidden md:block md:w-14 h-14 rounded-full bg-mea bg-[#0A9DB2] pl-4 pt-2 text-white flex items-center justify-center text-2xl font-bold border-4 border-white absolute left-1/2 -translate-x-1/2">
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
            <h6 className="text-mea font-semibold mb-2">HOW IT WORKS</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is the Attestation Process?</h2>
            <div className="w-24 h-1 bg-mea mx-auto bg-[#0A9DB2] mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The MEA attestation process usually involves three major steps. Our experts will guide you through each stage for a smooth experience.
            </p>
          </div>
  
          <div className="relative">
            {/* Vertical Line for timeline */}
            <div className="hidden md:block bg-[#0A9DB2] absolute left-1/2 top-10 bottom-10 w-1 bg-mea/20 -translate-x-1/2 z-0"></div>
  
            <div className="relative z-10 space-y-12  md:space-y-24">
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
                <p className="text-lg font-medium">Important Note:</p>
                <p className="text-gray-700">
                  MEA only attests documents after verification from the respective State Home Department 
                  or HRD/Chamber of Commerce. Our experts will handle this entire process for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  