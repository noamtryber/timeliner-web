import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { HeroStats } from "./HeroStats";

interface ContentTranslations {
  video_editors: string;
  main_title: string;
  subtext: string;
  get_started: string;
  watch_demo: string;
  faster_revisions: string;
  increase_income: string;
  client_retention: string;
}

interface HeroContentProps {
  translations: ContentTranslations;
  onWatchDemo: () => void;
  isMobile: boolean;
}

export const HeroContent = ({ translations, onWatchDemo, isMobile }: HeroContentProps) => {
  const navigate = useNavigate();
  const { isRTL, language } = useLanguage();

  const videoUrl = language === 'he' 
    ? "https://player.vimeo.com/video/1044344874"
    : "https://player.vimeo.com/video/1046016144";

  const thumbnailUrl = language === 'he'
    ? "https://vumbnail.com/1044344874.jpg"
    : "https://vumbnail.com/1046016144.jpg";

  return (
    <div className={`text-center lg:text-left ${isRTL ? 'text-center lg:text-right' : ''} animate-fade-up space-y-6 ${isRTL ? 'pt-12' : 'pt-20'}`}>
      <span className={`subtitle-gradient block tracking-wide ${
        isRTL ? 'text-base sm:text-lg text-center lg:text-right font-normal' : 'text-sm sm:text-base'
      }`}>
        {translations.video_editors}
      </span>
      
      <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold gradient-text tracking-tight leading-tight max-w-[95%] mx-auto lg:mx-0 ${
        isRTL ? 'text-center lg:text-right' : ''
      }`}>
        {translations.main_title}
      </h1>

      {isMobile && (
        <div className="w-full aspect-video rounded-xl overflow-hidden relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
          <iframe
            src={`${videoUrl}?autoplay=1&muted=0`}
            className="w-full h-full relative z-10"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{ border: 'none', background: 'transparent' }}
          />
        </div>
      )}

      <p className={`text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
        isRTL ? 'text-center lg:text-right' : ''
      }`}>
        {translations.subtext}
      </p>

      <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 ${
        isRTL ? 'sm:justify-start' : ''
      }`}>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto"
          onClick={() => navigate('/signup')}
        >
          <span className="flex items-center gap-2">
            Start Free Trial
            <ArrowRight className={`h-4 sm:h-5 w-4 sm:w-5 ${isRTL ? 'rotate-180' : ''}`} />
          </span>
        </Button>
        
        {!isMobile && (
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto hover:bg-white/5 relative group overflow-hidden"
            onClick={onWatchDemo}
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-lg animate-pulse" />
            <div className="absolute inset-[1px] bg-card rounded-full" />
            <div 
              className="absolute inset-[1px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-shimmer rounded-full" 
              style={{ backgroundSize: '200% 100%' }}
            />
            <div className={`relative z-10 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Play className="h-4 sm:h-5 w-4 sm:w-5" />
              <span>{translations.watch_demo}</span>
            </div>
          </Button>
        )}
      </div>

      <HeroStats translations={translations} />
    </div>
  );
};