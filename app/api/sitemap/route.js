import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://meaexpert.com';

  // Define routes with their priorities
  const mainRoutes = [
    { route: '', priority: '1.0' },
    { route: '/contact', priority: '0.8' },
  ];

  const serviceRoutes = [
    { route: '/mea-attestation', priority: '0.9' },
    { route: '/embassy-attestation', priority: '0.9' },
    { route: '/apostille', priority: '0.9' },
    { route: '/hrd-home-attestation', priority: '0.9' },
    { route: '/chamber-commerce', priority: '0.9' },
    { route: '/visa-immigration', priority: '0.9' },
    { route: '/study-abroad', priority: '0.9' },
    { route: '/travel-documentation', priority: '0.9' },
    { route: '/translation', priority: '0.9' },
    { route: '/countries', priority: '0.8' },
  ];

  const apostilleRoutes = [
    { route: '/apostille/birth', priority: '0.8' },
    { route: '/apostille/degree', priority: '0.8' },
    { route: '/apostille/marriage', priority: '0.8' },
    { route: '/apostille/power-attorney', priority: '0.8' },
    { route: '/apostille/single', priority: '0.8' },
    { route: '/apostille/driving-license', priority: '0.8' },
    { route: '/apostille/gst', priority: '0.8' },
    { route: '/apostille/police-clearance', priority: '0.8' },
  ];

  const allRoutes = [...mainRoutes, ...serviceRoutes, ...apostilleRoutes];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(({ route, priority }) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  // Return the XML with proper content type
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}