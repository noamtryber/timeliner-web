import { Check } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tool } from "./types";

interface ComparisonDesktopTableProps {
  tools: Tool[];
  isRTL: boolean;
  language: string;
}

export const ComparisonDesktopTable = ({ tools, isRTL, language }: ComparisonDesktopTableProps) => {
  return (
    <Table className="relative glass border border-white/10">
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className={`text-white ${isRTL ? 'text-right' : 'text-left'}`}>
            {language === 'es' ? 'Características' : isRTL ? 'פיצ\'רים' : 'Features'}
          </TableHead>
          <TableHead className={`text-white ${isRTL ? 'text-right' : 'text-left'}`}>
            {language === 'es' ? 'Reemplaza' : isRTL ? 'מחליף' : 'Replaces'}
          </TableHead>
          <TableHead className={`text-white ${isRTL ? 'text-right' : 'text-left'}`}>
            {language === 'es' ? 'Costo de Otras Herramientas' : isRTL ? 'עלות כלים אחרים' : "Other Tools' Cost"}
          </TableHead>
          <TableHead className="text-white text-center bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40">
            Timeliner
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tools.map((tool, index) => (
          <TableRow
            key={index}
            className="transition-colors hover:bg-white/5 cursor-pointer group"
          >
            <TableCell className={`font-medium text-white ${isRTL ? 'text-right' : 'text-left'}`}>
              {tool.feature}
            </TableCell>
            <TableCell className={`text-white/70 ${isRTL ? 'text-right' : 'text-left'}`}>
              {tool.replaces}
            </TableCell>
            <TableCell className={`text-white/70 ${isRTL ? 'text-right' : 'text-left'}`}>
              {tool.cost}
            </TableCell>
            <TableCell className="text-center">
              <Check className="mx-auto text-primary group-hover:text-accent transition-colors" />
            </TableCell>
          </TableRow>
        ))}
        <TableRow className="hover:bg-transparent border-t-2 border-white/10">
          <TableCell colSpan={2} className={`font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
            {language === 'es' ? 'Costo Total' : isRTL ? 'עלות כוללת' : 'Total Cost'}
          </TableCell>
          <TableCell className={`text-white/70 font-bold ${isRTL ? 'text-right' : 'text-left'}`}>
            {language === 'es' ? 'Otras herramientas: $138+/mes' : isRTL ? 'כלים אחרים: $138+ לחודש' : '$138+/month'}
          </TableCell>
          <TableCell className="text-center font-bold text-primary">
            {language === 'es' ? '$19-$39/mes' : isRTL ? '$19-$39 לחודש' : '$19-$39/month'}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};