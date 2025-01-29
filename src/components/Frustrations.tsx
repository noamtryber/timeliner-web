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
  const { isRTL, language } = useLanguage();

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

  const getHeaderText = () => {
    switch (language) {
      case 'es':
        return "Las Frustraciones que Todo Editor y Agencia Conoce Demasiado Bien";
      case 'he':
        return "התסכולים שכולנו מכירים (ואולי קצת נמאס לנו מהם)";
      case 'ar':
        return "المعاناة اللي كل محرر فيديو ووكالة محتوى يعرفونها";
      default:
        return "The Frustrations Every Editor and Agency Knows Too Well";
    }
  };

  const getSubheaderText = () => {
    switch (language) {
      case 'es':
        return "Trabajar con clientes no debería ser tan difícil...";
      case 'he':
        return "עבודה עם לקוחות לא צריכה להיות כזה כאב ראש...";
      case 'ar':
        return "التعامل مع العملاء ما المفروض يكون كذا صعب...";
      default:
        return "Working with clients shouldn't be this hard...";
    }
  };

  const getBottomHeaderText = () => {
    switch (language) {
      case 'es':
        return "Por Estos Desafíos Creamos Timeliner";
      case 'he':
        return "בדיוק בגלל כל הבלאגן הזה יצרנו את Timeliner";
      case 'ar':
        return "عشان كذا بنينا Timeliner";
      default:
        return "These challenges are exactly why we built Timeliner";
    }
  };

  const getBottomSubheaderText = () => {
    switch (language) {
      case 'es':
        return "¡Veamos cómo podemos resolverlos!";
      case 'he':
        return "יאללה, בואו נראה איך אנחנו מפשטים לכם את החיים!";
      case 'ar':
        return "خلّينا نشوف كيف نقدر نحل المشكلة!";
      default:
        return "Let's see how we can solve them!";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background">
      <FrustrationBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/90" />
      
      <div className={`container mx-auto px-4 relative ${isRTL ? 'rtl' : ''}`} ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-center">
          {getHeaderText()}
        </h2>
        <p className="text-lg text-white/70 text-center mb-16">
          {getSubheaderText()}
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
            {getBottomHeaderText()}
          </h3>
          <p className="text-lg text-white/70 mb-4">
            {getBottomSubheaderText()}
          </p>
        </div>
      </div>
    </section>
  );
};
