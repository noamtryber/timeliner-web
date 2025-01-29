import { useLanguage } from "@/contexts/LanguageContext";
import { ComparisonTable } from "./ComparisonTable";
import { getCompetitorData } from "./data";

export const CompetitorsTable = () => {
  const { language } = useLanguage();
  const competitors = getCompetitorData(language);
  
  return (
    <div className="space-y-32">
      <ComparisonTable competitor={competitors.frameio} />
      <ComparisonTable competitor={competitors.dropbox} />
      <ComparisonTable competitor={competitors.wipster} />
      <ComparisonTable competitor={competitors.vimeo} />
      <ComparisonTable competitor={competitors.clickup} />
    </div>
  );
};