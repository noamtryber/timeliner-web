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
  
  const getFeatureContent = (featureId: string, key: string): string => {
    if (!content) return '';
    const contentValue = content[`${featureId}_${key}`] || content[`common_${key}`] || '';
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

  const getVimeoEmbedUrl = (url: string) => {
    if (!url) return '';
    const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    return vimeoId ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&muted=1&background=1&quality=1080p` : '';
  };

  return (
    <section id="features" className="py-20 overflow-hidden relative">
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-primary/5 to-transparent pointer-events-none" />
      
      {/* Enhanced upper radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(123,97,255,0.15),rgba(123,97,255,0)_50%)] pointer-events-none" />
      
      {/* Organic gradient spots */}
      <div className="absolute -top-[10%] left-[20%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(123,97,255,0.12),rgba(123,97,255,0)_70%)] blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-[30%] right-[10%] w-[45vw] h-[45vw] bg-[radial-gradient(circle_at_center,rgba(214,188,250,0.15),rgba(214,188,250,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] left-[30%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.12),rgba(155,135,245,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[90%] right-[20%] w-[55vw] h-[55vw] bg-[radial-gradient(circle_at_center,rgba(126,105,171,0.18),rgba(126,105,171,0)_70%)] blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <FeaturesHeader />
        <div className="space-y-32 md:space-y-64 lg:space-y-96 pb-[200px]">
          {featureGroups.map((group, index) => {
            const currentFeature = group.features.find(f => f.id === selectedFeatures[group.id]);
            const IconComponent = currentFeature ? iconComponents[currentFeature.icon] : null;

            return (
              <div key={group.id} className="space-y-8 md:space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
                  {/* Left Column - Feature List */}
                  <div className="col-span-1 md:col-span-2 space-y-2 flex flex-col md:order-1">
                    {group.features.map((feature) => {
                      const featureTitle = getFeatureContent(feature.id, 'title') || feature.title;
                      return (
                        <button
                          key={feature.id}
                          onClick={() => setSelectedFeatures(prev => ({
                            ...prev,
                            [group.id]: feature.id
                          }))}
                          className={`w-full p-3 rounded-lg transition-all duration-300 flex items-center text-right
                            ${selectedFeatures[group.id] === feature.id 
                              ? 'bg-primary/10 font-semibold text-primary' 
                              : 'hover:bg-card/50 text-white'
                            }`}
                        >
                          <span className="text-sm">{featureTitle}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Middle Column - Feature Details */}
                  {currentFeature && (
                    <div className="col-span-1 md:col-span-4 md:order-2">
                      <div className="flex flex-col justify-center h-full">
                        <div className="flex items-start">
                          {IconComponent && (
                            <div className="flex-shrink-0">
                              <IconComponent className="w-8 h-8 text-primary" />
                            </div>
                          )}
                          <div className="mr-4">
                            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 text-right">
                              {getFeatureContent(currentFeature.id, 'title') || currentFeature.title}
                            </h3>
                          </div>
                        </div>
                        <div className="mr-0">
                          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4 text-right">
                            {getFeatureContent(currentFeature.id, 'description') || currentFeature.description}
                          </p>
                          <div className="text-right">
                            <Button 
                              onClick={() => setOpenDialog(currentFeature.id)}
                              variant="outline"
                              size="lg"
                              className="w-full md:w-auto text-lg"
                            >
                              {language === 'he' ? 'למדו עוד' : 'Learn More'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Right Column - Video Preview */}
                  <div className="col-span-1 md:col-span-5 md:col-start-7 md:order-3">
                    <div className="aspect-video rounded-xl overflow-hidden bg-black/20 shadow-xl w-[130%]">
                      {currentFeature && (
                        <iframe
                          src={getVimeoEmbedUrl(getFeatureMedia(currentFeature.id, 'preview'))}
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
          feature={{
            ...activeFeature,
            title: getFeatureContent(activeFeature.id, 'title') || activeFeature.title,
            description: getFeatureContent(activeFeature.id, 'description') || activeFeature.description
          }}
          videoUrl={getFeatureMedia(activeFeature.id, 'learn-more')}
        />
      )}
    </section>
  );
};