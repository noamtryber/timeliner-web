import { Card } from "@/components/ui/card";
import { ComparisonTable } from "./ComparisonTable";
import { useLanguage } from "@/contexts/LanguageContext";

export const Savings = () => {
  const { language, isRTL } = useLanguage();

  const getTitle = () => {
    switch (language) {
      case 'es':
        return 'Ahorra Dinero, Tiempo y Recursos';
      case 'he':
        return 'חסכו כסף, זמן ולחץ';
      default:
        return 'Save Money, Time, and Stress';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'es':
        return 'Descubre cómo Timeliner unifica múltiples herramientas en una plataforma económica y eficiente.';
      case 'he':
        return 'ראו כיצד Timeliner מאחדת כלים רבים לפלטפורמה אחת במחיר משתלם.';
      default:
        return 'See how Timeliner consolidates multiple tools into one affordable platform.';
    }
  };

  const getSavingsText = () => {
    switch (language) {
      case 'es':
        return '¡Ahorra más de $100 mensuales con Timeliner!';
      case 'he':
        return 'חסכו מעל $100 בחודש עם Timeliner';
      default:
        return 'Save over $100/month with Timeliner';
    }
  };

  const getSavingsDescription = () => {
    switch (language) {
      case 'es':
        return 'Reemplaza múltiples herramientas con una plataforma intuitiva y completa';
      case 'he':
        return 'על ידי החלפת כלים רבים בפלטפורמה אינטואיטיבית אחת!';
      default:
        return 'by replacing multiple tools with one intuitive platform!';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {getTitle()}
          </h2>
          <p className="text-xl text-white/70">
            {getSubtitle()}
          </p>
        </div>

        <ComparisonTable />

        <div className="flex flex-col items-center gap-8 mt-16">
          <Card className="glass p-6 text-center max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold gradient-text">
              {getSavingsText()}
            </p>
            <p className="text-white/70 mt-2">
              {getSavingsDescription()}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};