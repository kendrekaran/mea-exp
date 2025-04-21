'use client';

import { Landmark, Building, Globe } from 'lucide-react';

const MEAvsMOFA = () => {
  return (
    <section id="mea-vs-mofa" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h6 className="text-cyan-600 font-semibold tracking-wider mb-3">COMPARISON</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Is MEA and MOFA the Same?</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto" />
        </div>

        <div className=" rounded-xl  p-8 md:p-12">
          <p className="text-lg text-gray-800 leading-relaxed">
            No. MEA (Ministry of External Affairs) is the Indian authority that attests documents before they go abroad.
            MOFA (Ministry of Foreign Affairs) is the foreign country’s authority (e.g., UAE, Qatar, Saudi) that verifies Indian documents once attested by MEA.
            You need MEA attestation before MOFA attestation can be done.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* MEA Card */}
            <div className="border-t-4 border-cyan-600 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg group">
              <div className="p-6">
                <div className="rounded-full bg-cyan-100 w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-cyan-200 transition-colors">
                  <Landmark className="text-cyan-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-cyan-600 mb-2">MEA</h3>
                <p className="text-gray-700">
                  The Indian authority that attests documents before they go abroad.
                </p>
              </div>
            </div>

            {/* MOFA Card */}
            <div className="border-t-4 border-cyan-600 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg group">
              <div className="p-6">
                <div className="rounded-full bg-cyan-100 w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-cyan-200 transition-colors">
                  <Building className="text-cyan-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-cyan-600 mb-2">MOFA</h3>
                <p className="text-gray-700">
                  The foreign country’s authority (e.g., UAE, Qatar, Saudi) that verifies Indian documents after MEA attestation.
                </p>
              </div>
            </div>

            {/* Process Flow */}
            <div className="md:col-span-2 border-t-4 border-cyan-600 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg group">
              <div className="p-6">
                <div className="rounded-full bg-cyan-100 w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-cyan-200 transition-colors">
                  <Globe className="text-cyan-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-cyan-600 mb-2">Process Flow</h3>
                <p className="text-gray-700">
                  You need MEA attestation before MOFA attestation can be done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MEAvsMOFA;
