
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChartBar } from "lucide-react";
import ComparisonTable from "./ComparisonTable";
import { useLanguage } from "@/contexts/LanguageContext";

export const ComparisonDialog = () => {
  const { language } = useLanguage();

  const getButtonText = () => '[comparison_button]';
  const getTitleText = () => '[comparison_title]';

  return (
    <div className="flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="mt-8 border-primary/50 hover:bg-primary/10"
          >
            <ChartBar className="w-4 h-4 mr-2" />
            {getButtonText()}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto bg-[#1A1F2C]/95 backdrop-blur-sm border-primary/20 z-[9999]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{getTitleText()}</DialogTitle>
          </DialogHeader>
          <ComparisonTable />
        </DialogContent>
      </Dialog>
    </div>
  );
};
