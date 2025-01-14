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
  const isHebrew = language === 'he';
  
  if (!content) return null;

  const spanishFeatures = [
    'Almacenamiento: Ilimitado',
    'Miembros: Ilimitados',
    'Proyectos Activos: Ilimitados',
    { text: 'Marca Blanca Completa', tooltip: 'Personalización completa de marca e interfaz de usuario', showTooltip: true },
    'Acceso de Clientes: Ilimitado',
    { text: 'Gerente de Cuenta Dedicado', tooltip: 'Soporte personal y profesional de equipo experto', showTooltip: true },
    { text: 'Integración API', tooltip: 'Conecta e interactúa con sistemas externos', showTooltip: true },
    { text: 'Opciones de Implementación Local', tooltip: 'Instalación e implementación en servidores privados', showTooltip: true },
    { text: 'Soporte Prioritario 24/7', tooltip: 'Soporte inmediato en cualquier momento, cualquier día', showTooltip: true }
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

  const getPlanTitle = () => {
    switch (language) {
      case 'es':
        return 'Empresa';
      case 'he':
        return 'אנטרפרייז';
      default:
        return 'Enterprise';
    }
  };

  const getPlanSubtitle = () => {
    switch (language) {
      case 'es':
        return 'Soluciones Personalizadas para Grandes Equipos';
      case 'he':
        return 'פתרונות מותאמים לצוותים גדולים';
      default:
        return 'Custom Solutions for Large Teams';
    }
  };

  const getPricing = () => {
    switch (language) {
      case 'es':
        return 'Contáctanos para Precios';
      case 'he':
        return 'צרו קשר לתמחור';
      default:
        return 'Contact Us for Pricing';
    }
  };

  const getEverythingInText = () => {
    switch (language) {
      case 'es':
        return 'Todo en Estudio, más:';
      case 'he':
        return 'הכל בסטודיו, בנוסף:';
      default:
        return 'Everything in Studio, plus:';
    }
  };

  const getButtonText = () => {
    switch (language) {
      case 'es':
        return 'Contactar Ventas';
      case 'he':
        return 'צרו קשר';
      default:
        return 'Contact Sales';
    }
  };

  return (
    <Card className={`glass p-4 flex flex-col animate-fade-up delay-600 hover:scale-105 transition-transform duration-300 ${isHebrew ? 'text-right' : ''}`}>
      <PlanIcon Icon={Users} color="secondary" />
      <h3 className="text-xl font-bold mb-1 -mt-2">{getPlanTitle()}</h3>
      <p className="text-white/70 mb-2 text-sm">{getPlanSubtitle()}</p>
      <div className="text-2xl font-bold mb-6">{getPricing()}</div>
      
      <div className="space-y-3 mb-4 flex-grow">
        {getFeatures().slice(0, 4).map((feature, index) => (
          <PlanFeature 
            key={index} 
            text={typeof feature === 'string' ? feature : feature.text}
            tooltip={typeof feature === 'string' ? undefined : feature.tooltip}
            showTooltip={typeof feature === 'string' ? false : feature.showTooltip}
            isRTL={isHebrew}
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
              isRTL={isHebrew}
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
