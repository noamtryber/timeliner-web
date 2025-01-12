import { useRef } from "react";
import { useState, useEffect } from "react";
import { Workflow, FileStack, CreditCard, Users, FolderOpen, UserCircle, Shield } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/hooks/use-toast";
import { FeatureItem } from "./features/FeatureItem";
import { FeatureDialog } from "./features/FeatureDialog";
import { features } from "./features/featureData";
import { useLanguage } from "@/contexts/LanguageContext";

interface Translation {
  id: string;
  language: string;
  section_type: string;
  section_id: string | null;
  content_key: string;
  content_value: string;
  created_at: string;
  updated_at: string;
}

const iconComponents = {
  Workflow,
  FileStack,
  CreditCard,
  Users,
  FolderOpen,
  UserCircle,
  Shield
} as const;

export const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const { language, isRTL } = useLanguage();
  const { data: translations, isLoading: contentLoading, error: contentError } = usePageContent('feature');
  const { data: media, isLoading: mediaLoading, error: mediaError } = useMediaContent('feature');
  const { toast } = useToast();

  useEffect(() => {
    if (contentError || mediaError) {
      toast({
        variant: "destructive",
        title: "Error loading content",
        description: "Please try refreshing the page"
      });
    }
  }, [contentError, mediaError, toast]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
    
    // Since translations is now a key-value object, we can directly access it
    const translationKey = `${sectionId}_${key}_${language}`;
    return translations[translationKey] || '';
  };

  const getFeatureMedia = (sectionId: string, key: string) => {
    return media?.find(item => item.section_id === sectionId && item.media_key === key)?.media_url || '';
  };

  const activeFeature = features.find(f => f.id === openDialog);

  if (contentLoading || mediaLoading) {
    return (
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="features" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="subtitle-gradient font-medium mb-4 block">
            {getFeatureContent('header', 'label') || 'Features'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {getFeatureContent('header', 'title') || 'Powerful Features for Video Creators'}
          </h2>
          <p className="text-white/70 text-lg">
            {getFeatureContent('header', 'description') || 'Streamline your video production workflow with our comprehensive suite of features designed for creators.'}
          </p>
        </div>
        
        <div ref={featuresRef} className={`space-y-32 ${isRTL ? 'rtl' : ''}`}>
          {features.map((feature, index) => {
            const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents];
            const title = getFeatureContent(feature.sectionKey, 'title') || feature.defaultTitle;
            const subtitle = getFeatureContent(feature.sectionKey, 'subtitle') || feature.defaultSubtitle;
            const description = getFeatureContent(feature.sectionKey, 'description') || feature.defaultDescription;
            
            console.log('Feature content:', { 
              feature: feature.sectionKey, 
              title, 
              subtitle, 
              description,
              language 
            });
            
            return (
              <FeatureItem
                key={feature.id}
                index={index}
                icon={IconComponent}
                title={title}
                subtitle={subtitle}
                description={description}
                videoUrl={getFeatureMedia(feature.sectionKey, 'preview')}
                onLearnMore={() => setOpenDialog(feature.id)}
              />
            );
          })}
        </div>
      </div>

      {activeFeature && (
        <FeatureDialog
          isOpen={!!openDialog}
          onClose={() => setOpenDialog(null)}
          title={getFeatureContent(activeFeature.sectionKey, 'title') || activeFeature.defaultTitle}
          subtitle={getFeatureContent(activeFeature.sectionKey, 'subtitle') || activeFeature.defaultSubtitle}
          description={getFeatureContent(activeFeature.sectionKey, 'long_description') || activeFeature.defaultLongDescription}
          videoUrl={getFeatureMedia(activeFeature.sectionKey, 'learn-more')}
        />
      )}
    </section>
  );
};