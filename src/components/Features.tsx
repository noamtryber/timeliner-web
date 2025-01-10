import { useRef, useState, useEffect } from "react";
import { Workflow, FileStack, CreditCard, Users, FolderOpen, UserCircle, Shield } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/hooks/use-toast";
import { FeatureItem } from "./features/FeatureItem";
import { FeatureDialog } from "./features/FeatureDialog";

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
    return content?.find(item => item.section_id === sectionId && item.content_key === key)?.content_value || '';
  };

  const getFeatureMedia = (sectionId: string, key: string) => {
    return media?.find(item => item.section_id === sectionId && item.media_key === key)?.media_url || '';
  };

  const iconComponents = {
    Workflow,
    FileStack,
    CreditCard,
    Users,
    FolderOpen,
    UserCircle,
    Shield
  };

  const features = [
    {
      id: 'revision-tracking',
      icon: 'Workflow',
      title: getFeatureContent('revision-tracking', 'title'),
      description: getFeatureContent('revision-tracking', 'description'),
      videoUrl: getFeatureMedia('revision-tracking', 'preview'),
      learnMoreVideo: getFeatureMedia('revision-tracking', 'learn-more')
    },
    {
      id: 'interactive-briefs',
      icon: 'FileStack',
      title: getFeatureContent('interactive-briefs', 'title'),
      description: getFeatureContent('interactive-briefs', 'description'),
      videoUrl: getFeatureMedia('interactive-briefs', 'preview'),
      learnMoreVideo: getFeatureMedia('interactive-briefs', 'learn-more')
    },
    {
      id: 'seamless-payments',
      icon: 'CreditCard',
      title: getFeatureContent('seamless-payments', 'title'),
      description: getFeatureContent('seamless-payments', 'description'),
      videoUrl: getFeatureMedia('seamless-payments', 'preview'),
      learnMoreVideo: getFeatureMedia('seamless-payments', 'learn-more')
    },
    {
      id: 'client-management',
      icon: 'Users',
      title: getFeatureContent('client-management', 'title'),
      description: getFeatureContent('client-management', 'description'),
      videoUrl: getFeatureMedia('client-management', 'preview'),
      learnMoreVideo: getFeatureMedia('client-management', 'learn-more')
    },
    {
      id: 'client-portals',
      icon: 'FolderOpen',
      title: getFeatureContent('client-portals', 'title'),
      description: getFeatureContent('client-portals', 'description'),
      videoUrl: getFeatureMedia('client-portals', 'preview'),
      learnMoreVideo: getFeatureMedia('client-portals', 'learn-more')
    },
    {
      id: 'team-collaboration',
      icon: 'UserCircle',
      title: getFeatureContent('team-collaboration', 'title'),
      description: getFeatureContent('team-collaboration', 'description'),
      videoUrl: getFeatureMedia('team-collaboration', 'preview'),
      learnMoreVideo: getFeatureMedia('team-collaboration', 'learn-more')
    },
    {
      id: 'secure-media-storage',
      icon: 'Shield',
      title: getFeatureContent('secure-media-storage', 'title'),
      description: getFeatureContent('secure-media-storage', 'description'),
      videoUrl: getFeatureMedia('secure-media-storage', 'preview'),
      learnMoreVideo: getFeatureMedia('secure-media-storage', 'learn-more')
    }
  ];

  const activeFeature = features.find(f => f.title === openDialog);

  return (
    <section id="features" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary/80 font-medium mb-4 block">FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Everything You Need to Scale Your Video Business
          </h2>
          <p className="text-white/70 text-lg">
            One platform to manage your entire video production workflow, from client onboarding to final delivery
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
                title={feature.title}
                description={feature.description}
                videoUrl={feature.videoUrl}
                onLearnMore={() => setOpenDialog(feature.title)}
              />
            );
          })}
        </div>
      </div>

      {activeFeature && (
        <FeatureDialog
          isOpen={!!openDialog}
          onClose={() => setOpenDialog(null)}
          title={activeFeature.title}
          description={activeFeature.description}
          videoUrl={activeFeature.learnMoreVideo}
        />
      )}
    </section>
  );
};