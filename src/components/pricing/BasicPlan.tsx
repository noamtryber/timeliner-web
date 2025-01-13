import { Button } from "@/components/ui/button";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";
import { Slider } from "@/components/ui/slider";
import type { PricingContent } from "@/hooks/usePricingContent";

interface BasicPlanProps {
  content?: PricingContent;
  video?: Record<string, string>;
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
  basicStorage: number;
  setBasicStorage: (value: number) => void;
  calculatePrice: (basePrice: number, baseStorage: number, currentStorage: number) => number;
  onGetStarted: () => void;
}

export const BasicPlan = ({ 
  content, 
  video,
  pricingPeriod,
  basicStorage,
  setBasicStorage,
  calculatePrice,
  onGetStarted
}: BasicPlanProps) => {
  if (!content) return null;

  const basePrice = 29;
  const baseStorage = 250;
  const price = calculatePrice(basePrice, baseStorage, basicStorage);

  return (
    <div className="glass p-6 rounded-xl relative">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
          Most Popular
        </span>
      </div>
      <PlanIcon type="basic" />
      <h3 className="text-xl font-semibold mt-4">{content.title}</h3>
      <p className="text-white/70 mt-2">{content.subtitle}</p>
      <div className="mt-4">
        <span className="text-3xl font-bold">${price.toFixed(2)}</span>
        <span className="text-white/70">/{pricingPeriod}</span>
      </div>
      <div className="mt-4">
        <label className="text-sm text-white/70">Storage: {basicStorage}GB</label>
        <Slider
          value={[basicStorage]}
          onValueChange={(value) => setBasicStorage(value[0])}
          min={250}
          max={1000}
          step={100}
          className="mt-2"
        />
      </div>
      <Button 
        className="w-full mt-6 bg-primary hover:bg-primary/90" 
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