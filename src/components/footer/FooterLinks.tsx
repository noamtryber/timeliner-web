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
    <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
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