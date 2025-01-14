import { useLanguage } from "@/contexts/LanguageContext";

export const HeroImage = () => {
  const { isRTL } = useLanguage();
  
  return (
    <div className="hidden lg:block relative">
      <div className={`relative rounded-2xl overflow-hidden scale-125 transform ${
        isRTL ? '-translate-x-8' : 'translate-x-8'
      }`}>
        <img 
          src="/lovable-uploads/7a7300e3-617d-48ce-a15a-212411db6ee8.png"
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