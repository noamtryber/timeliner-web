import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Competitor } from "./types";

interface ComparisonTableProps {
  competitor: Competitor;
}

export const ComparisonTable = ({ competitor }: ComparisonTableProps) => {
  const { language, isRTL } = useLanguage();
  
  return (
    <div className="w-[75%] mx-auto overflow-x-auto rounded-xl shadow-lg scale-90">
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
                  className="h-8 object-contain"
                />
              ) : (
                competitor.name
              )}
            </TableHead>
            <TableHead className="w-1/3 bg-primary/20 text-center">
              <img 
                src="/lovable-uploads/60190412-efc7-4756-b0a5-e9ecd7f0ef3f.png" 
                alt="Timeliner"
                className="h-8 mx-auto"
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
                    <X className="text-red-500 h-5 w-5" />
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
                    <X className="text-red-500 h-5 w-5" />
                  )
                ) : (
                  feature.timeliner
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="p-6 glass border border-[#222222] rounded-lg">
        <h3 className="text-xl font-bold text-white mb-4">Key Takeaways:</h3>
        <ul className="space-y-3 text-white/80">
          {competitor.features[0].keyTakeaways?.map((takeaway, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1">
                {takeaway.type === 'negative' ? 
                  <X className="text-red-500 h-4 w-4" /> : 
                  <Check className="text-[#9b87f5] h-4 w-4" />
                }
              </span>
              {takeaway.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};