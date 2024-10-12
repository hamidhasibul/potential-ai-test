import Navbar from "@/components/navbar";
import HeroSection from "./(sections)/hero-section";
import AboutSection from "./(sections)/about-section";
import ServicesSection from "./(sections)/services-section";
import ProjectsSection from "./(sections)/projects-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </>
  );
}
