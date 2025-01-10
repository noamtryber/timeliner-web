import { useEffect, useRef } from "react";
import { 
  Workflow, 
  FileStack, 
  CreditCard, 
  Users, 
  FolderOpen, 
  UserCircle, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Smart Revision Tracking",
    description: "Reduce back-and-forth by 31% with AI-powered workflow management and version control. Our intelligent system learns from your feedback patterns and helps streamline the revision process.",
    videoUrl: "https://player.vimeo.com/video/1045525235?autoplay=1&loop=1&muted=1&background=1"
  },
  {
    icon: FileStack,
    title: "Interactive Briefs",
    description: "Create crystal-clear project briefs that align expectations from day one. Our interactive brief system ensures nothing gets missed and everyone stays on the same page throughout the project.",
    videoUrl: "/placeholder.svg"
  },
  {
    icon: CreditCard,
    title: "Seamless Payments",
    description: "Get paid faster with automated invoicing and integrated payment processing. Set up milestone payments, automate reminders, and maintain a steady cash flow with our payment tools.",
    videoUrl: "/placeholder.svg"
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Manage all your clients and projects in one centralized dashboard. Keep track of project status, deadlines, and client communications in a single, intuitive interface.",
    videoUrl: "/placeholder.svg"
  },
  {
    icon: FolderOpen,
    title: "Client Portals",
    description: "Give clients a professional, branded experience for feedback and approvals. Custom-branded portals make it easy for clients to review work and provide timely feedback.",
    videoUrl: "/placeholder.svg"
  },
  {
    icon: UserCircle,
    title: "Team Collaboration",
    description: "Keep your entire team aligned with real-time updates and notifications. Our collaboration tools make it easy to assign tasks, track progress, and maintain clear communication.",
    videoUrl: "/placeholder.svg"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance trusted by Netflix and Disney. Your data is protected with industry-leading security measures and regular security audits.",
    videoUrl: "/placeholder.svg"
  }
];

export const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const featureElements = featuresRef.current?.querySelectorAll(".feature-item");
    featureElements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 overflow-hidden">
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
        
        <div ref={featuresRef} className="space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-item opacity-0 translate-y-10 transition-all duration-700 ease-out
                grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}
            >
              {/* Video/Animation Side */}
              <div className={`glass rounded-xl aspect-video overflow-hidden relative order-1 lg:order-none
                ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                {feature.title === "Smart Revision Tracking" ? (
                  <>
                    <iframe
                      src={feature.videoUrl}
                      className="w-full h-full absolute inset-0 border-0"
                      loading="lazy"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      style={{ background: 'url(/placeholder.svg) center/cover no-repeat' }}
                    />
                    <noscript>
                      <img 
                        src="/placeholder.svg" 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </noscript>
                  </>
                ) : (
                  <img 
                    src={feature.videoUrl} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {/* Content Side */}
              <div className={`space-y-6 order-2 lg:order-none ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-lg text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
