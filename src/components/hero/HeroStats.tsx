import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatsTranslations {
  faster_revisions: string;
  increase_income: string;
  client_retention: string;
}

interface AnimatedStats {
  revisions: number;
  income: number;
  retention: number;
}

export const HeroStats = ({ translations }: { translations: StatsTranslations }) => {
  const { isRTL } = useLanguage();
  const [animatedStats, setAnimatedStats] = useState<AnimatedStats>({
    revisions: 0,
    income: 0,
    retention: 0
  });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats({
          revisions: 32.0,
          income: 19.0,
          retention: 24.0
        });
        return;
      }

      const progress = currentStep / steps;
      setAnimatedStats({
        revisions: 32.0 * progress,
        income: 19.0 * progress,
        retention: 24.0 * progress
      });

      currentStep++;
    }, interval);
  };

  return (
    <div 
      ref={statsRef} 
      className={`grid grid-cols-3 gap-4 mt-8 ${isRTL ? 'rtl' : ''}`}
    >
      <div className="glass p-4 rounded-lg">
        <div className="text-2xl sm:text-3xl font-bold gradient-text">
          {animatedStats.revisions.toFixed(1)}%
        </div>
        <div className="text-sm sm:text-base text-white/70">
          {translations.faster_revisions}
        </div>
      </div>
      <div className="glass p-4 rounded-lg">
        <div className="text-2xl sm:text-3xl font-bold gradient-text">
          {animatedStats.income.toFixed(1)}%
        </div>
        <div className="text-sm sm:text-base text-white/70">
          {translations.increase_income}
        </div>
      </div>
      <div className="glass p-4 rounded-lg">
        <div className="text-2xl sm:text-3xl font-bold gradient-text">
          {animatedStats.retention.toFixed(1)}%
        </div>
        <div className="text-sm sm:text-base text-white/70">
          {translations.client_retention}
        </div>
      </div>
    </div>
  );
};