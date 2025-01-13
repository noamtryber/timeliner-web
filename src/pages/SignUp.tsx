import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { TimelineBackground } from "@/components/TimelineBackground";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Please check your email to verify your account.",
      });
      
      navigate("/waitlist");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Sign up form */}
      <div className="w-[65%] bg-white p-8 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <img 
              src="/lovable-uploads/18ab741b-81db-4ae3-a1db-e2906b95b9fd.png"
              alt="Timeline Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to timeliner.io
            </h2>
            <p className="mt-2 text-gray-600">
              Get started - it's free. No credit card needed.
            </p>
          </div>

          <form onSubmit={handleSignUp} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="bg-gray-50 border-gray-300"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your best email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-50 border-gray-300"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-50 border-gray-300"
                />
              </div>
            </div>

            <div className="text-sm text-gray-600 text-center">
              By proceeding, you agree to the{" "}
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Get Started"}
            </Button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Timeline animation */}
      <div className="w-[35%] bg-background relative overflow-hidden">
        <TimelineBackground />
      </div>
    </div>
  );
};

export default SignUp;