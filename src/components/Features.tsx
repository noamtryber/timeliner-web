import { useRef } from "react";
import { useState, useEffect } from "react";
import { Workflow, FileStack, CreditCard, Users, FolderOpen, UserCircle, Shield } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/hooks/use-toast";
import { FeatureItem } from "./features/FeatureItem";
import { FeatureDialog } from "./features/FeatureDialog";
import { features } from "./features/featureData";

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
    return content?.[`${sectionId}.${key}`] || '';
  };

  const getFeatureMedia = (sectionId: string, key: string) => {
    return media?.find(item => item.section_id === sectionId && item.media_key === key)?.media_url || '';
  };

  const activeFeature = features.find(f => f.id === openDialog);

  return (
    <section id="features" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary/80 font-medium mb-4 block">
            {content?.['header.label'] || 'Features'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {content?.['header.title'] || 'Powerful Features for Video Creators'}
          </h2>
          <p className="text-white/70 text-lg">
            {content?.['header.description'] || 'Streamline your video production workflow with our comprehensive suite of features designed for creators.'}
          </p>
        </div>
        
        <div ref={featuresRef} className="space-y-32">
          {features.map((feature, index) => {
            const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents];
            return (
              <FeatureItem
                key={feature.id}
                index={index}
                icon={IconComponent}
                title={getFeatureContent(feature.sectionKey, 'title') || feature.defaultTitle}
                subtitle={getFeatureContent(feature.sectionKey, 'subtitle') || feature.defaultSubtitle}
                description={getFeatureContent(feature.sectionKey, 'description') || feature.defaultDescription}
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