import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PlanFeatureProps {
  text: string;
  isRTL?: boolean;
  tooltip?: string;
  showTooltip?: boolean;
}

export const PlanFeature = ({ text, isRTL, tooltip, showTooltip }: PlanFeatureProps) => {
  return (
    <div 
      className={`flex items-center gap-2 text-[0.85rem] text-white/70 w-full ${isRTL ? 'flex-row-reverse' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className={`flex-shrink-0 ${isRTL ? 'order-2' : ''}`}>
        <Check className="h-3 w-3 text-primary" />
      </div>
      <span className={`${isRTL ? 'text-right w-full order-1' : ''}`}>
        {text}
        {showTooltip && tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle 
                  className="inline-block ml-1.5 w-3.5 h-3.5 text-white/40 hover:text-white/60 cursor-help" 
                />
              </TooltipTrigger>
              <TooltipContent 
                className="max-w-[200px] bg-card/95 backdrop-blur border-primary/20 text-white/90"
              >
                {tooltip}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </span>
    </div>
  );
};