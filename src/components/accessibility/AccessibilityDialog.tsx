import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { 
  Type, 
  Link, 
  TextSelect, 
  ArrowDownWideNarrow, 
  ArrowUpNarrowWide,
  Bold,
  Moon,
  Sun,
  SunMoon
} from "lucide-react";

interface AccessibilityDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityDialog = ({ isOpen, onClose }: AccessibilityDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Accessibility Menu</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Content Adjustments</h3>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  <span>Adjust Font Size</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  -
                </Button>
                <div className="flex-1">
                  <Slider defaultValue={[100]} max={200} min={50} step={10} />
                </div>
                <Button variant="outline" size="icon" className="rounded-full">
                  +
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="p-4 text-center hover:border-primary/50 cursor-pointer transition-colors">
                <TextSelect className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Highlight Title</span>
              </Card>
              
              <Card className="p-4 text-center hover:border-primary/50 cursor-pointer transition-colors">
                <Link className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Highlight Links</span>
              </Card>
              
              <Card className="p-4 text-center hover:border-primary/50 cursor-pointer transition-colors">
                <Type className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Dyslexia Font</span>
              </Card>
              
              <Card className="p-4 text-center hover:border-primary/50 cursor-pointer transition-colors">
                <ArrowDownWideNarrow className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Letter Spacing</span>
              </Card>
              
              <Card className="p-4 text-center hover:border-primary/50 cursor-pointer transition-colors">
                <ArrowUpNarrowWide className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Line Height</span>
              </Card>
              
              <Card className="p-4 text-center hover:border-primary/50 cursor-pointer transition-colors">
                <Bold className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Font Weight</span>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Color Adjustments</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="p-4 text-center hover:border-primary/50 cursor-pointer transition-colors">
                <Moon className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Dark Contrast</span>
              </Card>
              
              <Card className="p-4 text-center hover:border-primary/50 cursor-pointer transition-colors">
                <Sun className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Light Contrast</span>
              </Card>
              
              <Card className="p-4 text-center hover:border-primary/50 cursor-pointer transition-colors">
                <SunMoon className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">High Contrast</span>
              </Card>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};