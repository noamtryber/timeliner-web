import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { 
  Type, 
  Link, 
  TextSelect, 
  ArrowDownWideNarrow, 
  ArrowUpNarrowWide,
  Bold,
  Moon,
  Sun,
  SunMoon,
  RotateCcw
} from "lucide-react";

interface AccessibilityDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityDialog = ({ isOpen, onClose }: AccessibilityDialogProps) => {
  const { toast } = useToast();
  const {
    fontSize,
    setFontSize,
    letterSpacing,
    setLetterSpacing,
    lineHeight,
    setLineHeight,
    fontWeight,
    setFontWeight,
    highlightTitles,
    setHighlightTitles,
    highlightLinks,
    setHighlightLinks,
    dyslexicFont,
    setDyslexicFont,
    contrast,
    setContrast,
  } = useAccessibility();

  const handleFontSizeChange = (value: number[]) => {
    setFontSize(value[0]);
    toast({
      title: "Font size updated",
      description: `Font size set to ${value[0]}%`,
    });
  };

  const resetToDefaults = () => {
    setFontSize(100);
    setLetterSpacing(0);
    setLineHeight(1.5);
    setFontWeight(400);
    setHighlightTitles(false);
    setHighlightLinks(false);
    setDyslexicFont(false);
    setContrast('normal');
    toast({
      title: "Settings reset",
      description: "All accessibility settings have been reset to default values",
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[400px] overflow-y-auto bg-background border-l">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Accessibility Menu</h2>
          <Button 
            variant="outline" 
            size="icon"
            onClick={resetToDefaults}
            title="Reset to defaults"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Content Adjustments</h3>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  <span>Font Size ({fontSize}%)</span>
                </div>
              </div>
              <Slider
                defaultValue={[fontSize]}
                max={200}
                min={50}
                step={10}
                onValueChange={handleFontSizeChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card 
                className={`p-4 text-center cursor-pointer transition-colors ${highlightTitles ? 'border-primary' : 'hover:border-primary/50'}`}
                onClick={() => setHighlightTitles(!highlightTitles)}
              >
                <TextSelect className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Highlight Titles</span>
              </Card>
              
              <Card 
                className={`p-4 text-center cursor-pointer transition-colors ${highlightLinks ? 'border-primary' : 'hover:border-primary/50'}`}
                onClick={() => setHighlightLinks(!highlightLinks)}
              >
                <Link className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Highlight Links</span>
              </Card>
              
              <Card 
                className={`p-4 text-center cursor-pointer transition-colors ${dyslexicFont ? 'border-primary' : 'hover:border-primary/50'}`}
                onClick={() => setDyslexicFont(!dyslexicFont)}
              >
                <Type className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Dyslexia Font</span>
              </Card>
              
              <Card 
                className="p-4 text-center cursor-pointer transition-colors hover:border-primary/50"
                onClick={() => {
                  setLetterSpacing(letterSpacing === 0 ? 1 : 0);
                  toast({
                    title: "Letter spacing updated",
                    description: `Letter spacing ${letterSpacing === 0 ? 'increased' : 'reset'}`,
                  });
                }}
              >
                <ArrowDownWideNarrow className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Letter Spacing</span>
              </Card>
              
              <Card 
                className="p-4 text-center cursor-pointer transition-colors hover:border-primary/50"
                onClick={() => {
                  setLineHeight(lineHeight === 1.5 ? 2 : 1.5);
                  toast({
                    title: "Line height updated",
                    description: `Line height ${lineHeight === 1.5 ? 'increased' : 'reset'}`,
                  });
                }}
              >
                <ArrowUpNarrowWide className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Line Height</span>
              </Card>
              
              <Card 
                className="p-4 text-center cursor-pointer transition-colors hover:border-primary/50"
                onClick={() => {
                  setFontWeight(fontWeight === 400 ? 700 : 400);
                  toast({
                    title: "Font weight updated",
                    description: `Font weight ${fontWeight === 400 ? 'increased' : 'reset'}`,
                  });
                }}
              >
                <Bold className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Font Weight</span>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Color Adjustments</h3>
            <div className="grid grid-cols-3 gap-4">
              <Card 
                className={`p-4 text-center cursor-pointer transition-colors ${contrast === 'dark' ? 'border-primary' : 'hover:border-primary/50'}`}
                onClick={() => setContrast('dark')}
              >
                <Moon className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Dark Contrast</span>
              </Card>
              
              <Card 
                className={`p-4 text-center cursor-pointer transition-colors ${contrast === 'light' ? 'border-primary' : 'hover:border-primary/50'}`}
                onClick={() => setContrast('light')}
              >
                <Sun className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">Light Contrast</span>
              </Card>
              
              <Card 
                className={`p-4 text-center cursor-pointer transition-colors ${contrast === 'high' ? 'border-primary' : 'hover:border-primary/50'}`}
                onClick={() => setContrast('high')}
              >
                <SunMoon className="h-8 w-8 mx-auto mb-2" />
                <span className="text-sm">High Contrast</span>
              </Card>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};