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
    <div className={`w-full max-w-4xl mx-auto ${isMobile ? 'px-2' : ''}`}>
      <div className={`${isMobile ? 'grid grid-rows-2 gap-y-2 gap-x-1' : 'flex flex-wrap justify-center gap-4'} mb-4`}>
        {/* First row - 3 buttons */}
        <div className={`${isMobile ? 'grid grid-cols-3 gap-1' : 'hidden'}`}>
          {competitors.slice(0, 3).map((competitor) => (
            <button
              key={competitor.id}
              onClick={() => onSelect(competitor)}
              className={`p-2 rounded-lg transition-all text-center ${
                selectedCompetitor.id === competitor.id
                  ? "bg-primary/20 scale-105"
                  : "bg-white/5 hover:bg-white/10"
              } ${isMobile ? 'text-sm' : ''}`}
            >
              {competitor.name}
            </button>
          ))}
        </div>
        
        {/* Second row - 2 centered buttons */}
        <div className={`${isMobile ? 'grid grid-cols-2 gap-1 mx-auto w-2/3' : 'hidden'}`}>
          {competitors.slice(3, 5).map((competitor) => (
            <button
              key={competitor.id}
              onClick={() => onSelect(competitor)}
              className={`p-2 rounded-lg transition-all text-center ${
                selectedCompetitor.id === competitor.id
                  ? "bg-primary/20 scale-105"
                  : "bg-white/5 hover:bg-white/10"
              } ${isMobile ? 'text-sm' : ''}`}
            >
              {competitor.name}
            </button>
          ))}
        </div>

        {/* Desktop view - all buttons in one row */}
        <div className={`${isMobile ? 'hidden' : 'flex gap-4'}`}>
          {competitors.map((competitor) => (
            <button
              key={competitor.id}
              onClick={() => onSelect(competitor)}
              className={`p-3 rounded-lg transition-all text-center ${
                selectedCompetitor.id === competitor.id
                  ? "bg-primary/20 scale-105"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {competitor.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};