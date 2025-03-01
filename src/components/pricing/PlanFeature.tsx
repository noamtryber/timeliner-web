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
      className={`flex items-center gap-3 text-[0.927rem] text-white/70 w-full py-0.5 ${isRTL ? 'flex-row-reverse' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className={`flex-shrink-0 ${isRTL ? 'order-2' : ''}`}>
        <Check className="h-3 w-3 text-primary" />
      </div>
      <span className={`flex-grow ${isRTL ? 'text-right w-full order-1' : ''}`}>
        {text}
      </span>
      {showTooltip && tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle 
                className="flex-shrink-0 w-3.5 h-3.5 text-white/40 hover:text-white/60 cursor-help ml-auto" 
              />
            </TooltipTrigger>
            <TooltipContent 
              className="max-w-[200px] bg-card/95 backdrop-blur border-primary/20 text-white/90 z-[100]"
              side="top"
              sideOffset={5}
              align="end"
            >
              {tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};