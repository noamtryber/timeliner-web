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
    const savedLanguage = localStorage.getItem('preferred-language');
    return (savedLanguage as SupportedLanguage) || 'en';
  });
  
  const queryClient = useQueryClient();
  const isRTL = RTL_LANGUAGES.includes(language);

  const setLanguage = (newLanguage: SupportedLanguage) => {
    console.log('Setting new language:', newLanguage);
    setLanguageState(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
    
    // Invalidate all translation queries
    queryClient.invalidateQueries({
      predicate: (query) => {
        const queryKey = query.queryKey[0];
        const isTranslationQuery = queryKey === 'translations';
        console.log('Checking query for invalidation:', {
          queryKey,
          isTranslationQuery
        });
        return isTranslationQuery;
      },
    });
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
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