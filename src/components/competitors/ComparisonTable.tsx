import { useLanguage } from "@/contexts/LanguageContext";
import { CompetitorTabs } from "./CompetitorTabs";
import { ComparisonDesktopTable } from "./ComparisonDesktopTable";
import { Competitor } from "./types";
import { competitors } from "./competitorData";

export const ComparisonTable = ({ competitor }: { competitor: Competitor }) => {
  const { language, isRTL } = useLanguage();
  
  return (
    <div className="w-[75%] mx-auto overflow-x-auto rounded-xl shadow-lg scale-90">
      <ComparisonDesktopTable 
        competitor={competitor}
        isRTL={isRTL}
        language={language}
      />
    </div>
  );
};