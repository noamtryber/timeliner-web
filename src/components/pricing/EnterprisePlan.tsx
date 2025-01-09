import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";

export const EnterprisePlan = () => {
  return (
    <div className="pricing-card relative p-[2px] bg-gradient-to-br from-primary via-accent to-primary rounded-[20px] overflow-hidden transition-all duration-300 hover:scale-105 group">
      <Card className="pricing-card-inner relative h-full bg-[#0d0d24] rounded-[18px] p-6 flex flex-col">
        <div className="pricing-icon absolute -top-5 left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/25">
          <Users className="w-6 h-6 text-white relative z-10 animate-pulse" />
        </div>
        
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
          <p className="text-white/70 mb-6">Custom Solutions for Large Teams</p>
          <div className="text-3xl font-bold mb-8">
            Custom
            <span className="text-sm font-normal text-white/70 block">Contact us for pricing</span>
          </div>
          
          <div className="space-y-4 mb-8 flex-grow">
            <h4 className="font-semibold">Everything in Pro, plus:</h4>
            <PlanFeature text="Unlimited Team Members" />
            <PlanFeature text="Unlimited Active Projects" />
            <PlanFeature text="Custom Storage Solutions" />
            <PlanFeature text="Dedicated Account Manager" />
            <PlanFeature text="24/7 Priority Support" />
            <PlanFeature text="Custom Integration Development" />
            <PlanFeature text="On-Premise Deployment Options" />
          </div>
          
          <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10 transition-all duration-300">
            Contact Sales
          </Button>
        </div>
      </Card>
    </div>
  );
};