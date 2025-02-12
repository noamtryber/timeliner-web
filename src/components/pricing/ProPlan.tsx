import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Play, Check, HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Slider } from "@/components/ui/slider";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";
import { PricingContent } from "@/hooks/usePricingContent";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

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

  const getTitle = () => {
    switch (language) {
      case 'he':
        return 'סטודיו';
      case 'ar':
        return 'ستوديو';
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

  const getWhyButtonText = () => {
    switch (language) {
      case 'he':
        return 'למה סטודיו?';
      case 'ar':
        return 'لماذا ستوديو؟';
      case 'es':
        return '¿Por qué Estudio?';
      default:
        return 'Why Studio?';
    }
  };

  const getButtonText = () => {
    switch (language) {
      case 'he':
        return 'התחילו היום בחינם';
      case 'ar':
        return 'جرّب مجاناً الآن';
      case 'es':
        return 'Prueba Gratuita';
      default:
        return 'Start Free Trial';
    }
  };

  const getEverythingInText = () => {
    switch (language) {
      case 'he':
        return 'כל מה שכלול בחבילה הבסיסית, ובנוסף:';
      case 'ar':
        return 'كل ما هو متضمن في الأساسي، بالإضافة إلى:';
      case 'es':
        return 'Todo lo incluido en Esencial, más:';
      default:
        return 'Everything in Essentials, plus:';
    }
  };

  const getExtraFeatures = () => {
    switch (language) {
      case 'he':
        return [
          { text: 'תכונות AI מתקדמות', tooltip: 'כלים מתקדמים מבוססי AI', showTooltip: true },
          { text: 'יצוא מותאם אישית', tooltip: 'אפשרויות יצוא מותאמות אישית', showTooltip: true },
          { text: 'גיבוי מתקדם', tooltip: 'גיבוי אוטומטי ושחזור', showTooltip: true },
          { text: 'תמיכה VIP', tooltip: 'תמיכה מועדפת ומענה מהיר', showTooltip: true }
        ];
      case 'ar':
        return [
          { text: 'ميزات AI متقدمة', tooltip: 'أدوات متقدمة قائمة على الذكاء الاصطناعي', showTooltip: true },
          { text: 'تصدير مخصص', tooltip: 'خيارات تصدير مخصصة', showTooltip: true },
          { text: 'نسخ احتياطي متقدم', tooltip: 'نسخ احتياطي تلقائي واستعادة', showTooltip: true },
          { text: 'دعم VIP', tooltip: 'دعم ذو أولوية واستجابة سريعة', showTooltip: true }
        ];
      case 'es':
        return [
          { text: 'Funciones AI avanzadas', tooltip: 'Herramientas avanzadas basadas en IA', showTooltip: true },
          { text: 'Exportación personalizada', tooltip: 'Opciones de exportación personalizadas', showTooltip: true },
          { text: 'Respaldo avanzado', tooltip: 'Respaldo automático y recuperación', showTooltip: true },
          { text: 'Soporte VIP', tooltip: 'Soporte prioritario y respuesta rápida', showTooltip: true }
        ];
      default:
        return [
          { text: 'Advanced AI features', tooltip: 'Advanced AI-powered tools', showTooltip: true },
          { text: 'Custom export', tooltip: 'Custom export options', showTooltip: true },
          { text: 'Advanced backup', tooltip: 'Automatic backup and recovery', showTooltip: true },
          { text: 'VIP support', tooltip: 'Priority support and fast response', showTooltip: true }
        ];
    }
  };

  const getDiscountedPrice = (price: number) => {
    const basePrice = price;
    switch (pricingPeriod) {
      case 'yearly':
        return basePrice * 0.75; // Apply 25% discount once
      case 'quarterly':
        return basePrice * 0.85; // Apply 15% discount once
      default:
        return basePrice;
    }
  };

  const totalStorage = 2 + (extraStorage * 0.1); // Base 2TB + extra storage in TB
  const totalMembers = 5 + extraMembers; // Base 5 members + extra members
  
  const basePrice = 49;
  const storagePrice = extraStorage * 1.5; // $1.50 per 100GB
  const membersPrice = extraMembers * 7; // $7 per extra member
  
  // Apply discount to total price once
  const totalPrice = getDiscountedPrice(basePrice + storagePrice + membersPrice);

  const handleMemberLimit = (value: number) => {
    if (value <= 15) {
      setExtraMembers(value);
    }
  };

  const getStorageLabel = () => {
    switch (language) {
      case 'he':
        return 'אחסון:';
      case 'ar':
        return 'التخزين:';
      case 'es':
        return 'Espacio:';
      default:
        return 'Storage:';
    }
  };

  const getMembersLabel = () => {
    switch (language) {
      case 'he':
        return 'חברי צוות:';
      case 'ar':
        return 'الأعضاء:';
      case 'es':
        return 'Miembros:';
      default:
        return 'Members:';
    }
  };

  const getMembersTooltipContent = () => {
    switch (language) {
      case 'he':
        return {
          title1: 'מקומות לחברי צוות',
          desc1: 'גישה מלאה לצוות הפנימי שלך (עריכה, הקצאת משימות, ניהול פרויקטים).',
          title2: 'למה להוסיף חברי צוות?',
          desc2: 'יותר חברי צוות = זמן תגובה מהיר יותר, שיתוף פעולה מאורגן.',
          desc3: 'יותר עורכים = חלוקת עבודה טובה יותר, משלוח מהיר יותר.',
          enterprise: 'צור קשר עם מכירות Enterprise'
        };
      case 'ar':
        return {
          title1: 'مقاعد الأعضاء',
          desc1: 'وصول كامل لفريقك الداخلي (تحرير، تعيين المهام، إدارة المشاريع).',
          title2: 'لماذا تضيف المزيد من الأعضاء؟',
          desc2: 'المزيد من الأعضاء = وقت استجابة أسرع، تعاون منظم.',
          desc3: 'المزيد من المحررين = توزيع أفضل للعمل، تسليم أسرع.',
          enterprise: 'اتصل بمبيعات Enterprise'
        };
      case 'es':
        return {
          title1: 'Asientos de Miembros',
          desc1: 'Acceso completo para tu equipo interno (editar, asignar tareas, gestionar proyectos).',
          title2: '¿Por qué agregar más miembros?',
          desc2: 'Más miembros = respuesta más rápida, colaboración estructurada.',
          desc3: 'Más editores = mejor distribución de trabajo, entrega más rápida.',
          enterprise: 'Contactar Ventas Enterprise'
        };
      default:
        return {
          title1: 'Member Seats',
          desc1: 'Full access for your internal team (edit, assign tasks, manage projects).',
          title2: 'Why pay for more members?',
          desc2: 'More members = faster turnaround, structured collaboration.',
          desc3: 'More editors = better workload distribution, faster delivery.',
          enterprise: 'Contact Enterprise Sales'
        };
    }
  };

  const getProjectsLabel = () => {
    switch (language) {
      case 'he':
        return 'פרויקטים:';
      case 'ar':
        return 'المشاريع:';
      case 'es':
        return 'Proyectos:';
      default:
        return 'Projects:';
    }
  };

  const getClientsLabel = () => {
    switch (language) {
      case 'he':
        return 'לקוחות:';
      case 'ar':
        return 'العملاء:';
      case 'es':
        return 'Clientes:';
      default:
        return 'Clients:';
    }
  };

  const getUnlimitedText = () => {
    switch (language) {
      case 'he':
        return 'ללא הגבלה';
      case 'ar':
        return 'غير محدود';
      case 'es':
        return 'Ilimitado';
      default:
        return 'Unlimited';
    }
  };

  const getPricePerMonthText = () => {
    switch (language) {
      case 'he':
        return 'דולר/לחודש';
      case 'ar':
        return 'دولارات/شهر';
      case 'es':
        return '$/mes';
      default:
        return '$/mo';
    }
  };

  return (
    <Card className={`relative border border-[#2A2F3C] bg-[#151a25] p-3 flex flex-col animate-fade-up delay-500 hover:scale-105 transition-transform duration-300 ${isRTL ? 'text-right' : ''}`}>
      <PlanIcon Icon={Crown} color="primary" />
      <h3 className="text-xl font-bold mb-1">{getTitle()}</h3>
      <p className="text-white/70 mb-2">{getSubtitle()}</p>
      
      <div className="text-2xl font-bold mb-4">
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

      <div className="space-y-1.5 flex-grow">
        <div className={`flex items-center text-[0.927rem] text-white/70 py-0.5 ${isRTL ? 'flex-row-reverse justify-between' : 'gap-2'}`}>
          <div className={`flex items-center gap-1.5 ${isRTL ? 'order-2' : ''}`}>
            <Check className="h-3 w-3 text-primary flex-shrink-0" />
            <span className="w-[4.5rem] flex-shrink-0">{getStorageLabel()}</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'gap-6 mx-4' : 'gap-3'} flex-1 min-w-0`}>
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse gap-6' : 'gap-3'}`}>
              <span className="whitespace-nowrap font-medium">{totalStorage.toFixed(1)}TB</span>
              <Slider
                defaultValue={[0]}
                max={30}
                step={1}
                value={[extraStorage]}
                onValueChange={([value]) => setExtraStorage(value)}
                className={`w-32 flex-shrink-0 ${isRTL ? 'transform -scale-x-100' : ''}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {extraStorage > 0 && (
                <span className="text-xs text-primary whitespace-nowrap">+${storagePrice.toFixed(2)}{getPricePerMonthText()}</span>
              )}
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-3 w-3 text-primary/70 cursor-help" />
              </TooltipTrigger>
              <TooltipContent 
                side="left"
                className="max-w-[225px] p-4 space-y-2 bg-[#1A1F2C]/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-xl"
                sideOffset={5}
              >
                Storage capacity for your assets
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className={`flex items-center text-[0.927rem] text-white/70 py-0.5 ${isRTL ? 'flex-row-reverse justify-between' : 'gap-2'}`}>
          <div className={`flex items-center gap-1.5 ${isRTL ? 'order-2' : ''}`}>
            <Check className="h-3 w-3 text-primary flex-shrink-0" />
            <span className="w-[4.5rem] flex-shrink-0">{getMembersLabel()}</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'gap-6 mx-4' : 'gap-3'} flex-1 min-w-0`}>
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse gap-6' : 'gap-3'}`}>
              <span className="whitespace-nowrap font-medium">{totalMembers}</span>
              <Slider
                defaultValue={[0]}
                max={15}
                step={1}
                value={[extraMembers]}
                onValueChange={([value]) => handleMemberLimit(value)}
                className={`w-32 flex-shrink-0 ${isRTL ? 'transform -scale-x-100' : ''}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {extraMembers > 0 && (
                <span className="text-xs text-primary whitespace-nowrap">+${membersPrice.toFixed(2)}{getPricePerMonthText()}</span>
              )}
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-3 w-3 text-primary/70 cursor-help" />
              </TooltipTrigger>
              <TooltipContent 
                side="left"
                className="max-w-[225px] p-4 space-y-3 bg-[#1A1F2C]/95 backdrop-blur-sm z-[10000] border border-primary/20 rounded-lg shadow-xl"
                sideOffset={5}
              >
                <div>
                  <p className="font-semibold mb-1">{getMembersTooltipContent().title1}</p>
                  <p className="text-sm text-white/70">{getMembersTooltipContent().desc1}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">{getMembersTooltipContent().title2}</p>
                  <p className="text-sm text-white/70">{getMembersTooltipContent().desc2}</p>
                  <p className="text-sm text-white/70">{getMembersTooltipContent().desc3}</p>
                </div>
                {totalMembers >= 20 && (
                  <Button 
                    variant="outline" 
                    className="w-full mt-2 border-primary/50"
                    onClick={() => window.location.href = '/enterprise'}
                  >
                    {getMembersTooltipContent().enterprise}
                  </Button>
                )}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className={`flex items-center text-[0.927rem] text-white/70 py-0.5 ${isRTL ? 'flex-row-reverse justify-between' : 'gap-2'}`}>
          <div className={`flex items-center gap-1.5 ${isRTL ? 'order-2' : ''}`}>
            <Check className="h-3 w-3 text-primary flex-shrink-0" />
            <span className="w-[4.5rem]">{getProjectsLabel()}</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'gap-6 mx-4' : 'gap-3'} flex-1 min-w-0`}>
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="whitespace-nowrap font-medium">{getUnlimitedText()}</span>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-3 w-3 text-primary/70 cursor-help" />
              </TooltipTrigger>
              <TooltipContent 
                side="left"
                className="max-w-[225px] p-4 space-y-2 bg-[#1A1F2C]/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-xl"
                sideOffset={5}
              >
                Projects capacity
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className={`flex items-center text-[0.927rem] text-white/70 py-0.5 ${isRTL ? 'flex-row-reverse justify-between' : 'gap-2'}`}>
          <div className={`flex items-center gap-1.5 ${isRTL ? 'order-2' : ''}`}>
            <Check className="h-3 w-3 text-primary flex-shrink-0" />
            <span className="w-[4.5rem]">{getClientsLabel()}</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'gap-6 mx-4' : 'gap-3'} flex-1 min-w-0`}>
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="whitespace-nowrap font-medium">{getUnlimitedText()}</span>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-3 w-3 text-primary/70 cursor-help" />
              </TooltipTrigger>
              <TooltipContent 
                side="left"
                className="max-w-[225px] p-4 space-y-2 bg-[#1A1F2C]/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-xl"
                sideOffset={5}
              >
                <div>
                  <p className="font-semibold mb-1">{
                    language === 'he' ? 'אורחים לקוחות' :
                    language === 'ar' ? 'ضيوف العملاء' :
                    language === 'es' ? 'Clientes Invitados' :
                    'Client Guests'
                  }</p>
                  <p className="text-sm text-white/70">{
                    language === 'he' ? 'מאשרים, לא חברי צוות (יכולים רק לצ��ות, להגיב, לאשר, להוריד ולהעלות קבצים).' :
                    language === 'ar' ? 'المصادقون، ليسوا أ��ضاء في الفريق (يمكنهم فقط العرض والتعليق والموافقة والتنزيل وتحميل الملفات).' :
                    language === 'es' ? 'Aprobadores, no miembros del equipo (solo pueden ver, comentar, aprobar, descargar y subir archivos).' :
                    'Approvers, not team members (they can only view, comment, approve, download, and upload raw files).'
                  }</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="border-t border-white/10 pt-2">
          <p className="text-sm font-medium mb-2">{getEverythingInText()}</p>
          {getExtraFeatures().map((feature, index) => (
            <PlanFeature 
              key={`extra-${index}`} 
              text={feature.text} 
              tooltip={feature.tooltip} 
              showTooltip={feature.showTooltip} 
              isRTL={isRTL} 
            />
          ))}
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 mt-6"
        onClick={handleSignupClick}
      >
        {getButtonText()}
      </Button>
    </Card>
  );
};
