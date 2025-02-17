import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = {
  en: [
    {
      name: "Noga Levi",
      role: '[testimonial_1_role]',
      quote: '[testimonial_1_quote]',
      image: "/lovable-uploads/be9f8176-6ebd-4c6f-a721-34b1f9bd40cd.png"
    },
    {
      name: "Zohar Vanunu",
      role: '[testimonial_2_role]',
      quote: '[testimonial_2_quote]',
      image: "/lovable-uploads/6782f7e6-215f-48d2-b9fb-8abfc1b5d97b.png"
    },
    {
      name: "Noam Tryber",
      role: '[testimonial_3_role]',
      quote: '[testimonial_3_quote]',
      image: "/lovable-uploads/e4c99774-d5fc-4c77-ab34-cabac470ed41.png"
    }
  ],
  es: [
    {
      name: "Noga Levi",
      role: '[testimonial_1_role]',
      quote: '[testimonial_1_quote]',
      image: "/lovable-uploads/be9f8176-6ebd-4c6f-a721-34b1f9bd40cd.png"
    },
    {
      name: "Zohar Vanunu",
      role: '[testimonial_2_role]',
      quote: '[testimonial_2_quote]',
      image: "/lovable-uploads/6782f7e6-215f-48d2-b9fb-8abfc1b5d97b.png"
    },
    {
      name: "Noam Tryber",
      role: '[testimonial_3_role]',
      quote: '[testimonial_3_quote]',
      image: "/lovable-uploads/e4c99774-d5fc-4c77-ab34-cabac470ed41.png"
    }
  ],
  he: [
    {
      name: "נגה לוי",
      role: '[testimonial_1_role]',
      quote: '[testimonial_1_quote]',
      image: "/lovable-uploads/be9f8176-6ebd-4c6f-a721-34b1f9bd40cd.png"
    },
    {
      name: "זוהר וענונו",
      role: '[testimonial_2_role]',
      quote: '[testimonial_2_quote]',
      image: "/lovable-uploads/6782f7e6-215f-48d2-b9fb-8abfc1b5d97b.png"
    },
    {
      name: "נועם טרייבר",
      role: '[testimonial_3_role]',
      quote: '[testimonial_3_quote]',
      image: "/lovable-uploads/e4c99774-d5fc-4c77-ab34-cabac470ed41.png"
    }
  ]
};

const stats = {
  en: [
    {
      value: 2.4,
      suffix: "X",
      label: '[stat_1_label]'
    },
    {
      value: 19.7,
      suffix: "%",
      label: '[stat_2_label]'
    },
    {
      value: 24.1,
      suffix: "%",
      label: '[stat_3_label]'
    }
  ],
  es: [
    {
      value: 2.4,
      suffix: "X",
      label: '[stat_1_label]'
    },
    {
      value: 19.7,
      suffix: "%",
      label: '[stat_2_label]'
    },
    {
      value: 24.1,
      suffix: "%",
      label: '[stat_3_label]'
    }
  ],
  he: [
    {
      value: 2.4,
      suffix: "X",
      label: '[stat_1_label]'
    },
    {
      value: 19.7,
      suffix: "%",
      label: '[stat_2_label]'
    },
    {
      value: 24.1,
      suffix: "%",
      label: '[stat_3_label]'
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
  const content = testimonials[language === 'he' ? 'he' : language === 'es' ? 'es' : 'en'];
  const statsContent = stats[language === 'he' ? 'he' : language === 'es' ? 'es' : 'en'];
  
  const title = '[testimonials_title]';
  const subtitle = '[testimonials_subtitle]';

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {statsContent.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 bg-background/40 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 group animate-fade-up border border-[#333333]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-white/70">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {content.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-background/40 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 group animate-fade-up border border-[#333333]"
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
