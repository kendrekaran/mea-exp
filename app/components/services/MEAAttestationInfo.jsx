import { Globe, CheckCircle, Lock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h6 className="text-cyan-600 font-semibold tracking-wider mb-3">LEARN MORE</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What is MEA Attestation?</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            MEA Attestation refers to the legal verification of documents by the Ministry of External Affairs, Government of India. 
            This process validates that your documents are genuine and can be accepted internationally.
          </p>
          
          <p className="text-lg text-gray-800 mb-8 leading-relaxed">
            Whether it's educational certificates, birth or marriage certificates, or commercial papers — 
            MEA attestation is essential before they are recognized by foreign embassies or consulates.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="border-t-4 border-cyan-600 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg group">
              <div className="p-6">
                <div className="rounded-full bg-cyan-100 w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-cyan-200 transition-colors">
                  <Globe className="text-cyan-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-cyan-600 mb-3">International Recognition</h3>
                <p className="text-gray-700">Ensures your documents are legally valid and accepted worldwide.</p>
              </div>
            </div>
            
            <div className="border-t-4 border-cyan-600 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg group">
              <div className="p-6">
                <div className="rounded-full bg-cyan-100 w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-cyan-200 transition-colors">
                  <CheckCircle className="text-cyan-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-cyan-600 mb-3">Legal Verification</h3>
                <p className="text-gray-700">Official confirmation that your documents are authentic and legitimate.</p>
              </div>
            </div>
            
            <div className="border-t-4 border-cyan-600 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg group">
              <div className="p-6">
                <div className="rounded-full bg-cyan-100 w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-cyan-200 transition-colors">
                  <Lock className="text-cyan-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-cyan-600 mb-3">Required Procedure</h3>
                <p className="text-gray-700">Mandatory process for using Indian documents in many foreign countries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;