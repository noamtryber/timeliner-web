import { FrustrationCard } from "@/components/frustrations/FrustrationCard";
import { usePageContent } from "@/hooks/usePageContent";
import { useInView } from "react-intersection-observer";

export const Frustrations = () => {
  const { data: content } = usePageContent("frustrations");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!content) return null;

  return (
    <section ref={ref} className="relative py-24 md:hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {content.title}
          </h2>
          <p className="text-lg text-white/70">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.cards?.map((card: any, index: number) => (
            <FrustrationCard
              key={index}
              title={card.title}
              description={card.description}
              illustration={card.illustration}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-background opacity-50 -z-10" />
    </section>
  );
};