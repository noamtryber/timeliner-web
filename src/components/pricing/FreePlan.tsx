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
    'חשבון אישי אחד',
    '2 פרויקטים פעילים',
    '3GB אחסון',
    'ניהול פרויקטים בסיסי',
    'ניהול משימות בסיסי',
    'תבניות בסיסיות',
    'תמיכה בקהילה'
  ];

  const englishFeatures = [
    '1 Personal Account',
    '2 Active Projects',
    '3GB Storage',
    'Basic Project Management',
    'Basic Task Management',
    'Basic Templates',
    'Community Support'
  ];

  return (
    <Card className={`glass p-6 flex flex-col animate-fade-up delay-300 hover:scale-105 transition-transform duration-300 ${isHebrew ? 'text-right' : ''}`}>
      <PlanIcon Icon={Zap} color="accent" />
      <h3 className="text-2xl font-bold mb-2">{isHebrew ? 'חינמי' : 'Free'}</h3>
      <p className="text-white/70 mb-6">{isHebrew ? 'מושלם להתחלה' : 'Perfect for Getting Started'}</p>
      <div className="text-3xl font-bold mb-8">
        {isHebrew ? '$0 / לחודש' : '$0/month'}
      </div>
      
      <div className="space-y-4 mb-8 flex-grow">
        <h4 className="font-semibold">{isHebrew ? 'פיצ\'רים:' : 'Features:'}</h4>
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