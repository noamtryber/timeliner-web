import { Switch } from "@/components/ui/switch";

interface PricingHeaderProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

export const PricingHeader = ({ isYearly, setIsYearly }: PricingHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text animate-fade-up">
        Find the Perfect Plan for You
      </h2>
      <p className="text-xl text-white/70 mb-8 animate-fade-up delay-100">
        Start for free and scale up as you grow. Choose the plan that fits your workflow.
      </p>
      
      <div className="flex items-center justify-center gap-3 animate-fade-up delay-200">
        <span className="text-sm text-white/70">Monthly</span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
          className="data-[state=checked]:bg-primary"
        />
        <span className="text-sm text-white/70">
          Yearly <span className="text-primary">(25% off)</span>
        </span>
      </div>
      {isYearly && (
        <p className="text-sm text-primary mt-2 animate-fade-up">
          Save 25% with annual billing
        </p>
      )}
    </div>
  );
};