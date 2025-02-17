
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { usePageContent } from "@/hooks/usePageContent";

interface NavItemsProps {
  handleSectionClick: (sectionId: string) => void;
  hideMainNav?: boolean;
}

export const NavItems = ({ handleSectionClick, hideMainNav }: NavItemsProps) => {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();

  if (hideMainNav) return null;

  const navItems = [
    { id: 'features', link_key: '[nav_features]', onClick: () => handleSectionClick('features') },
    { id: 'testimonials', link_key: '[nav_testimonials]', onClick: () => handleSectionClick('testimonials') },
    { id: 'pricing', link_key: '[nav_pricing]', onClick: () => handleSectionClick('pricing') },
    { id: 'blog', link_key: '[nav_blog]', onClick: () => handleSectionClick('blog') },
    { id: 'community', link_key: '[nav_community]', onClick: () => navigate('/community') }
  ];

  const items = isRTL ? [...navItems].reverse() : navItems;

  return (
    <>
      {items.map((item) => (
        <button 
          key={item.id}
          onClick={item.onClick} 
          className={`text-white hover:text-white px-3 py-2 rounded-md text-base font-medium w-full ${isRTL ? 'text-right' : 'text-left'}`}
        >
          {item.link_key}
        </button>
      ))}
    </>
  );
};
