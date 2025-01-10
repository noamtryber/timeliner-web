import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface FeatureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  videoUrl: string;
}

export const FeatureDialog = ({ isOpen, onClose, title, description, videoUrl }: FeatureDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] bg-card/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-lg text-white/70">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 rounded-xl overflow-hidden aspect-video">
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