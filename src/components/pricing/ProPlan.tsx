import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
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

interface ProPlanProps {
  content?: PricingContent;
  video?: Record<string, string>;
  pricingPeriod: 'monthly' | 'quarterly' | 'yearly';
  proStorage: number;
  setProStorage: (value: number) => void;
  calculatePrice: (basePrice: number, baseStorage: number, currentStorage: number) => number;
}

export const ProPlan = ({ 
  content,
  video,
  pricingPeriod, 
  proStorage, 
  setProStorage, 
  calculatePrice 
}: ProPlanProps) => {
  if (!content) return null;

  const proPrice = calculatePrice(
    Number(content.base_price), 
    Number(content.base_storage), 
    proStorage
  );

  const getPeriodTotal = () => {
    switch (pricingPeriod) {
      case 'quarterly':
        return proPrice * 3;
      case 'yearly':
        return proPrice * 12;
      default:
        return proPrice;
    }
  };

  const handleClick = () => {
    window.open('https://timeliner.io/sign-up', '_blank');
  };

  return (
    <Card className="glass p-6 flex flex-col border-primary animate-fade-up delay-500 hover:scale-105 transition-transform duration-300">
      <PlanIcon Icon={Crown} color="primary" />
      <h3 className="text-2xl font-bold mb-2">{content.title}</h3>
      <p className="text-white/70 mb-6">{content.subtitle}</p>
      <div className="text-3xl font-bold mb-4">
        ${proPrice.toFixed(2)}
        <span className="text-sm font-normal text-white/70">/month</span>
        {pricingPeriod !== 'monthly' && (
          <span className="block text-sm text-primary mt-1">
            ${getPeriodTotal().toFixed(2)} billed {pricingPeriod}
          </span>
        )}
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-white/70 mb-2">Storage: {proStorage}GB</p>
        <Slider
          value={[proStorage]}
          onValueChange={(value) => setProStorage(value[0])}
          min={Number(content.base_storage)}
          max={5000}
          step={100}
          className="mb-4"
        />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full mb-6 border-primary/50 hover:bg-primary/10">
            <Play className="w-4 h-4 mr-2" />
            {content.video_title}
          </Button>
        </DialogTrigger>
        <DialogContent className="glass">
          <DialogHeader>
            <DialogTitle>{content.video_title}</DialogTitle>
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
            <p className="text-white/70">
              {content.video_description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="space-y-4 mb-8 flex-grow">
        <h4 className="font-semibold">Core Features:</h4>
        {content.features.map((feature, index) => (
          <PlanFeature key={index} text={feature} />
        ))}
      </div>
      
      <Button 
        className="w-full bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40"
        onClick={handleClick}
      >
        {content.button_text}
      </Button>
    </Card>
  );
};