import React from 'react';

const DocumentTypeHeader = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-[#0A9DB2] to-[#136E7A] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DocumentTypeHeader;