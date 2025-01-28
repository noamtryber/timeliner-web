import { useRef, useEffect } from "react";
import { useMediaContent } from "@/hooks/useMediaContent";
import { featureGroups } from "./featureData";
import { FeatureItem } from "./FeatureItem";
import { iconComponents } from "./iconComponents";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeaturesListProps {
  onLearnMore: (id: string) => void;
  getContent: (sectionId: string | null, key: string) => string;
  learnMoreText: string;
}

export const FeaturesList = ({ onLearnMore, getContent, learnMoreText }: FeaturesListProps) => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const { data: media } = useMediaContent('feature');
  const { isRTL, language } = useLanguage();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const featureElements = featuresRef.current?.querySelectorAll(".feature-item");
    featureElements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const getFeatureMedia = (sectionId: string, key: string) => {
    if (!media) return '';
    const mediaItem = media.find(item => 
      item.section_type === 'feature' && 
      item.section_id === sectionId && 
      item.media_key === key
    );
    return mediaItem?.media_url || '';
  };

  return (
    <div ref={featuresRef} className={`space-y-32 ${isRTL ? 'rtl' : ''}`}>
      {featureGroups.flatMap(group => group.features).map((feature, index) => {
        const IconComponent = iconComponents[feature.icon];
        return (
          <FeatureItem
            key={feature.id}
            index={index}
            icon={IconComponent}
            title={feature.title}
            description={feature.description}
            videoUrl={getFeatureMedia(feature.id, 'preview')}
            onLearnMore={() => onLearnMore(feature.id)}
            learnMoreText={learnMoreText}
          />
        );
      })}
    </div>
  );
};