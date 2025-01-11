import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { FeatureDialog } from "./features/FeatureDialog";
import { TimelineBackground } from "./TimelineBackground";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { data: content, error: contentError } = usePageContent('hero', 'main');
  const { data: statsContent, error: statsError } = usePageContent('hero', 'stats');
  const { data: media, error: mediaError } = useMediaContent('hero', 'main');
  const { toast } = useToast();
  const [showDemo, setShowDemo] = useState(false);
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  console.log('Hero translations:', { content, statsContent });

  if (contentError || mediaError || statsError) {
    toast({
      variant: "destructive",
      title: "Error loading content",
      description: "Please try refreshing the page"
    });
  }

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      <TimelineBackground />
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background opacity-90" />
      
      <div className={`container mx-auto px-4 relative animate-fade-up ${isRTL ? 'rtl' : ''}`}>
        <div className="text-center max-w-4xl mx-auto">
          <span className="subtitle-gradient mb-4 block tracking-wide">
            {content?.subtitle || 'VIDEO EDITORS & AGENCIES:'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text tracking-tight leading-tight">
            {content?.title || 'Turn Chaos into Clarity with Smart Video Management'}
          </h1>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto w-full sm:w-auto"
              onClick={() => navigate('/auth')}
            >
              {content?.cta_primary || 'Get Started'}
              <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5`} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 text-lg px-8 py-6 h-auto w-full sm:w-auto hover:bg-white/5 relative group overflow-hidden"
              onClick={() => setShowDemo(true)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-lg animate-pulse" />
              <div className="absolute inset-0.5 bg-card rounded-md" />
              <div 
                className="absolute inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-shimmer rounded-md" 
                style={{ backgroundSize: '200% 100%' }}
              />
              <div className={`relative z-10 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Play className={`${isRTL ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                <span>{content?.cta_secondary || 'Watch Demo'}</span>
              </div>
            </Button>
          </div>

          <div className={`grid grid-cols-3 gap-8 mt-16 ${isRTL ? 'rtl' : ''}`}>
            <div>
              <div className="text-3xl font-bold gradient-text">{statsContent?.stat1_value || '32.0%'}</div>
              <div className="text-white/70">{statsContent?.stat1_label || 'Faster Revision Rounds'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">{statsContent?.stat2_value || '19.0%'}</div>
              <div className="text-white/70">{statsContent?.stat2_label || 'Increase in Income'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">{statsContent?.stat3_value || '24.0%'}</div>
              <div className="text-white/70">{statsContent?.stat3_label || 'Client Retention in Retainers'}</div>
            </div>
          </div>
        </div>
      </div>

      <FeatureDialog
        isOpen={showDemo}
        onClose={() => setShowDemo(false)}
        title={content?.demo_title || "See How It Works"}
        description={content?.demo_description || "Watch our 2-minute demo to see how Timeliner can streamline your creative workflow and help you manage projects more efficiently."}
        videoUrl={media?.find(item => item.media_key === 'demo')?.media_url || "https://player.vimeo.com/video/1042338760?autoplay=1"}
      />
    </div>
  );
};