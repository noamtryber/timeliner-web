import { FrustrationCard } from "./frustrations/FrustrationCard";
import { usePageContent } from "@/hooks/usePageContent";
import { FrustrationBackground } from "./frustrations/FrustrationBackground";

export const Frustrations = () => {
  const { data: content } = usePageContent('frustrations', 'main');

  const getContent = (key: string) => {
    return content?.[key] || '';
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <FrustrationBackground />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative">
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
            icon="Files"
          />
          <FrustrationCard
            title={getContent('card2_title')}
            description={getContent('card2_description')}
            icon="MessageSquare"
          />
          <FrustrationCard
            title={getContent('card3_title')}
            description={getContent('card3_description')}
            icon="Clock"
          />
          <FrustrationCard
            title={getContent('card4_title')}
            description={getContent('card4_description')}
            icon="Search"
          />
          <FrustrationCard
            title={getContent('card5_title')}
            description={getContent('card5_description')}
            icon="Users"
          />
          <FrustrationCard
            title={getContent('card6_title')}
            description={getContent('card6_description')}
            icon="Ban"
          />
        </div>
      </div>
    </section>
  );
};