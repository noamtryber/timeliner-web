import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { useState } from "react";

export const Footer = () => {
  const { isRTL } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <footer className="w-full mt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div 
          className="bg-gradient-to-br from-[#F1F1F1] to-[#e6e9f0] rounded-2xl p-6 md:p-12 shadow-lg relative overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          {/* Content */}
          <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-8 ${isRTL ? 'md:flex-row-reverse' : ''} relative z-10`}>
            {/* Content side */}
            <div className={`flex-1 space-y-6 md:space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="space-y-4">
                <p className="text-primary text-sm font-medium">
                  {isRTL ? 'מוכנים לקחת שליטה?' : 'READY TO TAKE CONTROL?'}
                </p>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  {isRTL 
                    ? 'סוף לבלאגן. מערכת חכמה לניהול פרויקטים, תיקונים ותשלומים- הכל במקום אחד'
                    : 'Streamline your workflow with smarter video production tools.'}
                </h2>
                <div className={`flex flex-wrap gap-3 md:gap-4 ${isRTL ? 'justify-end' : ''}`}>
                  <Button 
                    variant="outline" 
                    className="border-primary/50 hover:bg-primary/10 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 rounded-xl h-auto w-full md:w-auto"
                  >
                    {isRTL ? 'הצטרפו לקהילה' : 'Join the community'}
                  </Button>
                  <Button 
                    className="bg-gradient-to-br from-primary to-secondary hover:opacity-90 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 rounded-xl h-auto w-full md:w-auto"
                  >
                    {isRTL ? 'התחילו בחינם' : 'Get Started For Free'}
                  </Button>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-4 md:space-y-6">
                <div className={`flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-black/70 ${isRTL ? 'justify-end' : ''}`}>
                  <span>support@timeliner.com</span>
                  <span className="hidden md:inline">|</span>
                  <a href="#" className="hover:text-primary">X</a>
                  <span className="hidden md:inline">|</span>
                  <a href="#" className="hover:text-primary">Youtube</a>
                  <span className="hidden md:inline">|</span>
                  <a href="#" className="hover:text-primary">LinkedIn</a>
                </div>

                <div className={`flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-black/70 ${isRTL ? 'justify-end' : ''}`}>
                  <a href="#" className="hover:text-primary">
                    {isRTL ? 'מדיניות פרטיות' : 'Privacy Policy'}
                  </a>
                  <span>|</span>
                  <a href="#" className="hover:text-primary">
                    {isRTL ? 'תנאים והגבלות' : 'Terms & Conditions'}
                  </a>
                </div>

                <div className={`flex flex-wrap items-center gap-2 text-sm md:text-base text-black/70 ${isRTL ? 'justify-end' : ''}`}>
                  <span>© 2025 Timeliner Inc. All rights reserved.</span>
                  <span className="hidden md:inline">|</span>
                  <span>
                    {isRTL ? 'עוצב על ידי נועם טרייבר' : 'Designed by Noam Tryber'}
                  </span>
                </div>
              </div>
            </div>

            {/* Image side with floating effect */}
            <div className="hidden md:flex flex-shrink-0 w-full md:w-2/5 items-center justify-center">
              <div 
                className="transform transition-transform duration-200 ease-out hover:scale-[1.02]"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg) translateZ(20px)`,
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))'
                }}
              >
                <img 
                  src="/lovable-uploads/c99b3a9c-c584-4eb7-bcc6-aadf89ffd4a8.png"
                  alt="Project management dashboard"
                  className="rounded-2xl w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};