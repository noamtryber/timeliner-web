import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect, useRef } from "react";
import { FeatureDialog } from "./features/FeatureDialog";
import { TimelineBackground } from "./TimelineBackground";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { data: content, error: contentError } = usePageContent('hero', 'main');
  const { data: statsContent, error: statsError } = usePageContent('hero', 'main');
  const { data: media, error: mediaError } = useMediaContent('hero', 'main');
  const { toast } = useToast();
  const [showDemo, setShowDemo] = useState(false);
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  // Animation states for statistics
  const [animatedStats, setAnimatedStats] = useState({
    revisions: 0,
    income: 0,
    retention: 0
  });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats({
          revisions: 32.0,
          income: 19.0,
          retention: 24.0
        });
        return;
      }

      const progress = currentStep / steps;
      setAnimatedStats({
        revisions: 32.0 * progress,
        income: 19.0 * progress,
        retention: 24.0 * progress
      });

      currentStep++;
    }, interval);
  };

  console.log('Hero translations:', { content });

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
          <span className="subtitle-gradient mb-4 block tracking-wide text-sm sm:text-base">
            {content?.video_editors || 'VIDEO EDITORS & AGENCIES:'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 gradient-text tracking-tight leading-tight px-2">
            {content?.turn_chaos_clarity || 'Turn Chaos into Clarity with Smart Video Management'}
          </h1>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto"
              onClick={() => navigate('/signup')}
            >
              {content?.get_started || 'Get Started'}
              <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} h-4 sm:h-5 w-4 sm:w-5`} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto hover:bg-white/5 relative group overflow-hidden"
              onClick={() => setShowDemo(true)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-lg animate-pulse" />
              <div className="absolute inset-0.5 bg-card rounded-md" />
              <div 
                className="absolute inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-shimmer rounded-md" 
                style={{ backgroundSize: '200% 100%' }}
              />
              <div className={`relative z-10 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Play className={`${isRTL ? 'ml-2' : 'mr-2'} h-4 sm:h-5 w-4 sm:w-5`} />
                <span>{content?.watch_demo || 'Watch Demo'}</span>
              </div>
            </Button>
          </div>

          <div ref={statsRef} className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 ${isRTL ? 'rtl' : ''}`}>
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{animatedStats.revisions.toFixed(1)}%</div>
              <div className="text-white/70 text-sm sm:text-base">{content?.faster_revisions || 'Faster Revision Rounds'}</div>
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{animatedStats.income.toFixed(1)}%</div>
              <div className="text-white/70 text-sm sm:text-base">{content?.increase_income || 'Increase in Income'}</div>
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{animatedStats.retention.toFixed(1)}%</div>
              <div className="text-white/70 text-sm sm:text-base">{content?.client_retention || 'Client Retention in Retainers'}</div>
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