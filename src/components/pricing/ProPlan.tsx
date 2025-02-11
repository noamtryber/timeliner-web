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

  const getFeatures = () => {
    const storageText = (lang: string) => {
      const totalStorage = 2000 + (extraStorage * 100);
      const storageDisplay = totalStorage >= 1000 ? 
        `${(totalStorage / 1000).toFixed(1)}TB` : 
        `${totalStorage}GB`;
      
      switch (lang) {
        case 'he':
          return `אחסון: 2TB + ${extraStorage * 100}GB נוספים`;
        case 'ar':
          return `التخزين: 2TB + ${extraStorage * 100}GB إضافية`;
        case 'es':
          return `Almacenamiento: 2TB + ${extraStorage * 100}GB adicional`;
        default:
          return `Storage: 2TB + ${extraStorage * 100}GB extra`;
      }
    };

    const membersText = (lang: string) => {
      switch (lang) {
        case 'he':
          return `5 משתמשים (כלול) ${extraMembers > 0 ? `+ ${extraMembers} נוספים` : ''}`;
        case 'ar':
          return `5 أعضاء (مشمول) ${extraMembers > 0 ? `+ ${extraMembers} إضافي` : ''}`;
        case 'es':
          return `5 miembros (incluido) ${extraMembers > 0 ? `+ ${extraMembers} adicional` : ''}`;
        default:
          return `5 members (included) ${extraMembers > 0 ? `+ ${extraMembers} extra` : ''}`;
      }
    };

    switch (language) {
      case 'he':
        return [
          { text: storageText('he'), tooltip: 'אחסון מאובטח בענן עם גיבוי אוטומטי', showTooltip: true,
            slider: {
              value: extraStorage,
              onChange: setExtraStorage,
              price: extraStorage * 1.5,
              label: 'אחסון נוסף',
              max: 50
            }
          },
          { text: membersText('he'), tooltip: 'ניהול צוות עם הרשאות שונות', showTooltip: true,
            slider: {
              value: extraMembers,
              onChange: setExtraMembers,
              price: extraMembers * 7,
              label: 'משתמשים נוספים',
              max: 20,
              tooltip: getMemberSeatsTooltip()
            }
          },
          { text: 'פרויקטים פעילים: ללא הגבלה', tooltip: 'עבודה על פרויקטים ללא הגבלה במקביל', showTooltip: true },
          { text: 'גישת לקוחות: ללא הגבלה', tooltip: 'שיתוף פעולה עם לקוחות ללא הגבלה', showTooltip: true }
        ];
      case 'ar':
        return [
          { text: storageText('ar'), tooltip: 'تخزين آمن على السحابة م�� نسخ احتياطي تلقائي', showTooltip: true,
            slider: {
              value: extraStorage,
              onChange: setExtraStorage,
              price: extraStorage * 1.5,
              label: 'تخزين إضافي',
              max: 50
            }
          },
          { text: membersText('ar'), tooltip: 'إدارة فريق يصل إلى 5 مستخدمين بأذونات مختلفة', showTooltip: true,
            slider: {
              value: extraMembers,
              onChange: setExtraMembers,
              price: extraMembers * 7,
              label: 'أعضاء إضافيين',
              max: 20,
              tooltip: getMemberSeatsTooltip()
            }
          },
          { text: 'المشاريع النشطة: غير محدود', tooltip: 'العمل على مشاريع غير محدودة في وقت واحد', showTooltip: true },
          { text: 'وصول العملاء: غير محدود', tooltip: 'التعاون مع العملاء بشكل غير محدود', showTooltip: true }
        ];
      case 'es':
        return [
          { text: storageText('es'), tooltip: 'Almacenamiento seguro en la nube con respaldo automático', showTooltip: true,
            slider: {
              value: extraStorage,
              onChange: setExtraStorage,
              price: extraStorage * 1.5,
              label: 'Almacenamiento Adicional',
              max: 50
            }
          },
          { text: membersText('es'), tooltip: 'Gestiona un equipo de hasta 5 usuarios con diferentes permisos', showTooltip: true,
            slider: {
              value: extraMembers,
              onChange: setExtraMembers,
              price: extraMembers * 7,
              label: 'Miembros Adicionales',
              max: 20,
              tooltip: getMemberSeatsTooltip()
            }
          },
          { text: 'Proyectos activos: Ilimitados', tooltip: 'Trabaja en proyectos ilimitados simultáneamente', showTooltip: true },
          { text: 'Acceso de clientes: Ilimitado', tooltip: 'Colabora con clientes invitados sin límite', showTooltip: true }
        ];
      default:
        return [
          { text: storageText('en'), tooltip: 'Secure cloud storage with automatic backup', showTooltip: true,
            slider: {
              value: extraStorage,
              onChange: setExtraStorage,
              price: extraStorage * 1.5,
              label: 'Extra Storage',
              max: 50
            }
          },
          { text: membersText('en'), tooltip: 'Manage team with different permissions', showTooltip: true,
            slider: {
              value: extraMembers,
              onChange: setExtraMembers,
              price: extraMembers * 7,
              label: 'Extra Members',
              max: 20,
              tooltip: getMemberSeatsTooltip()
            }
          },
          { text: 'Active Projects: Unlimited', tooltip: 'Work on unlimited projects simultaneously', showTooltip: true },
          { text: 'Client Access: Unlimited', tooltip: 'Collaborate with unlimited client guests', showTooltip: true }
        ];
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

      <div className="space-y-4 flex-grow">
        {getFeatures().map((feature, index) => (
          <div key={index} className="space-y-2">
            <PlanFeature 
              text={feature.text} 
              tooltip={feature.tooltip} 
              showTooltip={feature.showTooltip} 
              isRTL={isRTL} 
            />
            
            {feature.slider && (
              <div className="pl-6 pr-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white/70">{feature.slider.label}</span>
                    {feature.slider.tooltip && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="h-4 w-4 text-white/40 hover:text-white/60 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[300px] bg-card/95 backdrop-blur border-primary/20 text-white/90 whitespace-pre-line">
                            {feature.slider.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                  {feature.slider.price > 0 && (
                    <span className="text-sm text-primary">+${feature.slider.price.toFixed(2)}/mo</span>
                  )}
                </div>
                <Slider
                  defaultValue={[0]}
                  max={feature.slider.max}
                  step={1}
                  value={[feature.slider.value]}
                  onValueChange={([value]) => feature.slider.onChange(value)}
                  className="my-2"
                />
              </div>
            )}
          </div>
        ))}

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

        <div className="border-t border-white/10 pt-4 mt-4">
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
