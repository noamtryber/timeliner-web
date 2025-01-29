import { useLanguage } from "@/contexts/LanguageContext";
import { useMediaContent } from "@/hooks/useMediaContent";

export const HeroImage = () => {
  const { isRTL } = useLanguage();
  const { data: media } = useMediaContent('hero', 'main');
  
  const heroImage = media?.find(item => item.media_key === 'hero_image')?.media_url || '/lovable-uploads/7a7300e3-617d-48ce-a15a-212411db6ee8.png';
  
  return (
    <div className="hidden lg:block relative">
      <div className={`relative rounded-2xl overflow-hidden scale-125 transform ${
        isRTL ? '-translate-x-8' : 'translate-x-8'
      }`}>
        <img 
          src={heroImage}
          alt="Timeliner Dashboard"
          className="w-full h-auto rounded-2xl"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background/20 to-transparent ${
          isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
        }`} />
      </div>
    </div>
  );
};