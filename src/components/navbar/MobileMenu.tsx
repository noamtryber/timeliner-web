import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { AuthButtons } from "./AuthButtons";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  content?: any;
  handleSectionClick: (sectionId: string) => void;
  handleAuthClick: (type: 'login' | 'signup') => void;
}

export const MobileMenu = ({ 
  content, 
  handleSectionClick,
  handleAuthClick 
}: MobileMenuProps) => {
  const { isRTL } = useLanguage();

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="text-white">
        <Menu className="h-6 w-6" />
      </Button>
      <div className="fixed inset-x-0 top-16 bg-background/80 backdrop-blur-sm border-b border-[#222222]/40 shadow-lg">
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="px-3 py-2">
            <LanguageSwitcher />
          </div>
          <button 
            onClick={() => handleSectionClick('features')} 
            className={`text-white block px-3 py-2 rounded-md text-base font-medium w-full ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {content?.features_link || 'Features'}
          </button>
          <button 
            onClick={() => handleSectionClick('testimonials')} 
            className={`text-white block px-3 py-2 rounded-md text-base font-medium w-full ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {content?.testimonials_link || 'Testimonials'}
          </button>
          <button 
            onClick={() => handleSectionClick('pricing')} 
            className={`text-white block px-3 py-2 rounded-md text-base font-medium w-full ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {content?.pricing_link || 'Pricing'}
          </button>
          <button 
            onClick={() => handleSectionClick('blog')} 
            className={`text-white block px-3 py-2 rounded-md text-base font-medium w-full ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {content?.blog_link || 'Blog'}
          </button>
          <button 
            onClick={() => handleSectionClick('community')} 
            className={`text-white block px-3 py-2 rounded-md text-base font-medium w-full ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {content?.community_link || 'Community'}
          </button>
          <div className="space-y-2 px-3">
            <AuthButtons content={content} handleAuthClick={handleAuthClick} />
          </div>
        </div>
      </div>
    </div>
  );
};