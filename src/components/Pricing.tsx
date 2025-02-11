
import { useState } from "react";
import { PricingHeader } from "./pricing/PricingHeader";
import { BasicPlan } from "./pricing/BasicPlan";
import { ProPlan } from "./pricing/ProPlan";
import { EnterprisePlan } from "./pricing/EnterprisePlan";
import { usePricingData } from "@/hooks/usePricingData";
import { Skeleton } from "./ui/skeleton";
import { useLanguage } from "@/contexts/LanguageContext";

export const Pricing = () => {
  const [pricingPeriod, setPricingPeriod] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const { language } = useLanguage();
  const { data, isLoading } = usePricingData();
  const isRTL = language === 'he' || language === 'ar';

  if (isLoading) {
    return (
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-[600px] bg-card/20" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const getPlanData = (planId: string) => {
    return data?.plans.find(plan => plan.plan_id === planId);
  };

  const getPlanRules = (planId: string) => {
    return data?.rules.filter(rule => rule.plan_id === planId) || [];
  };

  // Calculate prices based on period
  const getPeriodMultiplier = () => {
    switch (pricingPeriod) {
      case 'yearly':
        return { multiplier: 12, discount: 0.25 }; // 25% discount for yearly
      case 'quarterly':
        return { multiplier: 3, discount: 0.15 }; // 15% discount for quarterly
      default:
        return { multiplier: 1, discount: 0 };
    }
  };

  const calculatePrice = (basePrice: number | null) => {
    if (!basePrice) return null;
    const { multiplier, discount } = getPeriodMultiplier();
    return (basePrice * multiplier * (1 - discount));
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute -z-10 -top-[40%] -left-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -z-10 -bottom-[40%] -right-[20%] w-[70%] h-[100%] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4">
        <PricingHeader 
          pricingPeriod={pricingPeriod} 
          setPricingPeriod={setPricingPeriod} 
        />

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? 'direction-rtl' : ''}`}>
          <BasicPlan 
            planData={getPlanData('basic')}
            pricingPeriod={pricingPeriod}
            calculatePrice={calculatePrice}
          />
          <ProPlan 
            planData={getPlanData('pro')}
            pricingPeriod={pricingPeriod}
            calculatePrice={calculatePrice}
          />
          <EnterprisePlan 
            planData={getPlanData('enterprise')}
          />
        </div>
      </div>
    </section>
  );
};
