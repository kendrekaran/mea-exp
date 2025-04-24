'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/FooterSectin";

export default function StudyAbroadLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}