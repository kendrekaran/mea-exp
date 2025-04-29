import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MEA Expert: India’s Trusted Attestation & Apostille Services - Fast, Reliable, Govt-Recognized",
  description:
    "Get 100% genuine document attestation and apostille services for MEA, Embassy, HRD & Visa. Fast processing, expert support, and doorstep service across India.",
  keywords: [
    "attestation services",
    "apostille India",
    "MEA attestation",
    "embassy attestation",
    "HRD attestation",
    "document verification",
    "visa document attestation"
  ],
  metadataBase: new URL("https://meaexpert.com"),
  alternates: {
    canonical: "https://meaexpert.com",
  },
  openGraph: {
    title: "MEA Expert - Fast & Trusted Document Attestation Services in India",
    description:
      "Professional attestation and apostille services for all types of documents including MEA, Embassy, HRD & Visa. PAN India support.",
    url: "https://meaexpert.com",
    siteName: "MEA Expert",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://meaexpert.com/logo.png",
        width: 800,
        height: 600,
        alt: "MEA Expert Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};


export default function RootLayout({ children }) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "MEA Expert",
      image: "https://meaexpert.com/logo.png",
      url: "https://meaexpert.com",
      description: "MEA Expert offers professional and government-recognized document attestation services across India. Quick processing, expert support, and 100% genuine assistance.",
      email: "info@meaexpert.com",
      telephone: ["+91-7878868595", "+91-8178636828"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "MB-03, A-Block, Naurang House, K.G. Marg, Connaught Place",
        addressLocality: "New Delhi",
        postalCode: "110001",
        addressCountry: "IN"
      },
      openingHours: [
        "Monday-Saturday 10:00-19:00"
      ],
      sameAs: [
        "https://facebook.com/meaexpert",
        "https://instagram.com/meaexpert",
        "https://linkedin.com/company/meaexpert"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MEA Expert",
      legalName: "MEA Expert India",
      url: "https://meaexpert.com",
      logo: "https://meaexpert.com/logo.png",
      foundingDate: "2020",
      founders: [{
        "@type": "Person",
        name: "MEA Expert Team"
      }],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: ["+91-7878868595", "+91-8178636828"],
        email: "info@meaexpert.com"
      },
      areaServed: {
        "@type": "Country",
        name: "India"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://meaexpert.com"
      }, {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://meaexpert.com/#services"
      }, {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: "https://meaexpert.com/contact"
      }]
    }
  ];

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SmoothScroll>
          <WhatsAppButton />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
