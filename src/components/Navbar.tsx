import { Button } from "@/components/ui/button";
import { Menu, LogOut } from "lucide-react";
import { useState } from "react";
import { usePageContent } from "@/hooks/usePageContent";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/App";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { data: content, error } = usePageContent('nav', 'main-nav');
  const { session } = useAuth();
  const { isRTL } = useLanguage();
  const navigate = useNavigate();

  console.log('Navbar translations:', content);

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

  return (
    <nav className="fixed w-full z-50 top-0 animate-fade-down">
      <div className="glass mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/1ad9d673-efdf-41ae-8a29-82d3e976a7ed.png" 
                alt="Timeliner Logo" 
                className="h-7"
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className={`ml-10 flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <a href="#features" className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {content?.features_link || 'Features'}
              </a>
              <a href="#testimonials" className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {content?.testimonials_link || 'Testimonials'}
              </a>
              <a href="#pricing" className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {content?.pricing_link || 'Pricing'}
              </a>
              <a href="#blog" className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {content?.blog_link || 'Blog'}
              </a>
              <LanguageSwitcher />
              {session ? (
                <Button 
                  variant="ghost" 
                  className="text-white/70" 
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  {content?.logout_button || 'Sign out'}
                </Button>
              ) : (
                <>
                  <Button variant="ghost" className="text-white/70" onClick={handleAuthClick}>
                    {content?.login || 'Login'}
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90" onClick={handleAuthClick}>
                    {content?.sign_up || 'Sign Up'}
                  </Button>
                </>
              )}
            </div>
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
            <a href="#features" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              {content?.features_link || 'Features'}
            </a>
            <a href="#testimonials" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              {content?.testimonials_link || 'Testimonials'}
            </a>
            <a href="#pricing" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              {content?.pricing_link || 'Pricing'}
            </a>
            <a href="#blog" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              {content?.blog_link || 'Blog'}
            </a>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
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
              <>
                <Button variant="ghost" className="w-full justify-start" onClick={handleAuthClick}>
                  {content?.login || 'Login'}
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleAuthClick}>
                  {content?.sign_up || 'Sign Up'}
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};