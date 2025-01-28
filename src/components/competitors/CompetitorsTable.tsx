import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CompetitorTabs } from "./CompetitorTabs";
import { ComparisonTable } from "./ComparisonTable";
import { Competitor, competitors } from "./competitorData";

export const CompetitorsTable = () => {
  const { language, isRTL } = useLanguage();
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor>(competitors[0]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          {language === 'es' ? 'Tabla Comparativa de Competidores' : 
           isRTL ? 'טבלת השוואת מתחרים' : 
           'Competitors Comparison Table'}
        </h2>
        
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