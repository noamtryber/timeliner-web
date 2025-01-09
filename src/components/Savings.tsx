import { Card } from "@/components/ui/card";
import { ComparisonTable } from "./ComparisonTable";

export const Savings = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Save Money, Time, and Stress
          </h2>
          <p className="text-xl text-white/70">
            See how Timeliner consolidates multiple tools into one affordable platform.
          </p>
        </div>

        {/* Comparison Table */}
        <ComparisonTable />

        <div className="flex flex-col items-center gap-8 mt-16">
          <div className="w-full max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/d70e7b9a-2f8d-4114-a256-55208522d8dd.png"
              alt="Timeliner cost comparison with other tools"
              className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <Card className="glass p-6 text-center max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold gradient-text">
              Save over $100/month with Timeliner
            </p>
            <p className="text-white/70 mt-2">
              by replacing multiple tools with one intuitive platform!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};