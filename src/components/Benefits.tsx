import { VideoIcon, Building2Icon, UsersIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: VideoIcon,
    title: "Video Editors",
    description: "Manage client relationships and revisions effortlessly."
  },
  {
    icon: Building2Icon,
    title: "Creative Agencies",
    description: "Oversee multiple editors, projects, and clients from one platform."
  },
  {
    icon: UsersIcon,
    title: "Project Managers",
    description: "Streamline short-form content production and team coordination."
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Who Benefits from Timeliner?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 glass hover:bg-card/50 transition-all duration-300 cursor-pointer group animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <benefit.icon className="w-12 h-12 text-primary mb-6 group-hover:text-accent transition-colors" />
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-white/70 text-lg">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};