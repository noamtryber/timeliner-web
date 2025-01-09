import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 animate-fade-down">
      <div className="glass mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-xl font-bold gradient-text">Timeliner</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#features" className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Features
              </a>
              <a href="#testimonials" className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Testimonials
              </a>
              <a href="#pricing" className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </a>
              <a href="#blog" className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </a>
              <Button variant="ghost" className="text-white/70">
                Login
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="glass md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Testimonials
            </a>
            <a href="#pricing" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </a>
            <a href="#blog" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </a>
            <Button variant="ghost" className="w-full justify-start">
              Login
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};