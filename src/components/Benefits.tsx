import { VideoIcon, Building2Icon, UsersIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const benefits = [
  {
    icon: VideoIcon,
    title: {
      en: "Video Editors",
      he: "עורכי וידאו"
    },
    description: {
      en: "Manage client relationships and revisions effortlessly.",
      he: "ניהול פשוט של קשרי לקוחות ותיקונים, ללא מאמץ."
    }
  },
  {
    icon: Building2Icon,
    title: {
      en: "Creative Agencies",
      he: "סוכנויות תוכן וקרייטיב"
    },
    description: {
      en: "Oversee multiple editors, projects, and clients from one platform.",
      he: "פלטפורמה מרכזית לניהול צוותים, פרויקטים וקשרי לקוחות."
    }
  },
  {
    icon: UsersIcon,
    title: {
      en: "Project Managers",
      he: "מנהלי פרויקטים"
    },
    description: {
      en: "Streamline short-form content production and team coordination.",
      he: "ייעלו את תהליך הפקת תוכן קצר/ארוך ואת התיאום בין הצוותים."
    }
  }
];

export const Benefits = () => {
  const { language } = useLanguage();
  const isHebrew = language === 'he';

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {isHebrew ? "מי מרוויח מטימליינר?" : "Who Benefits from Timeliner?"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 glass hover:bg-card/50 transition-all duration-300 cursor-pointer group animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <benefit.icon className="w-12 h-12 text-primary mb-6 group-hover:text-accent transition-colors" />
              <h3 className="text-2xl font-semibold mb-4">
                {isHebrew ? benefit.title.he : benefit.title.en}
              </h3>
              <p className="text-white/70 text-lg">
                {isHebrew ? benefit.description.he : benefit.description.en}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};