'use client';

import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSectin";

export default function ServicesLayout({ children }) {
  const meta = {
    title: 'MEA Attestation Services | Ministry of External Affairs | MEA EXPERT',
    description: 'Professional MEA attestation services for all documents. Fast and reliable attestation from Ministry of External Affairs across India.',
    keywords: 'MEA attestation, Ministry of External Affairs attestation, document attestation, certificate attestation India',
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