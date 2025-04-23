'use client';

import { FileCheck, FileText, Building2, Mail, Globe, FileSpreadsheet, MessagesSquare } from 'lucide-react';

const supportServices = [
  {
    icon: FileCheck,
    title: 'Document Checklist & Verification',
    description: 'Complete document verification and preparation'
  },
  {
    icon: FileText,
    title: 'Filling Visa Application Forms',
    description: 'Accurate completion of all visa forms'
  },
  {
    icon: Building2,
    title: 'Embassy Appointment Booking',
    description: 'Scheduling and submission assistance'
  },
  {
    icon: Mail,
    title: 'Cover Letter & SOP Drafting',
    description: 'Professional document drafting services'
  },
  {
    icon: Globe,
    title: 'Document Authentication',
    description: 'Translation, Apostille & Attestation'
  },
  {
    icon: FileSpreadsheet,
    title: 'Travel Documentation',
    description: 'Insurance & Itinerary preparation'
  },
  {
    icon: MessagesSquare,
    title: 'Interview Preparation',
    description: 'Visa interview guidance if applicable'
  }
];

const SupportCard = ({ service: { icon: Icon, title, description } }) => (
  <div className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="bg-cyan-100 rounded-full p-3 mr-4 text-[#0A9DB2]">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-cyan-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function ProcessSupport() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h6 className="text-[#0A9DB2] font-semibold mb-2">PROCESS</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Complete Visa Process Support
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive support at every step of your visa application
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportServices.map((service, index) => (
            <SupportCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}