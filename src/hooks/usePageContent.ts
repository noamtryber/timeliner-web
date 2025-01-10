import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

export type SectionType = 'hero' | 'feature' | 'benefit' | 'testimonial' | 'pricing' | 'faq' | 'frustrations';

interface TransformedContent {
  [key: string]: any;
}

interface BaseContent {
  id: string;
  content_key: string;
  content_value: string;
  section_type: string;
  section_id: string | null;
  created_at: string | null;
  updated_at: string | null;
}

interface TranslationContent extends BaseContent {
  language: 'en' | 'es' | 'pt' | 'zh' | 'ru' | 'ar' | 'he';
}

interface PageContent extends BaseContent {
  section_type: SectionType;
}

export const usePageContent = (sectionType: SectionType, sectionId?: string) => {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ['page-content', sectionType, sectionId, language],
    queryFn: async () => {
      // First try to get content in the selected language
      let query = supabase
        .from('translations')
        .select('*')
        .eq('section_type', sectionType)
        .eq('language', language);
      
      if (sectionId) {
        query = query.eq('section_id', sectionId);
      }
      
      let { data: translatedContent, error: translationError } = await query;

      // If no translation found or error, fallback to default content
      if (!translatedContent?.length || translationError) {
        const { data: defaultContent, error } = await supabase
          .from('page_content')
          .select('*')
          .eq('section_type', sectionType);
        
        if (sectionId) {
          query = query.eq('section_id', sectionId);
        }

        if (error) {
          console.error('Error fetching page content:', error);
          throw error;
        }

        translatedContent = defaultContent;
      }

      // Transform the data into a more usable format
      const transformedContent: TransformedContent = {};
      translatedContent?.forEach(item => {
        if (item.content_key.includes('.')) {
          // Handle nested objects (e.g., "cards.0.title")
          const [parent, index, child] = item.content_key.split('.');
          if (!transformedContent[parent]) {
            transformedContent[parent] = [];
          }
          if (!transformedContent[parent][parseInt(index)]) {
            transformedContent[parent][parseInt(index)] = {};
          }
          transformedContent[parent][parseInt(index)][child] = item.content_value;
        } else {
          // Handle flat keys
          transformedContent[item.content_key] = item.content_value;
        }
      });
      
      return transformedContent;
    }
  });
};