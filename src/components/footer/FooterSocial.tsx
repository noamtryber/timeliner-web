import { ArrowUp } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterSocialProps {
  instagramUrl: string;
  youtubeUrl: string;
}

export const FooterSocial = ({ instagramUrl, youtubeUrl }: FooterSocialProps) => {
  const { isRTL } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`flex flex-col ${isRTL ? 'md:items-start' : 'md:items-end'} space-y-6`}>
      <SocialLinks 
        instagramUrl={instagramUrl}
        youtubeUrl={youtubeUrl}
      />
      <button
        onClick={scrollToTop}
        className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} space-x-2 rtl:space-x-reverse text-sm text-gray-400 hover:text-white transition-colors`}
      >
        <span>{isRTL ? 'חזרה למעלה' : 'Back to top'}</span>
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};