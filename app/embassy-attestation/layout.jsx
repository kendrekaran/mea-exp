'use client';

import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSectin";

export default function ServicesLayout({ children }) {
  const meta = {
    title: 'Embassy Attestation Services | MEA EXPERT',
    description: 'Professional embassy attestation services for all types of documents. Expert assistance for UAE, Qatar, Kuwait & other countries attestation.',
    keywords: 'embassy attestation, document attestation, MEA attestation, UAE embassy attestation, document legalization',
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