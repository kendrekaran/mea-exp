import React from 'react';

export default function StatsSection() {
  const stats = [
    {
      icon: "/stats1.svg",
      value: "100000",
      label: "Total Documents Served"
    },
    {
      icon: "/stats2.svg",
      value: "3000",
      label: "Doc. Submitted Today"
    },
    {
      icon: "/stats3.svg",
      value: "50000",
      label: "Happy Customers"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center py-16 gap-6 p-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white  rounded-lg shadow-xl p-8 flex flex-col items-center w-[380px]">
          <img src={stat.icon} alt={stat.label} className="h-16 w-16 text-teal-500 mb-4" />
          <h2 className="text-4xl font-bold mb-2">{stat.value}</h2>
          <p className="text-gray-600 text-center">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}