import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
import { ComparisonMobileCard } from "./comparison/ComparisonMobileCard";
import { ComparisonDesktopTable } from "./comparison/ComparisonDesktopTable";
import { useTools } from "./comparison/useTools";

export const ComparisonTable = () => {
  const isMobile = useIsMobile();
  const { isRTL, language } = useLanguage();
  const tools = useTools(isRTL, language);

  if (isMobile) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-8 space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
          
          {tools.map((tool, index) => (
            <ComparisonMobileCard 
              key={index}
              tool={tool}
              isRTL={isRTL}
              language={language}
            />
          ))}

          <div className="relative glass border border-white/10 p-4 rounded-lg mt-4">
            <div className={`grid grid-cols-2 gap-2`}>
              <div className={`font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                {language === 'es' ? 'Costo Total' : isRTL ? 'עלות כוללת' : 'Total Cost'}
              </div>
              <div className={`text-white/70 font-bold ${isRTL ? 'text-right' : 'text-left'}`}>
                {language === 'es' ? '$138+/mes' : isRTL ? '$138+ לחודש' : '$138+/month'}
              </div>
              <div className={`font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>Timeliner</div>
              <div className={`font-bold text-primary ${isRTL ? 'text-right' : 'text-left'}`}>
                {language === 'es' ? '$19-$39/mes' : isRTL ? '$19-$39 לחודש' : '$19-$39/month'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 overflow-hidden rounded-lg">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
        <ComparisonDesktopTable 
          tools={tools}
          isRTL={isRTL}
          language={language}
        />
      </div>
    </div>
  );
};