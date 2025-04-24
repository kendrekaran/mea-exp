import AboutSection from "./components/AboutSection";
import CountrySection from "./components/CountrySection";
import FeaturesSection from "./components/FeaturesServices";
import FooterSection from "./components/FooterSectin";
import HeroSection from "./components/HeroSection";
import OfficeSection from "./components/OfficeSection";
import MEAServices from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import StepsSection from "./components/StepsSection";
import TestimonialSection from "./components/TestimonialsSectin";

// app/page.tsx
export const metadata = {
  title: "MEA Expert | Leading Document Attestation & Visa Services in India",
  description: "India's trusted partner for MEA attestation, embassy attestation, apostille, and visa services. Fast, reliable, and government-recognized document services.",
  metadataBase: new URL('https://meaexpert.com/'),
  openGraph: {
    title: 'MEA Expert - Document Attestation & Visa Services',
    description: 'Professional document attestation and visa services in India',
    type: 'website',
    images: ['/about1.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: 'MEA attestation, embassy attestation, apostille services, visa services, document verification, HRD attestation, translation services',
  canonical: 'https://meaexpert.com/',
};


export default function Home() {
  return (
    <div className="smooth-scroll">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="stats">
        <StatsSection />
      </section>
      <section id="services">
        <MEAServices />
      </section>
      <section id="countries">
        <CountrySection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="steps">
        <StepsSection />
      </section>
      <section id="testimonials">
        <TestimonialSection />
      </section>
      <section id="offices">
        <OfficeSection />
      </section>
      <section id="footer">
        <FooterSection />
      </section>
    </div>
  );
}

