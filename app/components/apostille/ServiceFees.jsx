import { AlertCircle, FileText, CheckSquare, Clock, Zap } from 'lucide-react';

export default function ServiceFees() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-[#0A9DB2]  px-4 py-2 rounded-full font-medium mb-4">
            <span className="mr-2">💰</span>Apostille Fees & Timelines
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            What Affects Your MEA Apostille Cost?
          </h2>
          <div className="w-24 h-1 bg-[#0A9DB2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your MEA apostille fees may vary depending on several factors:
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-start gap-5 mb-6">
            <AlertCircle className="text-[#0A9DB2] w-8 h-8 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Cost Factors</h3>
              <div className="space-y-6">
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <FileText className="w-5 h-5 mr-3 text-[#0A9DB2]" />
                  <div>
                    <span className="font-medium text-gray-800">Document Type</span>
                    <p className="text-gray-600 mt-1">Educational, personal, or commercial documents have different processing fees</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <CheckSquare className="w-5 h-5 mr-3 text-[#0A9DB2]" />
                  <div>
                    <span className="font-medium text-gray-800">State Attestation</span>
                    <p className="text-gray-600 mt-1">Additional fees apply if state-level verification is required</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <Clock className="w-5 h-5 mr-3 text-[#0A9DB2]" />
                  <div>
                    <span className="font-medium text-gray-800">Processing Time</span>
                    <p className="text-gray-600 mt-1">Regular processing (5-7 business days) or expedited options</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <Zap className="w-5 h-5 mr-3 text-[#0A9DB2]" />
                  <div>
                    <span className="font-medium text-gray-800">Urgency Fee</span>
                    <p className="text-gray-600 mt-1">Premium charges for rush or same-day services when available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}