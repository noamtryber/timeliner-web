import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageContent } from "@/hooks/usePageContent";

interface PricingHeaderProps {
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
  setPricingPeriod: (value: 'monthly' | 'quarterly' | 'yearly') => void;
}

export const PricingHeader = ({ pricingPeriod, setPricingPeriod }: PricingHeaderProps) => {
  const { language } = useLanguage();
  const { data: content } = usePageContent('pricing', 'header');
  const isRTL = language === 'he' || language === 'ar';

  const getTitle = () => {
    switch (language) {
      case 'ar':
        return 'اختر الخطة المثالية لك';
      case 'es':
        return 'Encuentra el Plan Perfecto para Ti';
      case 'he':
        return 'בחרו את התוכנית המושלמת עבורכם';
      default:
        return 'Find the Perfect Plan for You';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'ar':
        return 'ابدأ مجانًا وتوسع مع نمو أعمالك. اختر الخطة التي تناسب سير عملك.';
      case 'es':
        return 'Comienza gratis y escala mientras creces. Elige el plan que se ajuste a tu flujo de trabajo.';
      case 'he':
        return 'התחילו בחינם והתקדמו ככל שתצמחו. בחרו בתוכנית שמתאימה בדיוק לסגנון העבודה שלכם.';
      default:
        return 'Start for free and scale up as you grow. Choose the plan that fits your workflow.';
    }
  };

  const getPeriodText = (period: 'monthly' | 'quarterly' | 'yearly') => {
    switch (language) {
      case 'ar':
        switch (period) {
          case 'monthly':
            return 'شهري';
          case 'quarterly':
            return 'ربع سنوي';
          case 'yearly':
            return 'سنوي';
        }
      case 'es':
        switch (period) {
          case 'monthly':
            return 'Mensual';
          case 'quarterly':
            return 'Trimestral';
          case 'yearly':
            return 'Anual';
        }
      case 'he':
        switch (period) {
          case 'monthly':
            return 'חודשי';
          case 'quarterly':
            return 'רבעוני';
          case 'yearly':
            return 'שנתי';
        }
      default:
        switch (period) {
          case 'monthly':
            return 'Monthly';
          case 'quarterly':
            return 'Quarterly';
          case 'yearly':
            return 'Yearly';
        }
    }
  };

  const getDiscountText = (discount: '15%' | '25%') => {
    switch (language) {
      case 'ar':
        return `خصم ${discount}`;
      case 'es':
        return `${discount} de descuento`;
      case 'he':
        return `${discount} הנחה`;
      default:
        return `${discount} off`;
    }
  };

  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text animate-fade-up">
        {getTitle()}
      </h2>
      <p className="text-xl text-white/70 mb-8 animate-fade-up delay-100">
        {getSubtitle()}
      </p>
      
      <div className="flex items-center justify-center gap-3 animate-fade-up delay-200">
        <button
          onClick={() => setPricingPeriod('monthly')}
          className={cn(
            "px-4 py-2 rounded-md transition-all duration-300",
            pricingPeriod === 'monthly' 
              ? "bg-gradient-to-br from-primary to-secondary text-white" 
              : "text-white/70 hover:text-white"
          )}
        >
          {getPeriodText('monthly')}
        </button>
        <button
          onClick={() => setPricingPeriod('quarterly')}
          className={cn(
            "px-4 py-2 rounded-md transition-all duration-300",
            pricingPeriod === 'quarterly' 
              ? "bg-gradient-to-br from-primary to-secondary text-white" 
              : "text-white/70 hover:text-white"
          )}
        >
          {getPeriodText('quarterly')}
          <span className="block text-xs text-primary">
            {getDiscountText('15%')}
          </span>
        </button>
        <button
          onClick={() => setPricingPeriod('yearly')}
          className={cn(
            "px-4 py-2 rounded-md transition-all duration-300",
            pricingPeriod === 'yearly' 
              ? "bg-gradient-to-br from-primary to-secondary text-white" 
              : "text-white/70 hover:text-white"
          )}
        >
          {getPeriodText('yearly')}
          <span className="block text-xs text-primary">
            {getDiscountText('25%')}
          </span>
        </button>
      </div>
    </div>
  );
};