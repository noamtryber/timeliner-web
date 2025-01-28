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
    <div className="w-full overflow-x-auto">
      <Table className="w-full border border-[#222222] rounded-lg overflow-hidden">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className={`w-1/3 ${isRTL ? 'text-right' : 'text-left'}`}>
              {language === 'es' ? 'Características' : 
               isRTL ? 'תכונות' : 
               'Features'}
            </TableHead>
            <TableHead className={`w-1/3 ${isRTL ? 'text-right' : 'text-left'}`}>
              {competitor.name}
            </TableHead>
            <TableHead className="w-1/3 bg-primary/20 text-center">
              <img 
                src="/lovable-uploads/94a8f111-a09f-4217-80ff-c246e3f328d1.png" 
                alt="Timeliner"
                className="h-8 mx-auto"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {competitor.features.map((feature, index) => (
            <TableRow key={index} className="hover:bg-white/5">
              <TableCell className={`font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
                {feature.name}
              </TableCell>
              <TableCell className={isRTL ? 'text-right' : 'text-left'}>
                {typeof feature.competitor === 'boolean' ? (
                  feature.competitor ? (
                    <Check className="text-green-500" />
                  ) : (
                    <X className="text-red-500" />
                  )
                ) : (
                  feature.competitor
                )}
              </TableCell>
              <TableCell className={`bg-primary/10 ${isRTL ? 'text-right' : 'text-left'}`}>
                {typeof feature.timeliner === 'boolean' ? (
                  feature.timeliner ? (
                    <Check className="text-green-500" />
                  ) : (
                    <X className="text-red-500" />
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