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
    'אחסון: ללא הגבלה',
    'משתמשים: ללא הגבלה',
    'פרויקטים פעילים: ללא הגבלה',
    { text: 'מיתוג מלא', tooltip: 'התאמה מלאה של המיתוג והממשק המשתמש', showTooltip: true },
    'גישת לקוחות: ללא הגבלה',
    { text: 'מנהל חשבון ייעודי', tooltip: 'תמיכה אישית ומקצועית מצוות מומחים', showTooltip: true },
    { text: 'אינטגרציית API', tooltip: 'חיבור והתממשקות עם מערכות חיצוניות', showTooltip: true },
    { text: 'אפשרויות פריסה באתר', tooltip: 'התקנה והטמעה בשרתים פרטיים', showTooltip: true },
    { text: 'תמיכה 24/7 בעדיפות גבוהה', tooltip: 'תמיכה מיידית בכל שעה ובכל יום', showTooltip: true }
  ];

  const englishFeatures = [
    'Storage: Unlimited',
    'Members: Unlimited',
    'Active Projects: Unlimited',
    { text: 'Full White Labeling', tooltip: 'Complete customization of branding and user interface', showTooltip: true },
    'Client Access: Unlimited',
    { text: 'Dedicated Account Manager', tooltip: 'Personal and professional support from expert team', showTooltip: true },
    { text: 'API Integration', tooltip: 'Connect and interface with external systems', showTooltip: true },
    { text: 'On-Premise Deployment Options', tooltip: 'Installation and implementation on private servers', showTooltip: true },
    { text: '24/7 Priority Support', tooltip: 'Immediate support at any time, any day', showTooltip: true }
  ];

  return (
    <Card className={`glass p-4 flex flex-col animate-fade-up delay-600 hover:scale-105 transition-transform duration-300 ${isHebrew ? 'text-right' : ''}`}>
      <PlanIcon Icon={Users} color="secondary" />
      <h3 className="text-xl font-bold mb-1 -mt-2">{isHebrew ? 'אנטרפרייז' : 'Enterprise'}</h3>
      <p className="text-white/70 mb-2 text-sm">
        {isHebrew ? 'פתרונות מותאמים לצוותים גדולים' : 'Custom Solutions for Large Teams'}
      </p>
      <div className="text-2xl font-bold mb-6">
        {isHebrew ? 'צרו קשר לתמחור' : 'Contact Us for Pricing'}
      </div>
      
      <div className="space-y-3 mb-4 flex-grow">
        {(isHebrew ? hebrewFeatures : englishFeatures).slice(0, 4).map((feature, index) => (
          <PlanFeature 
            key={index} 
            text={typeof feature === 'string' ? feature : feature.text}
            tooltip={typeof feature === 'string' ? undefined : feature.tooltip}
            showTooltip={typeof feature === 'string' ? false : feature.showTooltip}
            isRTL={isHebrew}
          />
        ))}

        <div className="my-3 border-t border-white/10 pt-3">
          <p className="text-sm font-medium mb-3">{isHebrew ? 'הכל בסטודיו, בנוסף:' : 'Everything in Studio, plus:'}</p>
          {(isHebrew ? hebrewFeatures : englishFeatures).slice(4).map((feature, index) => (
            <PlanFeature 
              key={`extra-${index}`} 
              text={typeof feature === 'string' ? feature : feature.text}
              tooltip={typeof feature === 'string' ? undefined : feature.tooltip}
              showTooltip={typeof feature === 'string' ? false : feature.showTooltip}
              isRTL={isHebrew}
            />
          ))}
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full border-primary/50 hover:bg-primary/10 transition-all duration-300 mt-8"
        onClick={() => navigate('/auth')}
      >
        {isHebrew ? 'צרו קשר' : 'Contact Sales'}
      </Button>
    </Card>
  );
};