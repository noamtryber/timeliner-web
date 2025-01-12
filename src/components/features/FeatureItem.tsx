import { LucideIcon, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageContent } from "@/hooks/usePageContent";

interface FeatureItemProps {
  index: number;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  videoUrl: string;
  onLearnMore: () => void;
}

export const FeatureItem = ({ 
  index, 
  icon: IconComponent,
  title,
  subtitle,
  description, 
  videoUrl,
  onLearnMore 
}: FeatureItemProps) => {
  const { language } = useLanguage();
  const { data: translations } = usePageContent('feature');

  // Ensure the video URL is properly formatted for embedding
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    // If it's already an embed URL, use it as is
    if (url.includes('player.vimeo.com')) return url;
    // Convert watch URLs to embed URLs
    const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    return vimeoId ? `https://player.vimeo.com/video/${vimeoId}` : '';
  };
  
  const videoSrc = videoUrl ? `${getEmbedUrl(videoUrl)}?autoplay=1&loop=1&autopause=0&background=1&muted=1` : '';

  // Get translated "Learn More" text
  const learnMoreText = translations?.['common_learn_more'] || 'Learn More';

  if (!IconComponent) {
    console.error('Icon component is undefined:', { icon: IconComponent });
    return null;
  }
  
  return (
    <div className={`feature-item opacity-0 translate-y-10 transition-all duration-700 ease-out
      grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${language === 'ar' || language === 'he' ? 'rtl' : ''}`}>
      {/* Video Side */}
      <div className={`overflow-hidden relative order-1 rounded-3xl
        ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="w-full h-full">
          {videoUrl && videoSrc && (
            <iframe
              src={videoSrc}
              className="w-full h-full scale-[1.05] rounded-3xl"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                aspectRatio: '16/9',
                border: 'none',
                background: 'transparent',
                transform: 'scale(1.05)',
                borderRadius: '1.5rem',
              }}
            />
          )}
        </div>
      </div>
      
      {/* Content Side */}
      <div className={`space-y-6 order-2 
        ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            {subtitle && (
              <p className="text-primary/80 text-sm font-medium mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        <p className="text-lg text-white/70 leading-relaxed">
          {description}
        </p>
        <Button 
          onClick={onLearnMore}
          className="bg-gradient-to-r from-primary via-accent to-primary shadow-lg hover:shadow-primary/20 transition-all duration-300"
        >
          <PlayCircle className="w-5 h-5 mr-2" /> {learnMoreText}
        </Button>
      </div>
    </div>
  );
};