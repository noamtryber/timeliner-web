import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const stats = [
  {
    value: "11.5M+",
    label: "Clients Revenue"
  },
  {
    value: "21.9M+",
    label: "Transactions Recorded"
  },
  {
    value: "300+",
    label: "Projects Done"
  }
];

const logos = [
  "/lovable-uploads/94a8f111-a09f-4217-80ff-c246e3f328d1.png",
  "/lovable-uploads/301f83d9-fbbe-4a1f-ad2c-169a8e280ac0.png",
  "/lovable-uploads/8e8e21c8-1e41-4c91-98e2-bedebf2b90b5.png",
  "/lovable-uploads/a4781b2d-4caf-447d-ae15-0bf590645911.png",
  "/lovable-uploads/d70e7b9a-2f8d-4114-a256-55208522d8dd.png"
];

export const Statistics = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[100%] bg-accent/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              We Are Proud to Have A Great Indicator
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Trusted by 500+ Brands & Companies
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index}
                  className="p-6 glass hover:bg-card/50 transition-all duration-300 group animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-white/70">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="glass p-6 flex items-center gap-4 animate-fade-up">
            <div className="p-3 rounded-full bg-primary/20">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-primary mb-1">4.9/5</h4>
              <p className="text-white/70">Based on 24 reviews on Clutch</p>
            </div>
          </Card>
        </div>

        {/* Running Logos */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex gap-12 items-center justify-start overflow-hidden">
            <div className="flex gap-12 items-center animate-[scroll_25s_linear_infinite]">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Company Logo"
                  className="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};