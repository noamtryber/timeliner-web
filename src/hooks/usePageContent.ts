import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type SectionType = 'hero' | 'feature' | 'benefit' | 'testimonial' | 'pricing' | 'faq' | 'frustrations';

interface TransformedContent {
  [key: string]: any;
}

export const usePageContent = (sectionType: SectionType, sectionId?: string) => {
  return useQuery({
    queryKey: ['page-content', sectionType, sectionId],
    queryFn: async () => {
      let query = supabase
        .from('page_content')
        .select('*')
        .eq('section_type', sectionType);
      
      if (sectionId) {
        query = query.eq('section_id', sectionId);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching page content:', error);
        throw error;
      }

      // Transform the data into a more usable format
      const transformedContent: TransformedContent = {};
      data?.forEach(item => {
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