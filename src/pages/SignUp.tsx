import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress"; // Add Progress import
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { TimelineBackground } from "@/components/TimelineBackground";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isHebrew = language === 'he';
  const isSpanish = language === 'es';
  const isMobile = useIsMobile();

  const translations = {
    welcome: {
      en: "Welcome to timeliner.io",
      he: "ברוכים הבאים ל-timeliner.io",
      es: "Bienvenido a timeliner.io"
    },
    subtitle: {
      en: "Get started - it's free. No credit card needed.",
      he: "מוזמנים להתחיל עכשיו - זה בחינם. אין צורך בכרטיס אשראי.",
      es: "Comienza - es gratis. No se necesita tarjeta de crédito."
    },
    fullName: {
      en: "Full name",
      he: "שם מלא",
      es: "Nombre completo"
    },
    email: {
      en: "Your best email",
      he: "האימייל הטוב ביותר שלך",
      es: "Tu mejor correo electrónico"
    },
    password: {
      en: "Create a password",
      he: "צרו סיסמה",
      es: "Crea una contraseña"
    },
    passwordRequirements: {
      en: "Password must be at least 6 characters long.",
      he: "הסיסמה חייבת להכיל לפחות 6 תווים.",
      es: "La contraseña debe tener al menos 6 caracteres."
    },
    terms: {
      en: "By proceeding, you agree to the",
      he: "יחד עם ההרשמה, אתם מסכימים",
      es: "Al continuar, aceptas los"
    },
    getStarted: {
      en: "Get Started",
      he: "התחילו עכשיו",
      es: "Comenzar"
    },
    termsLink: {
      en: "Terms of Service",
      he: "לתנאי השירות",
      es: "Términos de Servicio"
    },
    and: {
      en: "and",
      he: "ול",
      es: "y la"
    },
    privacyLink: {
      en: "Privacy Policy",
      he: "מדיניות הפרטיות",
      es: "Política de Privacidad"
    },
    alreadyHaveAccount: {
      en: "Already have an account?",
      he: "כבר יש לך חשבון?",
      es: "¿Ya tienes una cuenta?"
    },
    logIn: {
      en: "Log in",
      he: "התחברות",
      es: "Iniciar sesión"
    },
    creatingAccount: {
      en: "Creating account...",
      he: "יוצר חשבון...",
      es: "Creando cuenta..."
    }
  };

  const calculatePasswordStrength = (password: string) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < 6) return 0;

    let strength = 0;
    
    // Base 20% for minimum length of 6
    if (password.length >= 6) strength += 20;
    
    // Additional 20% for length of 8 or more
    if (password.length >= 8) strength += 20;

    // 20% for having uppercase or lowercase
    if (hasUpperCase || hasLowerCase) strength += 20;

    // 20% for having numbers
    if (hasNumbers) strength += 20;

    // 20% for having special characters
    if (hasSpecialChar) strength += 20;

    return strength;
  };

  useEffect(() => {
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);
  }, [password]);

  const validatePassword = (password: string) => {
    const minLength = 6;
    const errors = [];
    
    if (password.length < minLength) {
      errors.push("at least 6 characters");
    }

    return errors;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      toast({
        variant: "destructive",
        title: "Invalid Password",
        description: `Password must contain ${passwordErrors.join(", ")}`,
      });
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      if (data.user) {
        const { data: sessionData } = await supabase.auth.getSession();
        if (sessionData.session) {
          toast({
            title: "Success!",
            description: "Account created successfully.",
          });
          console.log("Redirecting to waitlist...");
          navigate("/waitlist", { replace: true });
        }
      }
    } catch (error: any) {
      let errorMessage = error.message;
      
      if (error.error_type === "http_client_error" && error.body) {
        try {
          const bodyError = JSON.parse(error.body);
          if (bodyError.code === "weak_password") {
            errorMessage = "Please choose a stronger password. This password is commonly used and easy to guess.";
          }
        } catch (e) {
        }
      }
      
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const getStrengthColor = (strength: number) => {
    if (strength < 40) return "bg-red-500";
    if (strength < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="flex min-h-screen">
      <div className={`${isMobile ? 'w-full' : 'w-[65%]'} bg-white p-4 md:p-8 flex items-center justify-center relative`}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-900"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="max-w-md w-full space-y-6 md:space-y-8">
          <div className="text-center">
            <img 
              src="/lovable-uploads/18ab741b-81db-4ae3-a1db-e2906b95b9fd.png"
              alt="Timeline Icon"
              className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {translations.welcome[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              {translations.subtitle[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}
            </p>
          </div>

          <form onSubmit={handleSignUp} className="mt-6 md:mt-8 space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder={translations.fullName[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={translations.email[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder={translations.password[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900"
                />
                {password && (
                  <div className="mt-2 space-y-1">
                    <Progress value={passwordStrength} className="h-2" />
                    <p className="text-xs text-gray-500">
                      {passwordStrength === 100 ? (
                        "Strong password"
                      ) : passwordStrength >= 60 ? (
                        "Good password"
                      ) : (
                        "Weak password"
                      )}
                    </p>
                  </div>
                )}
                <p className="mt-1 text-xs md:text-sm text-gray-500">
                  {translations.passwordRequirements[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}
                </p>
              </div>
            </div>

            <div className="text-xs md:text-sm text-gray-600 text-center">
              {translations.terms[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}{" "}
              <Link to="/terms" className="text-primary hover:underline">
                {translations.termsLink[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}
              </Link>{" "}
              {translations.and[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                {translations.privacyLink[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? translations.creatingAccount[isSpanish ? 'es' : isHebrew ? 'he' : 'en'] : translations.getStarted[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}
            </Button>

            <div className="text-center text-xs md:text-sm text-gray-600">
              {translations.alreadyHaveAccount[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}{" "}
              <Link to="/login" className="text-primary hover:underline">
                {translations.logIn[isSpanish ? 'es' : isHebrew ? 'he' : 'en']}
              </Link>
            </div>
          </form>
        </div>
      </div>

      {!isMobile && (
        <div className="w-[35%] bg-background relative overflow-hidden">
          <TimelineBackground />
        </div>
      )}
    </div>
  );
};

export default SignUp;
