import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsBand from "@/components/ClientsBand";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ClientsBand />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
