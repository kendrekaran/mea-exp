"use client"
import React, { useState } from 'react';
import { Globe2, BookOpen, FileSearch, Timer, Shield, Barcode, Truck, Headphones, PiggyBank, Mail, ClipboardCheck, FileText, CreditCard, Search, FileCheck } from 'lucide-react';



const steps = [
  {
    icon: ClipboardCheck,
    title: "Register for MEA Apostille",
    description: "Complete the registration process for MEA apostille service"
  },
  {
    icon: FileText,
    title: "Send the original documents for apostille",
    description: "Submit your original documents for the apostille process"
  },
  {
    icon: CreditCard,
    title: "Make the payment online for MEA apostille",
    description: "Secure online payment for your apostille service"
  },
  {
    icon: Search,
    title: "Track processing status of MEA apostille",
    description: "Monitor your document's apostille processing status"
  },
  {
    icon: FileCheck,
    title: "Once MEA apostille document is returned",
    description: "Receive your completed apostille document"
  }
];

function StepsSection() {

  return (
    <div className="min-h-screen bg-gray-50">
  
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          
        <div className="text-center mb-8 ">
        <h1 className="text-5xl poppins-medium mb-16">
          <span className="text-black">Steps to get </span>
          <span className="text-[#0A9DB2]">MEA Apostille</span>
        </h1>
      </div>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#0A9DB2] flex items-center justify-center text-white font-bold mr-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3">
                    <step.icon className="w-6 h-6 text-[#0A9DB2]" />
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-gray-600 ml-9">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default StepsSection;