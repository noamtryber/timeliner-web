import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

interface NavItemsProps {
  content?: any;
  handleSectionClick: (sectionId: string) => void;
  hideMainNav?: boolean;
}

const translations = {
  features: {
    en: 'Features',
    es: 'Funcionalidades',
    he: 'פיצ\'רים'
  },
  testimonials: {
    en: 'Testimonials',
    es: 'Testimonios',
    he: 'המלצות'
  },
  pricing: {
    en: 'Pricing',
    es: 'Precios',
    he: 'מחירים'
  },
  blog: {
    en: 'Blog',
    es: 'Blog',
    he: 'בלוג'
  },
  community: {
    en: 'Community',
    es: 'Comunidad',
    he: 'קהילה'
  }
};

export const NavItems = ({ content, handleSectionClick, hideMainNav }: NavItemsProps) => {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();

  if (hideMainNav) return null;

  const navItems = [
    { id: 'features', onClick: () => handleSectionClick('features') },
    { id: 'testimonials', onClick: () => handleSectionClick('testimonials') },
    { id: 'pricing', onClick: () => handleSectionClick('pricing') },
    { id: 'blog', onClick: () => handleSectionClick('blog') },
    { id: 'community', onClick: () => navigate('/community') }
  ];

  const items = isRTL ? [...navItems].reverse() : navItems;

  return (
    <>
      {items.map((item) => (
        <button 
          key={item.id}
          onClick={item.onClick} 
          className="text-white hover:text-white px-3 py-2 rounded-md text-base font-medium"
        >
          {translations[item.id as keyof typeof translations][language as keyof typeof translations.features] || 
           content?.[`${item.id}_link`] || 
           item.id.charAt(0).toUpperCase() + item.id.slice(1)}
        </button>
      ))}
    </>
  );
};