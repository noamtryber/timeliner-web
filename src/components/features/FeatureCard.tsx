import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

interface FeatureCardProps {
  feature: {
    id: string;
    title: string;
    description: string;
    icon: string;
  };
  onClick: () => void;
  previewUrl: string;
  index: number;
  isRTL: boolean;
}

export const FeatureCard = ({ feature, onClick, previewUrl, index, isRTL }: FeatureCardProps) => {
  return (
    <div 
      className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/80 transition-all duration-300
        opacity-0 translate-y-10 animate-[fade-in_0.5s_ease-out_forwards]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-black/20">
        {previewUrl && (
          <iframe
            src={`${previewUrl}?autoplay=1&loop=1&autopause=0&background=1&muted=1`}
            className="w-full h-full scale-[1.01]"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{
              border: 'none',
              background: 'transparent',
            }}
          />
        )}
      </div>
      <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
      <p className="text-white/70 mb-6 min-h-[3rem]">{feature.description}</p>
      <Button 
        onClick={onClick}
        variant="outline"
        className="w-full justify-center hover:bg-primary hover:text-white"
      >
        <PlayCircle className="w-5 h-5 mr-2" />
        Learn More
      </Button>
    </div>
  );
};