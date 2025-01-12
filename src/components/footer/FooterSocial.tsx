import { ArrowUp } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

interface FooterSocialProps {
  instagramUrl: string;
  youtubeUrl: string;
}

export const FooterSocial = ({ instagramUrl, youtubeUrl }: FooterSocialProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:items-end space-y-6">
      <SocialLinks 
        instagramUrl={instagramUrl}
        youtubeUrl={youtubeUrl}
      />
      <button
        onClick={scrollToTop}
        className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        Back to top <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};