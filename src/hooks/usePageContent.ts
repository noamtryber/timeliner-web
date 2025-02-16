
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
        return await fetchTranslations(sectionType, sectionId, language);
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
