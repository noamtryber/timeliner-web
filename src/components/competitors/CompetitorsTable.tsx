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
        <h2 className={`text-4xl font-bold mb-4 text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          {language === 'es' ? 'Cómo se compara Timeliner con la competencia' : 
           isRTL ? 'איך Timeliner משתווה למתחרים' : 
           'How Timeliner Stacks Up Against the Competition'}
        </h2>
        
        <p className={`text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          {language === 'es' ? 'Compare Timeliner con las herramientas líderes de la industria y descubra por qué es la opción más inteligente para equipos de medios, agencias y creativos.' : 
           isRTL ? 'השוו את Timeliner עם כלים מובילים בתעשייה וגלו למה זו הבחירה החכמה יותר לצוותי מדיה, סוכנויות ויוצרים.' : 
           'Compare Timeliner with leading industry tools and see why it's the smarter choice for media teams, agencies, and creatives. From advanced workflows to client-ready tools, discover how we outperform the competition in value, features, and scalability.'}
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