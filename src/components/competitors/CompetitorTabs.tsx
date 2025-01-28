import { useIsMobile } from "@/hooks/use-mobile";
import { Competitor } from "./types";
import { competitors } from "./data";

interface CompetitorTabsProps {
  selectedCompetitor: Competitor;
  onSelect: (competitor: Competitor) => void;
}

export const CompetitorTabs = ({ selectedCompetitor, onSelect }: CompetitorTabsProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`flex ${isMobile ? 'flex-nowrap gap-2' : 'flex-wrap gap-4'} justify-start mb-8 ${isMobile ? 'px-4' : 'justify-center'}`}>
      {competitors.map((competitor) => (
        <button
          key={competitor.id}
          onClick={() => onSelect(competitor)}
          className={`p-3 rounded-lg transition-all whitespace-nowrap ${
            selectedCompetitor.id === competitor.id
              ? "bg-primary/20 scale-105"
              : "bg-white/5 hover:bg-white/10"
          } ${isMobile ? 'text-sm' : ''}`}
        >
          {competitor.name}
        </button>
      ))}
    </div>
  );
};