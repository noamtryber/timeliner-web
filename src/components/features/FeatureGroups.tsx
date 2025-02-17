
import { FeatureCard } from "./FeatureCard";
import { featureGroups } from "./featureData";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureGroupsProps {
  onFeatureClick: (id: string) => void;
  getContent: (sectionId: string | null, key: string) => string;
}

export const FeatureGroups = ({ onFeatureClick, getContent }: FeatureGroupsProps) => {
  const { isRTL } = useLanguage();

  return (
    <div className="space-y-24">
      {featureGroups.map((group) => (
        <div key={group.id} className="space-y-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center gradient-text">
            {group.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {group.features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                onClick={() => onFeatureClick(feature.id)}
                index={index}
                isRTL={isRTL}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
