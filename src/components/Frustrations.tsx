import { FrustrationCard } from "./frustrations/FrustrationCard";
import { usePageContent } from "@/hooks/usePageContent";
import { FrustrationBackground } from "./frustrations/FrustrationBackground";
import { useInView } from "react-intersection-observer";
import { Cube, Box, Cylinder, Pyramid } from "lucide-react";

export const Frustrations = () => {
  const { data: content } = usePageContent('frustrations', 'main');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const frustrationData = [
    {
      icon: Cube,
      title: "Scattered Files Everywhere",
      description: "Stop wasting time searching through countless folders and drives for your video files and assets."
    },
    {
      icon: Box,
      title: "Version Control Chaos",
      description: "No more confusion about which version is the latest or where different iterations are stored."
    },
    {
      icon: Cylinder,
      title: "Complex Collaboration",
      description: "Streamline feedback and approvals with your team and clients in one centralized platform."
    },
    {
      icon: Pyramid,
      title: "Asset Management",
      description: "Keep all your project files, footage, and resources organized and easily accessible."
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <FrustrationBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {content?.title || "Common Frustrations in Video Production"}
          </h2>
          <p className="text-lg text-white/70">
            {content?.subtitle || "Let's tackle these challenges together"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {frustrationData.map((item, index) => (
            <FrustrationCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};