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
          <li className="flex items-start gap-2">
            <span className="mt-1"><X className="text-red-500 h-4 w-4" /></span>
            Dropbox Replay is mainly a review add-on, requiring Dropbox Plus for full functionality, making it $20/user/month—which quickly adds up as teams grow.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1"><Check className="text-[#9b87f5] h-4 w-4" /></span>
            Timeliner is a complete media management solution, combining project management, video review, media storage, CRM, marketing tools, and portfolio building in one platform.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1"><Check className="text-[#9b87f5] h-4 w-4" /></span>
            Smart integrations with WhatsApp, Email, and Slack allow seamless team communication and client notifications.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1"><Check className="text-[#9b87f5] h-4 w-4" /></span>
            Flat pricing ensures cost predictability, making Timeliner the more scalable and cost-effective choice for video editors and media teams.
          </li>
        </ul>
      </div>
    </div>
  );
};