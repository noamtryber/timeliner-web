import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { ContactInfo } from "./footer/ContactInfo";
import { SocialLinks } from "./footer/SocialLinks";
import { FooterLinks } from "./footer/FooterLinks";

export const Footer = () => {
  const { data: translations } = usePageContent("footer", "main-footer");
  const { data: mediaContent } = useMediaContent("footer", "main-footer");
  const [footerContent, setFooterContent] = useState({
    email: '',
    phone: '',
    location: '',
    description: '',
    copyright: '',
    designer: '',
    powered_by: '',
    instagram_url: '',
    youtube_url: '',
  });
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    if (translations) {
      const content = {
        email: translations['email'] || '',
        phone: translations['phone'] || '',
        location: translations['location'] || '',
        description: translations['description'] || '',
        copyright: translations['copyright'] || '',
        designer: translations['designer'] || '',
        powered_by: translations['powered_by'] || '',
        instagram_url: translations['instagram_url'] || '',
        youtube_url: translations['youtube_url'] || '',
      };
      setFooterContent(content);
    }

    if (mediaContent && mediaContent.length > 0) {
      const logo = mediaContent.find(item => item.media_key === 'footer_logo');
      if (logo) {
        setLogoUrl(logo.media_url);
      }
    }
  }, [translations, mediaContent]);

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
              <img 
                src={logoUrl || "/lovable-uploads/1ad9d673-efdf-41ae-8a29-82d3e976a7ed.png"}
                alt="Logo" 
                className="h-7"
              />
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              {footerContent.description}
            </p>
            <ContactInfo 
              email={footerContent.email}
              phone={footerContent.phone}
              location={footerContent.location}
            />
          </div>

          {/* Right side - Links and social */}
          <div className="flex flex-col md:items-end space-y-6">
            <SocialLinks 
              instagramUrl={footerContent.instagram_url}
              youtubeUrl={footerContent.youtube_url}
            />
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
            <FooterLinks 
              designer={footerContent.designer}
              instagramUrl={footerContent.instagram_url}
              poweredBy={footerContent.powered_by}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};