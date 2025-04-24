export default async function sitemap() {
  const baseUrl = 'https://meaexpert.com';

  // Define all static routes
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

  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return sitemapEntries;
}