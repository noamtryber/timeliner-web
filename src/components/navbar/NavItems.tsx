import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavItemsProps {
  content?: Record<string, string>;
  handleSectionClick: (section: string) => void;
}

export const NavItems = ({ content, handleSectionClick }: NavItemsProps) => {
  const navigate = useNavigate();
  const { isRTL, language } = useLanguage();

  const getTranslatedText = (key: string) => {
    if (!content) return key;
    return content[`nav_${key}`] || key;
  };

  const getHebrewText = (key: string) => {
    switch (key) {
      case 'features':
        return 'פיצ\'רים';
      case 'testimonials':
        return 'המלצות';
      case 'pricing':
        return 'תמחור';
      case 'blog':
        return 'בלוג';
      case 'community':
        return 'קהילה';
      default:
        return key;
    }
  };

  const navItems = [
    { id: 'features', onClick: () => handleSectionClick('features') },
    { id: 'testimonials', onClick: () => handleSectionClick('testimonials') },
    { id: 'pricing', onClick: () => handleSectionClick('pricing') },
    { id: 'blog', onClick: () => navigate(`${language === 'en' ? '' : `/${language}`}/blog`) },
    { id: 'community', onClick: () => navigate(`${language === 'en' ? '' : `/${language}`}/community`) }
  ];

  return (
    <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
      {navItems.map((item) => (
        <button 
          key={item.id}
          onClick={item.onClick} 
          className="text-white/70 hover:text-white transition-colors"
        >
          {language === 'he' 
            ? getHebrewText(item.id)
            : getTranslatedText(item.id) || 
              item.id.charAt(0).toUpperCase() + item.id.slice(1)}
        </button>
      ))}
    </div>
  );
};