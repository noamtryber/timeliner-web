import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

interface AuthButtonsProps {
  content?: any;
  handleAuthClick: () => void;
}

const translations = {
  'start_free_trial': {
    'en': 'Start Free Trial',
    'es': 'Prueba Gratuita',
    'pt': 'Iniciar Teste Gratuito',
    'zh': '开始免费试用',
    'ru': 'Начать Бесплатный Период',
    'ar': 'ابدأ النسخة التجريبية المجانية',
    'he': 'התחילו היום בחינם'
  },
  'login': {
    'en': 'Login',
    'es': 'Iniciar Sesión',
    'pt': 'Entrar',
    'zh': '登录',
    'ru': 'Войти',
    'ar': 'تسجيل الدخول',
    'he': 'התחברות'
  },
  'sign_out': {
    'en': 'Sign out',
    'es': 'Cerrar Sesión',
    'pt': 'Sair',
    'zh': '退出',
    'ru': 'Выйти',
    'ar': 'تسجيل خروج',
    'he': 'התנתק'
  }
};

export const AuthButtons = ({ content, handleAuthClick }: AuthButtonsProps) => {
  const { session } = useAuth();
  const { toast } = useToast();
  const { language } = useLanguage();

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
        className="text-white text-base" 
        onClick={handleLogout}
      >
        <LogOut className="h-4 w-4 mr-2" />
        {translations.sign_out[language] || content?.logout_button}
      </Button>
    );
  }

  return (
    <>
      <Button variant="ghost" className="text-white text-base" onClick={handleAuthClick}>
        {translations.login[language] || content?.login}
      </Button>
      <Button className="bg-primary hover:bg-primary/90 text-base" onClick={handleAuthClick}>
        {translations.start_free_trial[language] || content?.sign_up}
      </Button>
    </>
  );
};