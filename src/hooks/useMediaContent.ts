import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { SectionType } from "./usePageContent";

export const useMediaContent = (sectionType: SectionType, sectionId?: string) => {
  return useQuery({
    queryKey: ['media-content', sectionType, sectionId],
    queryFn: async () => {
      let query = supabase
        .from('media_content')
        .select('*')
        .eq('section_type', sectionType);
      
      if (sectionId) {
        query = query.eq('section_id', sectionId);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching media content:', error);
        throw error;
      }
      
      return data;
    }
  });
};