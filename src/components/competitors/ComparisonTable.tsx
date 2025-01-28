import { useLanguage } from "@/contexts/LanguageContext";
import { ComparisonDesktopTable } from "./ComparisonDesktopTable";
import { Competitor } from "./types";
import { useIsMobile } from "@/hooks/use-mobile";

export const ComparisonTable = ({ competitor }: { competitor: Competitor }) => {
  const { language, isRTL } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? 'w-full px-2' : 'w-[75%] mx-auto'} overflow-x-auto rounded-xl shadow-lg ${isMobile ? 'scale-100' : 'scale-90'}`}>
      <ComparisonDesktopTable 
        competitor={competitor}
        isRTL={isRTL}
        language={language}
      />
    </div>
  );
};