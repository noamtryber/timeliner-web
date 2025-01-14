import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FeatureDialog } from "@/components/features/FeatureDialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface DemoDialogProps {
  showDemo: boolean;
  onClose: () => void;
  content: {
    demo_title?: string;
    demo_description?: string;
  };
  media?: Array<{ media_key: string; media_url: string; }>;
  language: string;
}

export const DemoDialog = ({ showDemo, onClose, content, media, language }: DemoDialogProps) => {
  const { isRTL } = useLanguage();
  
  const videoUrl = language === 'he' 
    ? "https://player.vimeo.com/video/1044344874?autoplay=1"
    : "https://player.vimeo.com/video/1046016144?autoplay=1";

  if (language === 'he') {
    return (
      <Dialog open={showDemo} onOpenChange={onClose}>
        <DialogContent dir="rtl" className="sm:max-w-[800px] bg-card/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text text-right">
              איך זה תכל'ס עובד?
            </DialogTitle>
            <DialogDescription className="text-lg text-white/70 mt-4 leading-relaxed text-right">
              צפו בסרטון המלא ותבינו למה טיימליינר הוא הכלי היחיד שתצטרכו לניהול פרויקטים, סבבי תיקונים וקבלת תשלומים בזמן.
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
    <FeatureDialog
      isOpen={showDemo}
      onClose={onClose}
      title={content?.demo_title || "See How It Works"}
      description={content?.demo_description || "Watch our 2-minute demo to see how Timeliner can streamline your creative workflow and help you manage projects more efficiently."}
      videoUrl={videoUrl}
    />
  );
};