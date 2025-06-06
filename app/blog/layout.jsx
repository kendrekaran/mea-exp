import FooterSection from "../components/FooterSectin";
import Navbar from "../components/Navbar";



export default function CountriesLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
}
