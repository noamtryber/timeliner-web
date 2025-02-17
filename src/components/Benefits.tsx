
import { VideoIcon, Building2Icon, UsersIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const Benefits = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';

  const title = '[benefits_title]';
  const content = [
    {
      icon: VideoIcon,
      title: '[benefit_1_title]',
      description: '[benefit_1_description]'
    },
    {
      icon: Building2Icon,
      title: '[benefit_2_title]',
      description: '[benefit_2_description]'
    },
    {
      icon: UsersIcon,
      title: '[benefit_3_title]',
      description: '[benefit_3_description]'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 bg-background/20 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 cursor-pointer group animate-fade-up border border-[#333333]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <benefit.icon className="w-12 h-12 text-primary mb-6 group-hover:text-accent transition-colors" />
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-white/70 text-lg">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
