
import { getVimeoEmbedUrl } from "@/utils/videoUtils";

interface FeaturePreviewProps {
  videoUrl: string;
  isAlternate: boolean;
}

export const FeaturePreview = ({ videoUrl, isAlternate }: FeaturePreviewProps) => {
  return (
    <div className={`col-span-1 md:col-span-6 order-2 
      ${isAlternate 
        ? 'md:order-1 md:col-start-1' 
        : 'md:col-start-7 md:order-3'
      }`}>
      <div className="aspect-video rounded-xl overflow-hidden bg-black/20 shadow-xl w-full">
        {videoUrl && (
          <iframe
            src={getVimeoEmbedUrl(videoUrl)}
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
  );
};

