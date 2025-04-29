'use client';

import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSectin";

export const metadata = {
  title: 'Contact Us | MEA EXPERT',
  description: 'Get in touch with MEA EXPERT for document attestation, visa services, and immigration assistance. Professional support across India.',
  keywords: 'contact MEA EXPERT, attestation services contact, visa services contact, document attestation help',
}

export default function ServicesLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}