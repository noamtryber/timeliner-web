import { TimelineBackground } from "./TimelineBackground";

export const ThreeDSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <TimelineBackground />
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Streamline Your Video Editing Workflow
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Experience seamless collaboration and efficient timeline management with our intuitive video editing tools.
        </p>
      </div>
      
      {/* Gradient overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
    </section>
  );
};