import { useState } from "react";
import { AccessibilityDialog } from "./AccessibilityDialog";
import { Button } from "@/components/ui/button";
import { PersonStanding } from "lucide-react";

export const AccessibilityButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full" />
        <Button
          size="icon"
          className="relative rounded-full w-12 h-12 bg-background/70 hover:bg-background/90 shadow-lg border border-foreground/10"
          onClick={() => setIsDialogOpen(true)}
        >
          <PersonStanding className="h-6 w-6 text-foreground/80" />
        </Button>
      </div>
      <AccessibilityDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </>
  );
};