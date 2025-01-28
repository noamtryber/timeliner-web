import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Frustrations } from "@/components/Frustrations";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { CompetitorsTable } from "@/components/competitors/CompetitorsTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Frustrations />
      <Features />
      <Benefits />
      <CompetitorsTable />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;