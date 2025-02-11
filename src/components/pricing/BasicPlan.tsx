
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
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { PricingPlan } from "@/hooks/usePricingData";

interface BasicPlanProps {
  planData?: PricingPlan;
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
  calculatePrice: (basePrice: number | null) => number | null;
}

export const BasicPlan = ({ planData, pricingPeriod, calculatePrice }: BasicPlanProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';
  
  if (!planData) return null;

  const price = calculatePrice(planData.base_price);
  const storageInTB = (planData.base_storage || 0) / 1024;

  const handleSignupClick = () => {
    const prefix = language === 'en' ? '' : `/${language}`;
    navigate(`${prefix}/signup`);
  };

  const getTitle = () => {
    return planData.title;
  };

  const getSubtitle = () => {
    return planData.subtitle;
  };

  const getPopularLabel = () => {
    switch (language) {
      case 'he':
        return 'הכי פופולרי';
      case 'ar':
        return 'الأكثر شعبية';
      case 'es':
        return 'Más Popular';
      default:
        return 'Most Popular';
    }
  };

  const getWhyButtonText = () => {
    switch (language) {
      case 'he':
        return 'למה בייסיק?';
      case 'ar':
        return 'لماذا الأساسي؟';
      case 'es':
        return '¿Por qué Básico?';
      default:
        return 'Why Essentials?';
    }
  };

  const getTrialButtonText = () => {
    switch (language) {
      case 'he':
        return 'התחילו היום בחינם';
      case 'ar':
        return 'ابدأ النسخة التجريبية المجانية';
      case 'es':
        return 'Comenzar Prueba Gratis';
      default:
        return 'Start Free Trial';
    }
  };

  const getEverythingInFreeText = () => {
    switch (language) {
      case 'he':
        return 'הכל בחינמי, בנוסף:';
      case 'ar':
        return 'كل شيء في المجاني، بالإضافة إلى:';
      case 'es':
        return 'Todo en Gratis, más:';
      default:
        return 'Everything in Free, plus:';
    }
  };

  return (
    <Card className={`relative border border-[#2A2F3C] bg-gradient-to-b from-[#1A1F2C]/50 to-[#1A1F2C] p-3 flex flex-col animate-fade-up delay-400 hover:scale-105 transition-transform duration-300 relative ${isRTL ? 'text-right' : ''}`}>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary via-accent to-primary px-4 py-1 rounded-full text-sm font-semibold text-white shadow-lg">
        {getPopularLabel()}
      </div>

      <PlanIcon Icon={Database} color="accent" />
      <h3 className="text-xl font-bold mb-1">{getTitle()}</h3>
      <p className="text-white/70 mb-2 text-[0.927rem]">{getSubtitle()}</p>
      
      {price && (
        <div className="text-2xl font-bold mb-2">
          ${price.toFixed(2)}
          <span className="text-base font-normal">
            {language === 'he' ? '/ לחודש' : language === 'ar' ? '/شهر' : language === 'es' ? '/mes' : '/month'}
          </span>
          {pricingPeriod !== 'monthly' && (
            <span className="block text-sm text-primary mt-1">
              ${(price * (pricingPeriod === 'yearly' ? 12 : 3)).toFixed(2)} {
                language === 'he'
                  ? `לתשלום ${pricingPeriod === 'quarterly' ? 'רבעוני' : 'שנתי'}`
                  : language === 'ar'
                    ? `مدفوع ${pricingPeriod === 'quarterly' ? 'ربع سنوي' : 'سنوي'}`
                    : language === 'es'
                      ? `facturado ${pricingPeriod === 'quarterly' ? 'trimestralmente' : 'anualmente'}`
                      : `billed ${pricingPeriod}`
              }
            </span>
          )}
        </div>
      )}

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-32 mb-3 border-primary/50 hover:bg-primary/10 text-xs px-2 flex items-center gap-1.5">
            <Play className="w-3 h-3" />
            {getWhyButtonText()}
          </Button>
        </DialogTrigger>
        <DialogContent className={`glass ${isRTL ? 'text-right' : ''}`}>
          <DialogHeader>
            <DialogTitle>{getWhyButtonText()}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="aspect-video bg-card/50 rounded-lg flex items-center justify-center">
              <Play className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <p className="text-white/70 text-sm">
              {planData.features.find(f => f.feature_key === 'video_description')?.feature_value || ''}
            </p>
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="space-y-1.5 mb-2 flex-grow">
        {/* Core features */}
        <PlanFeature 
          text={`${storageInTB}TB Storage`}
          tooltip="Secure cloud storage with automatic backup"
          showTooltip
          isRTL={isRTL} 
        />
        <PlanFeature 
          text={`${planData.base_members} Team Members`}
          tooltip="Manage team members with different permissions"
          showTooltip
          isRTL={isRTL}
        />
        {planData.max_client_guests && (
          <PlanFeature 
            text={`${planData.max_client_guests} Client Guests per project`}
            tooltip="Limited access for external stakeholders"
            showTooltip
            isRTL={isRTL}
          />
        )}
        
        {/* Additional features */}
        <div className="my-3 border-t border-white/10 pt-2">
          <p className="text-sm font-medium mb-2">{getEverythingInFreeText()}</p>
          {planData.features.map((feature, index) => (
            <PlanFeature 
              key={`${feature.feature_key}-${index}`}
              text={feature.feature_value}
              tooltip={feature.feature_tooltip || undefined}
              showTooltip={!!feature.feature_tooltip}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-accent to-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 mt-8"
        onClick={handleSignupClick}
      >
        {getTrialButtonText()}
      </Button>
    </Card>
  );
};
