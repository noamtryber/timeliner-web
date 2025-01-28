import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CompetitorTabs } from "./CompetitorTabs";
import { ComparisonTable } from "./ComparisonTable";
import { Competitor } from "./types";
import { competitors } from "./data";
import { useIsMobile } from "@/hooks/use-mobile";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

export const CompetitorsTable = () => {
  const { language, isRTL } = useLanguage();
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor>(competitors[0]);
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobile();

  const getTitle = () => {
    switch (language) {
      case 'he':
        return 'Timeliner מול השאר: מי מנצח?';
      case 'es':
        return 'Timeliner vs. el resto: ¿Quién gana?';
      default:
        return 'Timeliner vs. The Rest: Who Wins?';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'he':
        return 'כלים חכמים יותר, תכונות מוכנות ללקוח וזרימות עבודה ליוצרים - הכל במחיר משתלם. גלה למה Timeliner הוא הבחירה המובילה לעורכי וידאו וצוותי מדיה!';
      case 'es':
        return 'Herramientas más inteligentes, funciones listas para clientes y flujos de trabajo para creativos, todo sin romper el banco. ¡Descubre por qué Timeliner es la mejor opción para editores de video y equipos de medios!';
      default:
        return 'Smarter tools, client-ready features, and workflows for creatives—all without breaking the bank. See why Timeliner is the top choice for video editors and media teams!';
    }
  };

  return (
    <section className="py-12 relative overflow-hidden">
      <div className={`container mx-auto ${isMobile ? 'px-0' : 'px-4'}`}>
        <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-4 text-center`}>
          {getTitle()}
        </h2>
        
        <p className={`text-lg text-muted-foreground mb-6 max-w-3xl mx-auto text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          {getSubtitle()}
        </p>
        
        <div className="relative">
          {/* Background gradients */}
          <div className="absolute -z-10 -top-[40%] -left-[20%] w-[70%] h-[90%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute -z-10 -bottom-[40%] -right-[20%] w-[70%] h-[90%] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-1000" />
          
          <CompetitorTabs 
            selectedCompetitor={selectedCompetitor}
            onSelect={setSelectedCompetitor}
          />
          
          {isMobile ? (
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
              <CollapsibleTrigger className="w-full flex items-center justify-center gap-2 py-2 mt-2 text-primary hover:text-primary/80 transition-colors">
                {isOpen ? (
                  <>Hide Comparison <ChevronUp className="h-4 w-4" /></>
                ) : (
                  <>Show Comparison <ChevronDown className="h-4 w-4" /></>
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="w-full">
                <div className="mt-2">
                  <ComparisonTable competitor={selectedCompetitor} />
                </div>
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <ComparisonTable competitor={selectedCompetitor} />
          )}
        </div>
      </div>
    </section>
  );
};