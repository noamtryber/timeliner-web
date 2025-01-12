import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";
import { PricingContent } from "@/hooks/usePricingContent";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface EnterprisePlanProps {
  content?: PricingContent;
}

export const EnterprisePlan = ({ content }: EnterprisePlanProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isHebrew = language === 'he';
  
  if (!content) return null;

  const hebrewFeatures = [
    'חברי צוות ללא הגבלה',
    'פרויקטים פעילים ללא הגבלה',
    'פתרונות אחסון מותאמים אישית',
    'מנהל חשבון ייעודי',
    'תמיכה 24/7 בעדיפות גבוהה',
    'פיתוח אינטגרציות מותאמות אישית',
    'אפשרויות פריסה באתר'
  ];

  return (
    <Card className={`glass p-6 flex flex-col animate-fade-up delay-600 hover:scale-105 transition-transform duration-300 ${isHebrew ? 'text-right' : ''}`}>
      <PlanIcon Icon={Users} color="secondary" />
      <h3 className="text-2xl font-bold mb-2">{isHebrew ? 'אנטרפרייז' : content.title}</h3>
      <p className="text-white/70 mb-6">{isHebrew ? 'פתרונות מותאמים לצוותים גדולים' : content.subtitle}</p>
      <div className="text-3xl font-bold mb-8">
        {isHebrew ? 'עלות: צרו קשר לתמחור' : content.price}
        {!isHebrew && <span className="text-sm font-normal text-white/70 block">{content.price_subtitle}</span>}
      </div>
      
      <div className="space-y-4 mb-8 flex-grow">
        <h4 className="font-semibold">{isHebrew ? 'הכל ב-Pro, בנוסף:' : 'Everything in Pro, plus:'}</h4>
        {(isHebrew ? hebrewFeatures : content.features).map((feature, index) => (
          <PlanFeature key={index} text={feature} isRTL={isHebrew} />
        ))}
      </div>
      
      <Button 
        variant="outline" 
        className="w-full border-primary/50 hover:bg-primary/10 transition-all duration-300"
        onClick={() => navigate('/auth')}
      >
        {content.button_text}
      </Button>
    </Card>
  );
};