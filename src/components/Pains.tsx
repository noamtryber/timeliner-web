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
    imagePath: "/lovable-uploads/8e8e21c8-1e41-4c91-98e2-bedebf2b90b5.png"
  },
  {
    icon: Clock,
    title: "Payment Delays",
    description: [
      "Payments take weeks or months to arrive.",
      "No automated system to ensure quick payouts after approval."
    ],
    imagePath: "/lovable-uploads/94a8f111-a09f-4217-80ff-c246e3f328d1.png"
  },
  {
    icon: AppWindow,
    title: "No Centralized Tools",
    description: [
      "Juggling multiple apps for projects, feedback, and payments wastes time.",
      "No seamless way for agencies to manage freelancers or pay them per project milestone."
    ],
    imagePath: "/lovable-uploads/301f83d9-fbbe-4a1f-ad2c-169a8e280ac0.png"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {pains.map((pain, index) => (
            <div key={index} className="relative pt-[300px]">
              {/* Floating image */}
              <div 
                className={`absolute top-0 left-1/2 -translate-x-1/2 ${
                  index === 1 ? 'w-[400px] h-[600px]' : 'w-[320px] h-[240px]'
                } -mt-4 transform hover:scale-105 transition-transform duration-300`}
                style={{ 
                  zIndex: index === 1 ? 3 : 2,
                  perspective: '1000px',
                  transform: `translateX(-50%) rotate${index % 2 === 0 ? 'Y' : 'X'}(${index % 2 === 0 ? -3 : 3}deg)`
                }}
              >
                <img
                  src={pain.imagePath}
                  alt={pain.title}
                  className="w-full h-full object-contain rounded-lg shadow-xl"
                />
              </div>

              {/* Content card */}
              <Card className="glass p-6 hover:bg-card/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <pain.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">{pain.title}</h3>
                {pain.description.map((desc, i) => (
                  <p key={i} className="text-white/70 mb-2">
                    {desc}
                  </p>
                ))}
              </Card>
            </div>
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