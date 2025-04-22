'use client';

import { 
  Clock, 
  Globe, 
  Shield, 
  Package, 
  CheckCircle, 
  Users, 
  Building2, 
  Briefcase, 
  GanttChartSquare, 
  FileText, 
  Globe2, 
  Building 
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'No delays or repeated follow-ups'
  },
  {
    icon: Package,
    title: 'All-In-One Service',
    description: 'Chamber, MEA, Embassy attestation under one roof'
  },
  {
    icon: Globe,
    title: 'Nationwide Reach',
    description: 'We work with all regional Chambers'
  },
  {
    icon: Shield,
    title: 'Secure & Verified',
    description: '100% document safety guaranteed'
  },
  {
    icon: CheckCircle,
    title: 'Free Pickup & Delivery',
    description: 'Available across major cities'
  },
  {
    icon: Users,
    title: 'Trusted by Businesses',
    description: 'Serving Exporters, Corporates, & SMEs'
  }
];

const chamberRequirements = [
  {
    icon: GanttChartSquare,
    text: 'International Trade & Export'
  },
  {
    icon: Building2,
    text: 'Company Expansion Abroad'
  },
  {
    icon: Briefcase,
    text: 'Business Visa Applications'
  },
  {
    icon: Building,
    text: 'Opening Branches or Offices Overseas'
  },
  {
    icon: FileText,
    text: 'MOFA or Embassy Legalization of Business Papers'
  },
  {
    icon: Globe2,
    text: 'Dubai Chamber Attestation and Gulf Requirements'
  }
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-[#0A9DB2] w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Separate component for Chamber of Commerce section
const ChamberRequirementSection = () => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h6 className="text-[#0A9DB2] font-semibold mb-2">CHAMBER OF COMMERCE</h6>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why is Chamber of Commerce Attestation Required?
        </h2>
        <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chamberRequirements.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-cyan-50 p-3 rounded-lg">
                <item.icon className="text-[#0A9DB2] h-5 w-5 flex-shrink-0" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-5 bg-cyan-50 rounded-lg border border-cyan-100">
          <p className="text-gray-700 text-center font-medium">
            Without Chamber Attestation, your documents cannot proceed for MEA or Embassy Attestation, making this the foundation of your business documentation process.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default function WhyChooseUs() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h6 className="text-[#0A9DB2] font-semibold mb-2">WHY CHOOSE US</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose MEA EXPERT?
            </h2>
            <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Trusted attestation services for businesses across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      <ChamberRequirementSection />
    </>
  );
}