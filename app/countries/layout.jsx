'use client';

import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSectin";

export default function ServicesLayout({ children }) {
const meta = {
    title: 'Document Attestation Services by Country | MEA EXPERT',
    description: 'Comprehensive document attestation and apostille services for multiple countries. Expert assistance for UAE, Qatar, Kuwait, USA, UK, and other nations.',
    keywords: 'UAE attestation, Qatar attestation, Kuwait attestation, USA apostille, UK attestation, international document attestation, embassy attestation by country, document legalization, certificate attestation, educational documents, commercial documents, personal documents, GCC attestation, Saudi Arabia attestation, Bahrain attestation, embassy certification',
    author: 'MEA EXPERT',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    'og:image': '/images/mea-expert-logo.png',
    'og:url': 'https://meaexpert.com/countries',
    'og:site_name': 'MEA EXPERT - Document Attestation Services'
};

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}