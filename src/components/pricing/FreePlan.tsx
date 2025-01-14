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
    { text: 'אחסון: 3GB', tooltip: 'אחסון בסיסי בענן' },
    { text: 'משתמשים: 1', tooltip: 'חשבון אישי אחד' },
    { text: 'פרויקטים פעילים: 2', tooltip: 'עד 2 פרויקטים במקביל' },
    { text: 'גישת לקוחות: אורח אחד לפרויקט', tooltip: 'שיתוף פעולה עם לקוח אחד לכל פרויקט' },
    { text: 'מעקב גרסאות חכם: הערות מבוססות זמן', tooltip: 'מעקב אחר שינויים עם הערות מדויקות לפי זמן' },
    { text: 'פורטל לקוחות פשוט: קישור אחד למשוב', tooltip: 'פורטל פשוט לשיתוף ומשוב' },
    { text: 'אחסון מדיה מאובטח', tooltip: 'אחסון מאובטח של קבצי מדיה' }
  ];

  const englishFeatures = [
    { text: 'Storage: 3GB', tooltip: 'Basic cloud storage' },
    { text: 'Members: 1', tooltip: 'Single personal account' },
    { text: 'Active Projects: 2', tooltip: 'Work on up to 2 projects simultaneously' },
    { text: 'Client Access: 1 Guest Per Project', tooltip: 'Collaborate with one client per project' },
    { text: 'Smart Revision Tracking: Timecode based comments', tooltip: 'Track changes with precise timecode-based comments' },
    { text: 'Simple Client Portals: One link for feedback', tooltip: 'Simple portal for sharing and feedback' },
    { text: 'Secure Media Storage', tooltip: 'Secure storage for media files' }
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
          <PlanFeature key={index} text={feature.text} tooltip={feature.tooltip} isRTL={isHebrew} />
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
