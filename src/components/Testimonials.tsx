import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = {
  en: [
    {
      name: "Noga Levi",
      role: "Video Editor",
      quote: "Timeliner has completely streamlined my workflow as a video editor. I save hours every week, allowing me to focus on creativity rather than admin tasks.",
      image: "/lovable-uploads/be9f8176-6ebd-4c6f-a721-34b1f9bd40cd.png"
    },
    {
      name: "Zohar Vanunu",
      role: "Creative Manager",
      quote: "As a creative manager, managing multiple teams was chaotic. Timeliner brought everything into one platform and increased our efficiency by 40%.",
      image: "/lovable-uploads/6782f7e6-215f-48d2-b9fb-8abfc1b5d97b.png"
    },
    {
      name: "Noam Tryber",
      role: "Agency Owner",
      quote: "For my agency, Timeliner not only saves us time but helps retain clients with improved communication and project delivery. Our revenue has increased by 25%!",
      image: "/lovable-uploads/e4c99774-d5fc-4c77-ab34-cabac470ed41.png"
    }
  ],
  he: [
    {
      name: "נגה לוי",
      role: "עורכת וידאו",
      quote: "טיימליינר שיפר ממש את תהליך העבודה שלי כעורכת וידאו מול לקוחות. אני חוסכת שעות בכל שבוע, ומאפשרת לי להתמקד ביצירתיות במקום במשימות מעצבנות ובלאגן בווצאפ.",
      image: "/lovable-uploads/be9f8176-6ebd-4c6f-a721-34b1f9bd40cd.png"
    },
    {
      name: "זוהר וענונו",
      role: "יוצר תלת ומנהל פרויקטים",
      quote: "כאיש תלת מימד ובעבודה מול לקוחות בינלאומיים, טיימליינר ריכז את הכל לפלטפורמה אחת והעלה את היעילות שלי והלקוחות שלי לפחות פי 2.",
      image: "/lovable-uploads/6782f7e6-215f-48d2-b9fb-8abfc1b5d97b.png"
    },
    {
      name: "נועם טרייבר",
      role: "בעל סוכנות תוכן קצר",
      quote: "Timeliner לא רק חוסך לנו זמן אלא גם מסייע בשימור לקוחות עם תקשורת משופרת ומסירת פרויקטים מדוייקים בזמן. ההכנסות שלנו גדלו ב-15%!",
      image: "/lovable-uploads/e4c99774-d5fc-4c77-ab34-cabac470ed41.png"
    }
  ]
};

const stats = {
  en: [
    {
      value: 32,
      suffix: "%",
      label: "Faster Revision Rounds"
    },
    {
      value: 19,
      suffix: "%",
      label: "Increase in Income"
    },
    {
      value: 24,
      suffix: "%",
      label: "Client Retention in Retainers"
    }
  ],
  he: [
    {
      value: 32,
      suffix: "%",
      label: "שיפור עם סבבי תיקונים מהירים יותר"
    },
    {
      value: 19,
      suffix: "%",
      label: "עלייה בהכנסות"
    },
    {
      value: 24,
      suffix: "%",
      label: "עלייה בשימור לקוחות ריטיינר"
    }
  ]
};

const AnimatedNumber = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCurrent(prev => {
        const newValue = stepValue * currentStep;
        return newValue >= value ? value : newValue;
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span ref={elementRef}>
      {current.toFixed(current >= 100 ? 0 : 1)}
      {suffix}
    </span>
  );
};

export const Testimonials = () => {
  const { language } = useLanguage();
  const content = testimonials[language === 'he' ? 'he' : 'en'];
  const statsContent = stats[language === 'he' ? 'he' : 'en'];
  const title = language === 'he' ? 'המלצות' : 'Testimonials';
  const subtitle = language === 'he' ? 'מה הלקוחות שלנו מספרים?' : 'What others are saying';

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[100%] bg-accent/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="subtitle-gradient mb-4">
            {title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {subtitle}
          </h2>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {statsContent.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 glass hover:bg-card/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-white/70">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {content.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 glass hover:bg-card/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <Avatar className="w-16 h-16 border-2 border-primary">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                </Avatar>
              </div>
              <blockquote className="mb-6 text-lg text-white/90 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-white/70">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
