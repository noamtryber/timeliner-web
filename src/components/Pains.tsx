import { MessageCircle, Clock, AppWindow } from "lucide-react";
import { Card } from "@/components/ui/card";

const pains = [
  {
    icon: MessageCircle,
    title: "Unclear Expectations",
    description: [
      "Mismatched client and editor expectations lead to frustration.",
      "Revisions and Versions scattered across WhatsApp, Email, and G-Drive."
    ],
    imagePath: "/lovable-uploads/a4781b2d-4caf-447d-ae15-0bf590645911.png"
  },
  {
    icon: Clock,
    title: "Payment Delays",
    description: [
      "Payments take weeks or months to arrive.",
      "No automated system to ensure quick payouts after approval."
    ],
    imagePath: "/placeholder.svg"
  },
  {
    icon: AppWindow,
    title: "No Centralized Tools",
    description: [
      "Juggling multiple apps for projects, feedback, and payments wastes time.",
      "No seamless way for agencies to manage freelancers or pay them per project milestone."
    ],
    imagePath: "/placeholder.svg"
  }
];

export const Pains = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[100%] bg-accent/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            The Frustrations Every Editor and Agency Knows Too Well
          </h2>
          <p className="text-xl text-white/70">
            Working with clients shouldn't be this hard...
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <Card 
              key={index}
              className="glass p-6 hover:bg-card/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                <img
                  src={pain.imagePath}
                  alt={pain.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <pain.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">{pain.title}</h3>
              {pain.description.map((desc, i) => (
                <p key={i} className="text-white/70 mb-2">
                  {desc}
                </p>
              ))}
            </Card>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mt-16">
          <p className="text-xl text-white/70 mb-4">
            These challenges are exactly why we built Timeliner.
          </p>
          <p className="text-xl font-medium text-primary">
            Let's see how we can solve them!
          </p>
        </div>
      </div>
    </section>
  );
};