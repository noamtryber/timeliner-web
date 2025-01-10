import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/App";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Waitlist = () => {
  const navigate = useNavigate();
  const { session } = useAuth();

  // Protect the route - redirect to auth if not logged in
  useEffect(() => {
    if (!session) {
      navigate("/auth");
    }
  }, [session, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background relative p-8">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 z-50 text-white/70 hover:text-white"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <div className="max-w-3xl mx-auto space-y-8 pt-16">
        <div className="text-center mb-12">
          <img 
            src="/lovable-uploads/98b8bad0-76f5-4b50-af12-b49cd7309a55.png"
            alt="Timeliner Logo"
            className="w-32 h-auto mx-auto mb-6 animate-fade-up filter drop-shadow-lg"
          />
          <h1 className="text-4xl font-bold gradient-text-purple mb-4">
            Thank you for signing up for Timeliner!
          </h1>
          <p className="text-white/70 text-lg">
            We are currently in the final stages of developing the full platform, and you've joined an exclusive waitlist.
          </p>
        </div>

        <div className="glass p-8 rounded-lg border border-white/10 backdrop-blur-xl space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What does this mean for you?</h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary">1.</span>
                When we officially launch the platform, you'll be among the first to receive early access.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">2.</span>
                You've secured a 15% guaranteed discount for the initial period after the launch.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">3.</span>
                We'll keep you updated with important news about our development and progress.
              </li>
            </ul>
          </section>

          <section className="pt-4">
            <p className="text-white/70 italic">
              We understand this might be a bit confusing, and perhaps you expected the platform to already be live. 
              However, this is an essential part of the process to ensure that Timeliner perfectly meets your needs 
              and those of hundreds of other professionals in the industry.
            </p>
            <p className="text-white/70 italic mt-4">
              Your registration plays a crucial role in helping us build the best product on the market.
            </p>
          </section>

          <section className="pt-4">
            <h2 className="text-2xl font-semibold mb-4">Why is it worth the wait?</h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary">1.</span>
                Our platform is designed to save you time and money while improving your entire workflow.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">2.</span>
                You'll be part of the early community that influences features and helps shape the ultimate video editing tool.
              </li>
            </ul>
          </section>

          <section className="pt-4">
            <h2 className="text-2xl font-semibold mb-4">Got an idea for improvement?</h2>
            <p className="text-white/80 mb-4">
              We'd love to hear from you! We're committed to building the best tool for video editors and project management - 
              and that's exactly why your opinion matters to us!
            </p>
            <p className="text-white/80">
              Tell us what would make this amazing for you:
            </p>
            <Button 
              className="mt-4"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd9soTWB-dwKruXAA_mh4DJ-4rjAcSCw3YaU2k42YkxrE4O7Q/viewform?embedded=true', '_blank')}
            >
              Share Your Feedback
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;