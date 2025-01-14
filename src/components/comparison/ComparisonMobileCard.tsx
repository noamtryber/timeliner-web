import { Check } from "lucide-react";
import { Tool } from "./types";

interface ComparisonMobileCardProps {
  tool: Tool;
  isRTL: boolean;
  language: string;
}

export const ComparisonMobileCard = ({ tool, isRTL, language }: ComparisonMobileCardProps) => {
  return (
    <div className="relative glass border border-white/10 p-4 rounded-lg">
      <div className="flex flex-col space-y-2">
        <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h3 className={`font-medium text-white ${isRTL ? 'text-right' : 'text-left'}`}>{tool.feature}</h3>
          <Check className={`text-primary ${isRTL ? 'order-first' : ''}`} />
        </div>
        <div className={`grid grid-cols-2 gap-2 text-sm text-white/70`}>
          <div className={isRTL ? 'text-right' : 'text-left'}>
            {language === 'es' ? 'Reemplaza:' : isRTL ? 'מחליף:' : 'Replaces:'}
          </div>
          <div className={isRTL ? 'text-right' : 'text-left'}>{tool.replaces}</div>
          <div className={isRTL ? 'text-right' : 'text-left'}>
            {language === 'es' ? 'Su Costo:' : isRTL ? 'עלות:' : 'Their Cost:'}
          </div>
          <div className={isRTL ? 'text-right' : 'text-left'}>{tool.cost}</div>
        </div>
      </div>
    </div>
  );
};