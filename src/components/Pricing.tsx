import { useState } from "react";
import { PricingHeader } from "./pricing/PricingHeader";
import { FreePlan } from "./pricing/FreePlan";
import { BasicPlan } from "./pricing/BasicPlan";
import { ProPlan } from "./pricing/ProPlan";
import { EnterprisePlan } from "./pricing/EnterprisePlan";
import { usePricingContent } from "@/hooks/usePricingContent";
import { Skeleton } from "./ui/skeleton";

export const Pricing = () => {
  const [pricingPeriod, setPricingPeriod] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const [basicStorage, setBasicStorage] = useState(250);
  const [proStorage, setProStorage] = useState(500);
  
  const { data, isLoading } = usePricingContent();

  const calculatePrice = (basePrice: number, baseStorage: number, currentStorage: number) => {
    const extraStorage = Math.max(0, currentStorage - baseStorage);
    const extraCost = Math.floor(extraStorage / 100) * 3;
    const monthlyPrice = basePrice + extraCost;
    
    switch (pricingPeriod) {
      case 'quarterly':
        return monthlyPrice * 0.85; // 15% off
      case 'yearly':
        return monthlyPrice * 0.75; // 25% off
      default:
        return monthlyPrice; // No discount for monthly
    }
  };

  if (isLoading) {
    return (
      <section className="py-24 relative overflow-hidden">
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

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients with negative z-index */}
      <div className="absolute -z-10 -top-[40%] -left-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -z-10 -bottom-[40%] -right-[20%] w-[70%] h-[100%] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4">
        <PricingHeader 
          pricingPeriod={pricingPeriod} 
          setPricingPeriod={setPricingPeriod} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FreePlan content={data?.content.free} />
          <BasicPlan 
            content={data?.content.basic}
            video={data?.videos.basic}
            pricingPeriod={pricingPeriod}
            basicStorage={basicStorage}
            setBasicStorage={setBasicStorage}
            calculatePrice={calculatePrice}
          />
          <ProPlan 
            content={data?.content.pro}
            video={data?.videos.pro}
            pricingPeriod={pricingPeriod}
            proStorage={proStorage}
            setProStorage={setProStorage}
            calculatePrice={calculatePrice}
          />
          <EnterprisePlan content={data?.content.enterprise} />
        </div>
      </div>
    </section>
  );
};