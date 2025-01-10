import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface FeatureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  description: string;
  videoUrl: string;
}

export const FeatureDialog = ({ isOpen, onClose, title, subtitle, description, videoUrl }: FeatureDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] bg-card/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">{title}</DialogTitle>
          {subtitle && (
            <p className="text-primary/80 text-sm font-medium mt-2">{subtitle}</p>
          )}
          <DialogDescription className="text-lg text-white/70 mt-4 leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 rounded-xl overflow-hidden aspect-video">
          <iframe
            src={videoUrl}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{
              border: 'none',
              background: 'transparent',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};