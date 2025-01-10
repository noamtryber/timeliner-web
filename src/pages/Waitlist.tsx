import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/App";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Percent, Bell } from "lucide-react";

const Waitlist = () => {
  const navigate = useNavigate();
  const { session } = useAuth();

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
            <h2 className="text-2xl font-semibold mb-6">What does this mean for you?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 glass hover:bg-white/5 transition-colors rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Early Access</h3>
                  <p className="text-white/80">
                    When we officially launch the platform, you'll be among the first to receive early access.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 glass hover:bg-white/5 transition-colors rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Percent className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Exclusive Discount</h3>
                  <p className="text-white/80">
                    You've secured a 15% guaranteed discount for the initial period after the launch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 glass hover:bg-white/5 transition-colors rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Stay Updated</h3>
                  <p className="text-white/80">
                    We'll keep you updated with important news about our development and progress.
                  </p>
                </div>
              </div>
            </div>
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
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-xl">
              <div className="p-6 bg-gradient-to-b from-primary/5 to-transparent border-b border-white/10">
                <h3 className="text-xl font-semibold text-white">Share Your Feedback</h3>
                <p className="text-white/70 mt-2">Help us shape the future of Timeliner</p>
              </div>
              <div className="h-[450px]">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSd9soTWB-dwKruXAA_mh4DJ-4rjAcSCw3YaU2k42YkxrE4O7Q/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="bg-white"
                >
                  Loading form...
                </iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;