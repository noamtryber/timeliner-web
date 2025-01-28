import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Feature } from "./types";

interface ComparisonDesktopTableProps {
  tools: Feature[];
  isRTL: boolean;
  language: string;
}

export const ComparisonDesktopTable = ({ tools, isRTL, language }: ComparisonDesktopTableProps) => {
  return (
    <div className="space-y-6">
      <Table className="relative glass border border-[#222222]">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className={`text-white ${isRTL ? 'text-right' : 'text-left'}`}>
              {language === 'es' ? 'Características' : isRTL ? 'פיצ\'רים' : 'Features'}
            </TableHead>
            <TableHead className={`text-white ${isRTL ? 'text-right' : 'text-left'}`}>
              Frame.io
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
                {tool.name}
              </TableCell>
              <TableCell className={`text-white/70 ${isRTL ? 'text-right' : 'text-left'}`}>
                {typeof tool.competitor === 'boolean' ? 
                  (tool.competitor ? 
                    <Check className="mx-auto text-[#9b87f5] h-5 w-5" /> : 
                    <X className="mx-auto text-red-500 h-5 w-5" />
                  ) : tool.competitor}
              </TableCell>
              <TableCell className={`text-white/70 ${isRTL ? 'text-right' : 'text-left'}`}>
                {typeof tool.timeliner === 'boolean' ? 
                  (tool.timeliner ? 
                    <Check className="mx-auto text-[#9b87f5] h-5 w-5" /> : 
                    <X className="mx-auto text-red-500 h-5 w-5" />
                  ) : tool.timeliner}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="p-6 glass border border-[#222222] rounded-lg">
        <h3 className="text-xl font-bold text-white mb-4">Key Takeaways:</h3>
        <ul className="space-y-3 text-white/80">
          {tools[0].keyTakeaways?.map((takeaway, index) => (
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