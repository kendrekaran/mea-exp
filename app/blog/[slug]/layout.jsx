import FooterSection from "@/app/components/FooterSectin";
import Navbar from "@/app/components/Navbar";



export default function CountriesLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
