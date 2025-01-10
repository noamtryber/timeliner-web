import { useEffect, useRef, useState } from "react";
import { PlayCircle, Workflow, FileStack, CreditCard, Users, FolderOpen, UserCircle, Shield } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/hooks/use-toast";

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
              <div 
                key={feature.id}
                className={`feature-item opacity-0 translate-y-10 transition-all duration-700 ease-out
                  grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}
              >
                {/* Video Side */}
                <div className={`overflow-hidden relative order-1 rounded-3xl
                  ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="w-full h-full">
                    <iframe
                      src={feature.videoUrl}
                      className="w-full h-full scale-[1.05] rounded-3xl"
                      loading="lazy"
                      allow="autoplay; fullscreen; picture-in-picture"
                      style={{
                        aspectRatio: '16/9',
                        border: 'none',
                        background: 'transparent',
                        transform: 'scale(1.05)',
                        borderRadius: '1.5rem',
                      }}
                    />
                  </div>
                </div>
                
                {/* Content Side */}
                <div className={`space-y-6 order-2 
                  ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button 
                    onClick={() => setOpenDialog(feature.title)}
                    className="bg-gradient-to-r from-primary via-accent to-primary shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" /> Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {features.map((feature) => (
        <Dialog key={feature.id} open={openDialog === feature.title} onOpenChange={() => setOpenDialog(null)}>
          <DialogContent className="sm:max-w-[800px] bg-card/95 backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{feature.title}</DialogTitle>
              <DialogDescription className="text-lg text-white/70">
                {feature.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 rounded-xl overflow-hidden aspect-video">
              <iframe
                src={feature.learnMoreVideo}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  border: 'none',
                  background: 'transparent',
                }}
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};