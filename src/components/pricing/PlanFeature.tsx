import { Check } from "lucide-react";

interface PlanFeatureProps {
  text: string;
  isRTL?: boolean;
}

export const PlanFeature = ({ text, isRTL }: PlanFeatureProps) => {
  return (
    <div 
      className={`flex items-center gap-2 text-sm text-white/70 ${isRTL ? 'flex-row-reverse font-assistant' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Check className="h-4 w-4 text-primary flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
};