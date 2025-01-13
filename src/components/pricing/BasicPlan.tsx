import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
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
  basicStorage: number;
  setBasicStorage: (value: number) => void;
  calculatePrice: (basePrice: number, baseStorage: number, currentStorage: number) => number;
}

export const BasicPlan = ({ 
  content,
  video,
  pricingPeriod, 
  basicStorage, 
  setBasicStorage, 
  calculatePrice 
}: BasicPlanProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isHebrew = language === 'he';
  
  if (!content) return null;

  const basicPrice = calculatePrice(
    Number(content.base_price), 
    Number(content.base_storage), 
    basicStorage
  );

  const hebrewFeatures = [
    'חשבון אדמין אחד',
    '5 חברי צוות (עורכי וידאו, מנהלי פרויקטים וכו\')',
    '25 פרויקטים פעילים',
    'גישת לקוחות: עד 3 אורחים לפרויקט',
    'תהליך עבודה מתקדם: מעקב אחר סטטוס',
    'הערות מבוססות קודי זמן למשוב מדויק',
    'תפקידי משתמש והרשאות בהתאמה אישית',
    'אנליטיקה בסיסית למעקב אחרי סטטוס הפרויקט'
  ];
  
  const getPeriodTotal = () => {
    switch (pricingPeriod) {
      case 'quarterly':
        return basicPrice * 3;
      case 'yearly':
        return basicPrice * 12;
      default:
        return basicPrice;
    }
  };

  return (
    <Card className={`glass p-6 flex flex-col animate-fade-up delay-400 hover:scale-105 transition-transform duration-300 relative ${isHebrew ? 'text-right' : ''}`}>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary via-accent to-primary px-4 py-1 rounded-full text-sm font-semibold text-white shadow-lg">
        {isHebrew ? 'הכי פופולרי' : 'Most Popular'}
      </div>

      <PlanIcon Icon={Database} color="accent" />
      <h3 className="text-2xl font-bold mb-2">{isHebrew ? 'בייסיק' : content.title}</h3>
      <p className="text-white/70 mb-6">{isHebrew ? 'לפרילנסרים או סוכנויות קטנות' : content.subtitle}</p>
      <div className="text-3xl font-bold mb-4">
        ${basicPrice.toFixed(2)}
        {isHebrew ? ' / לחודש' : <span className="text-sm font-normal text-white/70">/month</span>}
        {pricingPeriod !== 'monthly' && (
          <span className="block text-sm text-primary mt-1">
            ${getPeriodTotal().toFixed(2)} {isHebrew ? `לתשלום ${pricingPeriod === 'quarterly' ? 'רבעוני' : 'שנתי'}` : `billed ${pricingPeriod}`}
          </span>
        )}
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-white/70 mb-2">{isHebrew ? 'אחסון:' : 'Storage:'} {basicStorage}GB</p>
        <Slider
          value={[basicStorage]}
          onValueChange={(value) => setBasicStorage(value[0])}
          min={Number(content.base_storage)}
          max={2000}
          step={100}
          className={`mb-4 ${isHebrew ? 'direction-rtl' : ''}`}
          dir={isHebrew ? 'rtl' : 'ltr'}
        />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full mb-6 border-primary/50 hover:bg-primary/10">
            <Play className="w-4 h-4 mr-2" />
            {isHebrew ? 'למה בייסיק?' : content.video_title}
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
            <p className="text-white/70">
              {content.video_description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="space-y-4 mb-8 flex-grow">
        <h4 className="font-semibold">{isHebrew ? 'פיצ\'רים עיקריים:' : 'Core Features:'}</h4>
        {(isHebrew ? hebrewFeatures : content.features).map((feature, index) => (
          <PlanFeature key={index} text={feature} isRTL={isHebrew} />
        ))}
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-accent to-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40"
        onClick={() => navigate('/signup')}
      >
        {isHebrew ? 'התחילו היום בחינם' : content.button_text}
      </Button>
    </Card>
  );
};