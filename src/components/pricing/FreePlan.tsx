import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";

export const FreePlan = () => {
  return (
    <Card className="glass p-6 flex flex-col animate-fade-up delay-300 hover:scale-105 transition-transform duration-300">
      <PlanIcon Icon={Zap} color="accent" />
      <h3 className="text-2xl font-bold mb-2">Free</h3>
      <p className="text-white/70 mb-6">Perfect for Getting Started</p>
      <div className="text-3xl font-bold mb-8">
        $0
        <span className="text-sm font-normal text-white/70">/month</span>
      </div>
      
      <div className="space-y-4 mb-8 flex-grow">
        <h4 className="font-semibold">Core Features:</h4>
        <PlanFeature text="1 Personal Account" />
        <PlanFeature text="2 Active Projects" />
        <PlanFeature text="5GB Storage" />
        <PlanFeature text="Basic Project Management" />
        
        <h4 className="font-semibold mt-6">Additional Features:</h4>
        <PlanFeature text="Basic Project Templates" />
        <PlanFeature text="Simple Task Management" />
        <PlanFeature text="Community Support" />
      </div>
      
      <Button className="w-full bg-gradient-to-br from-accent/80 to-accent hover:opacity-90 transition-all duration-300">
        Get Started Free
      </Button>
    </Card>
  );
};