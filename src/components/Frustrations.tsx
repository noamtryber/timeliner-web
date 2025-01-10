import { FrustrationCard } from "./frustrations/FrustrationCard";
import { usePageContent } from "@/hooks/usePageContent";
import { FrustrationBackground } from "./frustrations/FrustrationBackground";
import { useInView } from "react-intersection-observer";
import { AlertCircle, Clock, Wallet, AppWindow } from "lucide-react";

export const Frustrations = () => {
  const { data: content } = usePageContent('frustrations', 'main');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const frustrationData = [
    {
      icon: AlertCircle,
      iconType: 'expectations' as const,
      title: "Unclear Expectations",
      description: "Mismatched client and editor expectations lead to frustration. Revisions and versions scattered across WhatsApp, Email, and G-Drive."
    },
    {
      icon: Wallet,
      iconType: 'payments' as const,
      title: "Payment Delays",
      description: "Payments take weeks or months to arrive. No automated system to ensure quick payouts after approval."
    },
    {
      icon: AppWindow,
      iconType: 'tools' as const,
      title: "No Centralized Tools",
      description: "Juggling multiple apps for projects, feedback, and payments wastes time. No seamless way for agencies to manage freelancers or pay them per project milestone."
    },
    {
      icon: Clock,
      iconType: 'time' as const,
      title: "Time Management",
      description: "Managing multiple projects, deadlines, and client communications across different platforms leads to inefficiency and missed opportunities."
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
        </div>

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

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-white/70 mb-4">
            These challenges are exactly why we built Timeliner
          </p>
          <p className="text-md text-white/60">
            Let's see how we can solve them!
          </p>
        </div>
      </div>
    </section>
  );
};