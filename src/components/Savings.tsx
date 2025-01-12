import { Card } from "@/components/ui/card";
import { ComparisonTable } from "./ComparisonTable";
import { useLanguage } from "@/contexts/LanguageContext";

export const Savings = () => {
  const { isRTL } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {isRTL ? 'חסכו כסף, זמן ולחץ' : 'Save Money, Time, and Stress'}
          </h2>
          <p className="text-xl text-white/70">
            {isRTL 
              ? 'ראו כיצד Timeliner מאחדת כלים רבים לפלטפורמה אחת במחיר משתלם.'
              : 'See how Timeliner consolidates multiple tools into one affordable platform.'}
          </p>
        </div>

        {/* Comparison Table */}
        <ComparisonTable />

        <div className="flex flex-col items-center gap-8 mt-16">
          <Card className="glass p-6 text-center max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold gradient-text">
              {isRTL 
                ? 'חסכו מעל $100 בחודש עם Timeliner'
                : 'Save over $100/month with Timeliner'}
            </p>
            <p className="text-white/70 mt-2">
              {isRTL
                ? 'על ידי החלפת כלים רבים בפלטפורמה אינטואיטיבית אחת!'
                : 'by replacing multiple tools with one intuitive platform!'}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};