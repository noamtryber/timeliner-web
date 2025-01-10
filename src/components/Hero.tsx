import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { FeatureDialog } from "./features/FeatureDialog";
import { TimelineBackground } from "./TimelineBackground";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const { data: content, error: contentError } = usePageContent('hero', 'main');
  const { data: media, error: mediaError } = useMediaContent('hero', 'main');
  const { toast } = useToast();
  const [showDemo, setShowDemo] = useState(false);
  const navigate = useNavigate();

  if (contentError || mediaError) {
    toast({
      variant: "destructive",
      title: "Error loading content",
      description: "Please try refreshing the page"
    });
  }

  const getContent = (key: string) => {
    return content?.[key] || '';
  };

  const getMedia = (key: string) => {
    return media?.find(item => item.media_key === key)?.media_url || '';
  };

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      <TimelineBackground />
      
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background opacity-90" />
      
      <div className="container mx-auto px-4 relative animate-fade-up">
        <div className="text-center max-w-4xl mx-auto">
          <span className="subtitle-gradient mb-4 block tracking-wide">
            {getContent('subtitle')}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text tracking-tight leading-tight">
            {getContent('title')}
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto w-full sm:w-auto"
              onClick={() => navigate('/auth')}
            >
              {getContent('cta_primary')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 text-lg px-8 py-6 h-auto w-full sm:w-auto hover:bg-white/5 relative group overflow-hidden"
              onClick={() => setShowDemo(true)}
            >
              {/* Outer glow effect - now always visible */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-lg animate-pulse" />
              
              {/* Inner gradient animation */}
              <div className="absolute inset-0.5 bg-card rounded-md" />
              
              {/* Shimmer effect - now always active */}
              <div 
                className="absolute inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-shimmer rounded-md" 
                style={{ backgroundSize: '200% 100%' }}
              />
              
              {/* Button content */}
              <div className="relative z-10 flex items-center">
                <Play className="mr-2 h-5 w-5" />
                <span>{getContent('cta_secondary')}</span>
              </div>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <div className="text-3xl font-bold gradient-text">{getContent('stats_projects')}</div>
              <div className="text-white/70">{getContent('stats_projects_label')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">{getContent('stats_clients')}</div>
              <div className="text-white/70">{getContent('stats_clients_label')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">{getContent('stats_revenue')}</div>
              <div className="text-white/70">{getContent('stats_revenue_label')}</div>
            </div>
          </div>
        </div>
      </div>

      <FeatureDialog
        isOpen={showDemo}
        onClose={() => setShowDemo(false)}
        title="See How It Works"
        description="Watch our 2-minute demo to see how Timeliner can streamline your creative workflow and help you manage projects more efficiently."
        videoUrl="https://player.vimeo.com/video/1042338760?autoplay=1"
      />
    </div>
  );
};