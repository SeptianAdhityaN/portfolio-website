import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BackgroundWrapper } from "@/components/BackgroundWrapper";

const Index = () => {
  return (
    <BackgroundWrapper>
      <Navbar />
      <main>
        <HeroSection />
        <TechStack />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </BackgroundWrapper>
  );
};

export default Index;
