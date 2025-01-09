import { Check } from "lucide-react";

interface PlanFeatureProps {
  text: string;
}

export const PlanFeature = ({ text }: PlanFeatureProps) => (
  <div className="flex items-center gap-2 text-sm text-white/70">
    <Check className="w-4 h-4 text-primary" />
    <span>{text}</span>
  </div>
);