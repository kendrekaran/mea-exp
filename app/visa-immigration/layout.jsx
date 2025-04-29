'use client';

import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSectin";

export default function VisaImmigrationLayout({ children }) {
  const meta = {
    title: 'Visa & Immigration Services | PR & Work Permits | MEA EXPERT',
    description: 'Professional visa and immigration services for PR, work permits, tourist visas, and student visas. Expert guidance for global immigration.',
    keywords: 'visa services, immigration consultants, PR visa, work permit, student visa, tourist visa',
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