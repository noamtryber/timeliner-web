import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { TimelineBackground } from "@/components/TimelineBackground";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isHebrew = language === 'he';

  const translations = {
    welcome: {
      en: "Welcome to timeliner.io",
      he: "ברוכים הבאים ל-timeliner.io"
    },
    subtitle: {
      en: "Get started - it's free. No credit card needed.",
      he: "מוזמנים להתחיל עכשיו - זה בחינם. אין צורך בכרטיס אשראי."
    },
    fullName: {
      en: "Full name",
      he: "שם מלא"
    },
    email: {
      en: "Your best email",
      he: "האימייל הטוב ביותר שלך"
    },
    password: {
      en: "Create a password",
      he: "צרו סיסמה"
    },
    passwordRequirements: {
      en: "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.",
      he: "הסיסמה חייבת להיות באנגלית ולכלול לפחות 8 תווים, כולל אותיות גדולות, אותיות קטנות, מספרים ותווים מיוחדים."
    },
    terms: {
      en: "By proceeding, you agree to the",
      he: "יחד עם ההרשמה, אתם מסכימים"
    },
    getStarted: {
      en: "Get Started",
      he: "התחילו עכשיו"
    },
    termsLink: {
      en: "Terms of Service",
      he: "לתנאי השירות"
    },
    and: {
      en: "and",
      he: "ול"
    },
    privacyLink: {
      en: "Privacy Policy",
      he: "מדיניות הפרטיות"
    }
  };

  const validatePassword = (password: string) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const errors = [];
    if (password.length < minLength) errors.push("at least 8 characters");
    if (!hasUpperCase) errors.push("an uppercase letter");
    if (!hasLowerCase) errors.push("a lowercase letter");
    if (!hasNumbers) errors.push("a number");
    if (!hasSpecialChar) errors.push("a special character");

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
        // Set session immediately after successful signup
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
          // If JSON parsing fails, use the original error message
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

  return (
    <div className="flex min-h-screen">
      <div className="w-[65%] bg-white p-8 flex items-center justify-center relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-900"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <img 
              src="/lovable-uploads/18ab741b-81db-4ae3-a1db-e2906b95b9fd.png"
              alt="Timeline Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-900">
              {translations.welcome[isHebrew ? 'he' : 'en']}
            </h2>
            <p className="mt-2 text-gray-600">
              {translations.subtitle[isHebrew ? 'he' : 'en']}
            </p>
          </div>

          <form onSubmit={handleSignUp} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder={translations.fullName[isHebrew ? 'he' : 'en']}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={translations.email[isHebrew ? 'he' : 'en']}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder={translations.password[isHebrew ? 'he' : 'en']}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-50 border-gray-300 text-gray-900"
                />
                <p className="mt-1 text-sm text-gray-500">
                  {translations.passwordRequirements[isHebrew ? 'he' : 'en']}
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-600 text-center">
              {translations.terms[isHebrew ? 'he' : 'en']}{" "}
              <Link to="/terms" className="text-primary hover:underline">
                {translations.termsLink[isHebrew ? 'he' : 'en']}
              </Link>{" "}
              {translations.and[isHebrew ? 'he' : 'en']}{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                {translations.privacyLink[isHebrew ? 'he' : 'en']}
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Creating account..." : translations.getStarted[isHebrew ? 'he' : 'en']}
            </Button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="w-[35%] bg-background relative overflow-hidden">
        <TimelineBackground />
      </div>
    </div>
  );
};

export default SignUp;
