import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4 animate-fade-up">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            The Frustrations Every Editor and Agency Knows Too Well
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-8">
            Working with clients shouldn't be this hard...
          </p>
          <div className="aspect-video w-full max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden glass p-1">
            <iframe
              src="https://player.vimeo.com/video/76979871?h=8272103f6e"
              className="w-full h-full rounded-lg"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started Free
          </Button>
        </div>
      </div>
    </div>
  );
};