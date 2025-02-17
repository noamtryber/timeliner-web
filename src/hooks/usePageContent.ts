
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { fetchTranslations } from "@/utils/translationService";

export type SectionType = "hero" | "feature" | "benefit" | "testimonial" | "pricing" | "faq" | "frustrations" | "footer" | "nav" | "signup";
export type MediaSectionType = Exclude<SectionType, "nav" | "signup">;

interface TransformedContent {
  [key: string]: string;
}

export const usePageContent = (sectionType: SectionType, sectionId?: string) => {
  const { language } = useLanguage();
  const { toast } = useToast();

  return useQuery({
    queryKey: ['translations', sectionType, sectionId, language],
    queryFn: async () => {
      try {
        const translations = await fetchTranslations(sectionType, sectionId, language);
        
        // If translations object is empty, return an empty object
        // to prevent unnecessary placeholder display
        if (Object.keys(translations).length === 0) {
          return {};
        }

        // Create proxy object to handle missing translations
        return new Proxy(translations, {
          get: (target, prop) => {
            if (typeof prop === 'string') {
              return target[prop] || `[${prop}]`;
            }
            return undefined;
          }
        });
      } catch (error) {
        console.error('Error in usePageContent:', error);
        toast({
          variant: "destructive",
          title: "Error fetching translations",
          description: "Please try refreshing the page"
        });
        return {};
      }
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes in React Query
  });
};
