import { useState } from "react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/hooks/use-toast";
import { FeaturesHeader } from "./features/FeaturesHeader";
import { FeatureDialog } from "./features/FeatureDialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { featureGroups } from "./features/featureData";
import { iconComponents } from "./features/iconComponents";
import { Button } from "./ui/button";

export const Features = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<Record<string, string>>(() => {
    return featureGroups.reduce((acc, group) => ({
      ...acc,
      [group.id]: group.features[0].id
    }), {});
  });

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

  const activeFeature = featureGroups.flatMap(group => group.features).find(f => f.id === openDialog);
  
  const getFeatureContent = (sectionId: string | null, key: string): string => {
    if (!content) return '';
    const contentValue = content[`${sectionId}_${key}`] || 
                        (sectionId === null ? content[key] : '') || 
                        content[`common_${key}`] || '';
    return contentValue;
  };

  const getFeatureMedia = (sectionId: string, key: string) => {
    if (!media) return '';
    const mediaItem = media.find(item => 
      item.section_type === 'feature' && 
      item.section_id === sectionId && 
      item.media_key === key
    );
    return mediaItem?.media_url || '';
  };

  return (
    <section id="features" className="py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(123,97,255,0.1),rgba(123,97,255,0)_43.89%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <FeaturesHeader />
        <div className="space-y-64 md:space-y-96">
          {featureGroups.map((group) => {
            const currentFeature = group.features.find(f => f.id === selectedFeatures[group.id]);
            const IconComponent = currentFeature ? iconComponents[currentFeature.icon] : null;

            return (
              <div key={group.id} className="space-y-12">
                <div className="grid grid-cols-12 gap-12 items-center"> {/* Increased gap from 6 to 12 */}
                  {/* Left Column - Feature List (15%) */}
                  <div className="col-span-2 space-y-2 flex flex-col">
                    {group.features.map((feature) => {
                      const FeatureIcon = iconComponents[feature.icon];
                      return (
                        <button
                          key={feature.id}
                          onClick={() => setSelectedFeatures(prev => ({
                            ...prev,
                            [group.id]: feature.id
                          }))}
                          className={`w-full p-3 rounded-lg transition-all duration-300 flex items-center
                            ${selectedFeatures[group.id] === feature.id 
                              ? 'bg-primary/10 font-semibold text-primary' 
                              : 'hover:bg-card/50 text-white'
                            }`}
                        >
                          <span className="text-sm text-left">{feature.title}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Middle Column - Feature Details (25%) */}
                  {currentFeature && (
                    <div className="col-span-3">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="p-3 rounded-xl bg-primary/10">
                            {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold leading-tight">{currentFeature.title}</h3>
                          <p className="text-white/70 text-lg leading-relaxed">{currentFeature.description}</p>
                          <Button 
                            onClick={() => setOpenDialog(currentFeature.id)}
                            variant="outline"
                            size="lg"
                            className="mt-6 text-lg"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Right Column - Video Preview (60%) */}
                  <div className="col-span-6 col-start-7"> {/* Changed from col-span-7 to col-span-6 and added col-start-7 */}
                    <div className="aspect-video rounded-xl overflow-hidden bg-black/20 shadow-xl">
                      {currentFeature && (
                        <iframe
                          src={`${getFeatureMedia(currentFeature.id, 'preview')}?autoplay=1&loop=1&autopause=0&background=1&muted=1`}
                          className="w-full h-full scale-[1.01]"
                          allow="autoplay; fullscreen; picture-in-picture"
                          style={{
                            border: 'none',
                            background: 'transparent',
                          }}
                        />
                      )}
                    </div>
                  </div>
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