import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Portfolio } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      
      <HeroSection />
      <ServicesSection />
      <Portfolio />
      <ContactSection />
    </div>
  );
};

export default Index;
