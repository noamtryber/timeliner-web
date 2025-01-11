import { LucideIcon, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  // Ensure the video URL is properly formatted for embedding
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    // If it's already an embed URL, use it as is
    if (url.includes('/embed/')) return url;
    // Convert watch URLs to embed URLs
    return url.replace('vimeo.com/', 'player.vimeo.com/video/');
  };
  
  const videoSrc = `${getEmbedUrl(videoUrl)}?autoplay=1&loop=1&autopause=0&background=1&muted=1`;
  
  return (
    <div className="feature-item opacity-0 translate-y-10 transition-all duration-700 ease-out
      grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Video Side */}
      <div className={`overflow-hidden relative order-1 rounded-3xl
        ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="w-full h-full">
          {videoUrl && (
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
          <PlayCircle className="w-5 h-5 mr-2" /> Learn More
        </Button>
      </div>
    </div>
  );
};