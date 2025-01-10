import { createContext, useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export type SupportedLanguage = 'en' | 'es' | 'pt' | 'zh' | 'ru' | 'ar' | 'he';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  isRTL: false,
});

export const useLanguage = () => useContext(LanguageContext);

const RTL_LANGUAGES = ['ar', 'he'];

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');
  const queryClient = useQueryClient();
  const isRTL = RTL_LANGUAGES.includes(language);

  const setLanguage = (newLanguage: SupportedLanguage) => {
    setLanguageState(newLanguage);
    // Invalidate all queries to trigger refetch with new language
    queryClient.invalidateQueries();
  };

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};