import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Play, HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";
import { PricingContent } from "@/hooks/usePricingContent";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProPlanProps {
  content?: PricingContent;
  video?: Record<string, string>;
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
}

interface Feature {
  text: string;
  tooltip?: string;
  showTooltip?: boolean;
}

export const ProPlan = ({ content, video, pricingPeriod }: ProPlanProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';
  const [extraStorage, setExtraStorage] = useState(0);
  const [extraMembers, setExtraMembers] = useState(0);
  
  if (!content) return null;

  const handleSignupClick = () => {
    const prefix = language === 'en' ? '' : `/${language}`;
    navigate(`${prefix}/signup`);
  };

  const getTitle = () => {
    switch (language) {
      case 'he':
        return 'סטודיו';
      case 'ar':
        return 'ستوديو';
      case 'es':
        return 'Estudio';
      default:
        return 'Studio';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'he':
        return 'לסוכנויות וצוותים בצמיחה';
      case 'ar':
        return 'للوكالات والفرق النامية';
      case 'es':
        return 'Para Agencias y Equipos en Crecimiento';
      default:
        return 'For Growing Agencies and Teams';
    }
  };

  const getWhyButtonText = () => {
    switch (language) {
      case 'he':
        return 'למה סטודיו?';
      case 'ar':
        return 'لماذا ستوديو؟';
      case 'es':
        return '¿Por qué Estudio?';
      default:
        return 'Why Studio?';
    }
  };

  const getButtonText = () => {
    switch (language) {
      case 'he':
        return 'התחל עכשיו';
      case 'ar':
        return 'ابدأ الآن';
      case 'es':
        return 'Comenzar ahora';
      default:
        return 'Get Started';
    }
  };

  const getEverythingInText = () => {
    switch (language) {
      case 'he':
        return 'כולל גם:';
      case 'ar':
        return 'يشمل أيضاً:';
      case 'es':
        return 'También incluye:';
      default:
        return 'Also includes:';
    }
  };

  const getExtraFeatures = () => {
    switch (language) {
      case 'he':
        return [
          { text: 'תכונות AI מתקדמות', tooltip: 'כלים מתקדמים מבוססי AI' },
          { text: 'יצוא מותאם אישית', tooltip: 'אפשרויות יצוא מותאמות אישית' },
          { text: 'גיבוי מתקדם', tooltip: 'גיבוי אוטומטי ושחזור' },
          { text: 'תמיכה VIP', tooltip: 'תמיכה מועדפת ומענה מהיר' }
        ];
      case 'ar':
        return [
          { text: 'ميزات AI متقدمة', tooltip: 'أدوات متقدمة قائمة على الذكاء الاصطناعي' },
          { text: 'تصدير مخصص', tooltip: 'خيارات تصدير مخصصة' },
          { text: 'نسخ احتياطي متقدم', tooltip: 'نسخ احتياطي تلقائي واستعادة' },
          { text: 'دعم VIP', tooltip: 'دعم ذو أولوية واستجابة سريعة' }
        ];
      case 'es':
        return [
          { text: 'Funciones AI avanzadas', tooltip: 'Herramientas avanzadas basadas en IA' },
          { text: 'Exportación personalizada', tooltip: 'Opciones de exportación personalizadas' },
          { text: 'Respaldo avanzado', tooltip: 'Respaldo automático y recuperación' },
          { text: 'Soporte VIP', tooltip: 'Soporte prioritario y respuesta rápida' }
        ];
      default:
        return [
          { text: 'Advanced AI features', tooltip: 'Advanced AI-powered tools' },
          { text: 'Custom export', tooltip: 'Custom export options' },
          { text: 'Advanced backup', tooltip: 'Automatic backup and recovery' },
          { text: 'VIP support', tooltip: 'Priority support and fast response' }
        ];
    }
  };

  const totalStorage = 2 + (extraStorage * 0.1); // Base 2TB + extra storage in TB
  const totalMembers = 5 + extraMembers; // Base 5 members + extra members
  
  const basePrice = 49;
  const storagePrice = extraStorage * 1.5; // $1.50 per 100GB
  const membersPrice = extraMembers * 7; // $7 per extra member
  
  const totalPrice = pricingPeriod === 'yearly' 
    ? (basePrice + storagePrice + membersPrice) * 0.75 
    : pricingPeriod === 'quarterly' 
      ? (basePrice + storagePrice + membersPrice) * 0.85 
      : (basePrice + storagePrice + membersPrice);

  return (
    <Card className={`relative border border-[#2A2F3C] bg-gradient-to-b from-[#1A1F2C]/50 to-[#1A1F2C] p-3 flex flex-col animate-fade-up delay-500 hover:scale-105 transition-transform duration-300 ${isRTL ? 'text-right' : ''}`}>
      <PlanIcon Icon={Crown} color="primary" />
      <h3 className="text-xl font-bold mb-1">{getTitle()}</h3>
      <p className="text-white/70 mb-2">{getSubtitle()}</p>
      
      <div className="text-2xl font-bold mb-4">
        ${totalPrice.toFixed(2)}
        <span className="text-base font-normal">
          {language === 'he' ? '/ לחודש' : language === 'ar' ? '/شهر' : language === 'es' ? '/mes' : '/month'}
        </span>
        {pricingPeriod !== 'monthly' && (
          <span className="block text-sm text-primary mt-1">
            ${(totalPrice * (pricingPeriod === 'yearly' ? 12 : 3)).toFixed(2)} {
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

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-32 mb-6 border-primary/50 hover:bg-primary/10 text-xs px-2 flex items-center gap-1.5">
            <Play className="w-3 h-3" />
            {getWhyButtonText()}
          </Button>
        </DialogTrigger>
        <DialogContent className={`glass ${isRTL ? 'text-right' : ''}`}>
          <DialogHeader>
            <DialogTitle>{getWhyButtonText()}</DialogTitle>
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

      <div className="space-y-6 flex-grow">
        <div className="flex items-center gap-4">
          <span className="text-white/90 flex-shrink-0">Storage: {totalStorage.toFixed(1)}TB</span>
          <Slider
            defaultValue={[0]}
            max={30}
            step={1}
            value={[extraStorage]}
            onValueChange={([value]) => setExtraStorage(value)}
            className="w-32 flex-shrink-0"
          />
          {extraStorage > 0 && (
            <span className="text-xs text-primary">+${(extraStorage * 1.5).toFixed(2)}/mo</span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-white/90 flex-shrink-0">{totalMembers} members</span>
          <Slider
            defaultValue={[0]}
            max={15}
            step={1}
            value={[extraMembers]}
            onValueChange={([value]) => setExtraMembers(value)}
            className="w-32 flex-shrink-0"
          />
          {extraMembers > 0 && (
            <span className="text-xs text-primary">+${(extraMembers * 7).toFixed(2)}/mo</span>
          )}
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-sm font-medium mb-2">{getEverythingInText()}</p>
          {getExtraFeatures().map((feature, index) => (
            <PlanFeature 
              key={`extra-${index}`} 
              text={feature.text} 
              tooltip={feature.tooltip} 
              showTooltip={feature.showTooltip} 
              isRTL={isRTL} 
            />
          ))}
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 mt-6"
        onClick={handleSignupClick}
      >
        {getButtonText()}
      </Button>
    </Card>
  );
};
