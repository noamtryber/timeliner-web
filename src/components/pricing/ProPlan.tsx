import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Crown, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";

interface ProPlanProps {
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
  proStorage: number;
  setProStorage: (value: number) => void;
  calculatePrice: (basePrice: number, baseStorage: number, currentStorage: number) => number;
}

export const ProPlan = ({ pricingPeriod, proStorage, setProStorage, calculatePrice }: ProPlanProps) => {
  const proPrice = calculatePrice(39, 500, proStorage);

  const getPeriodTotal = () => {
    switch (pricingPeriod) {
      case 'quarterly':
        return proPrice * 3;
      case 'yearly':
        return proPrice * 12;
      default:
        return proPrice;
    }
  };

  return (
    <Card className="glass p-6 flex flex-col border-primary animate-fade-up delay-500 hover:scale-105 transition-transform duration-300">
      <PlanIcon Icon={Crown} color="primary" />
      <h3 className="text-2xl font-bold mb-2">Pro</h3>
      <p className="text-white/70 mb-6">For Growing Agencies or Teams</p>
      <div className="text-3xl font-bold mb-4">
        ${proPrice.toFixed(2)}
        <span className="text-sm font-normal text-white/70">/month</span>
        {pricingPeriod !== 'monthly' && (
          <span className="block text-sm text-primary mt-1">
            ${getPeriodTotal().toFixed(2)} billed {pricingPeriod}
          </span>
        )}
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-white/70 mb-2">Storage: {proStorage}GB</p>
        <Slider
          value={[proStorage]}
          onValueChange={(value) => setProStorage(value[0])}
          min={500}
          max={5000}
          step={100}
          className="mb-4"
        />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full mb-6 border-primary/50 hover:bg-primary/10">
            <Play className="w-4 h-4 mr-2" />
            Why Pro?
          </Button>
        </DialogTrigger>
        <DialogContent className="glass">
          <DialogHeader>
            <DialogTitle>Why Choose Pro?</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="aspect-video bg-card/50 rounded-lg flex items-center justify-center">
              <Play className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <p className="text-white/70">
              Ideal for growing agencies that need advanced features like custom branding, extensive team collaboration tools, and priority support. Scale your video production business with confidence.
            </p>
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="space-y-4 mb-8 flex-grow">
        <h4 className="font-semibold">Core Features:</h4>
        <PlanFeature text="3 Admin Accounts" />
        <PlanFeature text="50 Team Members" />
        <PlanFeature text="100 Active Projects" />
        <PlanFeature text="Client Access- Up to 10 guests per project" />
        
        <h4 className="font-semibold mt-6">Additional Features:</h4>
        <PlanFeature text="Custom Branding: Add your logo and colors" />
        <PlanFeature text="Priority Support" />
        <PlanFeature text="Reference Library for editing styles" />
        <PlanFeature text="Collaborative Tools: Tasks, deadlines, tracking" />
      </div>
      
      <Button className="w-full bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40">
        Get Started
      </Button>
    </Card>
  );
};