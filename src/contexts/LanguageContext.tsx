import { createContext, useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  // Initialize language based on URL path
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    const pathSegments = location.pathname.split('/');
    const langFromPath = pathSegments[1] as SupportedLanguage;
    const savedLanguage = localStorage.getItem('preferred-language');
    
    if (['es', 'pt', 'zh', 'ru', 'ar', 'he'].includes(langFromPath)) {
      return langFromPath;
    }
    return (savedLanguage as SupportedLanguage) || 'en';
  });
  
  const isRTL = RTL_LANGUAGES.includes(language);

  const setLanguage = (newLanguage: SupportedLanguage) => {
    console.log('Setting new language:', newLanguage);
    setLanguageState(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
    
    // Update URL based on selected language
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/');
    const isLanguagePath = ['es', 'pt', 'zh', 'ru', 'ar', 'he'].includes(pathSegments[1]);
    
    let newPath = currentPath;
    if (newLanguage === 'en') {
      // Remove language prefix for English
      newPath = isLanguagePath ? `/${pathSegments.slice(2).join('/')}` : currentPath;
    } else {
      // Add or update language prefix for other languages
      newPath = isLanguagePath 
        ? `/${newLanguage}${currentPath.substring(3)}` 
        : `/${newLanguage}${currentPath}`;
    }
    
    // Remove trailing slash if it exists
    newPath = newPath.replace(/\/$/, '');
    // Ensure there's at least a slash
    if (newPath === '') newPath = '/';
    
    navigate(newPath);

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

  // Update language when URL changes
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const langFromPath = pathSegments[1] as SupportedLanguage;
    
    if (['es', 'pt', 'zh', 'ru', 'ar', 'he'].includes(langFromPath) && langFromPath !== language) {
      setLanguageState(langFromPath);
      localStorage.setItem('preferred-language', langFromPath);
    } else if (!['es', 'pt', 'zh', 'ru', 'ar', 'he'].includes(langFromPath) && language !== 'en') {
      setLanguageState('en');
      localStorage.setItem('preferred-language', 'en');
    }
  }, [location.pathname]);

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