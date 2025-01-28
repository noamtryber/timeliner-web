import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Competitor } from "./types";

interface ComparisonDesktopTableProps {
  competitor: Competitor;
  isRTL: boolean;
  language: string;
}

export const ComparisonDesktopTable = ({ competitor, isRTL, language }: ComparisonDesktopTableProps) => {
  const getFeatureTitle = () => {
    switch (language) {
      case 'he':
        return 'תכונות';
      case 'es':
        return 'Características';
      default:
        return 'Features';
    }
  };

  const getKeyTakeawaysTitle = () => {
    switch (language) {
      case 'he':
        return 'נקודות מפתח:';
      case 'es':
        return 'Puntos Clave:';
      default:
        return 'Key Takeaways:';
    }
  };

  const getFeatureText = (feature: any) => {
    if (language === 'he' && feature.hebrewName) {
      return feature.hebrewName;
    }
    return feature.name;
  };

  const getCompetitorText = (feature: any) => {
    if (language === 'he' && feature.hebrewCompetitor) {
      return feature.hebrewCompetitor;
    }
    return feature.competitor;
  };

  const getTimelinerText = (feature: any) => {
    if (language === 'he' && feature.hebrewTimeliner) {
      return feature.hebrewTimeliner;
    }
    return feature.timeliner;
  };

  const getKeyTakeawayText = (takeaway: any) => {
    if (language === 'he' && takeaway.hebrewText) {
      return takeaway.hebrewText;
    }
    return takeaway.text;
  };
  
  return (
    <div className="space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
      <Table className="w-full border border-primary/20 rounded-xl overflow-hidden">
        <TableHeader className="sticky top-0 z-10">
          <TableRow className="hover:bg-transparent border-b border-primary/20">
            <TableHead className={`w-1/3 ${isRTL ? 'text-right' : 'text-left'} bg-background`}>
              {getFeatureTitle()}
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
                {getFeatureText(feature)}
              </TableCell>
              <TableCell className={`whitespace-pre-line ${isRTL ? 'text-right' : 'text-left'}`}>
                {typeof feature.competitor === 'boolean' ? (
                  feature.competitor ? (
                    <Check className="text-primary h-5 w-5" />
                  ) : (
                    <X className="text-red-500 h-5 w-5" />
                  )
                ) : (
                  getCompetitorText(feature)
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
                  getTimelinerText(feature)
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="p-6 glass border border-[#222222] rounded-lg">
        <h3 className={`text-xl font-bold text-white mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          {getKeyTakeawaysTitle()}
        </h3>
        <ul className={`space-y-3 text-white/80 ${isRTL ? 'text-right' : 'text-left'}`}>
          {competitor.features[0].keyTakeaways?.map((takeaway, index) => (
            <li key={index} className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="mt-1">
                {takeaway.type === 'negative' ? 
                  <X className="text-red-500 h-4 w-4" /> : 
                  <Check className="text-[#9b87f5] h-4 w-4" />
                }
              </span>
              <span className={isRTL ? 'text-right' : ''}>
                {getKeyTakeawayText(takeaway)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};