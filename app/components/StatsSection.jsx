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
      format: "k"
    },
    {
      icon: "/stats2.svg",
      value: 120,
      label: "Doc. Submitted Today",
      format: "normal"
    },
    {
      icon: "/stats3.svg",
      value: 70000,
      label: "Happy Customers",
      format: "k"
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
    <div ref={sectionRef} className="flex pt-4 flex-wrap justify-center py-0 gap-6 ">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center w-80">
          <img src={stat.icon} alt={stat.label} className="h-16 w-16 text-teal-500 mb-4" />
          <h2 className="text-4xl font-bold mb-2">
            <CountUp 
              end={stat.value} 
              start={0} 
              duration={2} 
              visible={isVisible}
              format={stat.format}
            />+
          </h2>
          <p className="text-gray-600 text-center">{stat.label}</p>
        </div>
      ))}
    </div>
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
    ? `${(count / 1000).toFixed(0)}k`
    : count.toLocaleString();
  
  return <>{formattedCount}</>;
}