
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

interface AuthButtonsProps {
  handleAuthClick?: () => void;
  content?: Record<string, string>;
}

export const AuthButtons = ({ handleAuthClick, content }: AuthButtonsProps) => {
  const { session } = useAuth();
  const { toast } = useToast();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "[error_signing_out]",
        description: error.message
      });
    }
  };

  const handleClick = () => {
    const prefix = language === 'en' ? '' : `/${language}`;
    navigate(`${prefix}/signup`);
  };

  if (session) {
    return (
      <Button 
        variant="ghost" 
        className="text-white text-base" 
        onClick={handleLogout}
      >
        <LogOut className="h-4 w-4 mr-2" />
        [auth_sign_out]
      </Button>
    );
  }

  return (
    <>
      <Button variant="ghost" className="text-white text-base" onClick={handleClick}>
        [auth_login]
      </Button>
      <Button className="bg-primary hover:bg-primary/90 text-base" onClick={handleClick}>
        [auth_sign_up]
      </Button>
    </>
  );
};
