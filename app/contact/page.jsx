import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ArrowRight, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact MEA Expert | Professional Document Attestation Services",
  description: "Get in touch with MEA Expert for all your document attestation needs. Professional assistance for MEA, embassy, HRD attestation and more.",
  metadataBase: new URL('https://meaexpert.com/'),
  openGraph: {
    title: 'Contact MEA Expert',
    description: 'Contact us for professional document attestation services',
    type: 'website',
    images: ['/about1.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'contact MEA Expert, attestation services contact, document attestation help, MEA attestation contact',
  canonical: 'https://meaexpert.com/contact',
};

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-[#0A9DB2] to-[#065660] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/400')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contact MEA EXPERT
          </h1>
          <p className="text-xl md:text-2xl text-center mb-3 font-light">
            Have Questions? Need Help with Document Attestation or Visa Filing?
          </p>
          <p className="text-center text-lg max-w-2xl mx-auto">
            We're here to assist you with reliable and timely services across India.
          </p>
          
          {/* Quick Contact Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="tel:+917878868595" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all p-4 rounded-lg flex items-center text-black gap-3 backdrop-blur-sm">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91 7878868595</span>
            </a>
            <a href="mailto:info@meaexpert.com" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all p-4 rounded-lg flex items-center text-black gap-3 backdrop-blur-sm">
              <Mail className="w-5 h-5" />
              <span className="font-medium">info@meaexpert.com</span>
            </a>
            <a href="tel:+918178636828" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all p-4 rounded-lg flex items-center text-black gap-3 backdrop-blur-sm">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91 8178636828</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content - Enhanced UI */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Main Contact Card with Shadow and Better Roundness */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header Banner with Refined Design */}
            <div className="bg-gradient-to-r from-[#0A9DB2] to-[#0881A3] p-6 text-white">
              <h3 className="text-2xl font-medium">Get in Touch with MEA EXPERT</h3>
              <p className="text-white/90 mt-2">We provide expert assistance with all your documentation needs</p>
            </div>
            
            {/* Contact Information Grid - Improved Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Left Column - Contact Details */}
              <div className="flex flex-col space-y-8">
                {/* Address Section */}
                <div className="flex space-x-4">
                  <div className="bg-blue-50 rounded-full p-3 h-14 w-14 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6 text-[#0A9DB2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Our Address</h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      MEA EXPERT (TGA SERVICES) <br />
                      MB-03, A-Block Naurang House,<br />
                      K.G. Marg Connaught Place,<br />
                      New Delhi -110001
                    </p>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="flex space-x-4">
                  <div className="bg-blue-50 rounded-full p-3 h-14 w-14 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-6 h-6 text-[#0A9DB2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Phone/WhatsApp</h3>
                    <div className="mt-2">
                      <a href="tel:+917878868595" className="block text-gray-600 hover:text-[#0A9DB2] transition-colors">
                        +91 7878868595
                      </a>
                      <a href="tel:+918178636828" className="block text-gray-600 hover:text-[#0A9DB2] transition-colors">
                        +91 8178636828
                      </a>
                    </div>
                    <p className="text-sm text-gray-500 italic mt-2">
                      (Monday to Saturday – 10 AM to 7 PM)
                    </p>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex space-x-4">
                  <div className="bg-blue-50 rounded-full p-3 h-14 w-14 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-6 h-6 text-[#0A9DB2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                    <a href="mailto:info@meaexpert.com" className="block text-gray-600 hover:text-[#0A9DB2] transition-colors mt-2">
                      info@meaexpert.com
                    </a>
                    <p className="text-sm text-gray-500 mt-2">
                      For general queries, service details, or documentation help.
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex space-x-4">
                  <div className="bg-blue-50 rounded-full p-3 h-14 w-14 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Clock className="w-6 h-6 text-[#0A9DB2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Business Hours</h3>
                    <div className="text-gray-600 mt-2 space-y-1">
                      <p><span className="font-medium">Monday – Saturday:</span> 10:00 AM to 7:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> Closed</p>
                    </div>
                    <p className="text-sm text-gray-500 italic mt-2">
                      (Available on WhatsApp for urgent cases)
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-6">
                {/* Social Media - Enhanced Design */}
                <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 text-lg mb-4">Connect With Us Online</h3>
                  <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
                    <a href="https://www.facebook.com/people/MEA-Experts/61568621811046/?mibextid=ZbWKwL" 
                       className="flex items-center space-x-3 text-gray-700 hover:text-[#0A9DB2] transition-colors bg-white p-3 rounded-lg shadow-sm">
                      <Facebook className="w-5 h-5" />
                      <span className="font-medium">MEA Expert India</span>
                    </a>
                    <a href="https://instagram.com/meaexpert" 
                       className="flex items-center space-x-3 text-gray-700 hover:text-[#0A9DB2] transition-colors bg-white p-3 rounded-lg shadow-sm">
                      <Instagram className="w-5 h-5" />
                      <span className="font-medium">@meaexpert</span>
                    </a>
                  </div>
                </div>

                {/* Pan India Service - Improved Layout */}
                <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 text-lg mb-4">We Serve PAN-India</h3>
                  <p className="text-gray-600 leading-relaxed">
                    While our main office is based in New Delhi, we offer online support and courier assistance for all major cities including: Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Kochi, Chandigarh, and more.
                  </p>
                </div>

                {/* Why Choose Us - Better Styling */}
                <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 text-lg mb-4">Why Choose MEA EXPERT</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <div className="bg-white rounded-full p-2 shadow-sm">
                        <span className="text-[#0A9DB2] text-lg flex items-center justify-center">✓</span>
                      </div>
                      <span className="text-gray-700">Fast & Reliable Services</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-white rounded-full p-2 shadow-sm">
                        <span className="text-[#0A9DB2] text-lg flex items-center justify-center">✓</span>
                      </div>
                      <span className="text-gray-700">Verified by Government & Embassy Norms</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-white rounded-full p-2 shadow-sm">
                        <span className="text-[#0A9DB2] text-lg flex items-center justify-center">✓</span>
                      </div>
                      <span className="text-gray-700">Affordable & Transparent Fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-white rounded-full p-2 shadow-sm">
                        <span className="text-[#0A9DB2] text-lg flex items-center justify-center">✓</span>
                      </div>
                      <span className="text-gray-700">Doorstep Document Pickup & Delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Footer CTA - Updated with Action Element */}
            <div className="bg-gray-50 p-8 text-center border-t">
              <p className="text-gray-600 text-lg">Need assistance with document attestation, apostille, or translation?</p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+917878868595" className="flex items-center space-x-2 bg-[#0A9DB2] hover:bg-[#098da0] text-white py-3 px-6 rounded-lg transition-colors shadow-sm">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a href="mailto:info@meaexpert.com" className="flex items-center space-x-2 bg-white border border-[#0A9DB2] text-[#0A9DB2] hover:bg-blue-50 py-3 px-6 rounded-lg transition-colors shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

