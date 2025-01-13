import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { FooterCube } from "./footer/FooterCube";

export const Footer = () => {
  const { isRTL } = useLanguage();

  return (
    <footer className="w-full mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className={`flex flex-col-reverse md:flex-row items-center gap-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            {/* Content side */}
            <div className={`flex-1 space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="space-y-4">
                <p className="text-primary text-sm font-medium">
                  {isRTL ? 'מוכנים לקחת שליטה?' : 'READY TO TAKE CONTROL?'}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  {isRTL 
                    ? 'ייעול תהליך העבודה שלך עם כלי הפקת וידאו חכמים יותר.'
                    : 'Streamline your workflow with smarter video production tools.'}
                </h2>
                <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Button 
                    variant="outline" 
                    className="border-primary/50 hover:bg-primary/10 text-lg py-6 px-8 rounded-xl h-auto"
                  >
                    {isRTL ? 'הצטרפו לקהילה' : 'Join the community'}
                  </Button>
                  <Button 
                    className="bg-gradient-to-br from-primary to-secondary hover:opacity-90 text-lg py-6 px-8 rounded-xl h-auto"
                  >
                    {isRTL ? 'התחילו בחינם' : 'Get Started For Free'}
                  </Button>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-6">
                <div className={`flex items-center gap-4 text-base text-black/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>support@timeliner.com</span>
                  <span>|</span>
                  <a href="#" className="hover:text-primary">X</a>
                  <span>|</span>
                  <a href="#" className="hover:text-primary">Youtube</a>
                  <span>|</span>
                  <a href="#" className="hover:text-primary">LinkedIn</a>
                </div>

                <div className={`flex items-center gap-4 text-base text-black/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <a href="#" className="hover:text-primary">
                    {isRTL ? 'מדיניות פרטיות' : 'Privacy Policy'}
                  </a>
                  <span>|</span>
                  <a href="#" className="hover:text-primary">
                    {isRTL ? 'תנאים והגבלות' : 'Terms & Conditions'}
                  </a>
                </div>

                <div className={`flex items-center gap-2 text-base text-black/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>© 2025 Timeliner Inc. All rights reserved.</span>
                  <span>|</span>
                  <span>
                    {isRTL ? 'עוצב על ידי נועם טרייבר' : 'Designed by Noam Tryber'}
                  </span>
                </div>
              </div>
            </div>

            {/* 3D Cube side */}
            <div className="flex-shrink-0">
              <FooterCube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};