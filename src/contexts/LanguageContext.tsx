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
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    // Try to get the language from localStorage, default to 'en'
    const savedLanguage = localStorage.getItem('preferred-language');
    return (savedLanguage as SupportedLanguage) || 'en';
  });
  
  const queryClient = useQueryClient();
  const isRTL = RTL_LANGUAGES.includes(language);

  const setLanguage = (newLanguage: SupportedLanguage) => {
    setLanguageState(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
    // Invalidate all queries to trigger refetch with new language
    queryClient.invalidateQueries();
  };

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Add RTL class to body for global styling
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};