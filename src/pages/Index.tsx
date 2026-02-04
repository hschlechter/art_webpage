import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BiographySection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
