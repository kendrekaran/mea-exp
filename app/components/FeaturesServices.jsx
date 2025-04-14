"use client"
import React, { useState } from 'react';
import { BookOpen, FileSearch, Timer, Shield, Barcode, Truck, Headphones, PiggyBank, Mail, } from 'lucide-react';

// Group countries by continent/region for better organization


const features = [
  {
    icon: BookOpen,
    title: "Online Booking",
    description: "Book your MEA Apostille service online without any hassle."
  },
  {
    icon: FileSearch,
    title: "Apostille Document Tracking",
    description: "Track your Apostille document all along the process."
  },
  {
    icon: Timer,
    title: "Fastest Delivery for MEA apostille",
    description: "Book your MEA Apostille service online without any hassle."
  },
  {
    icon: Shield,
    title: "Document & Privacy Safety",
    description: "Your Apostille document safety is our highest priority. All documents and personal details will be safe."
  },
  {
    icon: Barcode,
    title: "Barcode System",
    description: "This ensures that no consignment is misplaced ever. Documents are barcoded before sending to MEA apostille"
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Apostille document is safely delivered to you at home."
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Our support team will assist you all along the MEA apostille process."
  },
  {
    icon: PiggyBank,
    title: "Discounted rates",
    description: "We offer the MEA Apostille service at lowest price in the market. Apostillation at lowest price"
  },
  {
    icon: Mail,
    title: "Email Updates",
    description: "You will receive the email status updates all along the Apostillation process."
  }
];


function FeaturesSection() {

  return (
    <div className="min-h-screen bg-gray-50">

      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          
        <div className="text-center mb-8">
          
          <h2 className="text-xl poppins-medium mb-2">Safe. Fast. Reliable</h2>
        <h1 className="text-5xl poppins-medium mb-4">
          <span className="text-black">Why people Trust Us</span>
        </h1>
        <h1 className="text-5xl poppins-medium mb-6">
        <span className="text-black">for their</span>
        <span className="text-[#0A9DB2]"> Documents</span>
        </h1>
      </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:py-8 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#0A9DB2]/10  flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#0A9DB2]" />
                    </div>
                  </div>
                  <div className='px-8'>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default FeaturesSection;
