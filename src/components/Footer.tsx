import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

export const Footer = () => {
  const { isRTL } = useLanguage();

  return (
    <footer className="w-full mt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-lg relative overflow-hidden">
          {/* Background Image - Hidden on mobile */}
          <div 
            className="absolute top-0 right-0 h-full hidden md:block w-1/2 opacity-70"
            style={{
              backgroundImage: "url('/lovable-uploads/c747532d-41c5-4423-8b96-d992605f9c7e.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              mixBlendMode: 'multiply'
            }}
          />
          
          {/* Content */}
          <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${isRTL ? 'md:flex-row-reverse' : ''} relative z-10`}>
            {/* Content side */}
            <div className={`flex-1 space-y-6 md:space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="space-y-4">
                <p className="text-primary text-sm font-medium">
                  {isRTL ? 'מוכנים לקחת שליטה?' : 'READY TO TAKE CONTROL?'}
                </p>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  {isRTL 
                    ? 'ייעול תהליך העבודה שלך עם כלי הפקת וידאו חכמים יותר.'
                    : 'Streamline your workflow with smarter video production tools.'}
                </h2>
                <div className={`flex flex-wrap gap-3 md:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
                <div className={`flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-black/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>support@timeliner.com</span>
                  <span className="hidden md:inline">|</span>
                  <a href="#" className="hover:text-primary">X</a>
                  <span className="hidden md:inline">|</span>
                  <a href="#" className="hover:text-primary">Youtube</a>
                  <span className="hidden md:inline">|</span>
                  <a href="#" className="hover:text-primary">LinkedIn</a>
                </div>

                <div className={`flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-black/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <a href="#" className="hover:text-primary">
                    {isRTL ? 'מדיניות פרטיות' : 'Privacy Policy'}
                  </a>
                  <span>|</span>
                  <a href="#" className="hover:text-primary">
                    {isRTL ? 'תנאים והגבלות' : 'Terms & Conditions'}
                  </a>
                </div>

                <div className={`flex flex-wrap items-center gap-2 text-sm md:text-base text-black/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>© 2025 Timeliner Inc. All rights reserved.</span>
                  <span className="hidden md:inline">|</span>
                  <span>
                    {isRTL ? 'עוצב על ידי נועם טרייבר' : 'Designed by Noam Tryber'}
                  </span>
                </div>
              </div>
            </div>

            {/* Spacer div to maintain layout */}
            <div className="flex-shrink-0 w-full md:w-1/3" />
          </div>
        </div>
      </div>
    </footer>
  );
};