import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Competitor } from "./competitorData";

interface ComparisonTableProps {
  competitor: Competitor;
}

export const ComparisonTable = ({ competitor }: ComparisonTableProps) => {
  const { language, isRTL } = useLanguage();
  
  return (
    <div className="w-full overflow-x-auto rounded-xl shadow-lg">
      <Table className="w-full border border-primary/20 rounded-xl overflow-hidden">
        <TableHeader className="sticky top-0 z-10">
          <TableRow className="hover:bg-transparent border-b border-primary/20">
            <TableHead className={`w-1/3 ${isRTL ? 'text-right' : 'text-left'} bg-background`}>
              {language === 'es' ? 'Características' : 
               isRTL ? 'תכונות' : 
               'Features'}
            </TableHead>
            <TableHead className={`w-1/3 ${isRTL ? 'text-right' : 'text-left'} bg-background`}>
              {competitor.logo ? (
                <img 
                  src={competitor.logo} 
                  alt={competitor.name}
                  className="h-12 object-contain" // Increased from h-8 to h-12
                />
              ) : (
                competitor.name
              )}
            </TableHead>
            <TableHead className="w-1/3 bg-primary/20 text-center">
              <img 
                src="/lovable-uploads/60190412-efc7-4756-b0a5-e9ecd7f0ef3f.png" 
                alt="Timeliner"
                className="h-12 mx-auto" // Increased from h-8 to h-12 for consistency
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {competitor.features.map((feature, index) => (
            <TableRow key={index} className="hover:bg-primary/5 transition-colors">
              <TableCell className={`font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
                {feature.name}
              </TableCell>
              <TableCell className={`whitespace-pre-line ${isRTL ? 'text-right' : 'text-left'}`}>
                {typeof feature.competitor === 'boolean' ? (
                  feature.competitor ? (
                    <Check className="text-primary h-5 w-5" />
                  ) : (
                    <X className="text-primary/40 h-5 w-5" />
                  )
                ) : (
                  feature.competitor
                )}
              </TableCell>
              <TableCell className={`bg-primary/10 whitespace-pre-line ${isRTL ? 'text-right' : 'text-left'}`}>
                {typeof feature.timeliner === 'boolean' ? (
                  feature.timeliner ? (
                    <Check className="text-primary h-5 w-5" />
                  ) : (
                    <X className="text-primary/40 h-5 w-5" />
                  )
                ) : (
                  feature.timeliner
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};