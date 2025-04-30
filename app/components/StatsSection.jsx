"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    {
      icon: "/stats1.svg",
      value: 160000,
      label: "Total Documents Served",
      format: "k",
      altText: "Document statistics icon showing total documents served"
    },
    {
      icon: "/stats2.svg",
      value: 400,
      label: "Doc. Submitted Today",
      format: "normal",
      altText: "Today's document submissions statistics icon"
    },
    {
      icon: "/stats3.svg",
      value: 70000,
      label: "Happy Customers",
      format: "k",
      altText: "Customer satisfaction statistics icon"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="flex pt-4 flex-wrap justify-center py-0 gap-6"
      aria-label="Company Statistics"
    >
      {stats.map((stat, index) => (
        <article 
          key={index} 
          className="bg-white rounded-lg shadow-xl p-8 flex flex-col h-64 items-center w-80"
          role="presentation"
        >
          <img src={stat.icon} alt={stat.altText} className="h-16 w-16 text-teal-500 mb-4" />
          <h2 className="text-4xl font-bold mb-2">
            <span aria-label={`${stat.label}: ${stat.value}`}>
              <CountUp 
                end={stat.value} 
                start={0} 
                duration={2} 
                visible={isVisible}
                format={stat.format}
              />+
            </span>
          </h2>
          <p className="text-gray-600 text-center">{stat.label}</p>
        </article>
      ))}
    </section>
  );
}

function CountUp({ end, start = 0, duration = 2, visible, format = "normal" }) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const frameRef = useRef(0);
  
  useEffect(() => {
    if (!visible) return;
    
    const startTime = performance.now();
    const endTime = startTime + duration * 1000;
    
    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);
      
      if (progress < 1) {
        // Easing function for smoother animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const nextCount = Math.floor(start + easedProgress * (end - start));
        
        if (nextCount !== countRef.current) {
          countRef.current = nextCount;
          setCount(nextCount);
        }
        
        frameRef.current = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    frameRef.current = requestAnimationFrame(updateCount);
    
    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [end, start, duration, visible]);
  
  // Format the count based on the format prop
  const formattedCount = format === "k" 
    ? `${(count / 1000).toFixed(0)}K`
    : count.toLocaleString();
  
  return <>{formattedCount}</>;
}