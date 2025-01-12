import { useMediaContent } from "@/hooks/useMediaContent";
import { useState, useEffect } from "react";

export const FooterLogo = () => {
  const { data: mediaContent } = useMediaContent("footer", "main-footer");
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    if (mediaContent && mediaContent.length > 0) {
      const logo = mediaContent.find(item => item.media_key === 'footer_logo');
      if (logo) {
        setLogoUrl(logo.media_url);
      }
    }
  }, [mediaContent]);

  return (
    <div className="flex items-center space-x-2">
      <img 
        src={logoUrl || "/lovable-uploads/1ad9d673-efdf-41ae-8a29-82d3e976a7ed.png"}
        alt="Logo" 
        className="h-7"
      />
    </div>
  );
};