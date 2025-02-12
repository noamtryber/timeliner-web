import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Competitor } from "./types";
import { useIsMobile } from "@/hooks/use-mobile";

interface ComparisonDesktopTableProps {
  competitor: Competitor;
  isRTL: boolean;
  language: string;
}

export const ComparisonDesktopTable = ({ competitor, isRTL, language }: ComparisonDesktopTableProps) => {
  const isMobile = useIsMobile();

  const getFeatureTitle = () => {
    switch (language) {
      case 'he':
        return 'פיצ\'רים';
      case 'ar':
        return 'الميزات';
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
      case 'ar':
        return 'النقاط الرئيسية:';
      case 'es':
        return 'Puntos clave:';
      default:
        return 'Key Takeaways:';
    }
  };

  const getFeatureText = (feature: any) => {
    if (language === 'he' && feature.hebrewName) {
      return feature.hebrewName;
    }
    if (language === 'ar' && feature.arabicName) {
      return feature.arabicName;
    }
    if (language === 'es' && feature.spanishName) {
      return feature.spanishName;
    }
    return feature.name;
  };

  const getCompetitorText = (feature: any) => {
    if (language === 'he' && feature.hebrewCompetitor) {
      return feature.hebrewCompetitor;
    }
    if (language === 'ar' && feature.arabicCompetitor) {
      return feature.arabicCompetitor;
    }
    if (language === 'es' && feature.spanishCompetitor) {
      return feature.spanishCompetitor;
    }
    return feature.competitor;
  };

  const getTimelinerText = (feature: any) => {
    if (language === 'he' && feature.hebrewTimeliner) {
      return feature.hebrewTimeliner;
    }
    if (language === 'ar' && feature.arabicTimeliner) {
      return feature.arabicTimeliner;
    }
    if (language === 'es' && feature.spanishTimeliner) {
      return feature.spanishTimeliner;
    }
    return feature.timeliner;
  };

  const getKeyTakeawayText = (takeaway: any) => {
    if (language === 'he' && takeaway.hebrewText) {
      return takeaway.hebrewText;
    }
    if (language === 'ar' && takeaway.arabicText) {
      return takeaway.arabicText;
    }
    if (language === 'es' && takeaway.spanishText) {
      return takeaway.spanishText;
    }
    return takeaway.text;
  };

  if (isMobile) {
    return (
      <div className="space-y-2 px-1" dir={isRTL ? 'rtl' : 'ltr'}>
        {competitor.features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 space-y-2 w-[85vw] mx-auto"
          >
            <h3 className={`font-medium text-lg ${isRTL ? 'text-right' : 'text-left'}`}>
              {getFeatureText(feature)}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className={`text-sm text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
                  {competitor.name}
                </p>
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  {typeof feature.competitor === 'boolean' ? (
                    feature.competitor ? (
                      <Check className="text-primary h-5 w-5" />
                    ) : (
                      <X className="text-red-500 h-5 w-5" />
                    )
                  ) : (
                    <p className="text-sm">{getCompetitorText(feature)}</p>
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <p className={`text-sm text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
                  Timeliner
                </p>
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  {typeof feature.timeliner === 'boolean' ? (
                    feature.timeliner ? (
                      <Check className="text-primary h-5 w-5" />
                    ) : (
                      <X className="text-red-500 h-5 w-5" />
                    )
                  ) : (
                    <p className="text-sm">{getTimelinerText(feature)}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-4 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 w-[85vw] mx-auto">
          <h3 className={`text-xl font-bold mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
            {getKeyTakeawaysTitle()}
          </h3>
          <ul className="space-y-3">
            {competitor.features[0].keyTakeaways?.map((takeaway, index) => (
              <li key={index} className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className={`mt-1 flex-shrink-0 ${isRTL ? 'order-last' : ''}`}>
                  {takeaway.type === 'negative' ? 
                    <X className="text-red-500 h-5 w-5" /> : 
                    <Check className="text-primary h-5 w-5" />
                  }
                </span>
                <span className={`flex-1 text-base ${isRTL ? 'text-right' : 'text-left'}`}>
                  {getKeyTakeawayText(takeaway)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

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
                  className={`h-8 object-contain ${isRTL ? 'mr-0 ml-auto' : ''}`}
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
              <TableCell className={isRTL ? 'text-right' : 'text-left'}>
                {typeof feature.competitor === 'boolean' ? (
                  feature.competitor ? (
                    <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                      <Check className="text-primary h-5 w-5" />
                    </div>
                  ) : (
                    <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                      <X className="text-red-500 h-5 w-5" />
                    </div>
                  )
                ) : (
                  getCompetitorText(feature)
                )}
              </TableCell>
              <TableCell className={`bg-primary/10 ${isRTL ? 'text-right' : 'text-left'}`}>
                {typeof feature.timeliner === 'boolean' ? (
                  feature.timeliner ? (
                    <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                      <Check className="text-primary h-5 w-5" />
                    </div>
                  ) : (
                    <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                      <X className="text-red-500 h-5 w-5" />
                    </div>
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
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          {getKeyTakeawaysTitle()}
        </h3>
        <ul className="space-y-3 text-white/80">
          {competitor.features[0].keyTakeaways?.map((takeaway, index) => (
            <li key={index} className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className={`mt-1 flex-shrink-0 ${isRTL ? 'order-last' : 'order-first'}`}>
                {takeaway.type === 'negative' ? 
                  <X className="text-red-500 h-4 w-4" /> : 
                  <Check className="text-[#9b87f5] h-4 w-4" />
                }
              </span>
              <span className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                {getKeyTakeawayText(takeaway)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};