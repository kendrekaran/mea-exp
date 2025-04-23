'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function VisaImmigrationLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}