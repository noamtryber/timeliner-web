import { Link } from "react-router-dom";

interface FooterLinksProps {
  designer: string;
  instagramUrl: string;
  poweredBy: string;
}

export const FooterLinks = ({ designer, instagramUrl, poweredBy }: FooterLinksProps) => {
  return (
    <div className="flex items-center space-x-2 text-white">
      <span>Designed by </span>
      <Link 
        to={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white/80 transition-colors"
      >
        {designer}
      </Link>
      <span>|</span>
      <span>Powered by {poweredBy}</span>
    </div>
  );
};