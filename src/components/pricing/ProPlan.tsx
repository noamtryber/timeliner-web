import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Play, HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";
import { PricingContent } from "@/hooks/usePricingContent";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  const isRTL = language === 'he' || language === 'ar';
  const [extraStorage, setExtraStorage] = useState(0);
  const [extraMembers, setExtraMembers] = useState(0);
  
  if (!content) return null;

  const handleSignupClick = () => {
    const prefix = language === 'en' ? '' : `/${language}`;
    navigate(`${prefix}/signup`);
  };

  const basePrice = 49;
  const storagePrice = extraStorage * 1.5; // $1.50 per 100GB
  const membersPrice = extraMembers * 7; // $7 per extra member
  
  const totalPrice = pricingPeriod === 'yearly' 
    ? (basePrice + storagePrice + membersPrice) * 0.75 
    : pricingPeriod === 'quarterly' 
      ? (basePrice + storagePrice + membersPrice) * 0.85 
      : (basePrice + storagePrice + membersPrice);

  const totalStorage = 2000 + (extraStorage * 100); // Base 2TB (2000GB) + extra storage
  const totalMembers = 5 + extraMembers; // Base 5 members + extra members

  const getStorageSummary = () => {
    switch (language) {
      case 'he':
        return `סה״כ אחסון: ${totalStorage >= 1000 ? (totalStorage / 1000).toFixed(1) + 'TB' : totalStorage + 'GB'}`;
      case 'ar':
        return `إجمالي التخزين: ${totalStorage >= 1000 ? (totalStorage / 1000).toFixed(1) + 'TB' : totalStorage + 'GB'}`;
      case 'es':
        return `Almacenamiento total: ${totalStorage >= 1000 ? (totalStorage / 1000).toFixed(1) + 'TB' : totalStorage + 'GB'}`;
      default:
        return `Total Storage: ${totalStorage >= 1000 ? (totalStorage / 1000).toFixed(1) + 'TB' : totalStorage + 'GB'}`;
    }
  };

  const getMembersSummary = () => {
    switch (language) {
      case 'he':
        return `סה״כ משתמשים: ${totalMembers}`;
      case 'ar':
        return `إجمالي الأعضاء: ${totalMembers}`;
      case 'es':
        return `Total miembros: ${totalMembers}`;
      default:
        return `Total Members: ${totalMembers}`;
    }
  };

  const hebrewFeatures: Feature[] = [
    { text: 'אחסון: 2TB', tooltip: 'אחסון מאובטח בענן עם גיבוי אוטומטי', showTooltip: true },
    { text: '5 משתמשים (כלול)', tooltip: 'ניהול צוות של עד 5 משתמשים עם הרשאות שונות', showTooltip: true },
    { text: 'פרויקטים פעילים: ללא הגבלה', tooltip: 'עבודה על פרויקטים ללא הגבלה במקביל', showTooltip: true },
    { text: 'גישת לקוחות: ללא הגבלה', tooltip: 'שיתוף פעולה עם לקוחות ללא הגבלה', showTooltip: true }
  ];

  const hebrewExtraFeatures: Feature[] = [
    { text: 'ניתוח פרויקטים מתקדם', tooltip: 'מדדים מפורטים ודוחות מותאמים אישית', showTooltip: true },
    { text: 'אינטגרציה עם כלים חיצוניים', tooltip: 'התחבר לכלים המועדפים עליך', showTooltip: true },
    { text: 'תמיכה מועדפת 24/7', tooltip: 'סיוע טכני ייעודי', showTooltip: true }
  ];

  const arabicFeatures: Feature[] = [
    { text: 'التخزين: 2TB', tooltip: 'تخزين آمن على السحابة مع نسخ احتياطي تلقائي', showTooltip: true },
    { text: '5 أعضاء (مشمول)', tooltip: 'إدارة فريق يصل إلى 5 مستخدمين بأذونات مختلفة', showTooltip: true },
    { text: 'المشاريع النشطة: غير محدود', tooltip: 'العمل على مشاريع غير محدودة في وقت واحد', showTooltip: true },
    { text: 'وصول العملاء: غير محدود', tooltip: 'التعاون مع العملاء بشكل غير محدود', showTooltip: true }
  ];

  const arabicExtraFeatures: Feature[] = [
    { text: 'تحليلات المشروع المتقدمة', tooltip: 'مقاييس مفصلة وتقارير مخصصة', showTooltip: true },
    { text: 'تكامل مع الأدوات الخارجية', tooltip: 'اتصل بأدواتك المفضلة', showTooltip: true },
    { text: 'دعم متميز 24/7', tooltip: 'مساعدة تقنية مخصصة', showTooltip: true }
  ];

  const englishFeatures: Feature[] = [
    { text: 'Storage: 2TB', tooltip: 'Secure cloud storage with automatic backup', showTooltip: true },
    { text: '5 members (included)', tooltip: 'Manage a team of up to 5 users with different permissions', showTooltip: true },
    { text: 'Active Projects: Unlimited', tooltip: 'Work on unlimited projects simultaneously', showTooltip: true },
    { text: 'Client Access: Unlimited', tooltip: 'Collaborate with unlimited client guests', showTooltip: true }
  ];

  const englishExtraFeatures: Feature[] = [
    { text: 'Advanced project analytics', tooltip: 'Detailed metrics and custom reports', showTooltip: true },
    { text: 'External tools integration', tooltip: 'Connect with your favorite tools', showTooltip: true },
    { text: 'Priority 24/7 support', tooltip: 'Dedicated technical assistance', showTooltip: true }
  ];

  const spanishFeatures: Feature[] = [
    { text: 'Almacenamiento: 2TB', tooltip: 'Almacenamiento seguro en la nube con respaldo automático', showTooltip: true },
    { text: '5 miembros (incluido)', tooltip: 'Gestiona un equipo de hasta 5 usuarios con diferentes permisos', showTooltip: true },
    { text: 'Proyectos activos: Ilimitados', tooltip: 'Trabaja en proyectos ilimitados simultáneamente', showTooltip: true },
    { text: 'Acceso de clientes: Ilimitado', tooltip: 'Colabora con clientes invitados sin límite', showTooltip: true }
  ];

  const spanishExtraFeatures: Feature[] = [
    { text: 'Análisis avanzado de proyectos', tooltip: 'Métricas detalladas e informes personalizados', showTooltip: true },
    { text: 'Integración con herramientas externas', tooltip: 'Conéctate con tus herramientas favoritas', showTooltip: true },
    { text: 'Soporte prioritario 24/7', tooltip: 'Asistencia técnica dedicada', showTooltip: true }
  ];

  const getFeatures = () => {
    switch (language) {
      case 'he':
        return hebrewFeatures;
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
      case 'he':
        return hebrewExtraFeatures;
      case 'ar':
        return arabicExtraFeatures;
      case 'es':
        return spanishExtraFeatures;
      default:
        return englishExtraFeatures;
    }
  };

  const getTitle = () => {
    switch (language) {
      case 'he':
        return 'פרו';
      case 'ar':
        return 'الاحترافي';
      case 'es':
        return 'Estudio';
      default:
        return 'Studio';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'he':
        return 'לסוכנויות וצוותים בצמיחה';
      case 'ar':
        return 'للوكالات والفرق النامية';
      case 'es':
        return 'Para Agencias y Equipos en Crecimiento';
      default:
        return 'For Growing Agencies and Teams';
    }
  };

  const getButtonText = () => {
    switch (language) {
      case 'he':
        return 'התחילו היום בחינם';
      case 'ar':
        return 'ابدأ النسخة التجريبية المجانية';
      case 'es':
        return 'Comenzar Prueba Gratis';
      default:
        return 'Start Free Trial';
    }
  };

  const getWhyButtonText = () => {
    switch (language) {
      case 'he':
        return 'למה פרו?';
      case 'ar':
        return 'لماذا الاحترافي؟';
      case 'es':
        return '¿Por qué Estudio?';
      default:
        return 'Why Studio?';
    }
  };

  const getEverythingInText = () => {
    switch (language) {
      case 'he':
        return 'הכל בבייסיק, בנוסף:';
      case 'ar':
        return 'كل شيء في الأساسي، بالإضافة إلى:';
      case 'es':
        return 'Todo en Esenciales, más:';
      default:
        return 'Everything in Essentials, plus:';
    }
  };

  const getMemberSeatsTooltip = () => {
    switch (language) {
      case 'he':
        return `חברי צוות = גישה מלאה לצוות הפנימי שלך (עריכה, הקצאת משימות, ניהול פרויקטים).
אורחי לקוח = מאשרים, ל�� עורכים (יכולים לצפות, להגיב, לאשר, להוריד ולהעלות קבצים גולמיים).
למה לשלם על יותר חברים?
יותר חברי צוות = זמן סיום פרויקט מהיר יותר ושיתוף פעולה טוב יותר.
יותר עורכים = קיבולת עבודה גבוהה יותר ויעילות.
יותר מבנה = פחות בלבול, בעלות ברורה לכל משימה.`;
      case 'ar':
        return `أعضاء الفريق = وصول كامل لفريقك الداخلي (تحرير، تعيين المهام، إدارة المشاريع).
ضيوف العملاء = المصادقون، وليس المحررون (يمكنهم العرض، التعليق، الموافقة، التنزيل وتحميل الملفات الخام).
لماذا تدفع مقابل المزيد من الأعضاء؟
المزيد من أعضاء الفريق = وقت إنجاز أسرع للمشروع وتعاون أفضل.
المزيد من المحررين = قدرة أكبر على العمل وكفاءة.
المزيد من الهيكل = أقل ارتباك، ملكية واضحة لكل مهمة.`;
      case 'es':
        return `Miembros del equipo = Acceso completo para tu equipo interno (editar, asignar tareas, gestionar proyectos).
Invitados cliente = Aprobadores, no editores (pueden ver, comentar, aprobar, descargar y subir archivos sin procesar).
¿Por qué pagar por más miembros?
Más miembros = finalización más rápida del proyecto y mejor colaboración.
Más editores = mayor capacidad de trabajo y eficiencia.
Más estructura = menos confusión, propiedad clara por tarea.`;
      default:
        return `Member Seats = Full access for your internal team (edit, assign tasks, manage projects).
Client Guests = Approvers, not editors (can view, comment, approve, download, and upload raw files).
Why pay for more members?
More team members = faster project turnaround & better collaboration.
More editors = higher workload capacity & efficiency.
More structure = less confusion, clear ownership per task.`;
    }
  };

  return (
    <Card className={`relative border border-[#2A2F3C] bg-gradient-to-b from-[#1A1F2C]/50 to-[#1A1F2C] p-3 flex flex-col animate-fade-up delay-500 hover:scale-105 transition-transform duration-300 ${isRTL ? 'text-right' : ''}`}>
      <PlanIcon Icon={Crown} color="primary" />
      <h3 className="text-xl font-bold mb-1">{getTitle()}</h3>
      <p className="text-white/70 mb-2">
        {getSubtitle()}
      </p>
      <div className="text-2xl font-bold mb-2">
        ${totalPrice.toFixed(2)}
        <span className="text-base font-normal">
          {language === 'he' ? '/ לחודש' : language === 'ar' ? '/شهر' : language === 'es' ? '/mes' : '/month'}
        </span>
        {pricingPeriod !== 'monthly' && (
          <span className="block text-sm text-primary mt-1">
            ${(totalPrice * (pricingPeriod === 'yearly' ? 12 : 3)).toFixed(2)} {
              language === 'he'
                ? `לתשלום ${pricingPeriod === 'quarterly' ? 'רבעוני' : 'שנתי'}`
                : language === 'ar'
                  ? `مدفوع ${pricingPeriod === 'quarterly' ? 'ربع سنوي' : 'سنوي'}`
                  : language === 'es'
                    ? `facturado ${pricingPeriod === 'quarterly' ? 'trimestralmente' : 'anualmente'}`
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
        {getFeatures().slice(0, 1).map((feature, index) => (
          <PlanFeature key={index} text={feature.text} tooltip={feature.tooltip} showTooltip={feature.showTooltip} isRTL={isRTL} />
        ))}

        <div className="space-y-4 my-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/70">Extra Members (+{extraMembers})</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-white/40 hover:text-white/60 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px] bg-card/95 backdrop-blur border-primary/20 text-white/90 whitespace-pre-line">
                      {getMemberSeatsTooltip()}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span className="text-sm text-primary">+${(extraMembers * 7).toFixed(2)}/mo</span>
            </div>
            <Slider
              defaultValue={[0]}
              max={20}
              step={1}
              value={[extraMembers]}
              onValueChange={([value]) => setExtraMembers(value)}
              className="my-4"
            />
            <p className="text-sm text-white/70 text-right">{getMembersSummary()}</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white/70">Extra Storage ({extraStorage * 100}GB)</span>
              <span className="text-sm text-primary">+${(extraStorage * 1.5).toFixed(2)}/mo</span>
            </div>
            <Slider
              defaultValue={[0]}
              max={50}
              step={1}
              value={[extraStorage]}
              onValueChange={([value]) => setExtraStorage(value)}
              className="my-4"
            />
            <p className="text-sm text-white/70 text-right">{getStorageSummary()}</p>
          </div>
        </div>

        {getFeatures().slice(1).map((feature, index) => (
          <PlanFeature key={`main-${index}`} text={feature.text} tooltip={feature.tooltip} showTooltip={feature.showTooltip} isRTL={isRTL} />
        ))}

        <div className="my-3 border-t border-white/10 pt-2">
          <p className="text-sm font-medium mb-2">{getEverythingInText()}</p>
          {getExtraFeatures().map((feature, index) => (
            <PlanFeature key={`extra-${index}`} text={feature.text} tooltip={feature.tooltip} showTooltip={feature.showTooltip} isRTL={isRTL} />
          ))}
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 mt-8"
        onClick={handleSignupClick}
      >
        {getButtonText()}
      </Button>
    </Card>
  );
};
