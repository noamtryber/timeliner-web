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
    <div className="hidden lg:block relative w-full h-full">
      <div className={`relative rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 ${
        isRTL ? '-translate-x-8' : 'translate-x-0'
      }`}>
        <img 
          src={heroImage}
          alt="Timeliner Dashboard"
          className="w-full h-auto max-w-[120%] lg:max-w-[130%] xl:max-w-[140%] 2xl:max-w-[150%] rounded-2xl object-cover"
          loading="eager"
          style={{
            transform: `scale(${isRTL ? '0.9' : '1'})`,
            transformOrigin: isRTL ? 'right center' : 'left center'
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background/20 to-transparent ${
          isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
        }`} />
      </div>
    </div>
  );
};