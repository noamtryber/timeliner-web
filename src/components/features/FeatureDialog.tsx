import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { type Feature } from "./featureData";

interface FeatureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  feature: Feature;
  videoUrl: string;
}

export const FeatureDialog = ({ isOpen, onClose, feature, videoUrl }: FeatureDialogProps) => {
  const { isRTL } = useLanguage();

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('player.vimeo.com')) return url;
    const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    return vimeoId ? `https://player.vimeo.com/video/${vimeoId}` : '';
  };

  const videoSrc = videoUrl ? `${getEmbedUrl(videoUrl)}?autoplay=1` : '';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="sm:max-w-[800px] bg-card/95 backdrop-blur-xl"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <DialogHeader>
          <DialogTitle className={`text-2xl gradient-text ${isRTL ? 'text-right' : 'text-left'}`}>
            {feature.title}
          </DialogTitle>
          <DialogDescription className={`text-lg text-white/70 mt-4 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
            {feature.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 rounded-xl overflow-hidden aspect-video">
          {videoUrl && videoSrc && (
            <iframe
              src={videoSrc}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                border: 'none',
                background: 'transparent',
              }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};