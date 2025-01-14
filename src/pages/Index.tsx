import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Frustrations } from "@/components/Frustrations";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    // Extract language from URL path
    const path = location.pathname;
    if (path.startsWith('/es')) {
      setLanguage('es');
    } else if (path.startsWith('/pt')) {
      setLanguage('pt');
    } else if (path.startsWith('/zh')) {
      setLanguage('zh');
    } else if (path.startsWith('/ru')) {
      setLanguage('ru');
    } else if (path.startsWith('/ar')) {
      setLanguage('ar');
    } else if (path.startsWith('/he')) {
      setLanguage('he');
    } else {
      setLanguage('en');
    }
  }, [location.pathname, setLanguage]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Frustrations />
      <Features />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;