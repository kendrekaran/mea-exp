"use client"
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRight } from 'lucide-react';

export default function TestimonialSection() {
  const carouselRef = useRef(null);
  
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += direction;
    }
  };

  const testimonials = [
    {
      id: 1,
      text: "I was overwhelmed with the visa process, but MEA Expert made it seamless! They guided me at every step, from document preparation to interview coaching. Today, I'm living my dream in Toronto! Highly recommended!",
      name: "Rohan Sharma",
      position: "Canada PR Visa",
    },
    {
      id: 2,
      text: "Getting my USA student visa seemed impossible until I found MEA Expert. Their expert team handled everything perfectly. Thanks to them, I'm now studying at a top university in New York!",
      name: "Priya Mehta",
      position: "USA Student Visa",
    },
    {
      id: 3,
      text: "I applied for a UK work visa through MEAExpert and it was the best decision ever! The process was smooth, and they even helped me with job opportunities. Now, I'm working in London!",
      name: "Aman Verma",
      position: "UK Work Visa",
    },
    {
      id: 4,
      text: "I wanted to explore Europe but was confused about the visa process. MEAExpert got my Schengen visa approved in record time! Paris, here I come! 🇫🇷",
      name: "Neha Patel",
      position: "Schengen Tourist Visa",
    },
    {
      id: 5,
      text: "Starting a business in Dubai was my dream, but the visa process felt overwhelming. MEAExpert made it stress-free! Their team handled everything efficiently, and now I'm successfully running my business in the UAE.",
      name: "Anjali Desai",
      position: "Dubai Business Visa",
    },
    {
      id: 6,
      text: "From eligibility assessment to final approval, MEAExpert provided exceptional service. I'm now a permanent resident of Australia, and I couldn't be happier!",
      name: "Vikram Singh",
      position: "Australia PR Visa",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      <div className="text-center ">
          
        <h2 className="text-xl poppins-medium mb-2">Our Clients Reviews</h2>
        <h1 className="text-5xl poppins-medium mb-4">
          <span className="text-black">What Our </span>
          <span className="text-[#0A9DB2]">Clients </span>
          <span className="text-black">Say </span>
        </h1>
      </div>
      
      
      <div 
        ref={carouselRef}
        className="relative overflow-x-auto whitespace-nowrap py-5 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="inline-flex gap-5 px-5">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md p-6 w-80 whitespace-normal transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-gray-600 text-sm leading-relaxed mb-6 h-44 overflow-y-auto">
                <p>{testimonial.text}</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/placeholder.jpg" 
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-[#0A9DB2] text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
      <div className="flex justify-center mt-8 gap-4">
        <button 
          onClick={() => scrollCarousel(-380)}
          className="w-12 h-12 rounded-full bg-[#0A9DB2] text-white flex items-center justify-center hover:bg-[#087f90] transition-colors"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scrollCarousel(380)}
          className="w-12 h-12 rounded-full bg-[#0A9DB2] text-white flex items-center justify-center hover:bg-[#087f90] transition-colors"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}