import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { createContext, useContext } from "react";
import Index from "./pages/Index";
import { supabase } from "@/integrations/supabase/client";

// Initialize QueryClient
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
            <Index />
            <Toaster />
          </AuthContext.Provider>
        </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;