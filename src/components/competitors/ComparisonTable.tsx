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
          <li className="flex items-start gap-2">
            <span className="mt-1"><X className="text-red-500 h-4 w-4" /></span>
            Frame.io is great for quick storage and video review, but it becomes costly as teams grow and lacks advanced workflow, CRM, and marketing tools.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1"><Check className="text-[#9b87f5] h-4 w-4" /></span>
            Timeliner is an all-in-one solution, combining project management, video review, media storage, CRM, marketing tools, and portfolio building in one platform.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1"><Check className="text-[#9b87f5] h-4 w-4" /></span>
            Seamless smart integrations with WhatsApp, Email, and Slack ensure effortless client collaboration and team notifications.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1"><Check className="text-[#9b87f5] h-4 w-4" /></span>
            Flat pricing means no surprise costs, making Timeliner the smarter choice for growing media teams and agencies.
          </li>
        </ul>
      </div>
    </div>
  );
};