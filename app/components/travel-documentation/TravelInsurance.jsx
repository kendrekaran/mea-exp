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
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-[#0A9DB2]">Travel Insurance</span> for Visa
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Stay protected and fulfill visa requirements with travel medical insurance from leading providers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Insurance Types:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {insuranceTypes.map((type, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-cyan-100 rounded-full p-2 mr-4">
                    <type.icon className="w-5 h-5 text-[#0A9DB2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{type.title}</h4>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">We offer:</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-cyan-100 rounded-full p-2 mr-4">
                    <feature.icon className="w-5 h-5 text-[#0A9DB2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-6 rounded-lg text-center">
          <p className="text-gray-700">
            <span className="font-medium">Note:</span> All our insurance policies are issued by authorized providers and meet embassy requirements. Perfect for Schengen visa, USA visa, and other international travel needs.
          </p>
        </div>
      </div>
    </div>
  );
}