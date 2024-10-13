import Navbar from "@/components/navbar";
import HeroSection from "./(sections)/hero-section";
import AboutSection from "./(sections)/about-section";
import ServicesSection from "./(sections)/services-section";
import ProjectsSection from "./(sections)/projects-section";
import TestimonialSection from "./(sections)/testimonials-section";
import ContactSection from "./(sections)/contact-section";
import Footer from "./(sections)/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
}
