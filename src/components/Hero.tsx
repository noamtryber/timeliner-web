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

const translations = {
  video_editors: {
    en: 'VIDEO EDITORS & CONTENT AGENCIES:',
    es: 'EDITORES DE VIDEO Y AGENCIAS:',
    he: 'עורכי וידאו וסוכנויות תוכן',
    ar: 'محررو الفيديو ووكالات المحتوى:'
  },
  main_title: {
    en: 'Simplify Video Projects with All-in-One Management',
    es: 'Optimiza Proyectos de Video con Gestión Todo en Uno',
    he: 'אומרים ביי לבלאגן עם מערכת חכמה לניהול פרויקטי עריכת וידאו',
    ar: 'إدارة مشاريع الفيديو بسهولة في مكان واحد'
  },
  subtext: {
    en: 'Task coordination, seamless revisions, timely payments, expectation alignment, secure storage, and smart AI tools — everything you need in one platform for a professional client experience and stress-free workflow.',
    es: 'Gestión de Proyectos, Revisiones, Pagos, Expectativas, Almacenamiento y Herramientas de IA — Todo lo que Necesitas en Un Solo Lugar.',
    he: 'ניהול משימות, סבבי תיקונים, תשלומים, תיאום ציפיות, אחסון מהיר וכלי AI - כל מה שאתם צריכים במקום אחד לחווית לקוח מקצועית ושקט נפשי.',
    ar: 'كل شيء تحت السيطرة – تنسيق المهام، مراجعات سلسة، مدفوعات في وقتها، توقعات واضحة، تخزين آمن، وأدوات ذكاء اصطناعي ذكية. كل اللي تحتاجه لمنصة احترافية وتجربة عميل مريحة، بدون وجع راس.'
  },
  get_started: {
    en: 'Get Started',
    es: 'Empezar Ahora',
    he: 'התחילו היום בחינם',
    ar: 'ابدأ التجربة المجانية الآن'
  },
  watch_demo: {
    en: 'Watch Demo',
    es: 'Ver Demo',
    he: 'לצפייה בסרטון',
    ar: 'شاهد العرض التوضيحي'
  }
};

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

  const getTranslatedContent = (key: keyof typeof translations) => {
    return translations[key][language as keyof (typeof translations)[typeof key]] || content?.[key] || translations[key].en;
  };

  const translatedContent = {
    video_editors: getTranslatedContent('video_editors'),
    main_title: getTranslatedContent('main_title'),
    subtext: getTranslatedContent('subtext'),
    get_started: getTranslatedContent('get_started'),
    watch_demo: getTranslatedContent('watch_demo')
  };

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <TimelineBackground />
      </div>
      
      <div className={`container mx-auto px-4 relative z-50 ${isRTL ? 'rtl' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start">
            <HeroContent 
              translations={translatedContent}
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
