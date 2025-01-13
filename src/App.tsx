import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { createContext, useContext } from "react";
import Index from "./pages/Index";
import Waitlist from "./pages/Waitlist";
import { supabase } from "@/integrations/supabase/client";

// Initialize QueryClient with proper configuration for translations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

// Create auth context using our configured supabase client
const AuthContext = createContext({ session: null, supabase });
export const useAuth = () => useContext(AuthContext);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <BrowserRouter>
          <AuthContext.Provider value={{ session: null, supabase }}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/waitlist" element={<Waitlist />} />
            </Routes>
            <Toaster />
          </AuthContext.Provider>
        </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;