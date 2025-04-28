"use client"
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRight } from 'lucide-react';
import Head from 'next/head';

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
      image: "https://i.pinimg.com/474x/92/12/46/9212466a7a662172657b69e063012c23.jpg"
    },
    {
      id: 2,
      text: "Getting my USA student visa seemed impossible until I found MEA Expert. Their expert team handled everything perfectly. Thanks to them, I'm now studying at a top university in New York!",
      name: "Priya Mehta",
      position: "USA Student Visa",
      image: "https://i.pinimg.com/474x/36/af/73/36af73ef3cd451d1e60d45899ee15043.jpg"
    },
    {
      id: 3,
      text: "I applied for a UK work visa through MEAExpert and it was the best decision ever! The process was smooth, and they even helped me with job opportunities. Now, I'm working in London!",
      name: "Aman Verma",
      position: "UK Work Visa",
      image: "https://i.pinimg.com/474x/70/0b/fd/700bfdf5b2bbc8de5f49edce8731b0f6.jpg"
    },
    {
      id: 4,
      text: "I wanted to explore Europe but was confused about the visa process. MEAExpert got my Schengen visa approved in record time! Paris, here I come! 🇫🇷",
      name: "Neha Patel",
      position: "Schengen Tourist Visa",
      image: "https://i.pinimg.com/474x/0d/0e/0f/0d0e0fe7d73b0ac13702a0c6a67722f1.jpg"
    },
    {
      id: 5,
      text: "Starting a business in Dubai was my dream, but the visa process felt overwhelming. MEAExpert made it stress-free! Their team handled everything efficiently, and now I'm successfully running my business in the UAE.",
      name: "Anjali Desai",
      position: "Dubai Business Visa",
      image: "https://i.pinimg.com/474x/a8/74/65/a87465275efcdcbb5f9201ad6473c0fa.jpg"
    },
    {
      id: 6,
      text: "From eligibility assessment to final approval, MEAExpert provided exceptional service. I'm now a permanent resident of Australia, and I couldn't be happier!",
      name: "Vikram Singh",
      position: "Australia PR Visa",
      image: "https://i.pinimg.com/474x/32/3c/9d/323c9d43ec4943c201381e8c2867c638.jpg"
    },
  ];

  // Add structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((testimonial, index) => ({
      "@type": "Review",
      "position": index + 1,
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewBody": testimonial.text,
      "about": {
        "@type": "Service",
        "name": testimonial.position
      }
    }))
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12" aria-label="Client Testimonials">
      <Head>
        <title>Client Success Stories - Visa and Immigration Services</title>
        <meta name="description" content="Read authentic testimonials from our successful clients who obtained visas and immigration services through MEA Expert." />
        <meta name="keywords" content="visa testimonials, immigration success stories, MEA Expert reviews" />
      </Head>

      <header className="text-center">
        <h2 className="text-xl poppins-medium mb-2">Our Clients Reviews</h2>
        <h1 className="text-5xl poppins-medium mb-4">
          <span className="text-black">What Our </span>
          <span className="text-[#0A9DB2]">Clients </span>
          <span className="text-black">Say </span>
        </h1>
      </header>

      <div 
        ref={carouselRef}
        className="relative overflow-x-auto whitespace-nowrap py-5 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        role="region"
        aria-label="Testimonials Carousel"
      >
        <div className="inline-flex gap-5 px-5" role="list">
          {testimonials.map((testimonial) => (
            <article 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md p-6 w-80 whitespace-normal transition-transform duration-300 hover:-translate-y-1"
              role="listitem"
            >
              <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 h-44 overflow-y-auto">
                <p>{testimonial.text}</p>
              </blockquote>
              <footer className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <div className="relative w-full h-full">
                    <Image 
                      src={testimonial.image}
                      alt={`${testimonial.name} - ${testimonial.position}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div>
                  <cite className="font-semibold text-gray-800 not-italic">{testimonial.name}</cite>
                  <p className="text-[#0A9DB2] text-sm">{testimonial.position}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-4" role="group" aria-label="Carousel Navigation">
        <button 
          onClick={() => scrollCarousel(-380)}
          className="w-12 h-12 rounded-full bg-[#0A9DB2] text-white flex items-center justify-center hover:bg-[#087f90] transition-colors"
          aria-label="Previous testimonials"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scrollCarousel(380)}
          className="w-12 h-12 rounded-full bg-[#0A9DB2] text-white flex items-center justify-center hover:bg-[#087f90] transition-colors"
          aria-label="Next testimonials"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}