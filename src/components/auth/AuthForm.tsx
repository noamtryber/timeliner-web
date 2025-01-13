import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AuthFormProps {
  errorMessage: string;
}

const AuthForm = ({ errorMessage }: AuthFormProps) => {
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center mb-8 animate-fade-up">
        <img 
          src="/lovable-uploads/98b8bad0-76f5-4b50-af12-b49cd7309a55.png"
          alt="Timeliner Logo"
          className="w-48 h-auto mx-auto mb-6 animate-fade-up filter drop-shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <h1 className="text-4xl font-bold gradient-text-purple mb-3">
          Welcome to Timeliner
        </h1>
        <p className="text-white/70">
          Start for free – no credit card required
        </p>
      </div>

      {errorMessage && (
        <Alert variant="destructive" className="mb-4 animate-fade-up">
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <div className="glass p-8 rounded-lg border border-white/10 backdrop-blur-xl animate-fade-up shadow-xl">
        <SupabaseAuth 
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#9b87f5',
                  brandAccent: '#7E69AB',
                  brandButtonText: 'white',
                  defaultButtonBackground: '#1A1F2C',
                  defaultButtonBackgroundHover: '#2A2F3C',
                  inputBackground: 'transparent',
                  inputBorder: '#ffffff20',
                  inputBorderHover: '#9b87f5',
                  inputBorderFocus: '#D6BCFA',
                },
                borderWidths: {
                  buttonBorderWidth: '1px',
                  inputBorderWidth: '1px',
                },
                radii: {
                  borderRadiusButton: '8px',
                  buttonBorderRadius: '8px',
                  inputBorderRadius: '8px',
                },
              },
            },
            className: {
              container: 'w-full',
              button: 'hover:scale-[1.02] transition-transform duration-200',
              input: 'bg-card/30 backdrop-blur-sm border border-white/10',
              label: 'text-sm font-medium text-white/70',
            },
          }}
          providers={[]}
          localization={{
            variables: {
              sign_up: {
                email_label: 'Email',
                password_label: 'Create a password',
                button_label: 'Sign up',
                full_name_label: 'Full name',
              },
              sign_in: {
                email_label: 'Email',
                password_label: 'Password',
                button_label: 'Sign in',
              },
            },
          }}
          additionalData={{
            full_name: {
              required: true,
              label: 'Full name',
            },
          }}
        />
      </div>
    </div>
  );
};

export default AuthForm;