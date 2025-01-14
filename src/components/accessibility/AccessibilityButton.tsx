import { useState } from "react";
import { AccessibilityDialog } from "./AccessibilityDialog";
import { Button } from "@/components/ui/button";
import { Accessibility } from "lucide-react";

export const AccessibilityButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 bg-primary hover:bg-primary/90 shadow-lg z-50"
        onClick={() => setIsDialogOpen(true)}
      >
        <Accessibility className="h-6 w-6 text-white" />
      </Button>
      <AccessibilityDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </>
  );
};