import { useLanguage } from "@/contexts/LanguageContext";

interface FeaturesHeaderProps {
  getContent: (sectionId: string | null, key: string) => string;
}

export const FeaturesHeader = ({ getContent }: FeaturesHeaderProps) => {
  const { language } = useLanguage();
  console.log('Rendering FeaturesHeader with language:', language);

  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="subtitle-gradient font-medium mb-4 block">
        {getContent(null, 'header_label') || 'Features'}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
        {getContent(null, 'header_title') || 'Powerful Features for Video Creators'}
      </h2>
      <p className="text-white/70 text-lg">
        {getContent(null, 'header_description') || 'Streamline your video production workflow with our comprehensive suite of features designed for creators.'}
      </p>
    </div>
  );
};