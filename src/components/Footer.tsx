import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export const Footer = () => {
  const {
    isRTL,
    language
  } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const isSpanish = language === 'es';
  const isArabic = language === 'ar';
  const isHebrew = language === 'he';
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('footer-container')?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({
          x,
          y
        });
      }
    };
    const container = document.getElementById('footer-container');
    container?.addEventListener('mousemove', handleMouseMove);
    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const handleSignupClick = () => {
    const prefix = language === 'en' ? '' : `/${language}`;
    navigate(`${prefix}/signup`);
  };
  const handleCommunityClick = () => {
    const prefix = language === 'en' ? '' : `/${language}`;
    navigate(`${prefix}/community`);
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };
  const getContent = () => {
    if (isHebrew) {
      return {
        ready: 'מוכנים לקחת שליטה?',
        description: 'סוף לבלאגן. מערכת חכמה לניהול פרויקטים, תיקונים ותשלומים- הכל במקום אחד',
        startFree: 'התחילו בחינם',
        joinCommunity: 'הצטרפו לקהילה',
        privacy: 'מדיניות פרטיות',
        terms: 'תנאים והגבלות',
        designedBy: 'עוצב על ידי נועם טרייבר'
      };
    } else if (isArabic) {
      return {
        ready: 'هل أنت مستعد لتولي زمام الأمور؟',
        description: 'قم بتبسيط سير عملك باستخدام أدوات إنتاج فيديو أكثر ذكاءً.',
        startFree: 'ابدأ مجاناً',
        joinCommunity: 'انضم إلى المجتمع',
        privacy: 'سياسة الخصوصية',
        terms: 'الشروط والأحكام',
        designedBy: 'تصميم نوعم ترايبر'
      };
    } else if (isSpanish) {
      return {
        ready: '¿LISTO PARA TOMAR EL CONTROL?',
        description: 'Optimiza tu flujo de trabajo con herramientas más inteligentes de producción de video.',
        startFree: 'Comienza Gratis',
        joinCommunity: 'Únete a la comunidad',
        privacy: 'Política de Privacidad',
        terms: 'Términos y Condiciones',
        designedBy: 'Diseñado por Noam Tryber'
      };
    } else {
      return {
        ready: 'READY TO TAKE CONTROL?',
        description: 'Streamline your workflow with smarter video production tools.',
        startFree: 'Get Started For Free',
        joinCommunity: 'Join the community',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        designedBy: 'Designed by Noam Tryber'
      };
    }
  };
  const content = getContent();
  return <footer className="w-full mt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div id="footer-container" className="bg-gradient-to-br from-[#F1F1F1] to-[#e6e9f0] rounded-2xl p-6 md:p-12 relative overflow-hidden">
          <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-8 ${isRTL ? 'md:flex-row-reverse' : ''} relative z-10`}>
            <div className={`flex-1 space-y-6 md:space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="space-y-4">
                <p className="text-sm font-medium text-violet-400">
                  {content.ready}
                </p>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  {content.description}
                </h2>
                <div className={`flex flex-wrap gap-3 md:gap-4 ${isRTL ? 'mr-auto' : ''}`}>
                  {isRTL ? <>
                      <Button onClick={handleSignupClick} className="bg-gradient-to-br from-primary to-secondary hover:opacity-90 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 rounded-xl h-auto w-full md:w-auto">
                        {content.startFree}
                      </Button>
                      <Button variant="outline" onClick={handleCommunityClick} className="border-primary/50 hover:bg-primary/10 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 rounded-xl h-auto w-full md:w-auto">
                        {content.joinCommunity}
                      </Button>
                    </> : <>
                      <Button variant="outline" onClick={handleCommunityClick} className="border-primary/50 hover:bg-primary/10 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 rounded-xl h-auto w-full md:w-auto">
                        {content.joinCommunity}
                      </Button>
                      <Button onClick={handleSignupClick} className="bg-gradient-to-br from-primary to-secondary hover:opacity-90 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 rounded-xl h-auto w-full md:w-auto">
                        {content.startFree}
                      </Button>
                    </>}
                </div>
              </div>

              {/* Links */}
              <div className="space-y-4 md:space-y-6">
                <div className={`flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-black/70 ${isRTL ? 'mr-auto' : ''}`}>
                  <span>support@timeliner.com</span>
                  <span className="hidden md:inline">|</span>
                  <a href="#" className="hover:text-primary">X</a>
                  <span className="hidden md:inline">|</span>
                  <a href="https://www.youtube.com/@Tryber/videos" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Youtube</a>
                  <span className="hidden md:inline">|</span>
                  <a href="https://www.linkedin.com/in/noam-tryber-b55b46286/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
                  <span className="hidden md:inline">|</span>
                  <a href="https://www.instagram.com/noamtryber/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
                </div>

                <div className={`flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-black/70 ${isRTL ? 'mr-auto' : ''}`}>
                  <a href="#" className="hover:text-primary">
                    {content.privacy}
                  </a>
                  <span>|</span>
                  <a href="#" className="hover:text-primary">
                    {content.terms}
                  </a>
                </div>

                <div className={`flex flex-wrap items-center gap-2 text-sm md:text-base text-black/70 ${isRTL ? 'mr-auto' : ''}`}>
                  <span>© 2025 Timeliner Inc. All rights reserved.</span>
                  <span className="hidden md:inline">|</span>
                  <a href="https://www.instagram.com/noamtryber/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    {content.designedBy}
                  </a>
                </div>
              </div>
            </div>

            {/* Image side with 3D floating effect */}
            <div className="hidden md:flex flex-shrink-0 w-full md:w-2/5 items-center justify-center perspective-1000">
              <img src="/lovable-uploads/4cbfc696-43a6-423d-921e-d2ccac5a5213.png" alt="Project management dashboard" className="rounded-2xl w-full h-auto object-contain transition-transform duration-200 ease-out" style={{
              transform: `
                    perspective(1000px)
                    rotateX(${mousePosition.y * 5}deg)
                    rotateY(${mousePosition.x * 5}deg)
                    translateX(${mousePosition.x * 10}px)
                    translateY(${mousePosition.y * 10}px)
                  `
            }} />
            </div>
          </div>
        </div>
      </div>
    </footer>;
};