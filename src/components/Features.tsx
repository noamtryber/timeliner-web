import { useState } from "react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/hooks/use-toast";
import { features } from "./features/featureData";
import { FeaturesHeader } from "./features/FeaturesHeader";
import { FeaturesList } from "./features/FeaturesList";
import { FeatureDialog } from "./features/FeatureDialog";
import { useLanguage } from "@/contexts/LanguageContext";

export const Features = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const { language } = useLanguage();
  const { data: content, isLoading: contentLoading, error: contentError } = usePageContent('feature');
  const { data: media, isLoading: mediaLoading, error: mediaError } = useMediaContent('feature');
  const { toast } = useToast();

  if (contentError || mediaError) {
    console.error('Content error:', contentError);
    console.error('Media error:', mediaError);
    toast({
      variant: "destructive",
      title: "Error loading content",
      description: "Please try refreshing the page"
    });
  }

  if (contentLoading || mediaLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-4 bg-primary/20 rounded w-24 mx-auto mb-4"></div>
              <div className="h-8 bg-primary/20 rounded w-64 mx-auto mb-6"></div>
              <div className="h-4 bg-primary/20 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const activeFeature = features.find(f => f.id === openDialog);
  
  const getFeatureContent = (sectionId: string | null, key: string): string => {
    if (!content) return '';
    console.log('Getting content for:', { sectionId, key, language });
    const contentValue = content[`${sectionId}_${key}`] || 
                        (sectionId === null ? content[key] : '') || 
                        content[`common_${key}`] || '';
    console.log('Found content:', contentValue);
    return contentValue;
  };

  const getFeatureMedia = (sectionId: string, key: string) => {
    if (!media) return '';
    const mediaItem = media.find(item => 
      item.section_type === 'feature' && 
      item.section_id === sectionId && 
      item.media_key === key
    );
    console.log('Looking for media:', { sectionId, key, mediaItem });
    return mediaItem?.media_url || '';
  };

  const getLearnMoreText = () => {
    switch (language) {
      case 'es':
        return 'Ver Más';
      case 'he':
        return 'לצפייה בסרטון';
      default:
        return getFeatureContent('common', 'learn_more') || 'Learn More';
    }
  };

  return (
    <section id="features" className="py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(123,97,255,0.1),rgba(123,97,255,0)_43.89%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <FeaturesHeader getContent={getFeatureContent} />
        <FeaturesList 
          onLearnMore={setOpenDialog} 
          getContent={getFeatureContent}
          learnMoreText={getLearnMoreText()}
        />
      </div>

      {activeFeature && (
        <FeatureDialog
          isOpen={!!openDialog}
          onClose={() => setOpenDialog(null)}
          title={
            language === 'es' 
              ? activeFeature.esTitle 
              : language === 'he' 
                ? activeFeature.heTitle 
                : (getFeatureContent(activeFeature.sectionKey, 'title') || activeFeature.defaultTitle)
          }
          subtitle={
            language === 'es'
              ? activeFeature.esSubtitle
              : language === 'he'
                ? activeFeature.heSubtitle
                : (getFeatureContent(activeFeature.sectionKey, 'subtitle') || activeFeature.defaultSubtitle)
          }
          description={
            language === 'es'
              ? activeFeature.esLongDescription
              : language === 'he'
                ? activeFeature.heLongDescription
                : (getFeatureContent(activeFeature.sectionKey, 'long_description') || activeFeature.defaultLongDescription)
          }
          videoUrl={getFeatureMedia(activeFeature.sectionKey, 'learn-more')}
        />
      )}
    </section>
  );
};