import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import ThreeBackground from "@/components/auth/ThreeBackground";
import AuthForm from "@/components/auth/AuthForm";
import { getErrorMessage } from "@/utils/auth";

const Auth = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate("/");
      }
      if (event === 'USER_UPDATED') {
        const checkSession = async () => {
          const { error } = await supabase.auth.getSession();
          if (error) {
            setErrorMessage(getErrorMessage(error));
          }
        };
        checkSession();
      }
      if (event === 'SIGNED_OUT') {
        setErrorMessage("");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      <ThreeBackground />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <AuthForm errorMessage={errorMessage} />
      </div>
    </div>
  );
};

export default Auth;