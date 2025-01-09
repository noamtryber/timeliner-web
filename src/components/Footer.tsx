import { Facebook, Linkedin, Dribbble, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-card/30 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/favicon.ico" alt="Timeliner" className="w-6 h-6" />
              <span className="text-xl font-semibold">Timeliner</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Revolutionize the video editing industry by making high-quality project management faster
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Email: contact@timeliner.com</p>
              <p className="text-sm text-gray-400">Phone: +1 (208) 120-802</p>
              <p className="text-sm text-gray-400">Location: Los Angeles, CA</p>
            </div>
          </div>

          {/* Right side - Links and social */}
          <div className="flex flex-col md:items-end space-y-6">
            <div className="flex space-x-4">
              <Link to="#" className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link to="#" className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                <Dribbble className="w-5 h-5" />
              </Link>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Back to top <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
            <div className="flex items-center space-x-2">
              <span>© 2024 Copyright - Timeliner</span>
              <span>|</span>
              <span>Designed by LoganCee</span>
              <span>|</span>
              <span>Powered by Framer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};