import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4 animate-fade-up">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-primary/80 font-medium mb-4 block">
            STREAMLINE YOUR VIDEO PRODUCTION WORKFLOW
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text tracking-tight">
            Reduce Client Revisions by 31% with Smart Workflows
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed">
            From Netflix to independent creators, teams trust Timeliner to manage projects, 
            track revisions, and get paid faster.
          </p>
          <div className="aspect-video w-full max-w-3xl mx-auto mb-12 rounded-lg overflow-hidden glass p-1">
            <iframe
              src="https://player.vimeo.com/video/76979871?h=8272103f6e"
              className="w-full h-full rounded-lg"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};