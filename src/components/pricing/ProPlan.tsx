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

export const ProPlan = ({ content, video, pricingPeriod }: ProPlanProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isHebrew = language === 'he';
  
  if (!content) return null;

  const basePrice = 49;
  const price = pricingPeriod === 'yearly' 
    ? basePrice * 0.75 
    : pricingPeriod === 'quarterly' 
      ? basePrice * 0.85 
      : basePrice;

  const hebrewFeatures = [
    { text: 'אחסון: 2TB', tooltip: 'אחסון מאובטח בענן עם גיבוי אוטומטי' },
    { text: 'משתמשים: עד 10', tooltip: 'ניהול צוות עד 10 משתמשים עם הרשאות שונות' },
    { text: 'פרויקטים פעילים: 100', tooltip: 'עד 100 פרויקטים במקביל' },
    { text: 'גישת לקוחות: עד 10 אורחים לפרויקט', tooltip: 'שיתוף פעולה עם עד 10 לקוחות בו זמנית לכל פרויקט' },
  ];

  const hebrewExtraFeatures = [
    { text: 'הרשאות ותפקידים מתקדמים', tooltip: 'ניהול הרשאות מתקדם עם תפקידים מותאמים אישית' },
    { text: 'מיתוג מותאם אישית', tooltip: 'התאמה מלאה של המיתוג שלך' },
    { text: 'ניהול צוות ותשלומים מתקדם', tooltip: 'כלים מתקדמים לניהול צוות ותשלומים' },
    { text: 'מצב סוכנות: תזרימי עבודה מותאמים אישית עם תגיות', tooltip: 'ניהול מתקדם של תהליכי עבודה' },
    { text: 'כתוביות ותרגומים מבוססי AI', tooltip: 'יצירה אוטומטית של כתוביות ותרגומים' }
  ];

  const englishFeatures = [
    { text: 'Storage: 2TB', tooltip: 'Secure cloud storage with automatic backup' },
    { text: 'Members: Up to 10', tooltip: 'Manage a team of up to 10 users with different permissions' },
    { text: 'Active Projects: 100', tooltip: 'Work on up to 100 projects simultaneously' },
    { text: 'Client Access: Up to 10 Guests per project', tooltip: 'Collaborate with up to 10 clients simultaneously per project' },
  ];

  const englishExtraFeatures = [
    { text: 'Advanced Roles and Permissions', tooltip: 'Advanced permission management with custom roles' },
    { text: 'Custom Branding', tooltip: 'Full customization of your branding' },
    { text: 'Advanced Team Management & Payments', tooltip: 'Advanced tools for team and payment management' },
    { text: 'Enable Agency Mode: Custom workflows with tags', tooltip: 'Advanced workflow management' },
    { text: 'AI Captions + Translations', tooltip: 'Automatic generation of captions and translations' }
  ];

  const getPeriodTotal = () => {
    switch (pricingPeriod) {
      case 'quarterly':
        return price * 3;
      case 'yearly':
        return price * 12;
      default:
        return price;
    }
  };

  return (
    <Card className={`glass p-3 flex flex-col border-primary animate-fade-up delay-500 hover:scale-105 transition-transform duration-300 ${isHebrew ? 'text-right' : ''}`}>
      <PlanIcon Icon={Crown} color="primary" />
      <h3 className="text-xl font-bold mb-1">{isHebrew ? 'סטודיו' : 'Studio'}</h3>
      <p className="text-white/70 mb-2 text-xs">{isHebrew ? 'לסוכנויות וצוותים בצמיחה' : 'For Growing Agencies and Teams'}</p>
      <div className="text-2xl font-bold mb-2">
        ${price.toFixed(2)}
        {isHebrew ? ' / לחודש' : '/month'}
        {pricingPeriod !== 'monthly' && (
          <span className="block text-sm text-primary mt-1">
            ${getPeriodTotal().toFixed(2)} {isHebrew ? `לתשלום ${pricingPeriod === 'quarterly' ? 'רבעוני' : 'שנתי'}` : `billed ${pricingPeriod}`}
          </span>
        )}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full mb-3 border-primary/50 hover:bg-primary/10 text-xs text-right">
            <Play className="w-3 h-3 mr-2" />
            {isHebrew ? 'למה סטודיו?' : 'Why Studio?'}
          </Button>
        </DialogTrigger>
        <DialogContent className={`glass ${isHebrew ? 'text-right' : ''}`}>
          <DialogHeader>
            <DialogTitle>{isHebrew ? 'למה סטודיו?' : content.video_title}</DialogTitle>
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
        {(isHebrew ? hebrewFeatures : englishFeatures).map((feature, index) => (
          <PlanFeature key={index} text={feature.text} tooltip={feature.tooltip} isRTL={isHebrew} />
        ))}
        
        <div className="my-3 border-t border-white/10 pt-2">
          <p className="text-sm font-medium mb-2">{isHebrew ? 'הכל בבייסיק, בנוסף:' : 'Everything in Essentials, plus:'}</p>
          {(isHebrew ? hebrewExtraFeatures : englishExtraFeatures).map((feature, index) => (
            <PlanFeature key={`extra-${index}`} text={feature.text} tooltip={feature.tooltip} isRTL={isHebrew} />
          ))}
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40"
        onClick={() => navigate('/signup')}
      >
        {isHebrew ? 'התחילו היום בחינם' : 'Start Free Trial'}
      </Button>
    </Card>
  );
};
