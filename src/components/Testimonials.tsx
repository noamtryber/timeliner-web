import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "John Smith",
    role: "Video Editor",
    quote: "Timeliner has completely streamlined my workflow as a video editor. I save hours every week, allowing me to focus on creativity rather than admin tasks.",
    image: "/lovable-uploads/be9f8176-6ebd-4c6f-a721-34b1f9bd40cd.png"
  },
  {
    name: "Sarah Johnson",
    role: "Creative Manager",
    quote: "As a creative manager, managing multiple teams was chaotic. Timeliner brought everything into one platform and increased our efficiency by 40%.",
    image: "/lovable-uploads/6782f7e6-215f-48d2-b9fb-8abfc1b5d97b.png"
  },
  {
    name: "Michael Lee",
    role: "Agency Owner",
    quote: "For my agency, Timeliner not only saves us time but helps retain clients with improved communication and project delivery. Our revenue has increased by 25%!",
    image: "/lovable-uploads/e4c99774-d5fc-4c77-ab34-cabac470ed41.png"
  }
];

const stats = [
  {
    value: 11.5,
    suffix: "M+",
    label: "Clients Revenue"
  },
  {
    value: 21.9,
    suffix: "M+",
    label: "Transactions Recorded"
  },
  {
    value: 300,
    suffix: "+",
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

const AnimatedNumber = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCurrent(prev => {
        const newValue = stepValue * currentStep;
        return newValue >= value ? value : newValue;
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {current.toFixed(current >= 100 ? 0 : 1)}
      {suffix}
    </span>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[100%] bg-accent/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            We Are Proud to Have A Great Indicator
          </h2>
          <p className="text-xl text-white/70">
            Trusted by 500+ Brands & Companies
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 glass hover:bg-card/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-white/70">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Rating Card */}
        <div className="flex justify-center mb-24">
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

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 glass hover:bg-card/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <Avatar className="w-16 h-16 border-2 border-primary">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                </Avatar>
              </div>
              <blockquote className="mb-6 text-lg text-white/90 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-white/70">{testimonial.role}</p>
              </div>
            </Card>
          ))}
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