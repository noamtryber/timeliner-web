import { cn } from "@/lib/utils";

interface PricingHeaderProps {
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
  setPricingPeriod: (value: 'monthly' | 'quarterly' | 'yearly') => void;
}

export const PricingHeader = ({ pricingPeriod, setPricingPeriod }: PricingHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text animate-fade-up">
        Find the Perfect Plan for You
      </h2>
      <p className="text-xl text-white/70 mb-8 animate-fade-up delay-100">
        Start for free and scale up as you grow. Choose the plan that fits your workflow.
      </p>
      
      <div className="flex items-center justify-center gap-3 animate-fade-up delay-200">
        <button
          onClick={() => setPricingPeriod('monthly')}
          className={cn(
            "px-4 py-2 rounded-md transition-all duration-300",
            pricingPeriod === 'monthly' 
              ? "bg-gradient-to-br from-primary to-secondary text-white" 
              : "text-white/70 hover:text-white"
          )}
        >
          Monthly
        </button>
        <button
          onClick={() => setPricingPeriod('quarterly')}
          className={cn(
            "px-4 py-2 rounded-md transition-all duration-300",
            pricingPeriod === 'quarterly' 
              ? "bg-gradient-to-br from-primary to-secondary text-white" 
              : "text-white/70 hover:text-white"
          )}
        >
          Quarterly
          <span className="block text-xs text-primary">15% off</span>
        </button>
        <button
          onClick={() => setPricingPeriod('yearly')}
          className={cn(
            "px-4 py-2 rounded-md transition-all duration-300",
            pricingPeriod === 'yearly' 
              ? "bg-gradient-to-br from-primary to-secondary text-white" 
              : "text-white/70 hover:text-white"
          )}
        >
          Yearly
          <span className="block text-xs text-primary">25% off</span>
        </button>
      </div>
    </div>
  );
};