"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function StepSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const steps = [
    {
      title: "Submit Documents",
      description: "Upload your documents and receive a quote instantly",
      image: "/file.svg"
    },
    {
      title: "Process Documents",
      description: "Our experts will process your documents with utmost care",
      image: "/window.svg"
    },
    {
      title: "Get Attested Documents",
      description: "Receive your attested documents at your doorstep",
      image: "/globe.svg"
    }
  ];

  return (
    <motion.div 
      className="bg-gray-50 py-16"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-xl poppins-medium mb-2">How it Works</h2>
          <h1 className="text-5xl poppins-medium mb-4">
            <span className="text-black">Process to get your </span>
            <span className="text-[#0A9DB2]">Documents </span>
            <span className="text-black">Attested</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="relative w-24 h-24 mx-auto mb-6">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}