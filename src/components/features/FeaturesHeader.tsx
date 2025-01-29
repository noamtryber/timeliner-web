import { usePageContent } from "@/hooks/usePageContent";
import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesHeader = () => {
  const { language } = useLanguage();
  const { data: content } = usePageContent('feature');
  
  const getHeaderContent = () => {
    if (language === 'ar') {
      return {
        title: "أدوات ثورية لصناع الفيديو",
        description: "خلّص شغل المونتاج بسهولة وبسرعة مع ميزات مصممة خصيصًا للمحررين، المصورين، وكالات المحتوى، وحتى فرق البوست-برودكشن الكبيرة. لا مزيد من الفوضى، كل شيء في مكانه، وكل خطوة محسوبة."
      };
    }
    
    return {
      title: content?.features_title || "Features",
      description: content?.features_description || 
        "Simplify and streamline your entire video post production workflow with features built specifically for video editors, videographers, content agencies, and big post-production teams."
    };
  };

  const headerContent = getHeaderContent();
  
  return (
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-primary font-medium mb-4 block">
        {headerContent.title}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
        {content?.features_subtitle || "Revolutionary Tools for Video Creators"}
      </h2>
      <p className="text-white/70 text-lg leading-relaxed">
        {headerContent.description}
      </p>
    </div>
  );
};