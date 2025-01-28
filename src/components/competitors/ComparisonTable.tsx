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
      <Table className="w-full border border-border">
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
            <TableHead className={`w-1/3 ${isRTL ? 'text-right' : 'text-left'}`}>
              Timeliner
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {competitor.features.map((feature, index) => (
            <TableRow key={index}>
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
              <TableCell className={isRTL ? 'text-right' : 'text-left'}>
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