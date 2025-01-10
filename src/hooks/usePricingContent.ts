import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PricingContent {
  title: string;
  subtitle: string;
  price?: string;
  base_price?: string;
  base_storage?: string;
  price_subtitle?: string;
  button_text: string;
  button_link: string;
  video_title?: string;
  video_description?: string;
  features: string[];
}

export const usePricingContent = () => {
  return useQuery({
    queryKey: ['pricing-content'],
    queryFn: async () => {
      const { data: contentData, error: contentError } = await supabase
        .from('page_content')
        .select('*')
        .eq('section_type', 'pricing');

      if (contentError) throw contentError;

      const { data: mediaData, error: mediaError } = await supabase
        .from('media_content')
        .select('*')
        .eq('section_type', 'pricing');

      if (mediaError) throw mediaError;

      // Transform the data into a more usable format
      const content: Record<string, PricingContent> = {};
      
      contentData.forEach((item) => {
        const planId = item.section_id;
        if (!content[planId]) {
          content[planId] = {
            title: '',
            subtitle: '',
            button_text: '',
            button_link: '',
            features: []
          };
        }

        if (item.content_key === 'features') {
          content[planId][item.content_key] = JSON.parse(item.content_value);
        } else {
          content[planId][item.content_key as keyof PricingContent] = item.content_value;
        }
      });

      const videos = mediaData.reduce((acc, item) => {
        acc[item.section_id] = {
          ...acc[item.section_id],
          [item.media_key]: item.media_url
        };
        return acc;
      }, {} as Record<string, Record<string, string>>);

      return {
        content,
        videos
      };
    }
  });
};