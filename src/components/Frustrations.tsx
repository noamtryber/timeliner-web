import { FrustrationCard } from "./frustrations/FrustrationCard";
import { usePageContent } from "@/hooks/usePageContent";
import { FrustrationBackground } from "./frustrations/FrustrationBackground";
import { useInView } from "react-intersection-observer";

export const Frustrations = () => {
  const { data: content } = usePageContent('frustrations', 'main');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getContent = (key: string) => {
    return content?.[key] || '';
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <FrustrationBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {getContent('title')}
          </h2>
          <p className="text-lg text-white/70">
            {getContent('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FrustrationCard
            title={getContent('card1_title')}
            description={getContent('card1_description')}
            index={0}
            inView={inView}
          />
          <FrustrationCard
            title={getContent('card2_title')}
            description={getContent('card2_description')}
            index={1}
            inView={inView}
          />
          <FrustrationCard
            title={getContent('card3_title')}
            description={getContent('card3_description')}
            index={2}
            inView={inView}
          />
          <FrustrationCard
            title={getContent('card4_title')}
            description={getContent('card4_description')}
            index={3}
            inView={inView}
          />
          <FrustrationCard
            title={getContent('card5_title')}
            description={getContent('card5_description')}
            index={4}
            inView={inView}
          />
          <FrustrationCard
            title={getContent('card6_title')}
            description={getContent('card6_description')}
            index={5}
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
};
