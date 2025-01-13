import { FrustrationCard } from "./frustrations/FrustrationCard";
import { usePageContent } from "@/hooks/usePageContent";
import { FrustrationBackground } from "./frustrations/FrustrationBackground";
import { useInView } from "react-intersection-observer";
import { AlertOctagon, Wallet2, AppWindow, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Frustrations = () => {
  const { data: content } = usePageContent('frustrations', 'main');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { isRTL } = useLanguage();

  const frustrationData = [
    {
      icon: AlertOctagon,
      iconType: 'expectations' as const,
      title: content?.expectations || "Unclear Expectations",
      description: content?.card1_description || "Mismatched client and editor expectations lead to frustration. Revisions and versions scattered across WhatsApp, Email, and G-Drive."
    },
    {
      icon: Wallet2,
      iconType: 'payments' as const,
      title: content?.payment || "Payment Delays",
      description: content?.card2_description || "Payments take weeks or months to arrive. No automated system to ensure quick payouts after approval."
    },
    {
      icon: AppWindow,
      iconType: 'tools' as const,
      title: content?.tools || "No Centralized Tools",
      description: content?.card3_description || "Juggling multiple apps for projects, feedback, and payments wastes time. No seamless way for agencies to manage freelancers or pay them per project milestone."
    },
    {
      icon: Clock,
      iconType: 'time' as const,
      title: content?.time || "Time Management",
      description: content?.card4_description || "Managing multiple projects, deadlines, and client communications across different platforms leads to inefficiency and missed opportunities."
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <FrustrationBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className={`container mx-auto px-4 relative ${isRTL ? 'rtl' : ''}`} ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {content?.challenges_solved || "Common Frustrations in Video Production"}
          </h2>
          <p className="text-lg text-white/70">
            {content?.solve_see_how || "These challenges are exactly why we built Timeliner"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};