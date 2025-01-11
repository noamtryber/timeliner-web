import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

export type SectionType = 'hero' | 'feature' | 'benefit' | 'testimonial' | 'pricing' | 'faq' | 'frustrations' | 'nav';

interface TransformedContent {
  [key: string]: string;
}

export const usePageContent = (sectionType: SectionType, sectionId?: string) => {
  const { language } = useLanguage();
  const { toast } = useToast();

  return useQuery({
    queryKey: ['page-content', sectionType, sectionId, language],
    queryFn: async () => {
      try {
        let query = supabase
          .from('translations')
          .select('*')
          .eq('section_type', sectionType)
          .eq('language', language);

        if (sectionId) {
          query = query.eq('section_id', sectionId);
        }

        const { data: translatedContent, error } = await query;

        if (error) {
          toast({
            variant: "destructive",
            title: "Error fetching translations",
            description: error.message
          });
          throw error;
        }

        // Transform the data into a more usable format
        const transformedContent: TransformedContent = {};
        translatedContent?.forEach(item => {
          transformedContent[item.content_key] = item.content_value;
        });
        
        return transformedContent;
      } catch (error) {
        console.error('Error in usePageContent:', error);
        return {};
      }
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};