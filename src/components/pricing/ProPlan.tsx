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
    'אחסון: 2TB',
    'משתמשים: עד 10',
    'פרויקטים פעילים: 100',
    'גישת לקוחות: עד 10 אורחים לפרויקט',
    'מיתוג מותאם אישית',
    'אוטומציה של תהליכי אישור',
    'ספריית רפרנסים לסגנונות עריכה',
    'כלים שיתופיים מתקדמים',
    'כתוביות ותרגומים מבוססי AI'
  ];

  const englishFeatures = [
    'Storage: 2TB',
    'Members: Up to 10',
    'Active Projects: 100',
    'Client Access: Up to 10 Guests per project',
    'Custom Branding',
    'Approval Workflow Automation',
    'Reference Library for Editing Styles',
    'Advanced Team Management & Payments',
    'AI Captions + Translations'
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
    <Card className={`glass p-4 flex flex-col border-primary animate-fade-up delay-500 hover:scale-105 transition-transform duration-300 ${isHebrew ? 'text-right' : ''}`}>
      <PlanIcon Icon={Crown} color="primary" />
      <h3 className="text-xl font-bold mb-1">{isHebrew ? 'סטודיו' : 'Studio'}</h3>
      <p className="text-white/70 mb-2 text-sm">{isHebrew ? 'לסוכנויות וצוותים בצמיחה' : 'For Growing Agencies and Teams'}</p>
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
          <Button variant="outline" className="w-full mb-4 border-primary/50 hover:bg-primary/10 text-sm">
            <Play className="w-3 h-3 mr-2" />
            {isHebrew ? 'למה סטודיו?' : content.video_title}
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
      
      <div className="space-y-2 mb-4 flex-grow">
        <h4 className="font-semibold text-sm">{isHebrew ? 'הכל בבייסיק, בנוסף:' : 'Everything in Essentials, plus:'}</h4>
        {(isHebrew ? hebrewFeatures : englishFeatures).map((feature, index) => (
          <PlanFeature key={index} text={feature} isRTL={isHebrew} />
        ))}
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