import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageContent } from "@/hooks/usePageContent";

interface PricingHeaderProps {
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
  setPricingPeriod: (value: 'monthly' | 'quarterly' | 'yearly') => void;
  className?: string;
}

export const PricingHeader = ({ pricingPeriod, setPricingPeriod, className }: PricingHeaderProps) => {
  const { language } = useLanguage();
  const { data: content } = usePageContent('pricing', 'header');
  const isHebrew = language === 'he';

  const PeriodSelector = () => (
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
        {isHebrew ? 'חודשי' : 'Monthly'}
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
        {isHebrew ? 'רבעוני' : 'Quarterly'}
        <span className="block text-xs text-primary">
          {isHebrew ? '15% הנחה' : '15% off'}
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
        {isHebrew ? 'שנתי' : 'Yearly'}
        <span className="block text-xs text-primary">
          {isHebrew ? '25% הנחה' : '25% off'}
        </span>
      </button>
    </div>
  );

  // For mobile view, only show the period selector
  if (!className?.includes('lg:block')) {
    return <PeriodSelector />;
  }

  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-16", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text animate-fade-up">
        {isHebrew ? 'בחרו את התוכנית המושלמת עבורכם' : 'Find the Perfect Plan for You'}
      </h2>
      <p className="text-xl text-white/70 mb-8 animate-fade-up delay-100">
        {isHebrew 
          ? 'התחילו בחינם והתקדמו ככל שתצמחו. בחרו בתוכנית שמתאימה בדיוק לסגנון העבודה שלכם.'
          : 'Start for free and scale up as you grow. Choose the plan that fits your workflow.'}
      </p>
      <PeriodSelector />
    </div>
  );
};