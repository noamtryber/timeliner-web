import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Database, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";

interface BasicPlanProps {
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
  basicStorage: number;
  setBasicStorage: (value: number) => void;
  calculatePrice: (basePrice: number, baseStorage: number, currentStorage: number) => number;
}

export const BasicPlan = ({ pricingPeriod, basicStorage, setBasicStorage, calculatePrice }: BasicPlanProps) => {
  const basicPrice = calculatePrice(19, 250, basicStorage);
  
  const getPeriodTotal = () => {
    switch (pricingPeriod) {
      case 'quarterly':
        return basicPrice * 3;
      case 'yearly':
        return basicPrice * 12;
      default:
        return basicPrice;
    }
  };

  return (
    <div className="pricing-card relative p-[2px] bg-gradient-to-br from-primary via-accent to-primary rounded-[20px] overflow-hidden transition-all duration-300 hover:scale-105 group">
      <Card className="pricing-card-inner relative h-full bg-[#0d0d24] rounded-[18px] p-6 flex flex-col">
        <div className="pricing-icon absolute -top-5 left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/25">
          <Database className="w-6 h-6 text-white relative z-10 animate-pulse" />
        </div>
        
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-2">Basic</h3>
          <p className="text-white/70 mb-6">For Small Agencies or Freelancers</p>
          <div className="text-3xl font-bold mb-4">
            ${basicPrice.toFixed(2)}
            <span className="text-sm font-normal text-white/70">/month</span>
            {pricingPeriod !== 'monthly' && (
              <span className="block text-sm text-primary mt-1">
                ${getPeriodTotal().toFixed(2)} billed {pricingPeriod}
              </span>
            )}
          </div>
          
          <div className="mb-6">
            <p className="text-sm text-white/70 mb-2">Storage: {basicStorage}GB</p>
            <Slider
              value={[basicStorage]}
              onValueChange={(value) => setBasicStorage(value[0])}
              min={250}
              max={2000}
              step={100}
              className="mb-4"
            />
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full mb-6 border-primary/50 hover:bg-primary/10 transition-all duration-300">
                <Play className="w-4 h-4 mr-2" />
                Why Basic?
              </Button>
            </DialogTrigger>
            <DialogContent className="glass">
              <DialogHeader>
                <DialogTitle>Why Choose Basic?</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="aspect-video bg-card/50 rounded-lg flex items-center justify-center">
                  <Play className="w-12 h-12 text-primary animate-pulse" />
                </div>
                <p className="text-white/70">
                  Perfect for freelancers and small teams looking to streamline their video editing workflow. Get organized with project management tools and client collaboration features at an affordable price.
                </p>
              </div>
            </DialogContent>
          </Dialog>
          
          <div className="space-y-4 mb-8 flex-grow">
            <h4 className="font-semibold">Core Features:</h4>
            <PlanFeature text="1 Admin Account" />
            <PlanFeature text="5 Team Members" />
            <PlanFeature text="25 Active Projects" />
            <PlanFeature text="Client Access- Up to 3 guests per project" />
            
            <h4 className="font-semibold mt-6">Additional Features:</h4>
            <PlanFeature text="Advanced Project Workflow: Status tracking" />
            <PlanFeature text="Timecode-Based Comments for precise feedback" />
            <PlanFeature text="Customizable Roles and Permissions" />
            <PlanFeature text="Basic Analytics to track project statuses" />
          </div>
          
          <Button className="w-full bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105">
            Get Started
          </Button>
        </div>
      </Card>
    </div>
  );
};