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
  const isHebrew = language === 'he';
  
  if (!content) return null;

  const hebrewFeatures = [
    'אחסון: 3GB',
    'משתמשים: 1',
    'פרויקטים פעילים: 2',
    'גישת לקוחות: אורח אחד לפרויקט',
    'מעקב גרסאות חכם: הערות מבוססות זמן',
    'פורטל לקוחות פשוט: קישור אחד למשוב ואישורים',
    'אחסון מדיה מאובטח'
  ];

  const englishFeatures = [
    'Storage: 3GB',
    'Members: 1',
    'Active Projects: 2',
    'Client Access: 1 Guest Per Project',
    'Smart Revision Tracking: Timecode based comments',
    'Simple Client Portals: One link for feedback',
    'Secure Media Storage'
  ];

  return (
    <Card className={`glass p-4 flex flex-col animate-fade-up delay-300 hover:scale-105 transition-transform duration-300 ${isHebrew ? 'text-right' : ''}`}>
      <PlanIcon Icon={Zap} color="accent" />
      <h3 className="text-xl font-bold mb-1">{isHebrew ? 'חינמי' : 'Free'}</h3>
      <p className="text-white/70 mb-2 text-sm">{isHebrew ? 'מושלם להתחלה' : 'Perfect for Getting Started'}</p>
      <div className="text-2xl font-bold mb-4">
        {isHebrew ? '$0 / לחודש' : '$0/month'}
      </div>
      
      <div className="space-y-2 mb-4 flex-grow">
        <h4 className="font-semibold text-sm">{isHebrew ? 'פיצ\'רים:' : 'Features:'}</h4>
        {(isHebrew ? hebrewFeatures : englishFeatures).map((feature, index) => (
          <PlanFeature key={index} text={feature} isRTL={isHebrew} />
        ))}
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-accent/80 to-accent hover:opacity-90 transition-all duration-300"
        onClick={() => navigate('/signup')}
      >
        {isHebrew ? 'התחילו היום בחינם' : 'Get Started Free'}
      </Button>
    </Card>
  );
};