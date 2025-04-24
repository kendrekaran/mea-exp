import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://meaexpert.com';

  // Define all routes
  const routes = [
    '',
    '/contact',
    '/mea-attestation',
    '/embassy-attestation',
    '/apostille',
    '/hrd-home-attestation',
    '/chamber-commerce',
    '/visa-immigration',
    '/study-abroad',
    '/travel-documentation',
    '/translation',
    // Apostille sub-routes
    '/apostille/birth',
    '/apostille/degree',
    '/apostille/marriage',
    '/apostille/power-attorney',
    '/apostille/single',
    '/apostille/driving-license',
    '/apostille/gst',
    '/apostille/police-clearance',
    // Embassy attestation sub-routes
    '/embassy-attestation/commercial',
    '/embassy-attestation/educational',
    // MEA attestation sub-routes
    '/mea-attestation/commercial',
    '/mea-attestation/educational',
    // HRD attestation sub-routes
    '/hrd-home-attestation/education'
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '' ? '1.0' : '0.8'}</priority>
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