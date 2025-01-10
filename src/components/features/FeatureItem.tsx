import { LucideIcon, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureItemProps {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
  videoUrl: string;
  onLearnMore: () => void;
}

export const FeatureItem = ({ 
  index, 
  icon: IconComponent,
  title, 
  description, 
  videoUrl,
  onLearnMore 
}: FeatureItemProps) => {
  const videoSrc = `${videoUrl}?autoplay=1&loop=1&autopause=0&background=1&muted=1`;
  
  return (
    <div className="feature-item opacity-0 translate-y-10 transition-all duration-700 ease-out
      grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Video Side */}
      <div className={`overflow-hidden relative order-1 rounded-3xl
        ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="w-full h-full">
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
        </div>
      </div>
      
      {/* Content Side */}
      <div className={`space-y-6 order-2 
        ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <IconComponent className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
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