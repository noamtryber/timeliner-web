import { Check } from "lucide-react";

interface PlanFeatureProps {
  feature: string;
  isRTL?: boolean;
}

export const PlanFeature = ({ feature, isRTL }: PlanFeatureProps) => {
  return (
    <div 
      className={`flex items-center gap-2 text-sm text-white/70 w-full ${isRTL ? 'flex-row-reverse' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className={`flex-shrink-0 ${isRTL ? 'order-2' : ''}`}>
        <Check className="h-4 w-4 text-primary" />
      </div>
      <span className={`${isRTL ? 'text-right w-full order-1' : ''}`}>{feature}</span>
    </div>
  );
};