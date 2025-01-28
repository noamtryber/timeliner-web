import { Competitor, competitors } from "./competitorData";

interface CompetitorTabsProps {
  selectedCompetitor: Competitor;
  onSelect: (competitor: Competitor) => void;
}

export const CompetitorTabs = ({ selectedCompetitor, onSelect }: CompetitorTabsProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {competitors.map((competitor) => (
        <button
          key={competitor.id}
          onClick={() => onSelect(competitor)}
          className={`p-4 rounded-lg transition-all ${
            selectedCompetitor.id === competitor.id
              ? "bg-primary/20 scale-105"
              : "bg-white/5 hover:bg-white/10"
          }`}
        >
          {competitor.logo ? (
            <img 
              src={competitor.logo} 
              alt={competitor.name} 
              className="h-8 object-contain"
            />
          ) : (
            competitor.name
          )}
        </button>
      ))}
    </div>
  );
};