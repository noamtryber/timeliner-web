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
    en: 'VIDEO EDITORS & AGENCIES:',
    es: 'EDITORES DE VIDEO Y AGENCIAS:',
    he: 'עורכי וידאו וסוכנויות:'
  },
  main_title: {
    en: 'Streamline Video Projects with All-in-One Management',
    es: 'Optimiza Proyectos de Video con Gestión Todo en Uno',
    he: 'ניהול פרויקטי וידאו בפלטפורמה אחת מאוחדת'
  },
  subtext: {
    en: 'Project Management, Revisions, Payments, Expectations, Storage, and AI Tools — Everything You Need in One Place.',
    es: 'Gestión de Proyectos, Revisiones, Pagos, Expectativas, Almacenamiento y Herramientas de IA — Todo lo que Necesitas en Un Solo Lugar.',
    he: 'ניהול פרויקטים, תיקונים, תשלומים, ציפיות, אחסון וכלי בינה מלאכותית — הכל במקום אחד.'
  },
  get_started: {
    en: 'Get Started',
    es: 'Empezar Ahora',
    he: 'התחילו היום בחינם'
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
    watch_demo: getTranslatedContent('watch_demo'),
    faster_revisions: getTranslatedContent('faster_revisions'),
    increase_income: getTranslatedContent('increase_income'),
    client_retention: getTranslatedContent('client_retention'),
    demo_title: getTranslatedContent('demo_title'),
    demo_description: getTranslatedContent('demo_description')
  };

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <TimelineBackground />
      </div>
      
      <div className={`container mx-auto px-4 relative z-50 ${isRTL ? 'rtl' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent 
            translations={translatedContent}
            onWatchDemo={() => setShowDemo(true)}
            isMobile={isMobile}
          />
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