import { Button } from "@/components/ui/button";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";
import type { PricingContent } from "@/hooks/usePricingContent";

interface EnterprisePlanProps {
  content?: PricingContent;
  onGetStarted: () => void;
}

export const EnterprisePlan = ({ content, onGetStarted }: EnterprisePlanProps) => {
  if (!content) return null;

  return (
    <div className="glass p-6 rounded-xl">
      <PlanIcon type="enterprise" />
      <h3 className="text-xl font-semibold mt-4">{content.title}</h3>
      <p className="text-white/70 mt-2">{content.subtitle}</p>
      <div className="mt-4">
        <span className="text-3xl font-bold">Custom</span>
      </div>
      <Button 
        className="w-full mt-6" 
        variant="outline"
        onClick={onGetStarted}
      >
        {content.button_text || 'Contact Sales'}
      </Button>
      <div className="mt-6 space-y-4">
        {content.features?.map((feature, index) => (
          <PlanFeature key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};