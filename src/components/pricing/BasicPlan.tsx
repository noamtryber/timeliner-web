import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Play } from "lucide-react";
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

interface BasicPlanProps {
  content?: PricingContent;
  video?: Record<string, string>;
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
}

interface Feature {
  text: string;
  tooltip?: string;
  showTooltip?: boolean;
}

export const BasicPlan = ({ content, video, pricingPeriod }: BasicPlanProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';
  
  if (!content) return null;

  const handleSignupClick = () => {
    const prefix = language === 'en' ? '' : `/${language}`;
    navigate(`${prefix}/signup`);
  };

  const basePrice = 29;
  const price = pricingPeriod === 'yearly' 
    ? basePrice * 0.75 
    : pricingPeriod === 'quarterly' 
      ? basePrice * 0.85 
      : basePrice;

  const arabicFeatures: Feature[] = [
    { text: 'التخزين: 1TB', tooltip: 'تخزين آمن على السحابة مع نسخ احتياطي تلقائي', showTooltip: true },
    { text: 'الأعضاء: حتى 5', tooltip: 'إدارة فريق يصل إلى 5 مستخدمين بأذونات مختلفة', showTooltip: true },
    { text: 'المشاريع النشطة: غير محدود', tooltip: 'العمل على مشاريع غير محدودة في وقت واحد', showTooltip: true },
    { text: 'وصول العملاء: حتى 3 ضيوف لكل مشروع' },
  ];

  const arabicExtraFeatures: Feature[] = [
    { text: 'نظام دفع ذكي', tooltip: 'حدد نماذج التسعير (لكل فيديو، مشروع، مراحل، أو عقود). أتمتة المدفوعات، إنشاء الإيصالات، والتوافق مع نوع عملك.', showTooltip: true },
    { text: 'أدوات إدارة الفريق', tooltip: 'أدوات متقدمة لإدارة المهام والوقت', showTooltip: true },
    { text: 'CRM مدمج وأتمتة', tooltip: 'التكامل مع أدوات مثل نماذج العملاء المحتملين من فيسبوك وواتساب للأعمال. إدارة العملاء المحتملين والمتابعات والعملاء مع خط أنابيب للعروض والتواصل السريع.', showTooltip: true },
    { text: 'منشئ المحفظة', tooltip: 'أداة متقدمة لإنشاء محافظ احترافية', showTooltip: true },
    { text: 'ملخصات المشروع التفاعلية', tooltip: 'استخدم أدوات الذكاء الاصطناعي للعصف الذهني مع العملاء حول الأفكار والمراجع والشروط. تجنب التوقعات غير المتطابقة وقدم تجربة عميل سلسة.', showTooltip: true }
  ];

  const spanishFeatures: Feature[] = [
    { text: 'Almacenamiento: 1TB', tooltip: 'Almacenamiento seguro en la nube con respaldo automático', showTooltip: true },
    { text: 'Miembros: Hasta 5', tooltip: 'Gestiona un equipo de hasta 5 usuarios con diferentes permisos', showTooltip: true },
    { text: 'Proyectos Activos: Ilimitados', tooltip: 'Trabaja en proyectos ilimitados simultáneamente', showTooltip: true },
    { text: 'Acceso de Clientes: Hasta 3 invitados por proyecto' },
  ];

  const spanishExtraFeatures: Feature[] = [
    { text: 'Sistema de pago inteligente', tooltip: 'Define modelos de precios (por video, proyecto, etapas o contratos). Automatiza pagos, genera recibos y adapta a tu tipo de negocio.', showTooltip: true },
    { text: 'Herramientas de gestión de equipo', tooltip: 'Herramientas avanzadas para gestión de tareas y tiempo', showTooltip: true },
    { text: 'CRM integrado y automatización', tooltip: 'Integración con herramientas como formularios de leads de Facebook y WhatsApp Business. Gestiona leads, seguimientos y clientes con pipeline de propuestas y comunicación rápida.', showTooltip: true },
    { text: 'Creador de portafolio', tooltip: 'Herramienta avanzada para crear portafolios profesionales', showTooltip: true },
    { text: 'Resúmenes de proyecto interactivos', tooltip: 'Usa herramientas de IA para hacer brainstorming con clientes sobre ideas, referencias y términos. Evita expectativas desalineadas y ofrece una experiencia de cliente fluida.', showTooltip: true }
  ];

  const englishFeatures: Feature[] = [
    { text: 'Storage: 1TB', tooltip: 'Secure cloud storage with automatic backup', showTooltip: true },
    { text: 'Members: Up to 5', tooltip: 'Manage a team of up to 5 users with different permissions', showTooltip: true },
    { text: 'Active Projects: Unlimited', tooltip: 'Work on unlimited projects simultaneously', showTooltip: true },
    { text: 'Client Access: Up to 3 Guests per project' },
  ];

  const englishExtraFeatures: Feature[] = [
    { text: 'Smart payment system', tooltip: 'Define pricing models (per video, project, stages, or contracts). Automate payments, generate receipts, and adapt to your business type.', showTooltip: true },
    { text: 'Team management tools', tooltip: 'Advanced tools for task and time management', showTooltip: true },
    { text: 'Built-in CRM & automation', tooltip: 'Integration with tools like Facebook lead forms and WhatsApp Business. Manage leads, follow-ups, and clients with proposal pipeline and quick communication.', showTooltip: true },
    { text: 'Portfolio builder', tooltip: 'Advanced tool for creating professional portfolios', showTooltip: true },
    { text: 'Interactive project briefs', tooltip: 'Use AI tools to brainstorm with clients about ideas, references, and terms. Avoid misaligned expectations and deliver a smooth client experience.', showTooltip: true }
  ];

  const getFeatures = () => {
    switch (language) {
      case 'ar':
        return arabicFeatures;
      case 'es':
        return spanishFeatures;
      default:
        return englishFeatures;
    }
  };

  const getExtraFeatures = () => {
    switch (language) {
      case 'ar':
        return arabicExtraFeatures;
      case 'es':
        return spanishExtraFeatures;
      default:
        return englishExtraFeatures;
    }
  };

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

  const getTitle = () => {
    switch (language) {
      case 'ar':
        return 'الأساسي';
      case 'es':
        return 'Básico';
      case 'he':
        return 'בייסיק';
      default:
        return 'Essentials';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'ar':
        return 'للفرق الصغيرة والمستقلين';
      case 'es':
        return 'Para Equipos Pequeños y Freelancers';
      case 'he':
        return 'לצוותים קטנים ופרילנסרים';
      default:
        return 'For Small Teams and Freelancers';
    }
  };

  const getPopularLabel = () => {
    switch (language) {
      case 'ar':
        return 'الأكثر شعبية';
      case 'es':
        return 'Más Popular';
      case 'he':
        return 'הכי פופולרי';
      default:
        return 'Most Popular';
    }
  };

  const getWhyButtonText = () => {
    switch (language) {
      case 'ar':
        return 'لماذا الأساسي؟';
      case 'es':
        return '¿Por qué Básico?';
      case 'he':
        return 'למה בייסיק?';
      default:
        return 'Why Essentials?';
    }
  };

  const getTrialButtonText = () => {
    switch (language) {
      case 'ar':
        return 'ابدأ النسخة التجريبية المجانية';
      case 'es':
        return 'Comenzar Prueba Gratis';
      case 'he':
        return 'התחילו היום בחינם';
      default:
        return 'Start Free Trial';
    }
  };

  const getEverythingInFreeText = () => {
    switch (language) {
      case 'ar':
        return 'كل شيء في المجاني، بالإضافة إلى:';
      case 'es':
        return 'Todo en Gratis, más:';
      case 'he':
        return 'הכל בחינמי, בנוסף:';
      default:
        return 'Everything in Free, plus:';
    }
  };

  return (
    <Card className={`relative border border-[#2A2F3C] bg-gradient-to-b from-[#1A1F2C]/50 to-[#1A1F2C] p-3 flex flex-col animate-fade-up delay-400 hover:scale-105 transition-transform duration-300 relative ${isRTL ? 'text-right' : ''}`}>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary via-accent to-primary px-4 py-1 rounded-full text-sm font-semibold text-white shadow-lg">
        {getPopularLabel()}
      </div>

      <PlanIcon Icon={Database} color="accent" />
      <h3 className="text-xl font-bold mb-1">{getTitle()}</h3>
      <p className="text-white/70 mb-2 text-[0.927rem]">{getSubtitle()}</p>
      <div className="text-2xl font-bold mb-2">
        ${price.toFixed(2)}
        <span className="text-base font-normal">
          {language === 'ar' ? '/شهر' : language === 'es' ? '/mes' : isRTL ? '/ לחודש' : '/month'}
        </span>
        {pricingPeriod !== 'monthly' && (
          <span className="block text-sm text-primary mt-1">
            ${getPeriodTotal().toFixed(2)} {
              language === 'ar' 
                ? `مدفوع ${pricingPeriod === 'quarterly' ? 'ربع سنوي' : 'سنوي'}`
                : language === 'es' 
                  ? `facturado ${pricingPeriod === 'quarterly' ? 'trimestralmente' : 'anualmente'}`
                  : isRTL 
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
        <DialogContent className={`glass ${isRTL ? 'text-right' : ''}`}>
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
          <PlanFeature key={index} text={feature.text} tooltip={feature.tooltip} showTooltip={feature.showTooltip} isRTL={isRTL} />
        ))}
        
        <div className="my-3 border-t border-white/10 pt-2">
          <p className="text-sm font-medium mb-2">{getEverythingInFreeText()}</p>
          {getExtraFeatures().map((feature, index) => (
            <PlanFeature key={`extra-${index}`} text={feature.text} tooltip={feature.tooltip} showTooltip={feature.showTooltip} isRTL={isRTL} />
          ))}
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-accent to-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 mt-8"
        onClick={handleSignupClick}
      >
        {getTrialButtonText()}
      </Button>
    </Card>
  );
};
