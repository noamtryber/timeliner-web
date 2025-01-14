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
    'אינטגרציית API לתהליכי עבודה מותאמים אישית',
    'אפשרויות פריסה באתר',
    'תמיכה 24/7 בעדיפות גבוהה'
  ];

  const englishFeatures = [
    'Unlimited Team Members',
    'Unlimited Active Projects',
    'Custom Storage Solutions',
    'Dedicated Account Manager',
    'API Integration for Custom Workflows',
    'On-Premise Deployment Options',
    '24/7 Priority Support'
  ];

  return (
    <Card className={`glass p-6 flex flex-col animate-fade-up delay-600 hover:scale-105 transition-transform duration-300 ${isHebrew ? 'text-right' : ''}`}>
      <PlanIcon Icon={Users} color="secondary" />
      <h3 className="text-2xl font-bold mb-2">{isHebrew ? 'אנטרפרייז' : 'Enterprise'}</h3>
      <p className="text-white/70 mb-6">
        {isHebrew ? 'פתרונות מותאמים לצוותים גדולים' : 'Custom Solutions for Large Teams'}
      </p>
      <div className="text-3xl font-bold mb-8">
        {isHebrew ? 'צרו קשר לתמחור' : 'Contact Us for Pricing'}
      </div>
      
      <div className="space-y-4 mb-8 flex-grow">
        <h4 className="font-semibold">{isHebrew ? 'הכל בסטודיו, בנוסף:' : 'Everything in Studio, plus:'}</h4>
        {(isHebrew ? hebrewFeatures : englishFeatures).map((feature, index) => (
          <PlanFeature key={index} text={feature} isRTL={isHebrew} />
        ))}
      </div>
      
      <Button 
        variant="outline" 
        className="w-full border-primary/50 hover:bg-primary/10 transition-all duration-300"
        onClick={() => navigate('/auth')}
      >
        {isHebrew ? 'צרו קשר' : 'Contact Sales'}
      </Button>
    </Card>
  );
};