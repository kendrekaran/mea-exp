import { CheckCircle, DollarSign, Info, CreditCard, FileText } from "lucide-react";
import Link from "next/link";

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h6 className="text-[#0A9DB2] font-semibold tracking-wider mb-3">PRICING</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MEA Attestation Fees</h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
        </div>

        <div className=" gap-8 max-w-fit mx-auto">
          
          <div className="bg-white shadow-lg rounded-xl p-8 border-t-4 border-[#0A9DB2] hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <div className="rounded-full bg-cyan-100 p-3">
                <CreditCard className="text-[#0A9DB2] w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center">Service Fees</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="text-[#0A9DB2] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>Transparent pricing </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-[#0A9DB2] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>No hidden charges</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-[#0A9DB2] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>Discounts on bulk documents</span>
              </li>
            </ul>

            <Link href="/contact">
            <button className="w-full py-4 rounded-3xl text-lg mb-4 bg-[#0A9DB2] text-white hover:bg-cyan-700 transition-colors">
              Contact Now
            </button>
            </Link>
            <p className="text-sm text-gray-500 text-center">Contact us for a quick quote tailored to your requirements.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PricingSection;