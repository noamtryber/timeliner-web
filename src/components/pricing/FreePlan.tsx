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
    'חשבון אדמין אחד',
    '2 פרויקטים פעילים',
    '2GB אחסון',
    'גישה ללקוחות – אורח אחד לכל פרויקט',
    'תבניות פרויקטים בסיסיות',
    'תהליך עבודה בסיסי (עריכה, תיקון, אישור)',
    'תמיכה בקהילה'
  ];

  return (
    <Card className={`glass p-6 flex flex-col animate-fade-up delay-300 hover:scale-105 transition-transform duration-300 ${isHebrew ? 'text-right' : ''}`}>
      <PlanIcon Icon={Zap} color="accent" />
      <h3 className="text-2xl font-bold mb-2">{isHebrew ? 'חינמי' : content.title}</h3>
      <p className="text-white/70 mb-6">{isHebrew ? 'למתחילים או לפרויקטים קטנים' : content.subtitle}</p>
      <div className="text-3xl font-bold mb-8">
        {isHebrew ? '$0 / לחודש' : `$${content.price}`}
        {!isHebrew && <span className="text-sm font-normal text-white/70">/month</span>}
      </div>
      
      <div className="space-y-4 mb-8 flex-grow">
        <h4 className="font-semibold">{isHebrew ? 'פיצ\'רים עיקריים:' : 'Core Features:'}</h4>
        {(isHebrew ? hebrewFeatures : content.features).map((feature, index) => (
          <PlanFeature key={index} text={feature} isRTL={isHebrew} />
        ))}
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-accent/80 to-accent hover:opacity-90 transition-all duration-300"
        onClick={() => navigate('/auth')}
      >
        {isHebrew ? 'התחילו היום בחינם' : content.button_text}
      </Button>
    </Card>
  );
};