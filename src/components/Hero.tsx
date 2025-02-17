
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { TimelineBackground } from "./TimelineBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { HeroContent } from "./hero/HeroContent";
import { HeroImage } from "./hero/HeroImage";
import { DemoDialog } from "./hero/DemoDialog";

export const Hero = () => {
  const { data: content, error: contentError } = usePageContent('hero', 'main');
  const { data: media, error: mediaError } = useMediaContent('hero', 'main');
  const { toast } = useToast();
  const [showDemo, setShowDemo] = useState(false);
  const { isRTL, language } = useLanguage();
  const isMobile = useIsMobile();

  if (contentError || mediaError) {
    toast({
      variant: "destructive",
      title: "Error loading content",
      description: "Please try refreshing the page"
    });
  }

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <TimelineBackground />
      </div>
      
      <div className={`container mx-auto px-4 relative z-50 ${isRTL ? 'rtl' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start">
            <HeroContent 
              onWatchDemo={() => setShowDemo(true)}
              isMobile={isMobile}
            />
          </div>
          <HeroImage />
        </div>
      </div>

      <DemoDialog
        showDemo={showDemo}
        onClose={() => setShowDemo(false)}
        content={content}
        media={media}
        language={language}
      />
    </div>
  );
};

export default Hero;
