import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "@/App";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AuthButtonsProps {
  content?: any;
  handleAuthClick: () => void;
}

export const AuthButtons = ({ content, handleAuthClick }: AuthButtonsProps) => {
  const { session } = useAuth();
  const { toast } = useToast();

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

  if (session) {
    return (
      <Button 
        variant="ghost" 
        className="text-white/70" 
        onClick={handleLogout}
      >
        <LogOut className="h-4 w-4 mr-2" />
        {content?.logout_button || 'Sign out'}
      </Button>
    );
  }

  return (
    <>
      <Button variant="ghost" className="text-white/70" onClick={handleAuthClick}>
        {content?.login || 'Login'}
      </Button>
      <Button className="bg-primary hover:bg-primary/90" onClick={handleAuthClick}>
        {content?.sign_up || 'Start Free Trial'}
      </Button>
    </>
  );
};