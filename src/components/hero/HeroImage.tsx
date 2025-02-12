
import { useLanguage } from "@/contexts/LanguageContext";
import { useMediaContent } from "@/hooks/useMediaContent";

export const HeroImage = () => {
  const { isRTL, language } = useLanguage();
  const { data: media, isLoading } = useMediaContent('hero', 'main');
  
  const heroImage = media?.find(item => item.media_key === 'hero_image')?.media_url;
  
  if (isLoading || !heroImage) {
    return null;
  }
  
  const imageUrl = language === 'he' 
    ? 'https://tbvszyxrrtqorwnionfv.supabase.co/storage/v1/object/sign/media/hero%20image%20hebrew2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZWRpYS9oZXJvIGltYWdlIGhlYnJldzIucG5nIiwiaWF0IjoxNzM5MzkwMDI4LCJleHAiOjE3NzA5MjYwMjh9.t76gmDqLtSBPuVSI5Qyv4cHGBcGtWRHwLXYGf-WZ-cI'
    : heroImage;
  
  return (
    <div className="hidden lg:block relative">
      <div className={`relative rounded-2xl overflow-hidden scale-125 transform ${
        isRTL ? '-translate-x-8' : 'translate-x-8'
      }`}>
        <img 
          src={imageUrl}
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
