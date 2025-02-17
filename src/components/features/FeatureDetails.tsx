
import { Button } from "@/components/ui/button";
import { Feature } from "./featureData";
import { iconComponents } from "./iconComponents";

interface FeatureDetailsProps {
  feature: Feature;
  isAlternate: boolean;
  isRTL: boolean;
  onLearnMore: () => void;
  learnMoreText: string;
}

export const FeatureDetails = ({ 
  feature, 
  isAlternate, 
  isRTL, 
  onLearnMore,
  learnMoreText 
}: FeatureDetailsProps) => {
  const IconComponent = feature ? iconComponents[feature.icon] : null;

  return (
    <div className={`col-span-1 md:col-span-4 order-3 ${isAlternate ? 'md:order-2' : 'md:order-2'}`}>
      <div className="flex flex-col justify-center h-full">
        <div className="flex items-start">
          {IconComponent && (
            <div className="flex-shrink-0">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
          )}
          <div className={`${isRTL ? 'mr-4 text-right' : 'ml-4 text-left'}`}>
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4">
              {feature.title}
            </h3>
          </div>
        </div>
        <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
            {feature.description}
          </p>
          <div>
            <Button 
              onClick={onLearnMore}
              variant="outline"
              size="lg"
              className="w-1/2 md:w-auto text-lg"
            >
              {learnMoreText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
