import { 
  Workflow, 
  FileStack, 
  CreditCard, 
  Users, 
  FolderOpen, 
  UserCircle, 
  Shield 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Workflow,
    title: "Smart Revision Tracking",
    description: "Reduce back-and-forth by 31% with AI-powered workflow management and version control"
  },
  {
    icon: FileStack,
    title: "Interactive Briefs",
    description: "Create crystal-clear project briefs that align expectations from day one"
  },
  {
    icon: CreditCard,
    title: "Seamless Payments",
    description: "Get paid faster with automated invoicing and integrated payment processing"
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Manage all your clients and projects in one centralized dashboard"
  },
  {
    icon: FolderOpen,
    title: "Client Portals",
    description: "Give clients a professional, branded experience for feedback and approvals"
  },
  {
    icon: UserCircle,
    title: "Team Collaboration",
    description: "Keep your entire team aligned with real-time updates and notifications"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance trusted by Netflix and Disney"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary/80 font-medium mb-4 block">FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Everything You Need to Scale Your Video Business
          </h2>
          <p className="text-white/70 text-lg">
            One platform to manage your entire video production workflow, from client onboarding to final delivery
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 glass hover:bg-card/50 transition-all duration-300 cursor-pointer group"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};