import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type SectionType = 'hero' | 'feature' | 'benefit' | 'testimonial' | 'pricing' | 'faq' | 'frustrations';

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
      
      return data;
    }
  });
};