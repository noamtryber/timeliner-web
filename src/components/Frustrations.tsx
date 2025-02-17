
import { FrustrationCard } from "./frustrations/FrustrationCard";
import { FrustrationBackground } from "./frustrations/FrustrationBackground";
import { useInView } from "react-intersection-observer";
import { AlertOctagon, Wallet2, AppWindow, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Frustrations = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { isRTL, language } = useLanguage();

  const frustrationData = [
    {
      icon: AlertOctagon,
      iconType: 'expectations' as const,
      title: '[frustration_1_title]',
      description: '[frustration_1_description]'
    },
    {
      icon: Wallet2,
      iconType: 'payments' as const,
      title: '[frustration_2_title]',
      description: '[frustration_2_description]'
    },
    {
      icon: AppWindow,
      iconType: 'tools' as const,
      title: '[frustration_3_title]',
      description: '[frustration_3_description]'
    },
    {
      icon: Clock,
      iconType: 'time' as const,
      title: '[frustration_4_title]',
      description: '[frustration_4_description]'
    }
  ];

  const headerText = '[frustrations_title]';
  const subheaderText = '[frustrations_subtitle]';
  const bottomHeaderText = '[frustrations_bottom_title]';
  const bottomSubheaderText = '[frustrations_bottom_subtitle]';

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background">
      <FrustrationBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/90" />
      
      <div className={`container mx-auto px-4 relative ${isRTL ? 'rtl' : ''}`} ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-center">
          {headerText}
        </h2>
        <p className="text-lg text-white/70 text-center mb-16">
          {subheaderText}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {frustrationData.map((item, index) => (
            <FrustrationCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              iconType={item.iconType}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            {bottomHeaderText}
          </h3>
          <p className="text-lg text-white/70 mb-4">
            {bottomSubheaderText}
          </p>
        </div>
      </div>
    </section>
  );
};
