import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pains } from "@/components/Pains";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Savings } from "@/components/Savings";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Pains />
      <Features />
      <Benefits />
      <Savings />
      <Pricing />
    </div>
  );
};

export default Index;