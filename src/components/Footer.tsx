import { useEffect, useState } from "react";
import { usePageContent } from "@/hooks/usePageContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactInfo } from "./footer/ContactInfo";
import { FooterLogo } from "./footer/FooterLogo";
import { FooterDescription } from "./footer/FooterDescription";
import { FooterSocial } from "./footer/FooterSocial";
import { FooterBottom } from "./footer/FooterBottom";

export const Footer = () => {
  const { data: translations, isLoading } = usePageContent("footer", "main-footer");
  const { isRTL } = useLanguage();
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

  useEffect(() => {
    console.log("Translations received:", translations);
    if (translations) {
      const content = {
        email: isRTL ? 'contact@noamtryber.com' : translations['email'] || '',
        phone: isRTL ? '-' : translations['phone'] || '',
        location: isRTL ? 'וויומינג, ארה"ב' : translations['location'] || '',
        description: translations['description'] || '',
        copyright: translations['copyright'] || '',
        designer: isRTL ? 'נוצר ע"י נועם טרייבר' : translations['designer'] || '',
        powered_by: isRTL ? 'Timeliner' : translations['powered_by'] || '',
        instagram_url: translations['instagram_url'] || '',
        youtube_url: translations['youtube_url'] || '',
      };
      console.log("Setting footer content:", content);
      setFooterContent(content);
    }
  }, [translations, isRTL]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="w-full bg-card/30 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Left side - Company info */}
          <div className="space-y-4">
            <div className={isRTL ? 'text-right' : ''}>
              <FooterLogo />
            </div>
            <FooterDescription description={footerContent.description} />
            <ContactInfo 
              email={footerContent.email}
              phone={footerContent.phone}
              location={footerContent.location}
            />
          </div>

          {/* Right side - Social links and back to top */}
          <div className={isRTL ? 'md:text-left' : 'md:text-right'}>
            <FooterSocial 
              instagramUrl={footerContent.instagram_url}
              youtubeUrl={footerContent.youtube_url}
            />
          </div>
        </div>

        {/* Bottom section */}
        <FooterBottom 
          designer={footerContent.designer}
          instagramUrl={footerContent.instagram_url}
          poweredBy={footerContent.powered_by}
        />
      </div>
    </footer>
  );
};