import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";

const getTools = (isRTL: boolean) => [
  {
    feature: isRTL ? 'ניהול פרויקטים' : 'Project Management',
    replaces: 'Monday.com',
    cost: isRTL ? '$30 לחודש' : '$30/month',
  },
  {
    feature: isRTL ? 'זרימת עבודה לתיקונים' : 'Revisions Workflow',
    replaces: 'Frame.io',
    cost: isRTL ? '$15 לחודש/למשתמש' : '$15/month/user',
  },
  {
    feature: isRTL ? 'פורטלים ללקוחות' : 'Client Portals',
    replaces: 'Client Portal',
    cost: isRTL ? '$19 לחודש' : '$19/month',
  },
  {
    feature: isRTL ? 'אחסון בענן' : 'Cloud Storage',
    replaces: 'Dropbox',
    cost: isRTL ? '$10 לחודש עבור 1TB' : '$10/month for 1TB',
  },
  {
    feature: isRTL ? 'חוזים ומסמכים משפטיים' : 'Contracts & Legal Docs',
    replaces: 'Docusign',
    cost: isRTL ? '$20 לחודש' : '$20/month',
  },
  {
    feature: isRTL ? 'אוטומציה וזרימות עבודה' : 'Automation & Workflows',
    replaces: 'Zapier',
    cost: isRTL ? '$29 לחודש' : '$29/month',
  },
  {
    feature: isRTL ? 'קבלות והפקת חשבוניות' : 'Receipt & Invoicing',
    replaces: 'QuickBooks',
    cost: isRTL ? '$15-$25 לחודש' : '$15-$25/month',
  },
];

export const ComparisonTable = () => {
  const isMobile = useIsMobile();
  const { isRTL } = useLanguage();
  const tools = getTools(isRTL);

  if (isMobile) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-8 space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
          
          {tools.map((tool, index) => (
            <div key={index} className="relative glass border border-white/10 p-4 rounded-lg">
              <div className="flex flex-col space-y-2">
                <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <h3 className={`font-medium text-white ${isRTL ? 'text-right' : 'text-left'}`}>{tool.feature}</h3>
                  <Check className={`text-primary ${isRTL ? 'order-first' : ''}`} />
                </div>
                <div className={`grid grid-cols-2 gap-2 text-sm text-white/70`}>
                  <div className={isRTL ? 'text-right' : 'text-left'}>{isRTL ? ':מחליף' : 'Replaces:'}</div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>{tool.replaces}</div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>{isRTL ? ':עלות' : 'Their Cost:'}</div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>{tool.cost}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="relative glass border border-white/10 p-4 rounded-lg mt-4">
            <div className={`grid grid-cols-2 gap-2`}>
              <div className={`font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'עלות כוללת' : 'Total Cost'}
              </div>
              <div className={`text-white/70 font-bold ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? '$138+ לחודש' : '$138+/month'}
              </div>
              <div className={`font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>Timeliner</div>
              <div className={`font-bold text-primary ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? '$19-$39 לחודש' : '$19-$39/month'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 overflow-hidden rounded-lg">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
        
        <Table className="relative glass border border-white/10">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className={`text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'פיצ\'רים' : 'Features'}
              </TableHead>
              <TableHead className={`text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'מחליף' : 'Replaces'}
              </TableHead>
              <TableHead className={`text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'עלות כלים אחרים' : "Other Tools' Cost"}
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
                {isRTL ? 'עלות כוללת' : 'Total Cost'}
              </TableCell>
              <TableCell className={`text-white/70 font-bold ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'כלים אחרים: $138+ לחודש' : '$138+/month'}
              </TableCell>
              <TableCell className="text-center font-bold text-primary">
                {isRTL ? '$19-$39 לחודש' : '$19-$39/month'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};