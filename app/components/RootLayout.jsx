'use client';

import ScrollToTop from './ScrollToTop';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      {children}
    </div>
  );
}
