
import { supabase } from "@/integrations/supabase/client";
import { SectionType } from "@/hooks/usePageContent";
import { SupportedLanguage } from "@/contexts/LanguageContext";

interface CacheEntry {
  translations: Record<string, string>;
  timestamp: number;
  version: string;
}

interface TranslationCache {
  [key: string]: CacheEntry;
}

const CACHE_KEY = 'translations_cache';
const CACHE_VERSION_KEY = 'translations_cache_version';
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export const getStoredCache = (): TranslationCache => {
  const cached = localStorage.getItem(CACHE_KEY);
  return cached ? JSON.parse(cached) : {};
};

export const getCacheVersion = (language: string): string | null => {
  const versions = localStorage.getItem(CACHE_VERSION_KEY);
  if (!versions) return null;
  return JSON.parse(versions)[language] || null;
};

export const setCacheVersion = (language: string, version: string) => {
  const versions = localStorage.getItem(CACHE_VERSION_KEY);
  const currentVersions = versions ? JSON.parse(versions) : {};
  currentVersions[language] = version;
  localStorage.setItem(CACHE_VERSION_KEY, JSON.stringify(currentVersions));
};

export const setCache = (key: string, translations: Record<string, string>, version: string) => {
  const cache = getStoredCache();
  cache[key] = {
    translations,
    timestamp: Date.now(),
    version
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
};

export const clearCache = () => {
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(CACHE_VERSION_KEY);
};

export const isCacheValid = (cacheEntry: CacheEntry, serverVersion: string): boolean => {
  const age = Date.now() - cacheEntry.timestamp;
  return age < CACHE_DURATION && cacheEntry.version === serverVersion;
};

export const getCacheKey = (sectionType: string, sectionId: string | undefined, language: string) => {
  return `${sectionType}:${sectionId || 'default'}:${language}`;
};

export const detectBrowserLanguage = (): SupportedLanguage => {
  const storedLang = localStorage.getItem('preferred-language') as SupportedLanguage;
  if (storedLang) return storedLang;

  const browserLang = navigator.language.split('-')[0];
  const supportedLanguages: SupportedLanguage[] = ['en', 'es', 'ar', 'he'];
  
  return supportedLanguages.includes(browserLang as SupportedLanguage) 
    ? browserLang as SupportedLanguage 
    : 'en';
};

export const fetchTranslations = async (
  sectionType: SectionType,
  sectionId: string | undefined,
  language: SupportedLanguage
): Promise<Record<string, string>> => {
  const cacheKey = getCacheKey(sectionType, sectionId, language);
  const cache = getStoredCache();
  const cachedData = cache[cacheKey];

  // Check cache version - using maybeSingle() instead of single()
  const { data: versionData, error: versionError } = await supabase
    .from('translation_cache_versions')
    .select('last_updated')
    .eq('language', language)
    .maybeSingle();

  if (versionError) {
    console.error('Error fetching cache version:', versionError);
  }

  const serverVersion = versionData?.last_updated;

  // Return cached data if valid
  if (cachedData && serverVersion && isCacheValid(cachedData, serverVersion)) {
    console.log('Using cached translations for:', cacheKey);
    return cachedData.translations;
  }

  // Initialize cache version if it doesn't exist
  if (!serverVersion) {
    const { error: insertError } = await supabase
      .from('translation_cache_versions')
      .insert({ language: language });
    
    if (insertError) {
      console.error('Error initializing cache version:', insertError);
    }
  }

  // Fetch fresh data
  console.log('Fetching fresh translations for:', cacheKey);
  const { data: translatedContent, error } = await supabase
    .from('translations')
    .select('*')
    .eq('section_type', sectionType)
    .eq('language', language);

  if (error) {
    console.error('Translation fetch error:', error);
    throw error;
  }

  // Transform the data
  const transformedContent: Record<string, string> = {};
  translatedContent?.forEach(item => {
    transformedContent[item.content_key] = item.content_value;
  });

  // Update cache if we have a version
  const currentVersion = serverVersion || new Date().toISOString();
  setCache(cacheKey, transformedContent, currentVersion);
  setCacheVersion(language, currentVersion);

  return transformedContent;
};
