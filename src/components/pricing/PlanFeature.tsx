import { Check } from "lucide-react";

interface PlanFeatureProps {
  text: string;
  isRTL?: boolean;
}

export const PlanFeature = ({ text, isRTL }: PlanFeatureProps) => {
  return (
    <div 
      className={`flex items-center gap-2 text-sm text-white/70 w-full ${isRTL ? 'flex-row-reverse' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Check className="h-4 w-4 text-primary flex-shrink-0" />
      <span className={`${isRTL ? 'text-right w-full' : ''}`}>{text}</span>
    </div>
  );
};