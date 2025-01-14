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
import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const translations = {
  video_editors: {
    en: 'VIDEO EDITORS & AGENCIES:',
    es: 'EDITORES DE VIDEO Y AGENCIAS:',
    he: 'עורכי וידאו וסוכנויות:'
  },
  main_title: {
    en: 'Turn Chaos into Clarity with Smart Video Management',
    es: 'Convierte el Caos en Claridad con Gestión Inteligente de Video',
    he: 'סוף לבלאגן! ניהול פרויקטים, תיקונים ותשלומים במקום אחד'
  },
  get_started: {
    en: 'Get Started',
    es: 'Empezar Ahora',
    he: 'התחל עכשיו'
  },
  watch_demo: {
    en: 'Watch Demo',
    es: 'Ver Demo',
    he: 'לצפייה בסרטון'
  },
  faster_revisions: {
    en: 'Faster Revision Rounds',
    es: 'Revisiones más Rápidas',
    he: 'סבבי תיקונים מהירים יותר'
  },
  increase_income: {
    en: 'Increase in Income',
    es: 'Aumento de Ingresos',
    he: 'עלייה בהכנסות'
  },
  client_retention: {
    en: 'Client Retention in Retainers',
    es: 'Retención de Clientes',
    he: 'שימור לקוחות'
  },
  demo_title: {
    en: 'See How It Works',
    es: '¿Cómo Funciona?',
    he: 'איך זה עובד?'
  },
  demo_description: {
    en: 'Watch our 2-minute demo to see how Timeliner can streamline your creative workflow and help you manage projects more efficiently.',
    es: 'Mira nuestro demo de 2 minutos para ver cómo Timeliner puede optimizar tu flujo de trabajo creativo y ayudarte a gestionar proyectos de manera más eficiente.',
    he: 'צפו בסרטון המלא ותבינו למה טיימליינר הוא הכלי היחיד שתצטרכו לניהול פרויקטים, סבבי תיקונים וקבלת תשלומים בזמן.'
  }
};

export const Hero = () => {
  const { data: content, error: contentError } = usePageContent('hero', 'main');
  const { data: statsContent, error: statsError } = usePageContent('hero', 'main');
  const { data: media, error: mediaError } = useMediaContent('hero', 'main');
  const { toast } = useToast();
  const [showDemo, setShowDemo] = useState(false);
  const navigate = useNavigate();
  const { isRTL, language } = useLanguage();
  const isMobile = useIsMobile();

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

  if (contentError || mediaError || statsError) {
    toast({
      variant: "destructive",
      title: "Error loading content",
      description: "Please try refreshing the page"
    });
  }

  const getVideoUrl = () => {
    if (isMobile && language === 'he') {
      return "https://player.vimeo.com/video/1044344874";
    }
    return "https://player.vimeo.com/video/1046016144";
  };

  const renderDemoDialog = () => {
    if (language === 'he') {
      return (
        <Dialog open={showDemo} onOpenChange={() => setShowDemo(false)}>
          <DialogContent dir="rtl" className="sm:max-w-[800px] bg-card/95 backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl gradient-text text-right">
                איך זה תכל'ס עובד?
              </DialogTitle>
              <DialogDescription className="text-lg text-white/70 mt-4 leading-relaxed text-right">
                צפו בסרטון המלא ותבינו למה טיימליינר הוא הכלי היחיד שתצטרכו לניהול פרויקטים, סבבי תיקונים וקבלת תשלומים בזמן. נוצר על ידי יוצרים, עבור יוצרים.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1044344874?autoplay=1"
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
      );
    }

    return (
      <FeatureDialog
        isOpen={showDemo}
        onClose={() => setShowDemo(false)}
        title={content?.demo_title || "See How It Works"}
        description={content?.demo_description || "Watch our 2-minute demo to see how Timeliner can streamline your creative workflow and help you manage projects more efficiently."}
        videoUrl={media?.find(item => item.media_key === 'demo')?.media_url || "https://player.vimeo.com/video/1042338760?autoplay=1"}
      />
    );
  };

  const getTranslatedContent = (key: keyof typeof translations) => {
    return translations[key][language as keyof (typeof translations)[typeof key]] || content?.[key] || translations[key].en;
  };

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with varying opacity */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative">
          <TimelineBackground />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80" />
        </div>
        <div className="relative">
          <TimelineBackground />
          <div className="absolute inset-0 bg-gradient-to-l from-background/80 via-background/70 to-background/60" />
        </div>
      </div>
      
      <div className={`container mx-auto px-4 relative z-10 ${isRTL ? 'rtl' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className={`text-left ${isRTL ? 'lg:text-right' : ''} animate-fade-up`}>
            <span className={`subtitle-gradient mb-4 block tracking-wide ${isRTL ? 'text-base sm:text-lg font-bold' : 'text-sm sm:text-base'}`}>
              {getTranslatedContent('video_editors')}
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text tracking-tight leading-tight">
              {getTranslatedContent('main_title')}
            </h1>

            <div className={`flex flex-col sm:flex-row items-start gap-4 mb-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto"
                onClick={() => navigate('/signup')}
              >
                <span className="flex items-center gap-2">
                  {getTranslatedContent('get_started')}
                  <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
                </span>
              </Button>
              
              {!isMobile && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto hover:bg-white/5 relative group overflow-hidden"
                  onClick={() => setShowDemo(true)}
                >
                  <div className="absolute -inset-3 bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-lg animate-pulse" />
                  <div className="absolute inset-[1px] bg-card rounded-full" />
                  <div 
                    className="absolute inset-[1px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-shimmer rounded-full" 
                    style={{ backgroundSize: '200% 100%' }}
                  />
                  <div className={`relative z-10 flex items-center gap-2`}>
                    <Play className="h-4 sm:h-5 w-4 sm:w-5" />
                    <span>{getTranslatedContent('watch_demo')}</span>
                  </div>
                </Button>
              )}
            </div>

            {/* Stats Section */}
            <div 
              ref={statsRef} 
              className={`grid grid-cols-3 gap-4 ${isRTL ? 'rtl' : ''}`}
            >
              <div className="glass p-4 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{animatedStats.revisions.toFixed(1)}%</div>
                <div className="text-sm sm:text-base text-white/70">{getTranslatedContent('faster_revisions')}</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{animatedStats.income.toFixed(1)}%</div>
                <div className="text-sm sm:text-base text-white/70">{getTranslatedContent('increase_income')}</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{animatedStats.retention.toFixed(1)}%</div>
                <div className="text-sm sm:text-base text-white/70">{getTranslatedContent('client_retention')}</div>
              </div>
            </div>
          </div>

          {/* Right side - Product Screenshot */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(155,135,245,0.2)]">
              <img 
                src="/lovable-uploads/7a7300e3-617d-48ce-a15a-212411db6ee8.png"
                alt="Timeliner Dashboard"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {renderDemoDialog()}
    </div>
  );
};