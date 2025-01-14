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
  const { language } = useLanguage();
  const navigate = useNavigate();

  if (hideMainNav) return null;

  return (
    <>
      <button 
        onClick={() => handleSectionClick('features')} 
        className="text-white hover:text-white px-3 py-2 rounded-md text-[1.15em] font-medium ml-8"
      >
        {translations.features[language as keyof typeof translations.features] || content?.features_link || 'Features'}
      </button>
      <button 
        onClick={() => handleSectionClick('testimonials')} 
        className="text-white hover:text-white px-3 py-2 rounded-md text-[1.15em] font-medium"
      >
        {translations.testimonials[language as keyof typeof translations.testimonials] || content?.testimonials_link || 'Testimonials'}
      </button>
      <button 
        onClick={() => handleSectionClick('pricing')} 
        className="text-white hover:text-white px-3 py-2 rounded-md text-[1.15em] font-medium"
      >
        {translations.pricing[language as keyof typeof translations.pricing] || content?.pricing_link || 'Pricing'}
      </button>
      <button 
        onClick={() => handleSectionClick('blog')} 
        className="text-white hover:text-white px-3 py-2 rounded-md text-[1.15em] font-medium"
      >
        {translations.blog[language as keyof typeof translations.blog] || content?.blog_link || 'Blog'}
      </button>
      <button 
        onClick={() => handleSectionClick('community')} 
        className="text-white hover:text-white px-3 py-2 rounded-md text-[1.15em] font-medium"
      >
        {translations.community[language as keyof typeof translations.community] || content?.community_link || 'Community'}
      </button>
    </>
  );
};