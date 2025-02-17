
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface DemoDialogProps {
  showDemo: boolean;
  onClose: () => void;
  content?: Record<string, string>;
  media?: Array<{ media_key: string; media_url: string; }>;
  language: string;
}

export const DemoDialog = ({ showDemo, onClose, content, media, language }: DemoDialogProps) => {
  const { isRTL } = useLanguage();
  
  const videoUrl = language === 'he' 
    ? "https://player.vimeo.com/video/1044344874?autoplay=1&muted=0"
    : "https://player.vimeo.com/video/1046016144?autoplay=1&muted=0";

  if (language === 'he') {
    return (
      <Dialog open={showDemo} onOpenChange={onClose}>
        <DialogContent dir="rtl" className="sm:max-w-[800px] bg-card/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text text-right">
              [demo_title_he]
            </DialogTitle>
            <DialogDescription className="text-lg text-white/70 mt-4 leading-relaxed text-right">
              [demo_description_he]
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 rounded-xl overflow-hidden aspect-video">
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ border: 'none', background: 'transparent' }}
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={showDemo} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] bg-card/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">
            [demo_title]
          </DialogTitle>
          <DialogDescription className="text-lg text-white/70 mt-4 leading-relaxed">
            [demo_description]
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 rounded-xl overflow-hidden aspect-video">
          <iframe
            src={videoUrl}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{ border: 'none', background: 'transparent' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
