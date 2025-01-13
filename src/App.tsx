import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { createContext, useContext, useEffect, useState } from "react";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Waitlist from "./pages/Waitlist";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import { supabase } from "@/integrations/supabase/client";
import type { Session } from "@supabase/supabase-js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const AuthContext = createContext<{
  session: Session | null;
  supabase: typeof supabase;
}>({ session: null, supabase });
export const useAuth = () => useContext(AuthContext);

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      console.log("Auth state changed:", _event, session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <BrowserRouter>
          <AuthContext.Provider value={{ session, supabase }}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/community" element={<Community />} />
            </Routes>
            <Toaster />
          </AuthContext.Provider>
        </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;