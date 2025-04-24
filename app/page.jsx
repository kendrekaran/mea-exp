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

