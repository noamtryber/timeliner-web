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
  
  const getFeatureContent = (sectionId: string | null, key: string) => {
    if (!content) return '';
    console.log('Getting content for:', { sectionId, key, language });
    // First try to find content with specific section_id
    const contentValue = content[`${sectionId}_${key}`] || 
                        // Then try to find content with null section_id (header content)
                        (sectionId === null ? content[key] : '') || 
                        // Finally try common content
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

  return (
    <section id="features" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <FeaturesHeader getContent={getFeatureContent} />
        <FeaturesList onLearnMore={setOpenDialog} getContent={getFeatureContent} />
      </div>

      {activeFeature && (
        <FeatureDialog
          isOpen={!!openDialog}
          onClose={() => setOpenDialog(null)}
          title={getFeatureContent(activeFeature.sectionKey, 'title') || activeFeature.defaultTitle}
          subtitle={getFeatureContent(activeFeature.sectionKey, 'subtitle') || activeFeature.defaultSubtitle}
          description={getFeatureContent(activeFeature.sectionKey, 'long_description') || activeFeature.defaultLongDescription}
          videoUrl={getFeatureMedia(activeFeature.sectionKey, 'learn-more')}
        />
      )}
    </section>
  );
};