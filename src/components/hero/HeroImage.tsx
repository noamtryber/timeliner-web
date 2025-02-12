
import { useLanguage } from "@/contexts/LanguageContext";
import { useMediaContent } from "@/hooks/useMediaContent";

export const HeroImage = () => {
  const { isRTL, language } = useLanguage();
  const { data: media, isLoading } = useMediaContent('hero', 'main');
  
  const heroImage = media?.find(item => item.media_key === 'hero_image')?.media_url;
  
  if (isLoading || !heroImage) {
    return null;
  }
  
  let imageUrl = heroImage;
  
  if (language === 'ar') {
    imageUrl = 'https://tbvszyxrrtqorwnionfv.supabase.co/storage/v1/object/sign/media/hero%20image%20arabic1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZWRpYS9oZXJvIGltYWdlIGFyYWJpYzEucG5nIiwiaWF0IjoxNzM5Mzk0MzMyLCJleHAiOjE3NzA5MzAzMzJ9._4f57KHGLBXOpOYXeh8cY6GuwA3JykeOUOSRGX5YbaU';
  } else if (language === 'he') {
    imageUrl = 'https://tbvszyxrrtqorwnionfv.supabase.co/storage/v1/object/sign/media/hero%20image%20hebrew4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZWRpYS9oZXJvIGltYWdlIGhlYnJldzQucG5nIiwiaWF0IjoxNzM5Mzk0NjAxLCJleHAiOjE3NzA5MzA2MDF9.fe1RhjK9wavxi7k5N5bMcxYTbzPuG_MYBukeYCTG4zQ';
  }
  
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
