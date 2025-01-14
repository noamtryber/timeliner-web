import { useAuth } from "@/hooks/useAuth";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Waitlist = () => {
  const { session } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold">Join the Waitlist</h1>
        <p className="mt-4 text-lg">Be the first to know when we launch!</p>
        {session ? (
          <p className="mt-4 text-green-500">Thank you for signing up!</p>
        ) : (
          <button className="mt-6 bg-primary text-white px-4 py-2 rounded">
            Sign Up
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Waitlist;
