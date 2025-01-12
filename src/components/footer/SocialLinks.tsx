import { Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

interface SocialLinksProps {
  instagramUrl: string;
  youtubeUrl: string;
}

export const SocialLinks = ({ instagramUrl, youtubeUrl }: SocialLinksProps) => {
  return (
    <div className="flex space-x-4">
      <Link 
        to={instagramUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
      >
        <Instagram className="w-5 h-5" />
      </Link>
      <Link 
        to={youtubeUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
      >
        <Youtube className="w-5 h-5" />
      </Link>
    </div>
  );
};