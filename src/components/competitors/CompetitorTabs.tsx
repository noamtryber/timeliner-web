import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { Competitor, competitors } from "./competitorData";

interface CompetitorTabsProps {
  selectedCompetitor: Competitor;
  onSelect: (competitor: Competitor) => void;
}

export const CompetitorTabs = ({ selectedCompetitor, onSelect }: CompetitorTabsProps) => {
  const { isRTL } = useLanguage();
  
  return (
    <Tabs
      value={selectedCompetitor.id}
      onValueChange={(value) => onSelect(competitors.find(c => c.id === value) || competitors[0])}
      className="w-full mb-8"
    >
      <TabsList className={`w-full flex flex-wrap justify-center gap-2 bg-transparent ${isRTL ? 'flex-row-reverse' : ''}`}>
        {competitors.map((competitor) => (
          <TabsTrigger
            key={competitor.id}
            value={competitor.id}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {competitor.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};