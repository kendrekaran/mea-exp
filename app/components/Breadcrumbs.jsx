'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  const generateBreadcrumbs = () => {
    const segments = pathname.split('/').filter(segment => segment);
    const breadcrumbs = [];
    
    breadcrumbs.push({
      name: 'Home',
      href: '/',
    });

    let path = '';
    segments.forEach((segment) => {
      path += `/${segment}`;
      const formattedName = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        name: formattedName,
        href: path,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (pathname === '/') return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 px-4 md:px-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-[#0A9DB2]">{breadcrumb.name}</span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="hover:text-[#0A9DB2] transition-colors"
              >
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}