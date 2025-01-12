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
  const { data: content, isLoading: contentLoading, error: contentError } = usePageContent('feature');
  const { data: media, isLoading: mediaLoading, error: mediaError } = useMediaContent('feature');
  const { toast } = useToast();
  const { isRTL } = useLanguage();

  useEffect(() => {
    if (contentError || mediaError) {
      console.error('Content error:', contentError);
      console.error('Media error:', mediaError);
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
    if (!content) return '';
    // Find content where section_id and content_key match exactly
    const foundContent = Object.values(content).find(item => 
      item.section_id === sectionId && 
      item.content_key === key
    );
    console.log('Content lookup:', { sectionId, key, foundContent });
    return foundContent?.content_value || '';
  };

  const getFeatureMedia = (sectionId: string, key: string) => {
    if (!media) return '';
    const mediaItem = media.find(item => 
      item.section_id === sectionId && 
      item.media_key === key
    );
    console.log('Media lookup:', { sectionId, key, mediaItem });
    return mediaItem?.media_url || '';
  };

  const activeFeature = features.find(f => f.id === openDialog);

  if (contentLoading || mediaLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-4 bg-primary/20 rounded w-24 mx-auto mb-4"></div>
              <div className="h-8 bg-primary/20 rounded w-64 mx-auto mb-6"></div>
              <div className="h-4 bg-primary/20 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  console.log('Rendering Features with:', { content, media });

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
            const videoUrl = getFeatureMedia(feature.sectionKey, 'preview');

            console.log('Rendering feature:', {
              sectionKey: feature.sectionKey,
              title,
              subtitle,
              description,
              videoUrl
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