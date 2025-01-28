import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesHeader = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';

  return (
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-primary font-medium mb-4 block">
        Features
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
        Revolutionary Tools for Video Creators
      </h2>
      <p className="text-white/70 text-lg leading-relaxed">
        Simplify and streamline your entire video post production workflow with features built specifically for video editors, videographers, content agencies, and big post-production teams.
      </p>
    </div>
  );
};