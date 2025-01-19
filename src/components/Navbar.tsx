import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavItems } from "./navbar/NavItems";
import { MobileMenu } from "./navbar/MobileMenu";
import { AuthButtons } from "./navbar/AuthButtons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageContent } from "@/hooks/usePageContent";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: content } = usePageContent('nav');
  const navigate = useNavigate();
  const location = useLocation();
  const { isRTL, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuthClick = (type: 'login' | 'signup') => {
    const prefix = language === 'en' ? '' : `/${language}`;
    navigate(`${prefix}/${type}`);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-xl shadow-lg' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className={`flex items-center justify-between w-full ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo and Nav Items Container */}
            <div className="flex items-center gap-8">
              <a 
                href={language === 'en' ? '/' : `/${language}`} 
                className={`flex-shrink-0 ${isRTL ? 'order-first' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(language === 'en' ? '/' : `/${language}`);
                }}
              >
                <img 
                  src="/lovable-uploads/1ad9d673-efdf-41ae-8a29-82d3e976a7ed.png" 
                  alt="Timeliner Logo" 
                  className="h-7"
                />
              </a>
              <div className={`hidden md:flex items-center gap-4`}>
                <NavItems 
                  content={content} 
                  handleSectionClick={handleSectionClick}
                />
              </div>
            </div>
            
            {/* Auth and Language Controls Container */}
            <div className="hidden md:flex items-center">
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <LanguageSwitcher />
                <AuthButtons content={content} handleAuthClick={handleAuthClick} />
              </div>
            </div>

            {/* Mobile menu button */}
            <MobileMenu 
              content={content}
              handleSectionClick={handleSectionClick}
              handleAuthClick={handleAuthClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};