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

  const getFeatures = () => {
    if (language === 'ar') {
      return [
        { text: 'التخزين: 3GB', tooltip: 'تخزين أساسي على السحابة' },
        { text: 'الأعضاء: 1', tooltip: 'حساب شخصي واحد' },
        { text: 'المشاريع النشطة: 2', tooltip: 'العمل على مشروعين في وقت واحد' },
        { text: 'وصول العملاء: ضيف واحد لكل مشروع', tooltip: 'التعاون مع عميل واحد لكل مشروع', showTooltip: true },
        { text: 'تتبع ذكي للمراجعات', tooltip: 'اترك ملاحظات دقيقة مع تعليقات مرتبطة بالوقت، ارسم مباشرة على الإطارات، وأضف مذكرات صوتية. قارن الإصدارات جنبًا إلى جنب.' },
        { text: 'بوابات عملاء بسيطة', tooltip: 'بوابة بسيطة للمشاركة والتعليقات', showTooltip: true },
        { text: 'تخزين آمن للوسائط', tooltip: 'تخزين آمن لملفات الوسائط' }
      ];
    }

    return [
      { text: isHebrew ? 'אחסון: 3GB' : 'Storage: 3GB', tooltip: isHebrew ? 'אחסון בסיסי בענן' : 'Basic cloud storage' },
      { text: isHebrew ? 'משתמשים: 1' : 'Members: 1', tooltip: isHebrew ? 'חשבון אישי אחד' : 'Single personal account' },
      { text: isHebrew ? 'פרויקטים פעילים: 2' : 'Active Projects: 2', tooltip: isHebrew ? 'עד 2 פרויקטים במקביל' : 'Work on up to 2 projects simultaneously' },
      { text: isHebrew ? 'גישת לקוחות: אורח אחד לפרויקט' : 'Client Access: 1 Guest Per Project', tooltip: isHebrew ? 'שיתוף פעולה עם לקוח אחד לכל פרויקט' : 'Collaborate with one client per project', showTooltip: true },
      { text: isHebrew ? 'מעקב גרסאות חכם' : 'Smart Revision Tracking', tooltip: isHebrew ? 'מעקב אחר שינויים עם הערות מדויקות לפי זמן' : 'Leave precise feedback with timecode-based comments, draw directly on frames, and add voice memos. Compare versions side by side with split-screen mode.' },
      { text: isHebrew ? 'פורטל לקוחות פשוט' : 'Simple Client Portals', tooltip: isHebrew ? 'פורטל פשוט לשיתוף ומשוב' : 'Simple portal for sharing and feedback', showTooltip: true },
      { text: isHebrew ? 'אחסון מדיה מאובטח' : 'Secure Media Storage', tooltip: isHebrew ? 'אחסון מאובטח של קבצי מדיה' : 'Secure storage for media files' }
    ];
  };

  const getTitle = () => {
    switch (language) {
      case 'ar':
        return 'مجاني';
      case 'es':
        return 'Gratis';
      case 'he':
        return 'חינמי';
      default:
        return 'Free';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'ar':
        return 'مثالي للبدء';
      case 'es':
        return 'Perfecto para Comenzar';
      case 'he':
        return 'מושלם להתחלה';
      default:
        return 'Perfect for Getting Started';
    }
  };

  const getButtonText = () => {
    switch (language) {
      case 'ar':
        return 'ابدأ مجانًا';
      case 'es':
        return 'Comenzar Gratis';
      case 'he':
        return 'התחילו היום בחינם';
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
        {isRTL ? '$0' : language === 'es' ? '$0' : '$0'}
        <span className="text-sm font-normal">
          {language === 'ar' ? '/شهر' : language === 'es' ? '/mes' : isRTL ? '/ לחודש' : '/month'}
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