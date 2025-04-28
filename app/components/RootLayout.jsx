'use client';

import ScrollToTop from './ScrollToTop';

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      {children}
    </div>
  );
}
