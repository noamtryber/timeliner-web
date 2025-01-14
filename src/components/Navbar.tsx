import { Button } from "@/components/ui/button";
import { Menu, LogOut } from "lucide-react";
import { useState } from "react";
import { usePageContent } from "@/hooks/usePageContent";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/App";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { data: content, error } = usePageContent('nav', 'main-nav');
  const { session } = useAuth();
  const { isRTL, language } = useLanguage();
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

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: error.message
      });
    }
  };

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

  const renderNavItems = () => {
    const leftItems = !hideMainNav ? [
      <button 
        key="features" 
        onClick={() => handleSectionClick('features')} 
        className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium ml-8"
      >
        {language === 'he' ? 'פיצ\'רים' : (content?.features_link || 'Features')}
      </button>,
      <button 
        key="testimonials" 
        onClick={() => handleSectionClick('testimonials')} 
        className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {content?.testimonials_link || 'Testimonials'}
      </button>,
      <button 
        key="pricing" 
        onClick={() => handleSectionClick('pricing')} 
        className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {content?.pricing_link || 'Pricing'}
      </button>,
      <button 
        key="blog" 
        onClick={() => handleSectionClick('blog')} 
        className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {content?.blog_link || 'Blog'}
      </button>,
      <button 
        key="community" 
        onClick={() => navigate('/community')} 
        className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {content?.community_link || 'Community'}
      </button>
    ] : [];

    const rightItems = [
      !hideMainNav && <LanguageSwitcher key="lang" />,
      <Button key="login" variant="ghost" className="text-white/70" onClick={handleAuthClick}>
        {content?.login || 'Login'}
      </Button>,
      <Button key="signup" className="bg-primary hover:bg-primary/90" onClick={handleAuthClick}>
        {content?.sign_up || 'Start Free Trial'}
      </Button>
    ].filter(Boolean);

    if (session) {
      rightItems.splice(1, 2, 
        <Button 
          key="logout"
          variant="ghost" 
          className="text-white/70" 
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          {content?.logout_button || 'Sign out'}
        </Button>
      );
    }

    return { leftItems, rightItems };
  };

  const { leftItems, rightItems } = renderNavItems();

  return (
    <nav className="fixed w-full z-50 top-0 animate-fade-down">
      <div className="glass mx-auto px-4 sm:px-6 lg:px-8">
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
              {isRTL ? [...leftItems].reverse() : leftItems}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {isRTL ? [...rightItems].reverse() : rightItems}
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="glass md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isRTL ? 'text-right' : 'text-left'}`}>
            {!hideMainNav && (
              <>
                <button 
                  onClick={() => handleSectionClick('features')} 
                  className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {language === 'he' ? 'פיצ\'רים' : (content?.features_link || 'Features')}
                </button>
                <button 
                  onClick={() => handleSectionClick('testimonials')} 
                  className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {content?.testimonials_link || 'Testimonials'}
                </button>
                <button 
                  onClick={() => handleSectionClick('pricing')} 
                  className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {content?.pricing_link || 'Pricing'}
                </button>
                <button 
                  onClick={() => handleSectionClick('blog')} 
                  className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {content?.blog_link || 'Blog'}
                </button>
                <button 
                  onClick={() => handleSectionClick('community')} 
                  className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {content?.community_link || 'Community'}
                </button>
                <div className="px-3 py-2">
                  <LanguageSwitcher />
                </div>
              </>
            )}
            {session ? (
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                {content?.logout_button || 'Sign out'}
              </Button>
            ) : (
              <div className="space-y-2 px-3">
                <Button variant="secondary" className="w-full text-center" onClick={handleAuthClick}>
                  {content?.login || 'Login'}
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleAuthClick}>
                  {content?.sign_up || 'Start Free Trial'}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
