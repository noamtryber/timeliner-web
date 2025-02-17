
import { cn } from "@/lib/utils";
import { Feature } from "./featureData";
import { iconComponents } from "./iconComponents";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureCardProps {
  feature: Feature;
  isSelected: boolean;
  onClick: () => void;
}

export const FeatureCard = ({ feature, isSelected, onClick }: FeatureCardProps) => {
  const { isRTL } = useLanguage();
  const Icon = iconComponents[feature.icon];

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-4 rounded-lg transition-all duration-300",
        "hover:bg-white/5",
        isSelected ? "bg-white/5" : "bg-transparent",
        isRTL ? "text-right" : "text-left"
      )}
    >
      <div className={cn(
        "flex items-start gap-3",
        isRTL && "flex-row-reverse"
      )}>
        <div className="flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-medium mb-1">
            {feature.title}
          </h3>
          <p className="text-sm text-white/70">
            {feature.description}
          </p>
        </div>
      </div>
    </button>
  );
};
