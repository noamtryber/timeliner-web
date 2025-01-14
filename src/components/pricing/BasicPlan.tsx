import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Play } from "lucide-react";
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

interface BasicPlanProps {
  content?: PricingContent;
  video?: Record<string, string>;
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
}

interface Feature {
  text: string;
  tooltip?: string;
  showTooltip?: boolean;
}

export const BasicPlan = ({ content, video, pricingPeriod }: BasicPlanProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isHebrew = language === 'he';
  
  if (!content) return null;

  const basePrice = 29;
  const price = pricingPeriod === 'yearly' 
    ? basePrice * 0.75 
    : pricingPeriod === 'quarterly' 
      ? basePrice * 0.85 
      : basePrice;

  const hebrewFeatures: Feature[] = [
    { text: 'אחסון: 1TB', tooltip: 'אחסון מאובטח בענן עם גיבוי אוטומטי', showTooltip: true },
    { text: 'משתמשים: עד 5', tooltip: 'ניהול צוות עד 5 משתמשים עם הרשאות שונות', showTooltip: true },
    { text: 'פרויקטים פעילים: ללא הגבלה', tooltip: 'עבודה על פרויקטים ללא הגבלה', showTooltip: true },
    { text: 'גישת לקוחות: עד 3 אורחים לפרויקט' },
  ];

  const hebrewExtraFeatures: Feature[] = [
    { text: 'מערכת תשלומים חכמה', tooltip: 'קבלת תשלומים אוטומטית עם אישור הפרויקט', showTooltip: true },
    { text: 'כלי ניהול צוות', tooltip: 'כלים מתקדמים לניהול משימות וזמנים', showTooltip: true },
    { text: 'CRM מובנה ואוטומציות', tooltip: 'מערכת ניהול לקוחות מובנית עם אוטומטיות', showTooltip: true },
    { text: 'בונה תיק עבודות', tooltip: 'כלי מתקדם ליצירת תיק עבודות מקצועי', showTooltip: true },
    { text: 'בריפים אינטראקטיביים לפרויקט', tooltip: 'יצירת בריפים מפורטים עם אפשרות לשיתוף ועריכה', showTooltip: true }
  ];

  const englishFeatures: Feature[] = [
    { text: 'Storage: 1TB', tooltip: 'Secure cloud storage with automatic backup', showTooltip: true },
    { text: 'Members: Up to 5', tooltip: 'Manage a team of up to 5 users with different permissions', showTooltip: true },
    { text: 'Active Projects: Unlimited', tooltip: 'Work on unlimited projects simultaneously', showTooltip: true },
    { text: 'Client Access: Up to 3 Guests per project' },
  ];

  const englishExtraFeatures: Feature[] = [
    { text: 'Smart Payment System', tooltip: 'Automatically receive payments upon project approval', showTooltip: true },
    { text: 'Team Management Tools', tooltip: 'Advanced tools for task and time management', showTooltip: true },
    { text: 'Built-in CRM & Automations', tooltip: 'Integrated customer relationship management with automations', showTooltip: true },
    { text: 'Portfolio Builder', tooltip: 'Advanced tool for creating professional portfolios', showTooltip: true },
    { text: 'Interactive Project Briefs', tooltip: 'Create detailed briefs with sharing and editing capabilities', showTooltip: true }
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
    <Card className={`glass p-3 flex flex-col animate-fade-up delay-400 hover:scale-105 transition-transform duration-300 relative ${isHebrew ? 'text-right' : ''}`}>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary via-accent to-primary px-4 py-1 rounded-full text-sm font-semibold text-white shadow-lg">
        {isHebrew ? 'הכי פופולרי' : 'Most Popular'}
      </div>

      <PlanIcon Icon={Database} color="accent" />
      <h3 className="text-xl font-bold mb-1">{isHebrew ? 'בייסיק' : 'Essentials'}</h3>
      <p className="text-white/70 mb-2 text-xs">{isHebrew ? 'לצוותים קטנים ופרילנסרים' : 'For Small Teams and Freelancers'}</p>
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
          <Button variant="outline" className="w-32 mb-3 border-primary/50 hover:bg-primary/10 text-xs px-2 flex items-center gap-1.5">
            <Play className="w-3 h-3" />
            {isHebrew ? 'למה בייסיק?' : 'Why Essentials?'}
          </Button>
        </DialogTrigger>
        <DialogContent className={`glass ${isHebrew ? 'text-right' : ''}`}>
          <DialogHeader>
            <DialogTitle>{isHebrew ? 'למה בייסיק?' : content.video_title}</DialogTitle>
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
          <PlanFeature key={index} text={feature.text} tooltip={feature.tooltip} showTooltip={feature.showTooltip} isRTL={isHebrew} />
        ))}
        
        <div className="my-3 border-t border-white/10 pt-2">
          <p className="text-sm font-medium mb-2">{isHebrew ? 'הכל בחינמי, בנוסף:' : 'Everything in Free, plus:'}</p>
          {(isHebrew ? hebrewExtraFeatures : englishExtraFeatures).map((feature, index) => (
            <PlanFeature key={`extra-${index}`} text={feature.text} tooltip={feature.tooltip} showTooltip={feature.showTooltip} isRTL={isHebrew} />
          ))}
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-accent to-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40"
        onClick={() => navigate('/signup')}
      >
        {isHebrew ? 'התחילו היום בחינם' : 'Start Free Trial'}
      </Button>
    </Card>
  );
};
