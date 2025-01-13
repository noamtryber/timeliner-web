import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import ThreeBackground from "@/components/auth/ThreeBackground";
import AuthForm from "@/components/auth/AuthForm";
import { getErrorMessage } from "@/utils/auth";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if user is already authenticated
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/waitlist");
      }
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate("/waitlist");
      }
      if (event === 'USER_UPDATED') {
        const { error } = await supabase.auth.getSession();
        if (error) {
          setErrorMessage(getErrorMessage(error));
        }
      }
      if (event === 'SIGNED_OUT') {
        setErrorMessage("");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 z-50 text-white/70 hover:text-white"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <ThreeBackground />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <AuthForm errorMessage={errorMessage} />
      </div>
    </div>
  );
};

export default Auth;