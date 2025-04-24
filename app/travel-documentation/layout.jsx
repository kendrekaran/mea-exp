'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/FooterSectin";

export default function ServicesLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}