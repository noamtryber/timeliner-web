import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

export type SectionType = 'hero' | 'feature' | 'benefit' | 'testimonial' | 'pricing' | 'faq' | 'frustrations' | 'nav';

interface TransformedContent {
  [key: string]: any;
}

export const usePageContent = (sectionType: SectionType, sectionId?: string) => {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ['page-content', sectionType, sectionId, language],
    queryFn: async () => {
      const { data: translatedContent, error } = await supabase
        .from('translations')
        .select('*')
        .eq('section_type', sectionType)
        .eq('language', language);

      if (sectionId) {
        // Additional filter for section_id if provided
        const filteredContent = translatedContent?.filter(item => item.section_id === sectionId);
        translatedContent?.splice(0, translatedContent.length, ...filteredContent);
      }

      if (error) {
        console.error('Error fetching translations:', error);
        throw error;
      }

      // Transform the data into a more usable format
      const transformedContent: TransformedContent = {};
      translatedContent?.forEach(item => {
        transformedContent[item.content_key] = item.content_value;
      });
      
      return transformedContent;
    }
  });
};