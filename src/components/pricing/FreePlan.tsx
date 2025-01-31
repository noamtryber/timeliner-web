import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";
import { PricingContent } from "@/hooks/usePricingContent";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface FreePlanProps {
  content?: PricingContent;
}

export const FreePlan = ({ content }: FreePlanProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';
  
  if (!content) return null;

  const handleSignupClick = () => {
    const prefix = language === 'en' ? '' : `/${language}`;
    navigate(`${prefix}/signup`);
  };

  const spanishFeatures = [
    { text: 'Almacenamiento: 3GB', tooltip: 'Almacenamiento básico en la nube' },
    { text: 'Miembros: 1', tooltip: 'Una cuenta personal' },
    { text: 'Proyectos Activos: 2', tooltip: 'Trabaja en hasta 2 proyectos simultáneamente' },
    { text: 'Acceso de Clientes: 1 Invitado Por Proyecto', tooltip: 'Colabora con un cliente por proyecto', showTooltip: true },
    { text: 'Seguimiento Inteligente de Revisiones', tooltip: 'Deja comentarios precisos con marcas de tiempo' },
    { text: 'Portales de Cliente Simples', tooltip: 'Portal simple para compartir y recibir feedback', showTooltip: true },
    { text: 'Almacenamiento Seguro de Medios', tooltip: 'Almacenamiento seguro para archivos multimedia' }
  ];

  const hebrewFeatures = [
    { text: 'אחסון: 3GB', tooltip: 'אחסון בסיסי בענן' },
    { text: 'משתמשים: 1', tooltip: 'חשבון אישי אחד' },
    { text: 'פרויקטים פעילים: 2', tooltip: 'עד 2 פרויקטים במקביל' },
    { text: 'גישת לקוחות: אורח אחד לפרויקט', tooltip: 'שיתוף פעולה עם לקוח אחד לכל פרויקט', showTooltip: true },
    { text: 'מעקב גרסאות חכם', tooltip: 'מעקב אחר שינויים עם הערות מדויקות לפי זמן' },
    { text: 'פורטל לקוחות פשוט', tooltip: 'פורטל פשוט לשיתוף ומשוב', showTooltip: true },
    { text: 'אחסון מדיה מאובטח', tooltip: 'אחסון מאובטח של קבצי מדיה' }
  ];

  const arabicFeatures = [
    { text: 'التخزين: 3GB', tooltip: 'تخزين أساسي على السحابة' },
    { text: 'الأعضاء: 1', tooltip: 'حساب شخصي واحد' },
    { text: 'المشاريع النشطة: 2', tooltip: 'العمل على مشروعين في وقت واحد' },
    { text: 'وصول العملاء: ضيف واحد لكل مشروع', tooltip: 'التعاون مع عميل واحد لكل مشروع', showTooltip: true },
    { text: 'تتبع ذكي للمراجعات', tooltip: 'اترك ملاحظات دقيقة مع تعليقات مرتبطة بالوقت' },
    { text: 'بوابات عملاء بسيطة', tooltip: 'بوابة بسيطة للمشاركة والتعليقات', showTooltip: true },
    { text: 'تخزين آمن للوسائط', tooltip: 'تخزين آمن لملفات الوسائط' }
  ];

  const englishFeatures = [
    { text: 'Storage: 3GB', tooltip: 'Basic cloud storage' },
    { text: 'Members: 1', tooltip: 'Single personal account' },
    { text: 'Active Projects: 2', tooltip: 'Work on up to 2 projects simultaneously' },
    { text: 'Client Access: 1 Guest Per Project', tooltip: 'Collaborate with one client per project', showTooltip: true },
    { text: 'Smart Revision Tracking', tooltip: 'Leave precise feedback with timecode-based comments' },
    { text: 'Simple Client Portals', tooltip: 'Simple portal for sharing and feedback', showTooltip: true },
    { text: 'Secure Media Storage', tooltip: 'Secure storage for media files' }
  ];

  const getFeatures = () => {
    switch (language) {
      case 'es':
        return spanishFeatures;
      case 'he':
        return hebrewFeatures;
      case 'ar':
        return arabicFeatures;
      default:
        return englishFeatures;
    }
  };

  const getTitle = () => {
    switch (language) {
      case 'es':
        return 'Gratis';
      case 'he':
        return 'חינמי';
      case 'ar':
        return 'مجاني';
      default:
        return 'Free';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'es':
        return 'Perfecto para Comenzar';
      case 'he':
        return 'מושלם להתחלה';
      case 'ar':
        return 'مثالي للبدء';
      default:
        return 'Perfect for Getting Started';
    }
  };

  const getButtonText = () => {
    switch (language) {
      case 'es':
        return 'Comenzar Gratis';
      case 'he':
        return 'התחילו היום בחינם';
      case 'ar':
        return 'ابدأ مجانًا';
      default:
        return 'Get Started Free';
    }
  };
  
  return (
    <Card className={`relative border border-[#2A2F3C] bg-gradient-to-b from-[#1A1F2C]/50 to-[#1A1F2C] p-4 flex flex-col animate-fade-up delay-300 hover:scale-105 transition-transform duration-300 ${isRTL ? 'text-right' : ''}`}>
      <PlanIcon Icon={Zap} color="accent" />
      <h3 className="text-xl font-bold mb-1 -mt-2">{getTitle()}</h3>
      <p className="text-white/70 mb-2 text-sm">{getSubtitle()}</p>
      <div className="text-2xl font-bold mb-6">
        $0
        <span className="text-sm font-normal">
          {language === 'he' ? '/ לחודש' : language === 'ar' ? '/شهر' : language === 'es' ? '/mes' : '/month'}
        </span>
      </div>
      
      <div className="space-y-3 mb-4 flex-grow">
        {getFeatures().map((feature, index) => (
          <PlanFeature 
            key={index} 
            text={feature.text}
            tooltip={feature.tooltip}
            showTooltip={feature.showTooltip}
            isRTL={isRTL}
          />
        ))}
      </div>
      
      <Button 
        variant="outline" 
        className="w-full border-primary/50 hover:bg-primary/10 transition-all duration-300 mt-8"
        onClick={handleSignupClick}
      >
        {getButtonText()}
      </Button>
    </Card>
  );
};
