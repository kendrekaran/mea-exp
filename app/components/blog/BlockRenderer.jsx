"use client";

import React from 'react';

// Heading Block Component
const HeadingBlock = ({ block }) => {
  const { level, text } = block;
  
  switch(level) {
    case 1:
      return <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-4 sm:my-6 text-slate-800 leading-tight">{text}</h1>;
    case 2:
      return <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold my-3 sm:my-5 mt-6 sm:mt-10 text-slate-800 leading-tight">{text}</h2>;
    case 3:
      return <h3 className="text-lg sm:text-xl lg:text-2xl font-bold my-3 sm:my-4 text-slate-800 leading-tight">{text}</h3>;
    case 4:
      return <h4 className="text-base sm:text-lg lg:text-xl font-bold my-2 sm:my-3 text-slate-800 leading-tight">{text}</h4>;
    default:
      return <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold my-3 sm:my-5 text-slate-800 leading-tight">{text}</h2>;
  }
};

// Paragraph Block Component
const ParagraphBlock = ({ block }) => {
  return <p className="my-3 sm:my-5 text-base sm:text-lg text-slate-800 leading-relaxed sm:leading-loose">{block.text}</p>;
};

// List Block Component
const ListBlock = ({ block }) => {
  const { style, items } = block;
  
  if (style === 'ordered') {
    return (
      <ol className="list-decimal pl-4 sm:pl-6 my-3 sm:my-4 space-y-1 sm:space-y-2 marker:text-[#0A9DB2]">
        {items.map((item, index) => (
          <li key={index} className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</li>
        ))}
      </ol>
    );
  }
  
  return (
    <ul className="list-disc pl-4 sm:pl-6 my-3 sm:my-4 space-y-1 sm:space-y-2 marker:text-[#0A9DB2]">
      {items.map((item, index) => (
        <li key={index} className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</li>
      ))}
    </ul>
  );
};

// Table Block Component
const TableBlock = ({ block }) => {
  const { headers, rows } = block;
  
  return (
    <div className="my-4 sm:my-6 overflow-x-auto rounded-lg shadow-md border border-slate-300">
      <table className="min-w-full divide-y divide-slate-300">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider border-r border-slate-300 last:border-r-0 whitespace-nowrap"
              >
                <div className="truncate" title={header}>
                  {header}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-300">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="px-3 sm:px-4 lg:px-6 py-2 sm:py-4 text-xs sm:text-sm text-slate-700 border-r border-slate-300 last:border-r-0"
                >
                  <div className="max-w-xs sm:max-w-sm lg:max-w-none truncate lg:whitespace-normal" title={cell}>
                    {cell}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// FAQ Block Component
const FAQBlock = ({ block }) => {
  const { question, answer } = block;
  
  return (
    <div className="my-4 sm:my-6 p-3 sm:p-4 border border-slate-300 rounded-lg bg-slate-50 shadow-sm">
      <h3 className="text-lg sm:text-xl font-semibold text-slate-800 leading-tight">{question}</h3>
      <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">{answer}</p>
    </div>
  );
};

// Image Block Component
const ImageBlock = ({ block }) => {
  const { src, alt, caption } = block;
  
  return (
    <figure className="my-4 sm:my-6">
      <img 
        src={src} 
        alt={alt || caption || 'Blog image'} 
        className="w-full h-auto rounded-lg shadow-md object-cover"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-xs sm:text-sm text-slate-600 px-2">{caption}</figcaption>
      )}
    </figure>
  );
};

// Quote Block Component
const QuoteBlock = ({ block }) => {
  const { text, author } = block;
  
  return (
    <blockquote className="my-4 sm:my-6 border-l-4 border-[#0A9DB2] pl-3 sm:pl-4 py-3 bg-[#FFF5EE] italic rounded-r-md mx-2 sm:mx-0">
      <p className="text-slate-800 text-base sm:text-lg leading-relaxed">{text}</p>
      {author && <footer className="mt-2 text-sm sm:text-base text-slate-600">— {author}</footer>}
    </blockquote>
  );
};

// Divider Block Component
const DividerBlock = () => {
  return <hr className="my-6 sm:my-8 border-t border-slate-300 mx-4 sm:mx-0" />;
};

// Block Renderer Component
const BlockRenderer = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks)) {
    return <p className="text-center text-slate-500 py-8 text-sm sm:text-base">No content to display</p>;
  }
  
  return (
    <div className="blog-content w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return <HeadingBlock key={index} block={block} />;
          case 'paragraph':
            return <ParagraphBlock key={index} block={block} />;
          case 'list':
            return <ListBlock key={index} block={block} />;
          case 'table':
            return <TableBlock key={index} block={block} />;
          case 'faq':
            return <FAQBlock key={index} block={block} />;
          case 'image':
            return <ImageBlock key={index} block={block} />;
          case 'quote':
            return <QuoteBlock key={index} block={block} />;
          case 'divider':
            return <DividerBlock key={index} />;
          default:
            return <p key={index} className="text-red-500 text-sm sm:text-base">Unsupported block type: {block.type}</p>;
        }
      })}
    </div>
  );
};

export default BlockRenderer;