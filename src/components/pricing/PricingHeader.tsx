
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

  const getTitle = () => '[pricing_title]';
  const getSubtitle = () => '[pricing_subtitle]';
  const getPeriodText = (period: 'monthly' | 'quarterly' | 'yearly') => `[pricing_period_${period}]`;
  const getDiscountText = (discount: '15%' | '25%') => `[pricing_discount_${discount.replace('%', '')}]`;

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
          <span className={cn(
            "block text-xs",
            pricingPeriod === 'quarterly' ? "text-white" : "text-primary"
          )}>
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
          <span className={cn(
            "block text-xs",
            pricingPeriod === 'yearly' ? "text-white" : "text-primary"
          )}>
            {getDiscountText('25%')}
          </span>
        </button>
      </div>
    </div>
  );
};
