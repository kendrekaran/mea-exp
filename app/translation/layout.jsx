'use client';

import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSectin";

export default function ServicesLayout({ children }) {
  const meta = {
    title: 'Certified Translation Services | Document Translation | MEA EXPERT',
    description: 'Professional document translation services for visa, immigration, and legal purposes. Certified translations in multiple languages.',
    keywords: 'document translation, certified translation, legal translation, visa translation services',
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