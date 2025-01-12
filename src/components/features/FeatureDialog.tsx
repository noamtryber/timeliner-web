import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  description: string;
  videoUrl: string;
}

export const FeatureDialog = ({ isOpen, onClose, title, subtitle, description, videoUrl }: FeatureDialogProps) => {
  const { language } = useLanguage();
  const isRTL = language === 'he';

  // Ensure the video URL is properly formatted for embedding
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    // If it's already an embed URL, use it as is
    if (url.includes('player.vimeo.com')) return url;
    // Convert watch URLs to embed URLs
    const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    return vimeoId ? `https://player.vimeo.com/video/${vimeoId}` : '';
  };

  // Special case for Hebrew - show different content
  if (isRTL) {
    const hebrewVideoUrl = "https://vimeo.com/1044344874";
    const videoSrc = `${getEmbedUrl(hebrewVideoUrl)}?autoplay=1`;

    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent dir="rtl" className="sm:max-w-[800px] bg-card/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text text-right">
              איך זה תכל'ס עובד?
            </DialogTitle>
            <DialogDescription className="text-lg text-white/70 mt-4 leading-relaxed text-right">
              צפו בסרטון המלא ותבינו למה טיימליינר הוא הכלי היחיד שתצטרכו לניהול פרויקטים, סבבי תיקונים וקבלת תשלומים בזמן. נוצר על ידי יוצרים, עבור יוצרים.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 rounded-xl overflow-hidden aspect-video">
            {videoSrc && (
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
  }

  // Original dialog for other languages
  const videoSrc = videoUrl ? `${getEmbedUrl(videoUrl)}?autoplay=1` : '';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent dir="ltr" className="sm:max-w-[800px] bg-card/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text text-left">{title}</DialogTitle>
          {subtitle && (
            <p className="text-primary/80 text-sm font-medium mt-2 text-left">{subtitle}</p>
          )}
          <DialogDescription className="text-lg text-white/70 mt-4 leading-relaxed text-left">
            {description}
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