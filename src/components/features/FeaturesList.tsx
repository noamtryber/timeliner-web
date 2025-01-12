import { useRef, useEffect } from "react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { features } from "./featureData";
import { FeatureItem } from "./FeatureItem";
import { iconComponents } from "./iconComponents";
import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesList = ({ onLearnMore }: { onLearnMore: (id: string) => void }) => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const { data: translations } = usePageContent('feature');
  const { data: media } = useMediaContent('feature');
  const { language, isRTL } = useLanguage();

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

  const getFeatureContent = (sectionId: string, key: string) => {
    if (!translations) return '';
    const contentKey = `${sectionId}_${key}`;
    const contentValue = translations[contentKey] || '';
    console.log('Getting translation for:', { sectionId, key, contentKey, contentValue, language });
    return contentValue;
  };

  const getFeatureMedia = (sectionId: string, key: string) => {
    if (!media) return '';
    const mediaItem = media.find(item => 
      item.section_type === 'feature' && 
      item.section_id === sectionId && 
      item.media_key === key
    );
    console.log('Looking for media:', { sectionId, key, mediaItem });
    return mediaItem?.media_url || '';
  };

  return (
    <div ref={featuresRef} className={`space-y-32 ${isRTL ? 'rtl' : ''}`}>
      {features.map((feature, index) => {
        const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents];
        
        if (!IconComponent) {
          console.error('Icon not found:', feature.icon);
          return null;
        }

        const title = getFeatureContent(feature.sectionKey, 'title') || feature.defaultTitle;
        const subtitle = getFeatureContent(feature.sectionKey, 'subtitle') || feature.defaultSubtitle;
        const description = getFeatureContent(feature.sectionKey, 'description') || feature.defaultDescription;
        const videoUrl = getFeatureMedia(feature.sectionKey, 'preview');

        console.log('Rendering feature:', { 
          sectionKey: feature.sectionKey, 
          title, 
          subtitle, 
          description, 
          videoUrl,
          language,
          icon: feature.icon,
          IconComponent 
        });

        return (
          <FeatureItem
            key={feature.id}
            index={index}
            icon={IconComponent}
            title={title}
            subtitle={subtitle}
            description={description}
            videoUrl={videoUrl}
            onLearnMore={() => onLearnMore(feature.id)}
          />
        );
      })}
    </div>
  );
};