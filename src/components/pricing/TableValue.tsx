
import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TableValueProps {
  value: boolean | string;
  rowFeature?: string;
}

export const TableValue = ({ value, rowFeature }: TableValueProps) => {
  const { language, isRTL } = useLanguage();

  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-primary mx-auto" />
    ) : (
      <X className="w-5 h-5 text-red-500/70 mx-auto" />
    );
  }
  
  // Special handling for "Unlimited" text in LTR languages and specific rows
  if (!isRTL && (language === 'en' || language === 'es')) {
    const unlimitedText = language === 'es' ? 'Ilimitado' : 'Unlimited';
    if (value === unlimitedText && (
      rowFeature?.toLowerCase().includes('project') || 
      rowFeature?.toLowerCase().includes('client') ||
      rowFeature?.toLowerCase().includes('proyecto') || 
      rowFeature?.toLowerCase().includes('cliente')
    )) {
      return <span className="text-sm text-white/70 -ml-4">{value}</span>;
    }
    // For other unlimited values
    if (value === unlimitedText) {
      return <span className="text-sm text-white/70 -ml-3">{value}</span>;
    }
  }
  
  return <span className="text-sm text-white/70">{value}</span>;
};
