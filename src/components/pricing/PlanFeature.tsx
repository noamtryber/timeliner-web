import { Check } from "lucide-react";

interface PlanFeatureProps {
  text: string;
  isRTL?: boolean;
}

export const PlanFeature = ({ text, isRTL }: PlanFeatureProps) => {
  return (
    <div 
      className={`flex items-center gap-2 text-[0.7rem] text-white/70 w-full ${isRTL ? 'flex-row-reverse' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className={`flex-shrink-0 ${isRTL ? 'order-2' : ''}`}>
        <Check className="h-3 w-3 text-primary" />
      </div>
      <span className={`${isRTL ? 'text-right w-full order-1' : ''}`}>{text}</span>
    </div>
  );
};