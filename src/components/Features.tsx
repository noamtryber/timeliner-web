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
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-primary/5 to-transparent pointer-events-none" />
      
      {/* Enhanced upper radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(123,97,255,0.15),rgba(123,97,255,0)_50%)] pointer-events-none" />
      
      {/* Organic gradient spots with enhanced positioning and sizes */}
      <div className="absolute -top-[10%] left-[20%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(123,97,255,0.12),rgba(123,97,255,0)_70%)] blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-[30%] right-[10%] w-[45vw] h-[45vw] bg-[radial-gradient(circle_at_center,rgba(214,188,250,0.15),rgba(214,188,250,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] left-[30%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.12),rgba(155,135,245,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[90%] right-[20%] w-[55vw] h-[55vw] bg-[radial-gradient(circle_at_center,rgba(126,105,171,0.18),rgba(126,105,171,0)_70%)] blur-3xl pointer-events-none" />
      
      {/* Additional subtle accent gradients */}
      <div className="absolute top-[5%] right-[40%] w-[30vw] h-[30vw] bg-[radial-gradient(circle_at_center,rgba(214,188,250,0.08),rgba(214,188,250,0)_70%)] blur-2xl pointer-events-none animate-pulse" />
      <div className="absolute top-[45%] left-[10%] w-[25vw] h-[25vw] bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.06),rgba(155,135,245,0)_70%)] blur-2xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <FeaturesHeader />
        <div className="space-y-64 md:space-y-96 pb-[200px]">
          {featureGroups.map((group, index) => {
            const currentFeature = group.features.find(f => f.id === selectedFeatures[group.id]);
            const IconComponent = currentFeature ? iconComponents[currentFeature.icon] : null;
            const isAlternate = index === 1 || index === 3;

            return (
              <div key={group.id} className="space-y-12">
                <div className={`grid grid-cols-12 gap-12 items-start ${isAlternate ? 'justify-end' : ''}`}>
                  {/* Left Column - Feature List (15%) */}
                  <div className={`col-span-2 space-y-2 flex flex-col ${isAlternate ? 'order-1 md:order-3' : ''}`}>
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
                    <div className={`col-span-4 ${isAlternate ? 'order-2 text-right' : ''}`}>
                      <div className="flex flex-col">
                        <div className={`flex items-start ${isAlternate ? 'justify-end' : ''}`}>
                          {IconComponent && (
                            <div className="flex-shrink-0">
                              <IconComponent className="w-8 h-8 text-primary" />
                            </div>
                          )}
                          <div className={`${isAlternate ? 'mr-4' : 'ml-4'}`}>
                            <h3 className="text-2xl font-bold leading-tight mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
                              {currentFeature.title}
                            </h3>
                          </div>
                        </div>
                        <div className="ml-0">
                          <p className="text-white/70 text-lg leading-relaxed mb-4">{currentFeature.description}</p>
                          <div className={`${isAlternate ? 'text-right' : ''}`}>
                            <Button 
                              onClick={() => setOpenDialog(currentFeature.id)}
                              variant="outline"
                              size="lg"
                              className="text-lg"
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Right Column - Video Preview (60%) */}
                  <div className={`col-span-5 ${isAlternate ? 'order-3 md:order-1 col-start-1' : 'col-start-7'}`}>
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