import { Button } from "@/components/ui/button";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";
import { Slider } from "@/components/ui/slider";
import type { PricingContent } from "@/hooks/usePricingContent";

interface ProPlanProps {
  content?: PricingContent;
  video?: Record<string, string>;
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
  proStorage: number;
  setProStorage: (value: number) => void;
  calculatePrice: (basePrice: number, baseStorage: number, currentStorage: number) => number;
  onGetStarted: () => void;
}

export const ProPlan = ({ 
  content, 
  video,
  pricingPeriod,
  proStorage,
  setProStorage,
  calculatePrice,
  onGetStarted
}: ProPlanProps) => {
  if (!content) return null;

  const basePrice = 49;
  const baseStorage = 500;
  const price = calculatePrice(basePrice, baseStorage, proStorage);

  return (
    <div className="glass p-6 rounded-xl">
      <PlanIcon type="pro" />
      <h3 className="text-xl font-semibold mt-4">{content.title}</h3>
      <p className="text-white/70 mt-2">{content.subtitle}</p>
      <div className="mt-4">
        <span className="text-3xl font-bold">${price.toFixed(2)}</span>
        <span className="text-white/70">/{pricingPeriod}</span>
      </div>
      <div className="mt-4">
        <label className="text-sm text-white/70">Storage: {proStorage}GB</label>
        <Slider
          value={[proStorage]}
          onValueChange={(value) => setProStorage(value[0])}
          min={500}
          max={2000}
          step={100}
          className="mt-2"
        />
      </div>
      <Button 
        className="w-full mt-6" 
        variant="outline"
        onClick={onGetStarted}
      >
        {content.button_text || 'Get Started'}
      </Button>
      <div className="mt-6 space-y-4">
        {content.features?.map((feature, index) => (
          <PlanFeature key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};