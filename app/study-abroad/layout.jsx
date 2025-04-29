'use client';

import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSectin";

export default function StudyAbroadLayout({ children }) {
  const meta = {
    title: 'Study Abroad Services | Student Visa & University Admission | MEA EXPERT',
    description: 'Complete study abroad assistance including university admissions, student visa processing, and document attestation for global education.',
    keywords: 'study abroad, student visa, university admission, education abroad, international education',
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