import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[100%] bg-accent/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative animate-fade-up">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-primary/80 font-medium mb-4 block tracking-wide">
            VIDEO EDITORS AND POST PRODUCTION AGENCIES:
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text tracking-tight leading-tight">
            Transform Chaos into Clarity with Smarter Video Editing Management
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed">
            The only tool you'll ever need to manage projects, streamline revisions,
            ensure timely payments, and deliver faster. Designed by creators, for creators.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto w-full sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 text-lg px-8 py-6 h-auto w-full sm:w-auto hover:bg-white/5"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};