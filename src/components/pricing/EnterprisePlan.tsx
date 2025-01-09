import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";

export const EnterprisePlan = () => {
  return (
    <Card className="glass p-6 flex flex-col animate-fade-up delay-600 hover:scale-105 transition-transform duration-300">
      <PlanIcon Icon={Users} color="secondary" />
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
    </Card>
  );
};