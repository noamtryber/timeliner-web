import { Link } from "react-router-dom";
import { FooterLinks } from "./FooterLinks";

interface FooterBottomProps {
  designer: string;
  instagramUrl: string;
  poweredBy: string;
}

export const FooterBottom = ({ designer, instagramUrl, poweredBy }: FooterBottomProps) => {
  return (
    <div className="mt-12 pt-6 border-t border-white/10 text-sm text-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex space-x-4">
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
        </div>
        <FooterLinks 
          designer={designer}
          instagramUrl={instagramUrl}
          poweredBy={poweredBy}
        />
      </div>
    </div>
  );
};