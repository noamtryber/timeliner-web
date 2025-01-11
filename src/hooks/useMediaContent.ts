import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MediaSectionType } from "./usePageContent";

interface MediaContent {
  id: string;
  section_type: MediaSectionType;
  section_id?: string;
  media_type: string;
  media_key: string;
  media_url: string;
  created_at?: string;
  updated_at?: string;
}

export const useMediaContent = (sectionType: MediaSectionType, sectionId?: string) => {
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
      
      return data as MediaContent[];
    }
  });
};