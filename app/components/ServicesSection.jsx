"use client"
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function MEAServices() {
  const [hoveredId, setHoveredId] = useState(null);
  
  const services = [
    {
      id: 1,
      title: "MEA Attestation Services",
      description: "Get your documents authenticated by the Ministry of External Affairs (MEA) for international use with fast and genuine processing.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      link: "/mea-attestation"
    },
    {
      id: 2,
      title: "Apostille Services",
      description: "Legalize your documents for Hague Convention countries with fast and reliable apostille services from MEA Expert.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      link: "/apostille"
    },
    {
      id: 3,
      title: "HRD & Home Department",
      description: "Get your academic certificates authenticated by HRD and State Home Departments before MEA or embassy attestation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      link: "/hrd-home-attestation"
    },
    {
      id: 4,
      title: "Embassy Attestation",
      description: "Legalize your documents with embassy attestation for Europe, Gulf countries, and more.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      id: 5,
      title: "Chamber of Commerce",
      description: "Authenticate commercial documents like invoices, MOUs, and certificates with certified Chamber of Commerce attestation.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    // {
    //   id: 6,
    //   title: "Immigration Assistance",
    //   description: "Get expert help with PR, work permits, and immigration visas including documentation, apostille, and embassy requirements.",
    //   image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    // },
    {
      id: 7,
      title: "Visa assistance service",
      description: "Expert visa filing, documentation, and embassy guidance for countries like Canada, UK, USA, UAE, Australia, and more.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      id: 8,
      title: "Study Abroad Assistance",
      description: "Get end-to-end support for overseas education including document attestation, apostille, visa filing, and university assistance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      id: 9,
      title: "Translation Services",
      description: "Professional translation of documents into foreign languages for visa, immigration, and legal compliance purposes.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      id: 10,
      title: "Travel Insurance",
      description: "Secure your travel with visa-compliant insurance policies tailored for students, tourists, and business travelers.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    // {
    //   id: 11,
    //   title: "Dummy Flight Tickets",
    //   description: "Book verifiable dummy flight tickets with PNR for visa purposes without paying full ticket prices.",
    //   image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    // },
    // {
    //   id: 12,
    //   title: "Travel Itinerary Assistance",
    //   description: "Get verified travel plans and itineraries required for Schengen, US, UK, and other tourist visa applications.",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    // }
  ];

  return (
    <div className=" py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          
          <h2 className="text-xl poppins-medium mb-2">MEA Services</h2>
        <h1 className="text-5xl poppins-medium mb-4">
          <span className="text-black">Certificate </span>
          <span className="text-[#0A9DB2]">Attestation</span>
          <span className="text-black"> and</span>
        </h1>
        <h1 className="text-5xl poppins-medium mb-6">
          <span className="text-[#0A9DB2]">Apostilles</span>
          <span className="text-black"> Services in India</span>
        </h1>
        <p className="text-gray-600 poppins-medium text-sm">
          We are a reliable and professional attestation and apostille service agency.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="px-6 pb-6">
                {service.link ? (
                  <Link 
                    href={service.link}
                    className={`group flex items-center text-sm font-medium ${hoveredId === service.id ? 'text-[#0A9DB2]' : 'text-gray-700'} hover:text-[#0A9DB2] transition-colors duration-200`}
                  >
                    <span className="mr-2">Explore Service</span>
                    <span className={`flex items-center justify-center rounded-full p-1 ${hoveredId === service.id ? 'bg-[#0A9DB2] text-white' : 'bg-gray-100 text-gray-500'} group-hover:bg-[#0A9DB2] group-hover:text-white transition-all duration-200 transform ${hoveredId === service.id ? 'translate-x-1' : ''} group-hover:translate-x-1`}>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                ) : (
                  <button 
                    className={`group flex items-center text-sm font-medium ${hoveredId === service.id ? 'text-[#0A9DB2]' : 'text-gray-700'} hover:text-[#0A9DB2] transition-colors duration-200`}
                  >
                    <span className="mr-2">Coming Soon</span>
                    <span className={`flex items-center justify-center rounded-full p-1 ${hoveredId === service.id ? 'bg-[#0A9DB2] text-white' : 'bg-gray-100 text-gray-500'} group-hover:bg-[#0A9DB2] group-hover:text-white transition-all duration-200 transform ${hoveredId === service.id ? 'translate-x-1' : ''} group-hover:translate-x-1`}>
                      <ArrowRight size={14} />
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
