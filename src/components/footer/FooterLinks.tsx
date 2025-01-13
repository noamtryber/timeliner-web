import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterLinksProps {
  designer: string;
  instagramUrl: string;
  poweredBy: string;
}

export const FooterLinks = ({ designer, instagramUrl, poweredBy }: FooterLinksProps) => {
  const { isRTL } = useLanguage();
  
  return (
    <div className={`flex items-center ${isRTL ? 'space-x-reverse justify-end' : ''} space-x-2 text-white`}>
      <span>{isRTL ? '' : 'Designed by '}</span>
      <Link 
        to={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white/80 transition-colors"
      >
        {designer}
      </Link>
      <span>|</span>
      <span>Powered by {poweredBy}</span>
    </div>
  );
};