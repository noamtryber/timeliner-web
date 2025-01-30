import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
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
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const { toast } = useToast();
  const { data: content, error } = usePageContent('nav', 'main-nav');
  const { isRTL } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const hideMainNav = location.pathname === '/blog' || location.pathname === '/community';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not at the top
        setVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <nav className={`fixed w-full z-[9999] top-0 transition-transform duration-300 ${
      visible ? 'translate-y-0 animate-fade-down' : '-translate-y-full'
    } md:px-[110px] px-4`}>
      <div className="bg-background/60 backdrop-blur-xl border border-[#222222]/20 mx-auto rounded-full text-[1.15em] my-4">
        <div className={`flex items-center justify-between h-16 px-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo and Nav Items Container */}
          <div className={`flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/1ad9d673-efdf-41ae-8a29-82d3e976a7ed.png" 
                alt="Timeliner Logo" 
                className="h-7"
              />
            </a>
            <div className={`hidden md:flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : 'space-x-4'}`}>
              <NavItems 
                content={content} 
                handleSectionClick={handleSectionClick}
                hideMainNav={hideMainNav}
              />
            </div>
          </div>
          
          {/* Auth and Language Controls Container */}
          <div className={`hidden md:flex items-center ${isRTL ? 'flex-row-reverse space-x-4 space-x-reverse' : 'space-x-4'}`}>
            <LanguageSwitcher />
            <AuthButtons content={content} handleAuthClick={handleAuthClick} />
          </div>
          
          {/* Mobile Menu Button */}
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