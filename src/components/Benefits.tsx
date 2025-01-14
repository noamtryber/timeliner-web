import { VideoIcon, Building2Icon, UsersIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const benefits = {
  en: [
    {
      icon: VideoIcon,
      title: "Video Editors",
      description: "Manage client relationships and revisions effortlessly."
    },
    {
      icon: Building2Icon,
      title: "Creative Agencies",
      description: "Oversee multiple editors, projects, and clients from one platform."
    },
    {
      icon: UsersIcon,
      title: "Project Managers",
      description: "Streamline short-form content production and team coordination."
    }
  ],
  he: [
    {
      icon: VideoIcon,
      title: "עורכי וידאו",
      description: "ניהול פשוט של קשרי לקוחות ותיקונים, ללא מאמץ."
    },
    {
      icon: Building2Icon,
      title: "סוכנויות תוכן וקרייטיב",
      description: "פלטפורמה מרכזית לניהול צוותים, פרויקטים וקשרי לקוחות."
    },
    {
      icon: UsersIcon,
      title: "מנהלי פרויקטים",
      description: "ייעלו את תהליך הפקת תוכן קצר/ארוך ואת התיאום בין הצוותים."
    }
  ],
  es: [
    {
      icon: VideoIcon,
      title: "Editores de Video",
      description: "Gestiona las relaciones con clientes y revisiones sin esfuerzo."
    },
    {
      icon: Building2Icon,
      title: "Agencias Creativas",
      description: "Supervisa múltiples editores, proyectos y clientes desde una sola plataforma."
    },
    {
      icon: UsersIcon,
      title: "Gestores de Proyecto",
      description: "Optimiza la producción de contenido y la coordinación del equipo."
    }
  ]
};

export const Benefits = () => {
  const { language } = useLanguage();
  const content = benefits[language === 'he' ? 'he' : language === 'es' ? 'es' : 'en'];
  const title = language === 'he' 
    ? 'מי מרוויח מטיימליינר?' 
    : language === 'es'
    ? '¿Quién se Beneficia de Timeliner?'
    : 'Who Benefits from Timeliner?';

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