
import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesHeader = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';

  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'rtl' : ''}`}>
      <p className="subtitle-gradient mb-4">
        [features_subtitle]
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
        [features_title]
      </h2>
      <p className="text-lg text-white/70">
        [features_description]
      </p>
    </div>
  );
};
