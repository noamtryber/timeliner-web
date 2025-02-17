
import { competitors } from "./data";
import { Competitor } from "./types";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

interface CompetitorTabsProps {
  selectedCompetitor: Competitor;
  onSelect: (competitor: Competitor) => void;
}

export const CompetitorTabs = ({ selectedCompetitor, onSelect }: CompetitorTabsProps) => {
  const { isRTL } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div className={`flex flex-wrap gap-2 ${isMobile ? 'px-4' : ''} ${isRTL ? 'flex-row-reverse' : ''} justify-center mb-8`}>
      {competitors.map((competitor) => (
        <button
          key={competitor.id}
          onClick={() => onSelect(competitor)}
          className={`px-4 py-2 rounded-lg transition-all duration-300 text-base ${
            selectedCompetitor.id === competitor.id
              ? 'bg-primary text-white'
              : 'bg-white/5 hover:bg-white/10 text-white/70'
          }`}
        >
          [competitor_{competitor.id}]
        </button>
      ))}
    </div>
  );
};
