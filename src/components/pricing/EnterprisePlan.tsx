import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { PlanFeature } from "./PlanFeature";
import { PlanIcon } from "./PlanIcon";
import { PricingContent } from "@/hooks/usePricingContent";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface EnterprisePlanProps {
  content?: PricingContent;
}

export const EnterprisePlan = ({ content }: EnterprisePlanProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';
  
  if (!content) return null;

  const spanishFeatures = [
    'Almacenamiento: Ilimitado',
    'Miembros: Ilimitados',
    'Proyectos activos: Ilimitados',
    { text: 'Marca blanca completa', tooltip: 'Personalización completa de marca e interfaz', showTooltip: true },
    'Acceso de clientes: Ilimitado',
    { text: 'Gestor de cuenta dedicado', tooltip: 'Soporte personal y profesional del equipo experto', showTooltip: true },
    { text: 'Integración API', tooltip: 'Conecta e interactúa con sistemas externos', showTooltip: true },
    { text: 'Opciones de implementación local', tooltip: 'Instalación y despliegue en servidores privados', showTooltip: true },
    { text: 'Soporte prioritario 24/7', tooltip: 'Soporte inmediato en cualquier momento, cualquier día', showTooltip: true }
  ];

  const hebrewFeatures = [
    'אחסון: ללא הגבלה',
    'משתמשים: ללא הגבלה',
    'פרויקטים פעילים: ללא הגבלה',
    { text: 'מיתוג מלא', tooltip: 'התאמה מלאה של המותג וממשק המשתמש', showTooltip: true },
    'גישת לקוחות: ללא הגבלה',
    { text: 'מנהל חשבון ייעודי', tooltip: 'תמיכה אישית ומקצועית מצוות מומחים', showTooltip: true },
    { text: 'אינטגרציית API', tooltip: 'התחברות ואינטראקציה עם מערכות חיצוניות', showTooltip: true },
    { text: 'אפשרויות התקנה מקומית', tooltip: 'התקנה ופריסה על שרתים פרטיים', showTooltip: true },
    { text: 'תמיכה מועדפת 24/7', tooltip: 'תמיכה מיידית בכל זמן, בכל יום', showTooltip: true }
  ];

  const arabicFeatures = [
    'التخزين: غير محدود',
    'الأعضاء: غير محدود',
    'المشاريع النشطة: غير محدود',
    { text: 'تخصيص العلامة التجارية بالكامل', tooltip: 'تخصيص كامل للعلامة التجارية وواجهة المستخدم', showTooltip: true },
    'وصول العملاء: غير محدود',
    { text: 'مدير حساب مخصص', tooltip: 'دعم شخصي ومهني من فريق خبير', showTooltip: true },
    { text: 'تكامل API', tooltip: 'الاتصال والتفاعل مع الأنظمة الخارجية', showTooltip: true },
    { text: 'خيارات النشر المحلي', tooltip: 'التثبيت والنشر على خوادم خاصة', showTooltip: true },
    { text: 'دعم متميز 24/7', tooltip: 'دعم فوري في أي وقت، أي يوم', showTooltip: true }
  ];

  const englishFeatures = [
    'Storage: Unlimited',
    'Members: Unlimited',
    'Active Projects: Unlimited',
    { text: 'Full White Labeling', tooltip: 'Complete brand and UI customization', showTooltip: true },
    'Client Access: Unlimited',
    { text: 'Dedicated Account Manager', tooltip: 'Personal and professional support from expert team', showTooltip: true },
    { text: 'API Integration', tooltip: 'Connect and interact with external systems', showTooltip: true },
    { text: 'On-Premise Deployment Options', tooltip: 'Installation and deployment on private servers', showTooltip: true },
    { text: '24/7 Priority Support', tooltip: 'Immediate support anytime, any day', showTooltip: true }
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

  const getPlanTitle = () => {
    switch (language) {
      case 'he':
        return 'ארגוני';
      case 'ar':
        return 'المؤسسات';
      default:
        return 'Enterprise';
    }
  };

  const getPlanSubtitle = () => {
    switch (language) {
      case 'he':
        return 'פתרונות מותאמים לצוותים גדולים';
      case 'ar':
        return 'حلول مخصصة للفرق الكبيرة';
      default:
        return 'Custom Solutions for Large Teams';
    }
  };

  const getPricing = () => {
    switch (language) {
      case 'he':
        return 'צור קשר לקבלת הצעת מחיר';
      case 'ar':
        return 'اتصل بنا للحصول على الأسعار';
      default:
        return 'Contact Us for Pricing';
    }
  };

  const getEverythingInText = () => {
    switch (language) {
      case 'he':
        return 'כל מה שיש בתוכנית Pro, ובנוסף:';
      case 'ar':
        return 'كل شيء في الاحترافي، بالإضافة إلى:';
      default:
        return 'Everything in Studio, plus:';
    }
  };

  const getButtonText = () => {
    switch (language) {
      case 'he':
        return 'צור קשר עם המכירות';
      case 'ar':
        return 'اتصل بالمبيعات';
      default:
        return 'Contact Sales';
    }
  };

  return (
    <Card className={`relative border border-[#2A2F3C] bg-gradient-to-b from-[#1A1F2C]/50 to-[#1A1F2C] p-4 flex flex-col animate-fade-up delay-600 hover:scale-105 transition-transform duration-300 ${isRTL ? 'text-right' : ''}`}>
      <PlanIcon Icon={Users} color="secondary" />
      <h3 className="text-xl font-bold mb-1 -mt-2">{getPlanTitle()}</h3>
      <p className="text-white/70 mb-2 text-sm">{getPlanSubtitle()}</p>
      <div className="text-2xl font-bold mb-6">
        {getPricing()}
      </div>
      
      <div className="space-y-3 mb-4 flex-grow">
        {getFeatures().slice(0, 4).map((feature, index) => (
          <PlanFeature 
            key={index} 
            text={typeof feature === 'string' ? feature : feature.text}
            tooltip={typeof feature === 'string' ? undefined : feature.tooltip}
            showTooltip={typeof feature === 'string' ? false : feature.showTooltip}
            isRTL={isRTL}
          />
        ))}

        <div className="my-3 border-t border-white/10 pt-3">
          <p className="text-sm font-medium mb-3">{getEverythingInText()}</p>
          {getFeatures().slice(4).map((feature, index) => (
            <PlanFeature 
              key={`extra-${index}`} 
              text={typeof feature === 'string' ? feature : feature.text}
              tooltip={typeof feature === 'string' ? undefined : feature.tooltip}
              showTooltip={typeof feature === 'string' ? false : feature.showTooltip}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full border-primary/50 hover:bg-primary/10 transition-all duration-300 mt-8"
        onClick={() => navigate('/auth')}
      >
        {getButtonText()}
      </Button>
    </Card>
  );
};
