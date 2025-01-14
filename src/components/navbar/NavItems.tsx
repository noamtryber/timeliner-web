import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

interface NavItemsProps {
  content?: any;
  handleSectionClick: (sectionId: string) => void;
  hideMainNav?: boolean;
}

export const NavItems = ({ content, handleSectionClick, hideMainNav }: NavItemsProps) => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  if (hideMainNav) return null;

  return (
    <>
      <button 
        onClick={() => handleSectionClick('features')} 
        className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium ml-8"
      >
        {language === 'he' ? 'פיצ\'רים' : (content?.features_link || 'Features')}
      </button>
      <button 
        onClick={() => handleSectionClick('testimonials')} 
        className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {content?.testimonials_link || 'Testimonials'}
      </button>
      <button 
        onClick={() => handleSectionClick('pricing')} 
        className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {content?.pricing_link || 'Pricing'}
      </button>
      <button 
        onClick={() => handleSectionClick('blog')} 
        className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {content?.blog_link || 'Blog'}
      </button>
      <button 
        onClick={() => navigate('/community')} 
        className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {content?.community_link || 'Community'}
      </button>
    </>
  );
};