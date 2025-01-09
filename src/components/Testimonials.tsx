import { Card } from "@/components/ui/card";
import { User2, Building2, Briefcase } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "Video Editor",
    quote: "Timeliner has completely streamlined my workflow as a video editor. I save hours every week, allowing me to focus on creativity rather than admin tasks.",
    icon: User2
  },
  {
    name: "Sarah Johnson",
    role: "Creative Manager",
    quote: "As a creative manager, managing multiple teams was chaotic. Timeliner brought everything into one platform and increased our efficiency by 40%.",
    icon: Building2
  },
  {
    name: "Michael Lee",
    role: "Agency Owner",
    quote: "For my agency, Timeliner not only saves us time but helps retain clients with improved communication and project delivery. Our revenue has increased by 25%!",
    icon: Briefcase
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[100%] bg-accent/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary/80 font-medium mb-4 block">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            What Our Users Say
          </h2>
          <p className="text-xl text-white/70">
            Join thousands of satisfied video professionals who have transformed their workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 glass hover:bg-card/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <testimonial.icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors" />
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
      </div>
    </section>
  );
};