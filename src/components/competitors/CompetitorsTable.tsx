import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CompetitorTabs } from "./CompetitorTabs";
import { ComparisonTable } from "./ComparisonTable";
import { Competitor } from "./types";
import { competitors } from "./competitorData";

export const CompetitorsTable = () => {
  const { language, isRTL } = useLanguage();
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor>(competitors[0]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-4 text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          {language === 'es' ? 'Timeliner vs. el resto: ¿Quién gana?' : 
           isRTL ? 'Timeliner מול השאר: מי מנצח?' : 
           'Timeliner vs. The Rest: Who Wins?'}
        </h2>
        
        <p className={`text-lg text-muted-foreground mb-6 max-w-3xl mx-auto text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          {language === 'es' ? 'Herramientas más inteligentes, funciones listas para clientes y flujos de trabajo para creativos, todo sin romper el banco. ¡Descubre por qué Timeliner es la mejor opción para editores de video y equipos de medios!' : 
           isRTL ? 'כלים חכמים יותר, תכונות מוכנות ללקוח וזרימות עבודה ליוצרים - הכל במחיר משתלם. גלה למה Timeliner הוא הבחירה המובילה לעורכי וידאו וצוותי מדיה!' : 
           'Smarter tools, client-ready features, and workflows for creatives—all without breaking the bank. See why Timeliner is the top choice for video editors and media teams!'}
        </p>
        
        <div className="relative">
          {/* Background gradients */}
          <div className="absolute -z-10 -top-[40%] -left-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute -z-10 -bottom-[40%] -right-[20%] w-[70%] h-[100%] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-1000" />
          
          <CompetitorTabs 
            selectedCompetitor={selectedCompetitor}
            onSelect={setSelectedCompetitor}
          />
          
          <ComparisonTable competitor={selectedCompetitor} />
        </div>
      </div>
    </section>
  );
};
