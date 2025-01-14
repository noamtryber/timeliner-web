import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Frustrations } from "@/components/Frustrations";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Savings } from "@/components/Savings";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-card text-card-foreground">
      <Navbar />
      <Hero />
      <Frustrations />
      <Features />
      <Benefits />
      <Testimonials />
      <Savings />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;