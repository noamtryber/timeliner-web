import { useLanguage } from "@/contexts/LanguageContext";
import { useMediaContent } from "@/hooks/useMediaContent";

export const HeroImage = () => {
  const { isRTL } = useLanguage();
  const { data: media, isLoading } = useMediaContent('hero', 'main');
  
  const heroImage = media?.find(item => item.media_key === 'hero_image')?.media_url;
  
  if (isLoading || !heroImage) {
    return null;
  }
  
  return (
    <div className="hidden lg:block relative">
      <div className={`relative rounded-2xl overflow-hidden scale-125 transform ${
        isRTL ? '-translate-x-8' : 'translate-x-8'
      }`}>
        <img 
          src={heroImage}
          alt="Timeliner Dashboard"
          className="w-full h-auto rounded-2xl"
          loading="eager"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background/20 to-transparent ${
          isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
        }`} />
      </div>
    </div>
  );
};