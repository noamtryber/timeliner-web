import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePageContent } from "@/hooks/usePageContent";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavItems } from "./navbar/NavItems";
import { AuthButtons } from "./navbar/AuthButtons";
import { MobileMenu } from "./navbar/MobileMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { data: content, error } = usePageContent('nav', 'main-nav');
  const { isRTL } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const hideMainNav = location.pathname === '/blog' || location.pathname === '/community';

  if (error) {
    toast({
      variant: "destructive",
      title: "Error loading navigation content",
      description: "Please try refreshing the page"
    });
  }

  const handleAuthClick = () => {
    navigate('/signup');
  };

  const handleSectionClick = (sectionId: string) => {
    if (sectionId === 'blog') {
      navigate('/blog');
      setIsOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 animate-fade-down">
      <div className="bg-background/80 backdrop-blur-sm border-b border-[#222222]/40 mx-auto px-4 sm:px-6 lg:px-8 text-[1.15em]">
        <div className={`flex items-center justify-between h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/1ad9d673-efdf-41ae-8a29-82d3e976a7ed.png" 
                alt="Timeliner Logo" 
                className="h-7"
              />
            </a>
            <div className="hidden md:flex items-center space-x-4">
              <NavItems 
                content={content} 
                handleSectionClick={handleSectionClick}
                hideMainNav={hideMainNav}
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <AuthButtons content={content} handleAuthClick={handleAuthClick} />
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu 
        content={content}
        isOpen={isOpen}
        hideMainNav={hideMainNav}
        handleSectionClick={handleSectionClick}
        handleAuthClick={handleAuthClick}
      />
    </nav>
  );
};