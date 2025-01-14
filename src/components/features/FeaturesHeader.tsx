import { useLanguage } from "@/contexts/LanguageContext";

interface FeaturesHeaderProps {
  getContent: (sectionId: string | null, key: string) => string;
}

export const FeaturesHeader = ({ getContent }: FeaturesHeaderProps) => {
  const { language } = useLanguage();

  const getHeaderContent = () => {
    switch (language) {
      case 'es':
        return {
          label: 'Funcionalidades',
          title: 'Funcionalidades Potentes para Creadores de Video',
          description: 'Optimiza tu flujo de trabajo de producción de video con nuestra suite completa de herramientas diseñadas para creadores.'
        };
      case 'he':
        return {
          label: 'פיצ\'רים',
          title: 'פיצ\'רים חזקים ליוצרי וידאו',
          description: 'ייעול תהליך הפקת הווידאו שלך עם חבילה מקיפה של כלים שתוכננו במיוחד ליוצרים.'
        };
      default:
        return {
          label: getContent(null, 'header_label') || 'Features',
          title: getContent(null, 'header_title') || 'Powerful Features for Video Creators',
          description: getContent(null, 'header_description') || 'Streamline your video production workflow with our comprehensive suite of features designed for creators.'
        };
    }
  };

  const content = getHeaderContent();

  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="subtitle-gradient font-medium mb-4 block">
        {content.label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
        {content.title}
      </h2>
      <p className="text-white/70 text-lg">
        {content.description}
      </p>
    </div>
  );
};