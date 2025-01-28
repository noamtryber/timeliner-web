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
    <div className={`w-full max-w-4xl mx-auto ${isMobile ? 'px-4' : ''}`}>
      <div className={`grid ${isMobile ? 'grid-cols-3 gap-2' : 'flex flex-wrap justify-center gap-4'} mb-8`}>
        {competitors.map((competitor) => (
          <button
            key={competitor.id}
            onClick={() => onSelect(competitor)}
            className={`p-3 rounded-lg transition-all text-center ${
              selectedCompetitor.id === competitor.id
                ? "bg-primary/20 scale-105"
                : "bg-white/5 hover:bg-white/10"
            } ${isMobile ? 'text-sm' : ''}`}
          >
            {competitor.name}
          </button>
        ))}
      </div>
    </div>
  );
};