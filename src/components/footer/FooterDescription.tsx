import { useLanguage } from "@/contexts/LanguageContext";

interface FooterDescriptionProps {
  description: string;
}

export const FooterDescription = ({ description }: FooterDescriptionProps) => {
  const { isRTL } = useLanguage();
  
  return (
    <p className={`text-sm text-white max-w-md ${isRTL ? 'text-right' : ''}`}>
      {description}
    </p>
  );
};