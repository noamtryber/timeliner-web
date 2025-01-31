import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";
import { PricingContent } from "@/hooks/usePricingContent";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProPlanProps {
  content?: PricingContent;
  video?: Record<string, string>;
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
}

interface Feature {
  text: string;
  tooltip?: string;
  showTooltip?: boolean;
}

export const ProPlan = ({ content, video, pricingPeriod }: ProPlanProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';
  
  if (!content) return null;

  const handleSignupClick = () => {
    const prefix = language === 'en' ? '' : `/${language}`;
    navigate(`${prefix}/signup`);
  };

  const basePrice = 49;
  const price = pricingPeriod === 'yearly' 
    ? basePrice * 0.75 
    : pricingPeriod === 'quarterly' 
      ? basePrice * 0.85 
      : basePrice;

  const hebrewFeatures: Feature[] = [
    { text: 'אחסון: 2TB', tooltip: 'אחסון מאובטח בענן עם גיבוי אוטומטי', showTooltip: true },
    { text: 'משתמשים: עד 30', tooltip: 'ניהול צוות של עד 30 משתמשים עם הרשאות שונות', showTooltip: true },
    { text: 'פרויקטים פעילים: ללא הגבלה', tooltip: 'עבודה על פרויקטים ללא הגבלה במקביל', showTooltip: true },
    { text: 'גישת לקוחות: 10 אורחים לפרויקט', tooltip: 'שיתוף פעולה עם 10 לקוחות במקביל לכל פרויקט', showTooltip: true }
  ];

  const hebrewExtraFeatures: Feature[] = [
    { text: 'ניתוח פרויקטים מתקדם', tooltip: 'מדדים מפורטים ודוחות מותאמים אישית', showTooltip: true },
    { text: 'אינטגרציה עם כלים חיצוניים', tooltip: 'התחבר לכלים המועדפים עליך', showTooltip: true },
    { text: 'תמיכה מועדפת 24/7', tooltip: 'סיוע טכני ייעודי', showTooltip: true }
  ];

  const arabicFeatures: Feature[] = [
    { text: 'التخزين: 2TB', tooltip: 'تخزين آمن على السحابة مع نسخ احتياطي تلقائي', showTooltip: true },
    { text: 'الأعضاء: حتى 30', tooltip: 'إدارة فريق يصل إلى 30 مستخدم بأذونات مختلفة', showTooltip: true },
    { text: 'المشاريع النشطة: غير محدود', tooltip: 'العمل على مشاريع غير محدودة في وقت واحد', showTooltip: true },
    { text: 'وصول العملاء: 10 ضيوف لكل مشروع', tooltip: 'التعاون مع 10 عملاء في وقت واحد لكل مشروع', showTooltip: true }
  ];

  const arabicExtraFeatures: Feature[] = [
    { text: 'تحليلات المشروع المتقدمة', tooltip: 'مقاييس مفصلة وتقارير مخصصة', showTooltip: true },
    { text: 'تكامل مع الأدوات الخارجية', tooltip: 'اتصل بأدواتك المفضلة', showTooltip: true },
    { text: 'دعم متميز 24/7', tooltip: 'مساعدة تقنية مخصصة', showTooltip: true }
  ];

  const englishFeatures: Feature[] = [
    { text: 'Storage: 2TB', tooltip: 'Secure cloud storage with automatic backup', showTooltip: true },
    { text: 'Members: Up to 30', tooltip: 'Manage a team of up to 30 users with different permissions', showTooltip: true },
    { text: 'Active Projects: Unlimited', tooltip: 'Work on unlimited projects simultaneously', showTooltip: true },
    { text: 'Client Access: 10 Guests per project', tooltip: 'Collaborate with 10 clients simultaneously per project', showTooltip: true }
  ];

  const englishExtraFeatures: Feature[] = [
    { text: 'Advanced project analytics', tooltip: 'Detailed metrics and custom reports', showTooltip: true },
    { text: 'External tools integration', tooltip: 'Connect with your favorite tools', showTooltip: true },
    { text: 'Priority 24/7 support', tooltip: 'Dedicated technical assistance', showTooltip: true }
  ];

  const getFeatures = () => {
    switch (language) {
      case 'he':
        return hebrewFeatures;
      case 'ar':
        return arabicFeatures;
      default:
        return englishFeatures;
    }
  };

  const getExtraFeatures = () => {
    switch (language) {
      case 'he':
        return hebrewExtraFeatures;
      case 'ar':
        return arabicExtraFeatures;
      default:
        return englishExtraFeatures;
    }
  };

  const getTitle = () => {
    switch (language) {
      case 'he':
        return 'פרו';
      case 'ar':
        return 'الاحترافي';
      default:
        return 'Studio';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'he':
        return 'לסוכנויות וצוותים בצמיחה';
      case 'ar':
        return 'للوكالات والفرق النامية';
      default:
        return 'For Growing Agencies and Teams';
    }
  };

  const getButtonText = () => {
    switch (language) {
      case 'he':
        return 'התחילו היום בחינם';
      case 'ar':
        return 'ابدأ النسخة التجريبية المجانية';
      default:
        return 'Start Free Trial';
    }
  };

  const getWhyButtonText = () => {
    switch (language) {
      case 'he':
        return 'למה פרו?';
      case 'ar':
        return 'لماذا الاحترافي؟';
      default:
        return 'Why Studio?';
    }
  };

  const getEverythingInText = () => {
    switch (language) {
      case 'he':
        return 'הכל בבייסיק, בנוסף:';
      case 'ar':
        return 'كل شيء في الأساسي، بالإضافة إلى:';
      default:
        return 'Everything in Essentials, plus:';
    }
  };

  return (
    <Card className={`relative border border-[#2A2F3C] bg-gradient-to-b from-[#1A1F2C]/50 to-[#1A1F2C] p-3 flex flex-col animate-fade-up delay-500 hover:scale-105 transition-transform duration-300 ${isRTL ? 'text-right' : ''}`}>
      <PlanIcon Icon={Crown} color="primary" />
      <h3 className="text-xl font-bold mb-1">{getTitle()}</h3>
      <p className="text-white/70 mb-2">
        {getSubtitle()}
      </p>
      <div className="text-2xl font-bold mb-2">
        ${price.toFixed(2)}
        <span className="text-base font-normal">
          {language === 'he' ? '/ לחודש' : language === 'ar' ? '/شهر' : '/month'}
        </span>
        {pricingPeriod !== 'monthly' && (
          <span className="block text-sm text-primary mt-1">
            ${(price * (pricingPeriod === 'yearly' ? 12 : 3)).toFixed(2)} {
              language === 'he'
                ? `לתשלום ${pricingPeriod === 'quarterly' ? 'רבעוני' : 'שנתי'}`
                : language === 'ar'
                  ? `مدفوع ${pricingPeriod === 'quarterly' ? 'ربع سنوي' : 'سنوي'}`
                  : `billed ${pricingPeriod}`
            }
          </span>
        )}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-32 mb-3 border-primary/50 hover:bg-primary/10 text-xs px-2 flex items-center gap-1.5">
            <Play className="w-3 h-3" />
            {getWhyButtonText()}
          </Button>
        </DialogTrigger>
        <DialogContent className={`glass ${isRTL ? 'text-right' : ''}`}>
          <DialogHeader>
            <DialogTitle>{getWhyButtonText()}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {video?.preview ? (
              <div className="aspect-video">
                <iframe
                  src={video.preview}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video bg-card/50 rounded-lg flex items-center justify-center">
                <Play className="w-12 h-12 text-primary animate-pulse" />
              </div>
            )}
            <p className="text-white/70 text-sm">
              {content.video_description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="space-y-1.5 mb-2 flex-grow">
        {getFeatures().map((feature, index) => (
          <PlanFeature key={index} text={feature.text} tooltip={feature.tooltip} showTooltip={feature.showTooltip} isRTL={isRTL} />
        ))}
        
        <div className="my-3 border-t border-white/10 pt-2">
          <p className="text-sm font-medium mb-2">{getEverythingInText()}</p>
          {getExtraFeatures().map((feature, index) => (
            <PlanFeature key={`extra-${index}`} text={feature.text} tooltip={feature.tooltip} showTooltip={feature.showTooltip} isRTL={isRTL} />
          ))}
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 mt-8"
        onClick={handleSignupClick}
      >
        {getButtonText()}
      </Button>
    </Card>
  );
};