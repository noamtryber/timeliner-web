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
    title: "Smart Workflows & Revisions",
    description: "Streamline your editing process with intelligent workflows"
  },
  {
    icon: FileStack,
    title: "Interactive Offer Creation",
    description: "Create and send professional offers in minutes"
  },
  {
    icon: CreditCard,
    title: "Payments System",
    description: "Get paid faster with integrated payment processing"
  },
  {
    icon: Users,
    title: "CRM",
    description: "Manage your clients and projects in one place"
  },
  {
    icon: FolderOpen,
    title: "Simple Client Portals",
    description: "Give clients easy access to their projects"
  },
  {
    icon: UserCircle,
    title: "Team Management",
    description: "Collaborate efficiently with your team"
  },
  {
    icon: Shield,
    title: "Secure Media Storage",
    description: "Keep your files safe and accessible"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          All You Need in One Place
        </h2>
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