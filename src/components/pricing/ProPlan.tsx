import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";
import { PricingContent } from "@/hooks/usePricingContent";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProPlanProps {
  content?: PricingContent;
  video?: Record<string, string>;
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
}

interface Feature {
  text: string;
  tooltip?: string;
  showTooltip?: boolean;
}

export const ProPlan = ({ content, video, pricingPeriod }: ProPlanProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isHebrew = language === 'he';
  
  if (!content) return null;

  const basePrice = 49;
  const price = pricingPeriod === 'yearly' 
    ? basePrice * 0.75 
    : pricingPeriod === 'quarterly' 
      ? basePrice * 0.85 
      : basePrice;

  const getPeriodTotal = () => {
    switch (pricingPeriod) {
      case 'quarterly':
        return price * 3;
      case 'yearly':
        return price * 12;
      default:
        return price;
    }
  };

  const spanishFeatures: Feature[] = [
    { text: 'Almacenamiento: 2TB', tooltip: 'Almacenamiento seguro en la nube con respaldo automático', showTooltip: true },
    { text: 'Miembros: Hasta 30', tooltip: 'Gestiona un equipo de hasta 30 usuarios con diferentes permisos', showTooltip: true },
    { text: 'Proyectos Activos: Ilimitados', tooltip: 'Trabaja en proyectos ilimitados simultáneamente', showTooltip: true },
    { text: 'Acceso de Clientes: 10 invitados por proyecto', tooltip: 'Colabora con 10 clientes simultáneamente por proyecto', showTooltip: true },
  ];

  const hebrewFeatures: Feature[] = [
    { text: 'אחסון: 2TB', tooltip: 'אחסון מאובטח בענן עם גיבוי אוטומטי', showTooltip: true },
    { text: 'משתמשים: עד 30', tooltip: 'ניהול צוות עד 30 משתמשים עם הרשאות שונות', showTooltip: true },
    { text: 'פרויקטים פעילים: ללא הגבלה', tooltip: 'עבודה על פרויקטים ללא הגבלה', showTooltip: true },
    { text: 'גישת לקוחות: 10 אורחים לפרויקט', tooltip: 'שיתוף פעולה עם 10 לקוחות בו זמנית לכל פרויקט', showTooltip: true },
  ];

  const englishFeatures: Feature[] = [
    { text: 'Storage: 2TB', tooltip: 'Secure cloud storage with automatic backup', showTooltip: true },
    { text: 'Members: Up to 30', tooltip: 'Manage a team of up to 30 users with different permissions', showTooltip: true },
    { text: 'Active Projects: Unlimited', tooltip: 'Work on unlimited projects simultaneously', showTooltip: true },
    { text: 'Client Access: 10 Guests per project', tooltip: 'Collaborate with 10 clients simultaneously per project', showTooltip: true },
  ];

  const spanishExtraFeatures: Feature[] = [
    { text: 'Roles y Permisos Avanzados', tooltip: 'Gestión avanzada de permisos con roles personalizados', showTooltip: true },
    { text: 'Marca Personalizada', tooltip: 'Agrega imágenes de portada, logos y elementos de marca por cliente', showTooltip: true },
    { text: 'Gestión Avanzada de Equipo', tooltip: 'Herramientas avanzadas para la gestión de equipos', showTooltip: true },
    { text: 'Modo Agencia', tooltip: 'Personaliza flujos de trabajo para agencias', showTooltip: true },
    { text: 'Subtítulos y Traducciones IA', tooltip: 'Generación automática de subtítulos y traducciones', showTooltip: true }
  ];

  const hebrewExtraFeatures: Feature[] = [
    { text: 'תפקידים והרשאות מתקדמים', tooltip: 'ניהול הרשאות מתקדם עם תפקידים מותאמים אישית', showTooltip: true },
    { text: 'מיתוג מותאם אישית', tooltip: 'הוסף תמונות כותרת, לוגואים ואלמנטים של מותג ללקוח', showTooltip: true },
    { text: 'ניהול צוות מתקדם', tooltip: 'כלים מתקדמים לניהול צוותים', showTooltip: true },
    { text: 'מצב סוכנות', tooltip: 'התאם זרימות עבודה לסוכנויות', showTooltip: true },
    { text: 'כתוביות ותרגומי AI', tooltip: 'יצירה אוטומטית של כתוביות ותרגומים', showTooltip: true }
  ];

  const englishExtraFeatures: Feature[] = [
    { text: 'Advanced Roles and Permissions', tooltip: 'Advanced permission management with custom roles', showTooltip: true },
    { text: 'Custom Branding', tooltip: 'Add cover images, logos, and brand elements per client', showTooltip: true },
    { text: 'Advanced Team Management', tooltip: 'Advanced tools for team management', showTooltip: true },
    { text: 'Agency Mode', tooltip: 'Customize workflows for agencies', showTooltip: true },
    { text: 'AI Captions + Translations', tooltip: 'Automatic caption and translation generation', showTooltip: true }
  ];

  const getFeatures = () => {
    switch (language) {
      case 'es':
        return spanishFeatures;
      case 'he':
        return hebrewFeatures;
      default:
        return englishFeatures;
    }
  };

  const getExtraFeatures = () => {
    switch (language) {
      case 'es':
        return spanishExtraFeatures;
      case 'he':
        return hebrewExtraFeatures;
      default:
        return englishExtraFeatures;
    }
  };

  const getPlanTitle = () => {
    switch (language) {
      case 'es':
        return 'Estudio';
      case 'he':
        return 'סטודיו';
      default:
        return 'Studio';
    }
  };

  const getPlanSubtitle = () => {
    switch (language) {
      case 'es':
        return 'Para Agencias y Equipos en Crecimiento';
      case 'he':
        return 'לסוכנויות וצוותים בצמיחה';
      default:
        return 'For Growing Agencies and Teams';
    }
  };

  const getButtonText = () => {
    switch (language) {
      case 'es':
        return 'Comenzar Prueba Gratis';
      case 'he':
        return 'התחילו היום בחינם';
      default:
        return 'Start Free Trial';
    }
  };

  const getWhyButtonText = () => {
    switch (language) {
      case 'es':
        return '¿Por qué Estudio?';
      case 'he':
        return 'למה סטודיו?';
      default:
        return 'Why Studio?';
    }
  };

  const getEverythingInText = () => {
    switch (language) {
      case 'es':
        return 'Todo en Esencial, más:';
      case 'he':
        return 'הכל בבייסיק, בנוסף:';
      default:
        return 'Everything in Essentials, plus:';
    }
  };

  return (
    <Card className={`glass border-0 p-3 flex flex-col animate-fade-up delay-500 hover:scale-105 transition-transform duration-300 ${isHebrew ? 'text-right' : ''}`}>
      <PlanIcon Icon={Crown} color="primary" />
      <h3 className="text-xl font-bold mb-1">{getPlanTitle()}</h3>
      <p className="text-white/70 mb-2 text-xs">{getPlanSubtitle()}</p>
      <div className="text-2xl font-bold mb-2">
        ${price.toFixed(2)}
        {language === 'es' ? '/mes' : isHebrew ? ' / לחודש' : '/month'}
        {pricingPeriod !== 'monthly' && (
          <span className="block text-sm text-primary mt-1">
            ${getPeriodTotal().toFixed(2)} {
              language === 'es' 
                ? `facturado ${pricingPeriod === 'quarterly' ? 'trimestralmente' : 'anualmente'}`
                : isHebrew 
                  ? `לתשלום ${pricingPeriod === 'quarterly' ? 'רבעוני' : 'שנתי'}`
                  : `billed ${pricingPeriod}`
            }
          </span>
        )}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-32 mb-3 border-primary/50 hover:bg-primary/10 text-xs px-2 flex items-center gap-1.5">
            <Play className="w-3 h-3" />
            {getWhyButtonText()}
          </Button>
        </DialogTrigger>
        <DialogContent className={`glass ${isHebrew ? 'text-right' : ''}`}>
          <DialogHeader>
            <DialogTitle>{getWhyButtonText()}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {video?.preview ? (
              <div className="aspect-video">
                <iframe
                  src={video.preview}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video bg-card/50 rounded-lg flex items-center justify-center">
                <Play className="w-12 h-12 text-primary animate-pulse" />
              </div>
            )}
            <p className="text-white/70 text-sm">
              {content.video_description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="space-y-1.5 mb-2 flex-grow">
        {getFeatures().map((feature, index) => (
          <PlanFeature key={index} text={feature.text} tooltip={feature.tooltip} showTooltip={feature.showTooltip} isRTL={isHebrew} />
        ))}
        
        <div className="my-3 border-t border-white/10 pt-2">
          <p className="text-sm font-medium mb-2">{getEverythingInText()}</p>
          {getExtraFeatures().map((feature, index) => (
            <PlanFeature key={`extra-${index}`} text={feature.text} tooltip={feature.tooltip} showTooltip={feature.showTooltip} isRTL={isHebrew} />
          ))}
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 mt-8"
        onClick={() => navigate('/signup')}
      >
        {getButtonText()}
      </Button>
    </Card>
  );
};
