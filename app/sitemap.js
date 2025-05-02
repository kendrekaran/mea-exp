export default async function sitemap() {
  const baseUrl = 'https://meaexpert.com';

  // Define all static routes with their priorities
  const mainRoutes = [
    { route: '', priority: 1.0 },  // Homepage
    { route: '/contact', priority: 0.8 },
  ];

  const serviceRoutes = [
    // Main service pages
    { route: '/mea-attestation', priority: 0.9 },
    { route: '/embassy-attestation', priority: 0.9 },
    { route: '/apostille', priority: 0.9 },
    { route: '/hrd-home-attestation', priority: 0.9 },
    { route: '/chamber-commerce', priority: 0.9 },
    { route: '/visa-immigration', priority: 0.9 },
    { route: '/study-abroad', priority: 0.9 },
    { route: '/travel-documentation', priority: 0.9 },
    { route: '/translation', priority: 0.9 },
    { route: '/countries', priority: 0.8 },
  ];

  const apostilleRoutes = [
    { route: '/apostille/birth', priority: 0.8 },
    { route: '/apostille/degree', priority: 0.8 },
    { route: '/apostille/marriage', priority: 0.8 },
    { route: '/apostille/power-attorney', priority: 0.8 },
    { route: '/apostille/single', priority: 0.8 },
    { route: '/apostille/driving-license', priority: 0.8 },
    { route: '/apostille/gst', priority: 0.8 },
    { route: '/apostille/police-clearance', priority: 0.8 },
  ];

  // Combine all routes
  const allRoutes = [...mainRoutes, ...serviceRoutes, ...apostilleRoutes];

  // Generate sitemap entries
  const sitemapEntries = allRoutes.map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: priority,
  }));

  return sitemapEntries;
}