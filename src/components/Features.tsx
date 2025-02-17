
import { useState } from "react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/hooks/use-toast";
import { FeaturesHeader } from "./features/FeaturesHeader";
import { FeatureDialog } from "./features/FeatureDialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { featureGroups } from "./features/featureData";
import { featureGroupsHe } from "./features/featureDataHe";
import { featureGroupsAr } from "./features/featureDataAr";
import { featureGroupsEs } from "./features/featureDataEs";
import { FeatureSelector } from "./features/FeatureSelector";
import { FeaturePreview } from "./features/FeaturePreview";
import { FeatureDetails } from "./features/FeatureDetails";

export const Features = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const { language, isRTL } = useLanguage();
  const { data: content, isLoading: contentLoading, error: contentError } = usePageContent('feature');
  const { data: media, isLoading: mediaLoading, error: mediaError } = useMediaContent('feature');
  const { toast } = useToast();

  // Use appropriate data based on language
  const currentFeatureGroups = (() => {
    switch (language) {
      case 'he':
        return featureGroupsHe;
      case 'ar':
        return featureGroupsAr;
      case 'es':
        return featureGroupsEs;
      default:
        return featureGroups;
    }
  })();

  const [selectedFeatures, setSelectedFeatures] = useState<Record<string, string>>(() => {
    return currentFeatureGroups.reduce((acc, group) => ({
      ...acc,
      [group.id]: group.features[0].id
    }), {});
  });

  if (contentError || mediaError) {
    console.error('Content error:', contentError);
    console.error('Media error:', mediaError);
    toast({
      variant: "destructive",
      title: "Error loading content",
      description: "Please try refreshing the page"
    });
  }

  const activeFeature = currentFeatureGroups.flatMap(group => group.features).find(f => f.id === openDialog);
  
  const getFeatureMedia = (sectionId: string, key: string) => {
    if (!media) return '';
    const mediaItem = media.find(item => 
      item.section_type === 'feature' && 
      item.section_id === sectionId && 
      item.media_key === key
    );
    return mediaItem?.media_url || '';
  };

  const getLearnMoreText = () => {
    switch (language) {
      case 'he':
        return 'למדו עוד';
      case 'ar':
        return 'اعرف المزيد';
      case 'es':
        return 'Saber más';
      default:
        return 'Learn More';
    }
  };

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

  return (
    <section id="features" className="py-20 overflow-hidden relative" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(123,97,255,0.15),rgba(123,97,255,0)_50%)] pointer-events-none" />
      <div className="absolute -top-[10%] left-[20%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(123,97,255,0.12),rgba(123,97,255,0)_70%)] blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-[30%] right-[10%] w-[45vw] h-[45vw] bg-[radial-gradient(circle_at_center,rgba(214,188,250,0.15),rgba(214,188,250,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] left-[30%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.12),rgba(155,135,245,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[90%] right-[20%] w-[55vw] h-[55vw] bg-[radial-gradient(circle_at_center,rgba(126,105,171,0.18),rgba(126,105,171,0)_70%)] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <FeaturesHeader />
        <div className="space-y-32 md:space-y-64 lg:space-y-96 pb-[200px]">
          {currentFeatureGroups.map((group, index) => {
            const currentFeature = group.features.find(f => f.id === selectedFeatures[group.id]);
            const isAlternate = index === 1 || index === 3;

            return (
              <div key={group.id} className="space-y-8 md:space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
                  <FeatureSelector
                    features={group.features}
                    selectedFeatureId={selectedFeatures[group.id]}
                    onFeatureSelect={(featureId) => setSelectedFeatures(prev => ({
                      ...prev,
                      [group.id]: featureId
                    }))}
                    isAlternate={isAlternate}
                  />

                  {currentFeature && (
                    <>
                      <FeaturePreview
                        videoUrl={getFeatureMedia(currentFeature.id, 'preview')}
                        isAlternate={isAlternate}
                      />

                      <FeatureDetails
                        feature={currentFeature}
                        isAlternate={isAlternate}
                        isRTL={isRTL}
                        onLearnMore={() => setOpenDialog(currentFeature.id)}
                        learnMoreText={getLearnMoreText()}
                      />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeFeature && (
        <FeatureDialog
          isOpen={!!openDialog}
          onClose={() => setOpenDialog(null)}
          feature={activeFeature}
          videoUrl={getFeatureMedia(activeFeature.id, 'learn-more')}
        />
      )}
    </section>
  );
};
